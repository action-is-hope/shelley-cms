import React, { forwardRef } from "react";
import { st, classes } from "./card.st.css";
import { Button, ButtonProps } from "@actionishope/shelley/Button";

export interface CardProps
  extends Pick<ButtonProps, "onPress">,
    React.HTMLProps<HTMLDivElement> {
  /** make onPress conditional and if yes then aria props must be specified? */
}

/**
 * Card is a basic container that houses the construction of larger more complex UI elements.
 */
function Card(props: CardProps, ref?: React.Ref<HTMLDivElement>) {
  const { className: classNameProp, children, onPress, ...rest } = props;
  return (
    <div className={st(classes.root, classNameProp)} {...rest} ref={ref}>
      {props.onPress && (
        <Button
          aria-label="Title"
          onPress={onPress}
          className={classes.mainButton}
          variant={false}
          tone={false}
          vol={false}
        />
      )}
      {children}
    </div>
  );
}

const _Card = forwardRef(Card);
export { _Card as Card };

/**
 * CardHeader hold header items for use within Card.
 */

function CardHeader(
  props: React.HTMLAttributes<HTMLDivElement>,
  ref?: React.Ref<HTMLDivElement>
) {
  const { className: classNameProp, children, ...rest } = props;
  return (
    <div className={st(classes.header, classNameProp)} {...rest} ref={ref}>
      {children}
    </div>
  );
}

const _CardHeader = forwardRef(CardHeader);
export { _CardHeader as CardHeader };

/**
 * CardMedia hold media items for use within Card.
 */

export interface CardMediaProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
}

function CardMedia(props: CardMediaProps, ref?: React.Ref<HTMLDivElement>) {
  const { className: classNameProp, children, ...rest } = props;
  return (
    <div className={st(classes.media, classNameProp)} {...rest} ref={ref}>
      {children}
    </div>
  );
}

const _CardMedia = forwardRef(CardMedia);
export { _CardMedia as CardMedia };

/**
 * CardContent is the content container for use within Card.
 */
function CardContent(
  props: React.HTMLAttributes<HTMLDivElement>,
  ref?: React.Ref<HTMLDivElement>
) {
  const { className: classNameProp, children, ...rest } = props;
  return (
    <div className={st(classes.content, classNameProp)} {...rest} ref={ref}>
      {children}
    </div>
  );
}

const _CardContent = forwardRef(CardContent);
export { _CardContent as CardContent };

/**
 * CardActions is for bactions such as button/links etc for use within a Card.
 */

function CardActions(
  props: React.HTMLAttributes<HTMLDivElement>,
  ref?: React.Ref<HTMLDivElement>
) {
  const { className: classNameProp, children, ...rest } = props;
  return (
    <div className={st(classes.actions, classNameProp)} {...rest} ref={ref}>
      {children}
    </div>
  );
}

const _CardActions = forwardRef(CardActions);
export { _CardActions as CardActions };
