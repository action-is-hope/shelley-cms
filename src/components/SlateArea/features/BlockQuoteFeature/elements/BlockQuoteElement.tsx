import type { ElementProps } from "../../../components/Element";
export const BlockQuoteElement = ({ attributes, children }: ElementProps) => (
  <blockquote {...attributes}>{children}</blockquote>
);
