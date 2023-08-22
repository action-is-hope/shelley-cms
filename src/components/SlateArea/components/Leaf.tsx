import type { RenderLeafProps } from "slate-react";
import type { LeafMap } from "../slateAreaTypes";

/**
 * Renders a leaf. Use within `renderLeaf`.
 */
export const Leaf = (props: RenderLeafProps & { leafMap: LeafMap }) => {
  const { leafMap, ...renderLeafProps } = props;
  const { leaf, children, attributes } = renderLeafProps;

  // Leaves can have more than one formatting applied at once, e.g. {bold:
  // true, italic: true}. Iterate through each key, run the renderer and put
  // the result together.
  // Note: This code mirrors the serializeToHTML code which is nearly identical.
  const formattedChildren = Object.entries(leaf).reduce(
    (newChildren, [key, val]) => {
      const L = leafMap[key];

      // If there is a renderer and the value is truthy (eg. {bold: true}).
      return L && val ? <L {...renderLeafProps}>{newChildren}</L> : newChildren;
    },
    children
  );

  return <span {...attributes}>{formattedChildren}</span>;
};
