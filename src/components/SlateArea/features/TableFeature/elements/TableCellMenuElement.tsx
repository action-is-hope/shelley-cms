import CellMenu from "./CellMenu";
import { classes } from "./slateTable.st.css";

const TableCellMenuElement = ({ attributes, children }: Element) => (
  <td className={classes.cellMenu} contentEditable={false} {...attributes}>
    <CellMenu type="column" />
    {children}
  </td>
);

export default TableCellMenuElement;
