import React from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";

const styles = () =>
  createStyles({
    root: {
      borderSpacing: 0,
      borderCollapse: "collapse"
    }
  });

const TableHeadElement = ({ attributes, children }) => <thead {...attributes}>{children}</thead>;

export default withStyles(styles)(TableHeadElement);
