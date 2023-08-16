import type { ElementProps } from "../../../components/Element";
export const BulletedListElement = ({ attributes, children }: ElementProps) => (
  <ul {...attributes}>{children}</ul>
);
