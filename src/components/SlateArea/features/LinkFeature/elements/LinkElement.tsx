import type { ElementProps } from "../../../components/Element";
export const LinkElement = ({
  attributes,
  children,
  element,
}: ElementProps) => (
  <a {...attributes} href={element.url}>
    {children}
  </a>
);
