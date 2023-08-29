import type { Element } from "slate";
import { classes } from "./slateTable.st.css";

const TableElement = ({ children }: Element) => (
  <table className={classes.root}>{children}</table>
);

export default TableElement;
