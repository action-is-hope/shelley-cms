import CellMenu from "./CellMenu";
import type { ElementProps } from "../../../components/Element";
import { classes } from "./slateTable.st.css";

const TableRowMenuElement = ({ attributes, children }: ElementProps) => (
  <td className={classes.menuRow} contentEditable={false} {...attributes}>
    <CellMenu type="row" />
    {children}
  </td>
);

export default TableRowMenuElement;
