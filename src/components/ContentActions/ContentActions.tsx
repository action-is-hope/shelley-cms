import React, { forwardRef } from "react";
import { st, classes } from "./contentActions.st.css";

function ContentActions(
  props: React.HTMLAttributes<HTMLDivElement>,
  ref?: React.Ref<HTMLDivElement>
) {
  const { className: classNameProp, children, ...rest } = props;
  return (
    <div className={st(classes.root, classNameProp)} {...rest} ref={ref}>
      {children}
    </div>
  );
}

/**
 * ContentActions contains actions for content editing such as Add Block.
 */
const _ContentActions = forwardRef(ContentActions);
export { _ContentActions as ContentActions };
