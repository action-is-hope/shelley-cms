import type { ElementProps } from "../../../components/Element";
import { classes } from "./slateTable.st.css";

const TableCellElement = ({ attributes, children }: ElementProps) => (
  <td className={classes.cell} {...attributes}>
    {children}
  </td>
);

export default TableCellElement;
