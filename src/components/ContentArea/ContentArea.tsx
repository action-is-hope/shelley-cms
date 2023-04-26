import React, { forwardRef } from "react";
import { st, classes } from "./contentArea.st.css";
import type { ReactFocusOnProps } from "react-focus-on/dist/es5/types";
import { FocusOn } from "react-focus-on";

export interface ContentAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  /** See https://www.npmjs.com/package/react-focus-on */
  /** Props for the internal `FocusOn` component see - https://github.com/theKashey/react-focus-on#api */
  focusOnProps?: Pick<
    ReactFocusOnProps,
    Exclude<keyof ReactFocusOnProps, "children">
  >;
}
function ContentArea(props: ContentAreaProps, ref?: React.Ref<HTMLDivElement>) {
  const {
    className: classNameProp,
    children,
    focusOnProps,
    // "data-id": dataId,
    ...rest
  } = props;

  return (
    <FocusOn
      className={st(classes.root, classNameProp)}
      ref={ref}
      {...rest}
      {...focusOnProps}
    >
      <div className={classes.scroll}>{children}</div>
    </FocusOn>
  );
}

/**
 * BlockEditor holds the input fields and the settings for the content blocks.
 */
const _ContentArea = forwardRef(ContentArea);
export { _ContentArea as ContentArea };
