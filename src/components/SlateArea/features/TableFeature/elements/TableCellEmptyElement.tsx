import React from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";

const styles = () =>
  createStyles({
    root: {
      width: "50px"
    }
  });

const TableCellEmptyElement = ({ attributes, children, classes }) => (
  <td className={classes.root} contentEditable={false} {...attributes}>
    {children}
  </td>
);

export default withStyles(styles)(TableCellEmptyElement);
