import React from "react";
import CellMenu from "./CellMenu";
// import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";

// const styles = () =>
//   createStyles({
//     root: {
//       width: "50px",
//       textAlign: "center",
//       paddingBottom: "10px"
//     }
//   });

const TableCellMenuElement = ({ attributes, children, classes }) => (
  <td className={classes.root} contentEditable={false} {...attributes}>
    <CellMenu type="column" />
    {children}
  </td>
);

export default TableCellMenuElement;
