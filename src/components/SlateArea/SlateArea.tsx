import {
  createEditor,
  Editor,
  Transforms,
  Element as SlateElement,
  BaseRange,
} from "slate";
import { withHistory } from "slate-history";
import { Editable, Slate, withReact } from "slate-react";
import isHotkey, { KeyboardEventLike } from "is-hotkey";
import flow from "lodash/flow";
import isFunction from "lodash/isFunction";
import React, { useCallback, useMemo, useState } from "react";
import { useDebouncedCallback } from "use-debounce/lib";
import { Element } from "./components/Element";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Leaf } from "./components/Leaf";
import FocusMenu from "./components/menus/HoverMenu/FocusMenu";
import HoverMenu from "./components/menus/HoverMenu/HoverMenu";
import { ExtendedEditor } from "./ExtendedEditor";
import {
  getBlockHotkeys,
  getElements,
  getFocusMenuButtons,
  getHoverMenuButtons,
  getInlineMenuButtons,
  getLeaves,
  getMarkHotkeys,
} from "./features";
import { defaultFeatureSet, singleLineFeatureSet } from "./featureSets";
import { removeEmptyParagraphs } from "./helpers";
import { withLinks } from "./plugins/withLinks";
import { withMedia } from "./plugins/withMedia";
import { withParagraphs } from "./plugins/withParagraphs";
import { withSingleLine } from "./plugins/withSingleLine";
import { withTables } from "./plugins/withTables/withTables";
import type {
  FeatureFactory,
  HotkeyMap,
  SlateAreaEvent,
} from "./slateAreaTypes";
import { st, classes } from "./slateArea.st.css";
import type { CustomElement } from "./slate";
import type { Volume } from "@actionishope/shelley";
export interface SlateAreaProps {
  placeholder?: string;
  /**
   * The features that editor should exhibit, Bold, Italic etc.
   */
  featureSet?: FeatureFactory[];
  /**
   * Default value serialized as HTML.
   */
  defaultValue:
    | {
        __typename?: "RichTextField";
        html?: string;
        json: string;
        singleLine?: boolean;
      }
    | { text: { json: string } }
    | string;
  /**
   * onChange handler returning an object of current field values on change.
   */
  onChange?: (event: SlateAreaEvent) => void;
  /**
   * onFocus handler.
   */
  onFocus?: () => void;
  /**
   * Slate area name.
   */
  name: string;
  /**
   * When true menus are not rendered. Used for tests.
   * @todo: Is there another way we can make tests run?
   */
  disableMenus?: boolean;
  /**
   * Defines how 'loud' the field should be.
   * @default 1
   */
  vol?: Volume;
  /** Classname */
  className?: string;
  /**
   * Limits the input to a single line.
   */
  singleLine?: boolean;
  /**
   * Inline menu component.
   */
  InlineMenu?: React.ComponentType<any>;
  /**
   * Props passed to inline menu.
   */
  inlineMenuProps?: any;
  /** Apply specified tabindex to the editor */
  tabIndex?: number;
  isReadOnly?: boolean;
}

const SlateArea = ({
  placeholder,
  className,
  featureSet,
  defaultValue,
  name,
  onFocus,
  onChange,
  isReadOnly,
  // disableMenus = false,
  singleLine,
  InlineMenu,
  inlineMenuProps = {},
  vol = 2,
  tabIndex,
}: SlateAreaProps) => {
  const getFeatureSet = useCallback(() => {
    if (featureSet) return featureSet;
    if (singleLine) return singleLineFeatureSet;
    return defaultFeatureSet;
  }, [featureSet, singleLine]);

  const features = getFeatureSet().map((f) => f());

  const editor = useMemo((): Editor => {
    const defaultPlugins = [
      createEditor,
      withReact,
      withMedia,
      withParagraphs,
      withLinks,
      withTables,
      withHistory,
    ];
    const plugins = singleLine
      ? [...defaultPlugins, withSingleLine]
      : defaultPlugins;

    const composedFunction: () => Editor = flow(...plugins);

    return composedFunction();
  }, [singleLine]);

  const renderElement = useCallback(
    (props) => <Element {...props} elementMap={getElements(features)} />,
    [features]
  );

  const renderLeaf = useCallback(
    (props) => <Leaf {...props} leafMap={getLeaves(features)} />,
    [features]
  );

  const markHotkeys = useMemo(() => getMarkHotkeys(features), [features]);
  const blockHotkeys = useMemo(() => getBlockHotkeys(features), [features]);
  const hoverMenuButtons = useMemo(
    () => getHoverMenuButtons(features),
    [features]
  );
  const inlineMenuButtons = useMemo(
    () => getInlineMenuButtons(features),
    [features]
  );
  const focusMenuButtons = useMemo(
    () => getFocusMenuButtons(features),
    [features]
  );

  /** Get hotkey if there is one. */
  const matchKeyboardEventAgainstHotkeys =
    (hotkeys: HotkeyMap) => (event: KeyboardEventLike) =>
      Object.keys(hotkeys).find((k) => isHotkey(k, event));

  // Add the initial value when setting up our state.
  let parsedDefaultValue: unknown;
  if (typeof defaultValue === "object") {
    if ("json" in defaultValue) {
      parsedDefaultValue = JSON.parse(defaultValue.json);
    } else if ("text" in defaultValue && defaultValue.text.json) {
      parsedDefaultValue = JSON.parse(defaultValue.text.json);
    }
  } else {
    parsedDefaultValue = [
      {
        type: "paragraph",
        children: [{ text: defaultValue ?? "" }],
      },
    ];
  }

  const [value, setValue] = useState<SlateElement[]>(
    parsedDefaultValue as CustomElement[]
  );

  const [debouncedRunOnChange] = useDebouncedCallback(
    (value: SlateElement[]) => {
      if (onChange) {
        onChange({
          target: {
            name,
            value: {
              __typename: "RichTextField",
              singleLine,
              json: JSON.stringify(value),
            },
          },
        });
      }
    },
    500
  );

  const handleChange = (newValue: SlateElement[]) => {
    if (newValue !== value) {
      // Set Slate value.
      setValue(newValue);
      // Remove any empty paragraphs before notifying the rest of the app of changes.
      debouncedRunOnChange(removeEmptyParagraphs(newValue));
    }
  };

  const handleFocus = () => {
    if (onFocus) onFocus();
  };

  const [prevSelection, setPrevSelection] = useState<BaseRange | null>(null);

  const doesFeatureExist = (featureName: string) => {
    return featureSet?.some(
      (func: { name: string }) => func.name === featureName
    ) as boolean;
  };

  return (
    <ErrorBoundary>
      <Slate
        editor={editor}
        value={value}
        onChange={(v) => handleChange(v as SlateElement[])}
      >
        {/* These menus render a portal. */}
        <HoverMenu {...{ hoverMenuButtons }} />
        {InlineMenu && (
          <InlineMenu {...{ inlineMenuButtons, ...inlineMenuProps }} />
        )}
        <FocusMenu {...{ focusMenuButtons }} />

        <Editable
          onFocus={handleFocus}
          readOnly={isReadOnly}
          tabIndex={tabIndex}
          {...{ placeholder, renderElement, renderLeaf, name }}
          // NOTE: Do not remove renderPlaceholder or it will break the drag and drop functionality!
          renderPlaceholder={({ children, attributes }) => (
            <div {...attributes}>
              <p>{children}</p>
            </div>
          )}
          className={st(
            classes.root,
            {
              vol: vol !== false ? vol : undefined,
              multiline: !singleLine,
              isReadOnly,
              // Make space for the inline menu. Also more user friendly for larger
              // bodies of text as we give a nice "margin" (padding) that makes it easy to
              // select text.
              // @todo: Maybe this should be default, but that requires modifying the design elsewhere as well.
              largeLeftPadding: Boolean(
                !singleLine && inlineMenuButtons?.length
              ),
            },
            className
          )}
          onKeyDown={(event) => {
            // Provide tabbing if in a Table so that we do not get trapped within a Table.
            // @todo: Needs work -> Initial focus needs to find the first cell and focus it.
            if (event.key === "Tab" && doesFeatureExist("TableFeature")) {
              // Get the current selection
              const currentSelection = editor.selection;
              if (prevSelection !== currentSelection) {
                event.preventDefault();
                // Move the cursor to the next cell (or handle other logic)
                Transforms.move(editor, { distance: 1, unit: "line" });
              }
              // Update the previous selection
              setPrevSelection(currentSelection);
            }

            const markHotkey =
              matchKeyboardEventAgainstHotkeys(markHotkeys)(event);
            const blockHotkey =
              matchKeyboardEventAgainstHotkeys(blockHotkeys)(event);
            if (!(markHotkey || blockHotkey)) return;

            event.preventDefault();

            if (markHotkey) {
              const mark = markHotkeys[markHotkey];
              isFunction(mark)
                ? mark(editor)
                : mark && ExtendedEditor.toggleMark(editor, mark);
            }

            if (blockHotkey) {
              const block = blockHotkeys[blockHotkey];
              isFunction(block)
                ? block(editor)
                : block && ExtendedEditor.toggleBlock(editor, block);
            }
          }}
        />
      </Slate>
    </ErrorBoundary>
  );
};

export default SlateArea;
