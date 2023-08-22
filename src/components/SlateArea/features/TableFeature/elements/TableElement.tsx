import type { Element } from "slate";
import { classes } from "./slateTable.st.css";
type TableElementProps = Element;

const TableElement = ({ children }: TableElementProps) => (
  <table className={classes.root}>{children}</table>
);

export default TableElement;
