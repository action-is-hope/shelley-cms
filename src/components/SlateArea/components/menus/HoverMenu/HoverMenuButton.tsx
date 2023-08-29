import type React from "react";
import type { ReactElement } from "react";
import { classes } from "./hoverMenu.st.css";

interface HoverMenuButtonProps {
  /* Using any as it accept be a string icon and SVGIcon */
  icon: string | ReactElement;
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
      {icon}
    </span>
  );
};

export default HoverMenuButton;
