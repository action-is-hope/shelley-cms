import React, { forwardRef } from "react";
import type { ReactFocusOnProps } from "react-focus-on/dist/es5/types";
import { PreviewModes, PreviewModeType } from "../PreviewModes/PreviewModes";
import { FocusOn } from "react-focus-on";

import { st, classes } from "./preview.st.css";
import type { ComponentBase } from "@actionishope/shelley/typings/shared-types";

export interface PreviewProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ComponentBase {
  /** Props for the internal `FocusOn` component see - https://github.com/theKashey/react-focus-on#api */
  focusOnProps?: Pick<
    ReactFocusOnProps,
    Exclude<keyof ReactFocusOnProps, "children">
  >;
  /** Set the preview mode. */
  previewMode: PreviewModeType;
  /** A ref pointing to the PreviewMode component, used for FocusOn isolation. */
  previewModesRef: React.Ref<HTMLDivElement>;
  /** Callback with mode as a single arg. */
  onModeChange: (mode: PreviewModeType) => void;
  // Required for usePreview.
  ref?: React.Ref<HTMLDivElement>;
}

function Preview(props: PreviewProps, ref?: React.Ref<HTMLDivElement>) {
  const {
    className: classNameProp,
    children,
    focusOnProps,
    previewMode = "web",
    onModeChange,
    previewModesRef,
    "data-id": dataId,
    ...rest
  } = props;

  return (
    <FocusOn
      className={st(classes.root, classNameProp)}
      ref={ref}
      {...rest}
      {...focusOnProps}
      data-id={dataId}
    >
      <PreviewModes
        className={classes.previewModes}
        onChange={onModeChange}
        defaultValue={previewMode}
        data-id={dataId ? `${dataId}--previewModes` : undefined}
        ref={previewModesRef}
      />
      {children}
    </FocusOn>
  );
}

/**
 * Preview is made up of a few parts which can be included or omitted as the case maybe.
 */
const _Preview = forwardRef(Preview);
export { _Preview as Preview };
