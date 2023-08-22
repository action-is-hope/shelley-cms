import type { ElementProps } from "../../../components/Element";

const TableHeadElement = ({ attributes, children }: ElementProps) => (
  <thead {...attributes}>{children}</thead>
);

export default TableHeadElement;
