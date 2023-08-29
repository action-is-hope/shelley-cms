import type { ReactEditor } from "slate-react";

export const withSingleLine = (editor: ReactEditor) => {
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
