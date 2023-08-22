import type { Element as SlateElement } from "slate";
import type { ElementMap } from "../slateAreaTypes";

export interface ElementProps extends SlateElement {
  elementMap: ElementMap;
  attributes: any;
  element: any;
}
/**
 * Renders an element. Use within `renderElement`.
 */
export const Element = ({
  attributes,
  children,
  element,
  elementMap,
}: ElementProps) => {
  const ElementToRender = elementMap[element.type];

  if (ElementToRender) {
    return (
      <ElementToRender {...{ attributes, element }}>{children}</ElementToRender>
    );
  } else {
    console.warn(
      `No element renderer for Slate type '${element.type}'. Have you forgot to add it within the SlateArea Feature?`
    );
    return <p {...attributes}>{children}</p>;
  }
};
