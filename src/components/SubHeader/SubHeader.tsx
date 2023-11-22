import React, { ReactNode, forwardRef } from "react";
import { H1 } from "@actionishope/shelley/Text";
import type { ComponentBase } from "@actionishope/shelley/typings/shared-types";

import { st, classes } from "./subHeader.st.css";

export interface SubHeaderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
    ComponentBase {
  title?: ReactNode;
}

function SubHeader(props: SubHeaderProps, ref?: React.Ref<HTMLDivElement>) {
  const {
    className: classNameProp,
    children,
    title,
    "data-id": dataId,
    ...rest
  } = props;

  return (
    <div className={st(classes.root, classNameProp)} {...rest} ref={ref}>
      <H1
        className={classes.title}
        vol={4}
        data-id={dataId ? `${dataId}--title` : undefined}
      >
        {title}
      </H1>
      <div className={classes.actionArea}>{children}</div>
    </div>
  );
}

/**
 * App SubHeader wrapper
 */
const _SubHeader = forwardRef(SubHeader);
export { _SubHeader as SubHeader };
