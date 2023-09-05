// Decided to disable this rule for now, as we appear to be following the Slate
// docs at https://docs.slatejs.org/libraries/slate-react/editable with `any`
// for `children`.
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { RenderLeafProps } from "slate-react";
import type { LeafMap } from "../slateAreaTypes";
import type { BaseCustomElement, CustomElement } from "../slate";
import type { ReactNode } from "react";

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
      const L = leafMap[key] as unknown as CustomElement & ReactNode;

      // If there is a renderer and the value is truthy (eg. {bold: true}).
      return L && val ? (
        <L {...renderLeafProps}>{newChildren}</L>
      ) : (
        (newChildren as CustomElement)
      );
    },
    children
  );

  return <span {...attributes}>{formattedChildren}</span>;
};
