import React from "react";
import { Element as SlateElement } from "slate";
import { ElementMap } from "../slateAreaTypes";

/**
 * Renders an element. Use within `renderElement`.
 */
export const Element = ({
  attributes,
  children,
  element,
  elementMap
}: SlateElement & { elementMap: ElementMap; attributes: any; element: any }) => {
  const ElementToRender = elementMap[element.type];

  if (ElementToRender) {
    return <ElementToRender {...{ attributes, element }}>{children}</ElementToRender>;
  } else {
    console.warn(
      `No element renderer for Slate type '${element.type}'. Have you forgot to add it within the SlateArea Feature?`
    );
    return <p {...attributes}>{children}</p>;
  }
};
