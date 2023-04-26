import React, { forwardRef } from "react";
import { st, classes } from "./previewChrome.st.css";
import type { PreviewMode } from "../PreviewModes/PreviewModes";

export interface PreviewChromeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  "data-id"?: string;
  previewMode?: PreviewMode;
  fullScreenMode?: boolean;
}
function PreviewChrome(
  props: PreviewChromeProps,
  ref?: React.Ref<HTMLDivElement>
) {
  const {
    className: classNameProp,
    children,
    fullScreenMode = false,
    previewMode = "web",
    "data-id": dataId,
    ...rest
  } = props;

  return (
    <div
      className={st(
        classes.root,
        {
          previewMode,
          fullScreenMode,
        },
        classNameProp
      )}
      ref={ref}
      data-id={dataId}
      {...rest}
    >
      <div className={classes.chrome}>{children}</div>
    </div>
  );
}

/**
 * PreviewChrome holds the input fields and the settings for the content blocks.
 */
const _PreviewChrome = forwardRef(PreviewChrome);
export { _PreviewChrome as PreviewChrome };
