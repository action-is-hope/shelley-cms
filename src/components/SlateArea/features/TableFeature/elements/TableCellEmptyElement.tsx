import { classes } from "./slateTable.st.css";
const TableCellEmptyElement = ({ attributes, children }: Element) => (
  <td className={classes.emptyCell} contentEditable={false} {...attributes}>
    {children}
  </td>
);

export default TableCellEmptyElement;
