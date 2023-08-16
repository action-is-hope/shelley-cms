import type { ElementProps } from "../../../components/Element";
export const NumberedListElement = ({ attributes, children }: ElementProps) => (
  <ol {...attributes}>{children}</ol>
);
