import React from "react";
// import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import type { Element } from "slate";

// const styles = () =>
//   createStyles({
//     root: {
//       borderSpacing: 0,
//       borderCollapse: "collapse",
//       width: "100%"
//     }
//   });

type TableElementProps = Element;

const TableElement = ({ children, classes }: TableElementProps) => (
  <table className={classes.root}>{children}</table>
);

export default TableElement;
