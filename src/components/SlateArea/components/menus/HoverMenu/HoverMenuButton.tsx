import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core";
import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const styles = (theme: Theme) =>
  createStyles({
    materialIcons: {
      fontFamily: "Material Icons",
      fontSize: "25px",
      verticalAlign: "text-bottom"
    },
    button: {
      color: theme.palette.secondary.contrastText,
      cursor: "pointer",
      "&[data-active='true']": {
        color: "#34e79a" // Stole Mediums color
      }
    }
  });

interface HoverMenuButtonProps extends WithStyles<typeof styles> {
  /* Using any as it accept be a string icon and SVGIcon */
  icon: any;
  onMouseDown: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
  isActive: boolean;
}

const HoverMenuButton = ({ classes, icon, onMouseDown, isActive }: HoverMenuButtonProps) => {
  return (
    <span className={classes.button} onMouseDown={onMouseDown} data-active={isActive}>
      <span className={classes.materialIcons}>
        {typeof icon === "string" ? icon : <SvgIcon>{React.createElement(icon)}</SvgIcon>}
      </span>
    </span>
  );
};

export default withStyles(styles)(HoverMenuButton);
