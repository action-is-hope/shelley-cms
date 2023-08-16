import React from "react";
import { Icon } from "@actionishope/shelley";
import { classes } from "./hoverMenu.st.css";

interface HoverMenuButtonProps {
  /* Using any as it accept be a string icon and SVGIcon */
  icon: any;
  onMouseDown: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
  isActive: boolean;
}

const HoverMenuButton = ({
  icon,
  onMouseDown,
  isActive,
}: HoverMenuButtonProps) => {
  return (
    <span
      className={classes.button}
      onMouseDown={onMouseDown}
      data-active={isActive}
    >
      <span className={classes.materialIcons}>
        {typeof icon === "string" ? (
          icon
        ) : (
          <Icon>{React.createElement(icon)}</Icon>
        )}
      </span>
    </span>
  );
};

export default HoverMenuButton;
