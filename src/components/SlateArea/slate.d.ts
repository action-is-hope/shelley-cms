// This example is for an Editor with `ReactEditor` and `HistoryEditor`
import { BaseEditor } from "slate";
import { ReactEditor } from "slate-react";
import { HistoryEditor } from "slate-history";
import type { ElementMap } from "./slateAreaTypes";

interface TableEditor {
  countRows: () => number;
  countColumns: () => number;
  insertRowBelow: () => void;
  insertRowAbove: () => void;
  deleteRow: () => void;
  insertColumnRight: () => void;
  insertColumnLeft: () => void;
  deleteColumn: () => void;
}

export type CustomEditor = BaseEditor &
  ReactEditor &
  HistoryEditor &
  TableEditor;

type BaseCustomElement = {
  type: string;
  attributes?: {
    [key: string]: string;
  };
  children: (BaseCustomElement | CustomText)[];
  element?: Element;
  elementMap?: ElementMap;
  data?: {
    id: string;
    [key: string]: unknown;
  };
};

// type CustomText = { text: string; bold?: true };
type CustomText = { text: string };

export type ParagraphElement = BaseCustomElement;

export type ListItemElement = BaseCustomElement;

export type LinkElement = BaseCustomElement;

export type HeadingElement = BaseCustomElement & {
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
