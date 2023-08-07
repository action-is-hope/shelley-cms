import React from "react";
// import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core/styles";

// const styles = (theme: Theme) =>
//   createStyles({
//     root: {
//       border: "1px solid black",
//       width: "50px",
//       textAlign: "center",
//       "& p:only-child": {
//         marginBottom: 0
//       }
//     }
//   });

const TableCellElement = ({ attributes, children, classes }) => (
  <td className={classes.root} {...attributes}>
    {children}
  </td>
);

export default TableCellElement;
