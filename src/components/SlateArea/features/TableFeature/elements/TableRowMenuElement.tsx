import CellMenu from "./CellMenu";
import { classes } from "./slateTable.st.css";

const TableRowMenuElement = ({ attributes, children }: Element) => (
  <td className={classes.menuRow} contentEditable={false} {...attributes}>
    <CellMenu type="row" />
    {children}
  </td>
);

export default TableRowMenuElement;
