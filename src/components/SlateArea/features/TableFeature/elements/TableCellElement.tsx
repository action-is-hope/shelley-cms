import { classes } from "./slateTable.st.css";

const TableCellElement = ({ attributes, children }: Element) => (
  <td className={classes.cell} {...attributes}>
    {children}
  </td>
);

export default TableCellElement;
