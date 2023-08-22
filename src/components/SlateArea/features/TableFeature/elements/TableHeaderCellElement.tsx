import type { ElementProps } from "../../../components/Element";
import { classes } from "./slateTable.st.css";

const TableHeaderCellElement = ({ attributes, children }: ElementProps) => (
  <th className={classes.headerCell} {...attributes}>
    {children}
  </th>
);

export default TableHeaderCellElement;
