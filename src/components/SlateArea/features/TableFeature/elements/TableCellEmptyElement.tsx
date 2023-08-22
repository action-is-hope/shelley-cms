import type { ElementProps } from "../../../components/Element";
import { classes } from "./slateTable.st.css";
const TableCellEmptyElement = ({ attributes, children }: ElementProps) => (
  <td className={classes.emptyCell} contentEditable={false} {...attributes}>
    {children}
  </td>
);

export default TableCellEmptyElement;
