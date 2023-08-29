// This example is for an Editor with `ReactEditor` and `HistoryEditor`
import { BaseEditor } from "slate";
import { ReactEditor } from "slate-react";
import { HistoryEditor } from "slate-history";
import type { ElementMap } from "./slateAreaTypes";

export type CustomEditor = BaseEditor & ReactEditor & HistoryEditor;

type BaseCustomElement = {
  attributes: {
    [key: string]: string;
  };
  children: CustomText[];
  element: Element;
  elementMap: ElementMap;
};

// type CustomText = { text: string; bold?: true };
type CustomText = { text: string };

export type ParagraphElement = BaseCustomElement & {
  type: "paragraph";
};

export type ListItemElement = BaseCustomElement & {
  type: "list-item";
};

export type LinkElement = BaseCustomElement & {
  type: "link";
};

export type HeadingElement = BaseCustomElement & {
  type: "heading";
  level: number;
};

export type CustomElement =
  | ParagraphElement
  | HeadingElement
  | ListItemElement
  | LinkElement;

// export type FormattedText = { text: string; bold?: true };

// export type CustomText = FormattedText;

declare module "slate" {
  interface CustomTypes {
    Editor: CustomEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}
