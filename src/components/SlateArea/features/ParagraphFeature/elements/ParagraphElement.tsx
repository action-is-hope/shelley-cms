import type { ElementProps } from "../../../components/Element";
export const ParagraphElement = ({ attributes, children }: ElementProps) => (
  <p {...attributes}>{children}</p>
);
