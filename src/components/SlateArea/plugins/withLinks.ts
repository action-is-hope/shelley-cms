import isUrl from "is-url";
import type { Editor, Element } from "slate";
import { wrapLink } from "../features/LinkFeature/linkHelpers";

export const withLinks = (editor: Editor) => {
  const { insertData, insertText, isInline } = editor;

  /**
   * Teach Slate that elements of type link is to be treated as inline elements.
   */
  editor.isInline = (element: Element) => {
    return element.type === "link" ? true : isInline(element);
  };

  editor.insertText = (text: string) => {
    if (text && isUrl(text)) {
      wrapLink(editor, text);
    } else {
      insertText(text);
    }
  };

  editor.insertData = (data: DataTransfer) => {
    const text = data.getData("text/plain");

    if (text && isUrl(text)) {
      wrapLink(editor, text);
    } else {
      insertData(data);
    }
  };

  return editor;
};
