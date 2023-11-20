import React, { forwardRef, Ref } from "react";
import { st, classes } from "./statusIndicator.st.css";
import type { StatusOptions } from "../../typings/shared-types";

// todo: Update and promote to Shelley.
export interface StatusIndicatorProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  status: StatusOptions;
  vol?: 1 | 2 | 3;
}
const StatusIndicator = forwardRef(
  (
    {
      className: classNameProp,
      status,
      vol = 2,
      ...rest
    }: StatusIndicatorProps,
    ref?: Ref<HTMLSpanElement>
  ) => {
    return (
      <span
        className={st(classes.root, { status, vol }, classNameProp)}
        {...rest}
        ref={ref}
      />
    );
  }
);

StatusIndicator.displayName = "StatusIndicator";

export { StatusIndicator };
