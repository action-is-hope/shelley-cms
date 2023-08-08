import { Element, Node } from "slate";
// is-whitespace-character as ts alternative?
// @ts-ignore
import isWhiteSpace from "is-whitespace";

export const stripOuterHTMLTag = (s: string) =>
  s.substring(s.indexOf(">") + 1, s.lastIndexOf("<"));
export const isEmpty = (s: string): boolean => s === "" || isWhiteSpace(s);

export const removeEmptyParagraphs = (value: Element[]) => {
  const isEmptyParagraph = (n: Element) =>
    Element.isElement(n) && n.type === "paragraph" && isEmpty(Node.string(n));

  return value.filter((n) => !isEmptyParagraph(n));
};
