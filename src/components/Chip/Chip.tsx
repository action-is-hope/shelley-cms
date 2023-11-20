import React, { forwardRef, ReactNode } from "react";
import { st, classes } from "./chip.st.css";
import { Button } from "@actionishope/shelley/Button";
import { Text } from "@actionishope/shelley/Text";
import { CloseSmall } from "../icons";

// todo: Update and promote to Shelley.
export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  onRemove?: () => void;
  onRemoveAltText?: string;
  deleteIcon?: ReactNode;
  noWrap?: boolean;
  variant?: "outlined" | "filled";
}
function Chip(props: ChipProps, ref: React.Ref<HTMLBaseElement>) {
  const {
    onRemove,
    onRemoveAltText = "Remove item",
    deleteIcon,
    className: classNameProp,
    variant = "outlined",
    noWrap,
    children,
    ...rest
  } = props;

  return (
    <Text
      as="span"
      className={st(
        classes.root,
        { noWrap, hasRemove: Boolean(onRemove), variant },
        classNameProp
      )}
      vol={1}
      {...rest}
      ref={ref}
    >
      <span className={classes.text}>{children}</span>
      {onRemove && (
        <Button
          className={classes.removeButton}
          tone={10}
          variant="fab"
          icon={deleteIcon ?? <CloseSmall alt={onRemoveAltText} />}
          vol={1}
          onPress={onRemove}
        />
      )}
    </Text>
  );
}

/**
 * Chips are compact elements that represent an input, attribute, or action.
 */
const _Chip = forwardRef(Chip);
export { _Chip as Chip };
