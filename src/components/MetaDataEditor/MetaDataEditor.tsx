import React, {
  Ref,
  ReactElement,
  forwardRef,
  useRef,
  useState,
  useEffect,
} from "react";
import useSize from "@react-hook/size";
import ClickAwayListener from "react-click-away-listener";
import { st, classes } from "./metaDataEditor.st.css";
import { TextField, InputTextProps } from "@actionishope/shelley/TextField";
import { Label } from "@actionishope/shelley/Label";
import { Select, SelectProps } from "@actionishope/shelley/Select";
import { ProgressCircle } from "@actionishope/shelley/Progress";
import { VisuallyHidden } from "@actionishope/shelley/VisuallyHidden";
import { Item } from "@actionishope/shelley/Item";
import type { ComponentBase } from "@actionishope/shelley/typings/shared-types";

type languageOptions = {
  key: string;
  name: string;
};

interface LanguageSelector<T> extends Partial<SelectProps<T>> {
  options: languageOptions[];
}

type OverloadedChildren = (isOpen: boolean) => ReactElement;

export interface MetaDataEditorProps<T>
  extends React.HTMLAttributes<HTMLDivElement>,
    ComponentBase {
  /** Uploader widget */
  mediaUploader: React.ReactNode;
  /** URL Picker ComboBox */
  urlPicker: React.ReactNode;
  /** Title field props */
  titleProps: Partial<InputTextProps>;
  /** Description field props */
  descriptionProps: Partial<InputTextProps>;
  /** Langauge Selector props */
  languageSelectorProps: LanguageSelector<T>;
  /** Control the isOpen state */
  isOpen?: boolean;
  /** Children - passing in a render function will be called with isOpen. */
  children?: OverloadedChildren | React.ReactNode;
  /** Diable the clickAway */
  disableClickAway?: boolean;
  /** Displays a loading spinner in the place of the Langauge selector */
  isLanguageLoading?: boolean;
}

function MetaDataEditor<T extends object>(
  props: MetaDataEditorProps<T>,
  ref?: React.Ref<HTMLDivElement>
) {
  const {
    className: classNameProp,
    children,
    titleProps,
    descriptionProps,
    languageSelectorProps,
    mediaUploader,
    urlPicker,
    isOpen: isOpenProp = false,
    "data-id": dataId,
    disableClickAway: disableClickAwayProp = false,
    isLanguageLoading,
    ...rest
  } = props;

  const measureRef = useRef(null);
  const [_, innerHeight] = useSize(measureRef);
  const [isOpen, setIsOpen] = useState(isOpenProp);

  const { options: languageOptions, ...restLangSelector } =
    languageSelectorProps;

  const [disableClickAway, setDisableClickAway] =
    useState(disableClickAwayProp);

  useEffect(() => {
    setDisableClickAway(disableClickAwayProp);
  }, [disableClickAwayProp]);
  // @todo data-id support
  return (
    <ClickAwayListener
      onClickAway={() => !disableClickAway && setIsOpen(false)}
    >
      <div
        className={st(classes.root, { isOpen }, classNameProp)}
        {...rest}
        ref={ref}
        data-id={dataId}
      >
        <div
          className={classes.inner}
          style={{ height: isOpen ? `${innerHeight}px` : undefined }}
          data-id={dataId ? `${dataId}--inner` : undefined}
        >
          <div ref={measureRef}>
            <div className={classes.grid}>
              <VisuallyHidden>
                <Label data-id={dataId ? `${dataId}--label` : undefined}>
                  Meta data
                </Label>
              </VisuallyHidden>
              <div className={classes.mediaUploader}>{mediaUploader}</div>
              {urlPicker}
              <TextField
                className={classes.titleField}
                labelPosition="hidden"
                vol={1}
                variant="quiet"
                {...titleProps}
                label={titleProps.label || "Meta title"}
                placeholder={titleProps.placeholder || "Meta title"}
                onFocus={() => setIsOpen(true)}
                data-id={dataId ? `${dataId}--titleField` : undefined}
              />
              {isLanguageLoading ? (
                <ProgressCircle
                  isIndeterminate
                  className={classes.languageLoader}
                  aria-label="Translations loading..."
                />
              ) : (
                <Select
                  className={classes.languageField}
                  label="Page language"
                  vol={1}
                  variant="outlined"
                  portalSelector="#portal"
                  labelPosition="hidden"
                  onOpenChange={setDisableClickAway}
                  {...restLangSelector}
                  data-id={dataId ? `${dataId}--languageField` : undefined}
                >
                  {languageOptions.map((option) => (
                    <Item key={option.key}>{option.name}</Item>
                  ))}
                </Select>
              )}

              <div className={classes.children} aria-hidden="true">
                <TextField
                  labelPosition="side"
                  type="textarea"
                  // rows={1}
                  vol={1}
                  variant="quiet"
                  {...descriptionProps}
                  isDisabled={!isOpen}
                  label={descriptionProps.label || "Description"}
                  placeholder={
                    descriptionProps.placeholder || "Enter description"
                  }
                  description={
                    descriptionProps.description ||
                    "A short description that is seen in a Google search result or a social share link."
                  }
                  data-id={dataId ? `${dataId}--descriptionField` : undefined}
                />
                {typeof children === "function" ? children(isOpen) : children}
              </div>
            </div>
          </div>
          <div
            id="metaPortal"
            data-id={dataId ? `${dataId}--portal` : undefined}
          />
        </div>
      </div>
    </ClickAwayListener>
  );
}

// forwardRef doesn't support generic parameters -> cast to the correct type.
// https://stackoverflow.com/questions/58469229/react-with-typescript-generics-while-using-react-forwardref
const _MetaDataEditor = forwardRef(MetaDataEditor) as <T>(
  props: MetaDataEditorProps<T> & { ref?: Ref<HTMLDivElement> }
) => ReactElement;
export { _MetaDataEditor as MetaDataEditor };

MetaDataEditor.displayName = "MetaDataEditor";
