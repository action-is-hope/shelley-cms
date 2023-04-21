import React, { forwardRef, ReactNode, Ref } from "react";
import { st, classes } from "./badge.st.css";

// todo: Update and promote to Shelley.
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  badgeContent?: ReactNode;
  dot?: boolean;
  invisible?: boolean;
  showZero?: boolean;
  position?: "topStart" | "topEnd" | "bottomStart" | "bottomEnd";
}
const Badge = forwardRef(
  (
    {
      badgeContent,
      className: classNameProp,
      children,
      dot,
      invisible: invisibleProp = false,
      position = "topEnd",
      showZero = false,
      ...rest
    }: BadgeProps,
    ref?: Ref<HTMLSpanElement>
  ) => {
    const invisible = invisibleProp || (badgeContent === 0 && !showZero);
    return (
      <span
        className={st(
          classes.root,
          {
            position,
            invisible,
          },
          classNameProp
        )}
        {...rest}
        ref={ref}
      >
        {children}
        <span className={classes.badge}>{badgeContent}</span>
      </span>
    );
  }
);

Badge.displayName = "Badge";

export default Badge;
