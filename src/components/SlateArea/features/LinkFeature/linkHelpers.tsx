import { Editor, Transforms, Range } from "slate";

const protocols = ["http:", "https:", "mailto:", "ftp:", "tel:"];

/**
 * Add http:// to the start of `s` if it is an absolute URL and no protocol has
 * been specified.
 */
export const addMissingHTTP = (s: string) => {
  const exclude = ["/", ...protocols];
  if (exclude.some(x => s.startsWith(x))) return s;

  return `http://${s}`;
};

export const isLinkActive = (editor: Editor) => {
  const [link] = Editor.nodes(editor, { match: n => n.type === "link" });
  return Boolean(link);
};

export const unwrapLink = (editor: Editor) => {
  Transforms.unwrapNodes(editor, { match: n => n.type === "link" });
};

export const wrapLink = (editor: Editor, url: string) => {
  if (isLinkActive(editor)) {
    unwrapLink(editor);
  }

  const { selection } = editor;
  const isCollapsed = selection && Range.isCollapsed(selection);
  const link = {
    type: "link",
    url,
    children: isCollapsed ? [{ text: url }] : []
  };

  if (isCollapsed) {
    Transforms.insertNodes(editor, link);
  } else {
    Transforms.wrapNodes(editor, link, { split: true });
    Transforms.collapse(editor, { edge: "end" });
  }
};

export const toggleLink = (editor: Editor) => {
  if (isLinkActive(editor)) {
    unwrapLink(editor);
  } else if (editor.selection && Range.isExpanded(editor.selection)) {
    const url = window.prompt("Paste or enter a link:");
    if (!url) return;
    wrapLink(editor, url);
  }
};
