import CellMenu from "./CellMenu";
import type { ElementProps } from "../../../components/Element";
import { classes } from "./slateTable.st.css";

const TableCellMenuElement = ({ attributes, children }: ElementProps) => (
  <td className={classes.cellMenu} contentEditable={false} {...attributes}>
    <CellMenu type="column" />
    {children}
  </td>
);

export default TableCellMenuElement;
