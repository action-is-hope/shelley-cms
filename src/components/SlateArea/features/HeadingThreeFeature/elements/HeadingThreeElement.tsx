import type { ElementProps } from "../../../components/Element";
export const HeadingThreeElement = ({ attributes, children }: ElementProps) => (
  <h2 {...attributes}>{children}</h2>
);
