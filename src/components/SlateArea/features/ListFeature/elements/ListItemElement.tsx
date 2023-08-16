import type { ElementProps } from "../../../components/Element";
export const ListItemElement = ({ attributes, children }: ElementProps) => (
  <li {...attributes}>{children}</li>
);
