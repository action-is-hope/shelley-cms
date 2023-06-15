import React, { forwardRef } from "react";
import {
  ProgressCircle,
  ProgressCircleProps,
} from "@actionishope/shelley/ProgressCircle";
import { Text } from "@actionishope/shelley/Text";
import { Widget, WidgetProps } from "../Widget/Widget";
import { st, classes } from "./staleContentWidget.st.css";

export interface StaleContentWidgetProps extends WidgetProps {
  circleProps: ProgressCircleProps;
}

function StaleContentWidget(
  props: StaleContentWidgetProps,
  ref?: React.Ref<HTMLDivElement>
) {
  const {
    className: classNameProp,
    children,
    circleProps,
    "data-id": dataId,
    ...rest
  } = props;

  const freshContent =
    circleProps.maxValue &&
    circleProps.value &&
    circleProps.maxValue - circleProps.value;
  return (
    <Widget
      className={st(classes.root, classNameProp)}
      data-id={dataId}
      ref={ref}
      {...rest}
    >
      <div className={classes.stack}>
        <ProgressCircle
          className={classes.progressCircle}
          {...circleProps}
          data-id={dataId ? `${dataId}--progressCircle` : undefined}
        />
        <Text as="span" className={classes.total} vol={5}>
          {circleProps.value}
          <span>Total</span>
        </Text>
        <Text as="span" vol={2} className={classes.fresh}>
          <span>Fresh</span>
          {freshContent}
        </Text>
        <Text as="span" vol={2} className={classes.stale}>
          <span>Stale</span>
          {circleProps.value}
        </Text>
      </div>
      {children}
    </Widget>
  );
}

/**
 * StaleContentWidgets can be used to display usful information to CMS users.
 */
const _StaleContentWidget = forwardRef(StaleContentWidget);
export { _StaleContentWidget as StaleContentWidget };
