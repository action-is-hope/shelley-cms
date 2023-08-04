import React from "react";
import CellMenu from "./CellMenu";
import { createStyles, WithStyles, withStyles } from "@material-ui/core/styles";

const styles = () =>
  createStyles({
    root: {
      width: "1%",
      paddingRight: "10px"
    }
  });

const TableRowMenuElement = ({ attributes, children, classes }) => (
  <td className={classes.root} contentEditable={false} {...attributes}>
    <CellMenu type="row" />
    {children}
  </td>
);

export default withStyles(styles)(TableRowMenuElement);
