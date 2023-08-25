import type { ElementProps } from "../../../components/Element";
export const HeadingThreeElement = ({ attributes, children }: ElementProps) => (
  <h3 {...attributes}>{children}</h3>
);
