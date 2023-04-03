import React, { forwardRef } from "react";
import { st, classes } from "./previewChrome.st.css";
import type { PreviewMode } from "../PreviewModes/PreviewModes";

export interface PreviewChromeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  "data-id"?: string;
  previewMode?: PreviewMode;
  fullScreenMode?: boolean;
}

const PreviewChrome = forwardRef(
  (
    {
      className: classNameProp,
      children,
      fullScreenMode = false,
      previewMode = "web",
      ...rest
    }: PreviewChromeProps,
    ref?: React.Ref<HTMLDivElement>
  ) => {
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
        {...rest}
      >
        <div className={classes.chrome}>{children}</div>
      </div>
    );
  }
);

PreviewChrome.displayName = "PreviewChrome";

export default PreviewChrome;
