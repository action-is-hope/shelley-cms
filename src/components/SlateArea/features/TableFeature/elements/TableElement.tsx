import React from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import { Element } from "slate";

const styles = () =>
  createStyles({
    root: {
      borderSpacing: 0,
      borderCollapse: "collapse",
      width: "100%"
    }
  });

interface TableElementProps extends Element, WithStyles<typeof styles> {}

const TableElement = ({ children, classes }: TableElementProps) => (
  <table className={classes.root}>{children}</table>
);

export default withStyles(styles)(TableElement);
