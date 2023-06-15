import React, { ReactNode, forwardRef } from "react";
import { H2 } from "@actionishope/shelley/Text";
import type { ComponentBase } from "@actionishope/shelley/typings/shared-types";
import { st, classes } from "./widget.st.css";

export interface WidgetProps
  extends Omit<React.HTMLAttributes<HTMLBaseElement>, "title">,
    ComponentBase {
  /** A title for the info panel. */
  title?: ReactNode;
  /** Grid area assignment. */
  gridArea?: string;
}

function Widget(props: WidgetProps, ref?: React.Ref<HTMLDivElement>) {
  const {
    className: classNameProp,
    children,
    title,
    gridArea,
    "data-id": dataId,
    ...rest
  } = props;

  return (
    <article
      className={st(classes.root, classNameProp)}
      style={{ gridArea: gridArea }}
      data-id={dataId}
      ref={ref}
      {...rest}
    >
      {title && (
        <H2
          className={classes.title}
          vol={5}
          data-id={dataId ? `${dataId}--title` : undefined}
        >
          {title}
        </H2>
      )}
      {children}
    </article>
  );
}

/**
 * Widgets can be used to display usful information to CMS users.
 */
const _Widget = forwardRef(Widget);
export { _Widget as Widget };
