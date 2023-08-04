import React from "react";
import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core/styles";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      border: "1px solid black",
      width: "50px",
      textAlign: "center",
      background: `${theme.palette.grey[700]}`,
      "& span": {
        color: `${theme.palette.grey[300]}`
      }
    }
  });

const TableHeaderCellElement = ({ attributes, children, classes }) => (
  <th className={classes.root} {...attributes}>
    {children}
  </th>
);

export default withStyles(styles)(TableHeaderCellElement);
