import type { Editor } from "slate";

export const withSingleLine = (editor: Editor) => {
  const { normalizeNode } = editor;

  editor.normalizeNode = (entry) => {
    if (editor.children.length > 1) {
      editor.undo();
    }

    // Fall back to the original `normalizeNode` to enforce other constraints.
    normalizeNode(entry);
  };

  return editor;
};
