import { Editor, Transforms } from "slate";

const LIST_TYPES = ["numbered-list", "bulleted-list"];

export const ExtendedEditor = {
  ...Editor,

  toggleBlock(editor: Editor, format: string) {
    const isActive = ExtendedEditor.isBlockActive(editor, format);
    const isList = LIST_TYPES.includes(format);

    Transforms.unwrapNodes(editor, {
      match: (n) => LIST_TYPES.includes(n.type || ""),
      split: true,
    });

    Transforms.setNodes(editor, {
      type: isActive ? "paragraph" : isList ? "list-item" : format,
    });

    if (!isActive && isList) {
      const block = { type: format, children: [] };
      Transforms.wrapNodes(editor, block);
    }
  },

  toggleMark(editor: Editor, format: string, value: any = true) {
    const isActive = ExtendedEditor.isMarkActive(editor, format);

    if (isActive) {
      Editor.removeMark(editor, format);
    } else {
      Editor.addMark(editor, format, value);
    }
  },

  isBlockActive(editor: Editor, format: string): boolean {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === format,
    });

    return Boolean(match);
  },

  isMarkActive(editor: Editor, format: string): boolean {
    const marks = Editor.marks(editor) as Record<string, boolean> | undefined;
    return marks ? marks[format] === true : false;
  },
};
