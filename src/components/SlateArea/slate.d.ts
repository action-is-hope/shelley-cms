import { BaseElement, BaseEditor, BaseText } from "slate";

declare module "slate" {
  export interface BaseElement {
    type?: string;
    text?: string;
  }
  export interface BaseEditor {
    type?: string;
    insertData?: any;
  }
  export interface BaseText {
    type?: string;
  }
}

// // This example is for an Editor with `ReactEditor` and `HistoryEditor`
// import { BaseEditor } from "slate";
// import { ReactEditor } from "slate-react";
// import { HistoryEditor } from "slate-history";
// import type { ElementMap } from "./slateAreaTypes";

// export type CustomEditor = BaseEditor & ReactEditor & HistoryEditor;

// export type ParagraphElement = {
//   type: "paragraph";
//   element: any;
//   attributes: any;
//   elementMap: ElementMap;
//   children: CustomText[];
// };

// export type ListItemElement = {
//   type: "list-item";
//   element: any;
//   attributes: any;
//   elementMap: ElementMap;
//   children: CustomText[];
// };

// export type LinkElement = {
//   type: "link";
//   element: any;
//   attributes: any;
//   elementMap: ElementMap;
//   children: CustomText[];
// };

// export type HeadingElement = {
//   type: "heading";
//   element: any;
//   attributes: any;
//   elementMap: ElementMap;
//   level: number;
//   children: CustomText[];
// };

// export type CustomElement =
//   | ParagraphElement
//   | HeadingElement
//   | ListItemElement
//   | LinkElement;

// export type FormattedText = { text: string; bold?: true };

// export type CustomText = FormattedText;

// declare module "slate" {
//   interface CustomTypes {
//     Editor: CustomEditor;
//     Element: CustomElement;
//     Text: CustomText;
//   }
// }
