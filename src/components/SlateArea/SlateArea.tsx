// import { withStyles, WithStyles } from "@material-ui/core";
import {
  createEditor,
  Editor,
  Element as SlateElement,
  Transforms,
} from "slate";
import { withHistory } from "slate-history";
import { Editable, ReactEditor, Slate, withReact } from "slate-react";
// import classNames from "classnames";
import isHotkey from "is-hotkey";
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
// import styles from "./textFieldStyles";

export interface SlateAreaProps {
  placeholder?: string;

  featureSet?: FeatureFactory[];

  /**
   * Default value serialized as HTML.
   */
  defaultValue: any;

  /**
   * onChange handler returning an object of current field values on change.
   */
  onChange?: (event: SlateAreaEvent) => void;

  /**
   * onFocus handler.
   */
  onFocus?: (e?: any) => void;

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
   * Editor mode to use
   */
  mode?: "Free" | "FreeBlock";

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
}

const SlateArea = ({
  placeholder,
  className,
  mode,
  featureSet,
  defaultValue,
  name,
  onFocus,
  onChange,
  disableMenus = false,
  singleLine,
  InlineMenu,
  inlineMenuProps = {},
}: SlateAreaProps) => {
  const getFeatureSet = useCallback(() => {
    if (featureSet) return featureSet;
    if (singleLine) return singleLineFeatureSet;
    return defaultFeatureSet;
  }, []);

  const features = getFeatureSet().map((f) =>
    f({ singleLine, name, classes, getEditor: () => editor })
  );

  const editor = useMemo((): Editor & ReactEditor => {
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

    return flow(plugins)();
  }, []);

  const renderElement = useCallback(
    (props) => <Element {...props} elementMap={getElements(features)} />,
    [mode]
  );

  const renderLeaf = useCallback(
    (props) => <Leaf {...props} leafMap={getLeaves(features)} />,
    []
  );

  const markHotkeys = useMemo(() => getMarkHotkeys(features), []);
  const blockHotkeys = useMemo(() => getBlockHotkeys(features), []);
  const hoverMenuButtons = useMemo(() => getHoverMenuButtons(features), []);
  const inlineMenuButtons = useMemo(() => getInlineMenuButtons(features), []);
  const focusMenuButtons = useMemo(() => getFocusMenuButtons(features), []);

  /** Get hotkey if there is one. */
  const matchKeyboardEventAgainstHotkeys =
    (hotkeys: HotkeyMap) => (event: any) =>
      Object.keys(hotkeys).find((k) => isHotkey(k, event));

  // Add the initial value when setting up our state.
  let parsedDefaultValue;
  if (defaultValue && defaultValue.json) {
    parsedDefaultValue = JSON.parse(defaultValue.json);
  } else if (defaultValue && defaultValue.text && defaultValue.text.json) {
    parsedDefaultValue = JSON.parse(defaultValue.text.json);
  } else {
    parsedDefaultValue = [
      {
        type: "paragraph",
        children: [{ text: defaultValue ?? "" }],
      },
    ];
  }

  const [value, setValue] = useState<SlateElement[]>(parsedDefaultValue);

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

  return (
    <ErrorBoundary>
      <Slate editor={editor} value={value} onChange={handleChange}>
        {/* These menus render a portal. */}
        <HoverMenu {...{ hoverMenuButtons }} />
        {InlineMenu && (
          <InlineMenu {...{ inlineMenuButtons, ...inlineMenuProps }} />
        )}
        <FocusMenu {...{ focusMenuButtons }} />

        <Editable
          onFocus={handleFocus}
          {...{ placeholder, renderElement, renderLeaf, name }}
          // NOTE: Do not remove renderPlaceholder or it will break the drag and drop functionality!
          renderPlaceholder={({ children, attributes }) => (
            <div {...attributes}>
              <p>{children}</p>
            </div>
          )}
          className={classNames(classes.root, className, {
            [classes.multiline]: !singleLine,
            // Make space for the inline menu. Also more user friendly for larger
            // bodies of text as we give a nice "margin" (padding) that makes it easy to
            // select text.
            // @todo: Maybe this should be default, but that requires modifying the design elsewhere as well.
            [classes.largeLeftPadding]:
              !singleLine && inlineMenuButtons && inlineMenuButtons.length,
          })}
          onKeyDown={(event) => {
            if (event.key === "Tab") {
              event.preventDefault();
              Transforms.move(editor, { distance: 2, unit: "line" });
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
                : ExtendedEditor.toggleMark(editor, mark);
            }

            if (blockHotkey) {
              const block = blockHotkeys[blockHotkey];
              isFunction(block)
                ? block(editor)
                : ExtendedEditor.toggleBlock(editor, block);
            }
          }}
        />
      </Slate>
    </ErrorBoundary>
  );
};

export default SlateArea;
