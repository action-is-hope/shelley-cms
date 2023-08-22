import type { ElementProps } from "../../../components/Element";
export const TableRowElement = ({ attributes, children }: ElementProps) => (
  <tr {...attributes}>{children}</tr>
);
