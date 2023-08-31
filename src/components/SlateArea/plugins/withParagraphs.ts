import { Editor, Element, Node, Transforms } from "slate";
import { jsx } from "slate-hyperscript";
import type { ReactEditor } from "slate-react";
import { isEmpty } from "../helpers";
import type { CustomText } from "../slate";

export const withParagraphs = (editor: Editor & ReactEditor) => {
  const { normalizeNode } = editor;

  editor.normalizeNode = (entry) => {
    const [node, path] = entry;

    // Insert a paragraph if there are no children.
    if (editor.children.length === 0) {
      const p = jsx("element", { type: "paragraph" }, [jsx("text")]);
      Transforms.insertNodes(editor, p);
    }
    // Do not allow extra empty paragraphs, except one at the end to allow adding a new paragraph.
    if (
      Element.isElement(node) &&
      node.type === "paragraph" &&
      path &&
      path[0] &&
      path[0] > 0
    ) {
      const prevElementPath = [path[0] - 1];
      const prevElement = Node.get(editor, prevElementPath);

      if (
        prevElement.type === "paragraph" &&
        isEmpty(Node.string(prevElement)) &&
        /*
          When the cursor is positioned at the start of a node, we need this so that the user can create an empty paragraph above by pressing ENTER.

          Illustration:
             Paragraph1
            |Paragraph2
        */
        isEmpty(Node.string(node))
      ) {
        Transforms.removeNodes(editor, { at: path });
        // Transforms.removeNodes(editor);
        // https://github.com/ianstormtaylor/slate/issues/851
      }
    }

    // If previous list element is empty --> Start a paragraph.
    //
    // To test: create an empty list item. Press ENTER. A paragraph will be
    // created instead of a new list item.
    if (
      Element.isElement(node) &&
      node.type === "list-item" &&
      path &&
      path[1] &&
      path[1] > 0
    ) {
      const lastPathIndex = path.length - 1;
      const prevListItemPath =
        lastPathIndex >= 0
          ? path.slice(0, -1).concat((path[lastPathIndex] || 0) - 1)
          : path;

      const prevListItem = Node.get(editor, prevListItemPath);
      const isPrevListItemEmpty = isEmpty(Node.string(prevListItem));

      if (isPrevListItemEmpty) {
        Editor.withoutNormalizing(editor, () => {
          Transforms.removeNodes(editor, { at: path });
          Transforms.setNodes(
            editor,
            { type: "paragraph" },
            { at: prevListItemPath }
          );
          Transforms.liftNodes(editor, { at: prevListItemPath });
        });
      }
    }

    // For block-quotes and headings, if the previous element is the same type as
    // the current element --> Convert it to a paragraph.
    //
    // To test: create a heading. Press ENTER. A paragraph will be created
    // instead of a new heading.
    if (
      Element.isElement(node) &&
      ["block-quote", "heading-one", "heading-two", "heading-three"].includes(
        node.type || ""
      ) &&
      path &&
      path[0] &&
      path[0] > 0
    ) {
      const prevElementPath = [path[0] - 1];
      const prevElement = Node.get(editor, prevElementPath);

      if (prevElement.type === node.type) {
        Transforms.setNodes(editor, { type: "paragraph" }, { at: path });
      }
    }

    // Remove empty links.
    if (Element.isElement(node) && node.type === "link" && path) {
      if (
        node.children &&
        node.children.length &&
        isEmpty((node.children[0] as CustomText)?.text || "")
      ) {
        Transforms.removeNodes(editor, { at: path });
      }
    }

    // Fall back to the original `normalizeNode` to enforce other constraints.
    normalizeNode(entry);
  };

  return editor;
};
