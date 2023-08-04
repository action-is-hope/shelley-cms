import React from "react";
import { createStyles, withStyles } from "@material-ui/core/styles";

const styles = () =>
  createStyles({
    root: {
      borderSpacing: 0,
      borderCollapse: "collapse"
    }
  });

const TableBodyElement = ({ attributes, children }) => <tbody {...attributes}>{children}</tbody>;

export default withStyles(styles)(TableBodyElement);
