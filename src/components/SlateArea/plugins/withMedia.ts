import { Editor, Transforms, Element, Node } from "slate";

const mediaNodeTypes = [
  "image",
  "video",
  "document",
  "twitter-embed",
  "linkedin-embed",
  "instagram-embed"
];

export const withMedia = (editor: Editor) => {
  const { isVoid, normalizeNode } = editor;

  editor.isVoid = element => {
    return mediaNodeTypes.includes(element.type) ? true : isVoid(element);
  };

  editor.normalizeNode = entry => {
    const [node, path] = entry;

    if (Element.isElement(node) && mediaNodeTypes.includes(node.type)) {
      const children = Array.from(Node.children(editor, path));
      if (!children.length) {
        console.debug("No children found, inserting empty text node");
        Transforms.insertText(editor, "", { at: path });
      }
    }

    // Fall back to the original `normalizeNode` to enforce other constraints.
    normalizeNode(entry);
  };

  return editor;
};
