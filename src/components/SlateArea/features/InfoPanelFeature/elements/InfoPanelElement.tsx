import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import { createStyles, Theme, WithStyles, withStyles } from "@material-ui/core";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 2,
      marginLeft: -theme.spacing.unit * 2 - 2,
      marginBottom: theme.spacing.unit * 2,
      fontSize: "1.1em",
      display: "flex",
      border: `1px solid ${theme.palette.text.secondary}`
    },
    icon: {
      marginRight: theme.spacing.unit
    }
  });

interface InfoPanelElementProps extends WithStyles<typeof styles>, Element {}

export const InfoPanelElement = withStyles(styles)(
  ({ attributes, children, classes }: InfoPanelElementProps) => (
    <aside className={classes.root} {...attributes}>
      <InfoIcon className={classes.icon} />
      <div>{children}</div>
    </aside>
  )
);
