import { classes } from "./slateTable.st.css";

const TableHeaderCellElement = ({ attributes, children }: Element) => (
  <th className={classes.headerCell} {...attributes}>
    {children}
  </th>
);

export default TableHeaderCellElement;
