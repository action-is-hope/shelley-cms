import type { ReactElementMap } from "../slateAreaTypes";

export interface ElementProps extends Element {
  reactElementMap: ReactElementMap;
  element: { type: string };
}

export const Element = ({
  attributes,
  children,
  element,
  reactElementMap,
}: ElementProps) => {
  const ElementToRender = reactElementMap[element.type];

  if (ElementToRender) {
    return (
      <ElementToRender {...{ attributes, element }}>{children}</ElementToRender>
    );
  } else {
    console.warn(
      `No element renderer for Slate type '${element.type}'. Have you forgotten to add it within the SlateArea Feature?`
    );
    return <p {...attributes}>{children}</p>;
  }
};
