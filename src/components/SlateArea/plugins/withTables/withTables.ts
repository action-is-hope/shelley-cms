import {
  Editor,
  Element as SlateElement,
  Point,
  Range,
  Transforms,
} from "slate";
import { getTable } from "./getTable";
import type { CustomEditor, CustomElement } from "../../slate";

export interface TableEditor extends Editor {
  countRows: () => number;
  countColumns: () => number;
  insertRowBelow: () => void;
  insertRowAbove: () => void;
  deleteRow: () => void;
  insertColumnRight: () => void;
  insertColumnLeft: () => void;
  deleteColumn: () => void;
}

export const withTables = (editor: CustomEditor) => {
  const { deleteBackward, deleteForward, insertBreak, isVoid } = editor;

  editor.deleteBackward = (unit) => {
    const { selection } = editor;

    if (selection && Range.isCollapsed(selection)) {
      const [cell] = Editor.nodes(editor, {
        match: (_n) => {
          const n = _n as CustomElement;
          return (
            !Editor.isEditor(n) &&
            SlateElement.isElement(n) &&
            ["table-cell", "table-header-cell"].includes(n.type)
          );
        },
      });

      if (cell) {
        const [, cellPath] = cell;
        const start = Editor.start(editor, cellPath);

        if (Point.equals(selection.anchor, start)) {
          return;
        }
      }
    }

    deleteBackward(unit);
  };

  editor.deleteForward = (unit) => {
    const { selection } = editor;

    if (selection && Range.isCollapsed(selection)) {
      const [cell] = Editor.nodes(editor, {
        match: (_n) => {
          const n = _n as CustomElement;
          return (
            !Editor.isEditor(n) &&
            SlateElement.isElement(n) &&
            ["table-cell", "table-header-cell"].includes(n.type)
          );
        },
      });

      if (cell) {
        const [, cellPath] = cell;
        const end = Editor.end(editor, cellPath);

        if (Point.equals(selection.anchor, end)) {
          return;
        }
      }
    }

    deleteForward(unit);
  };

  editor.insertBreak = () => {
    const { selection } = editor;

    if (selection) {
      const [tableHeaderCell] = Editor.nodes(editor, {
        match: (_n) => {
          const n = _n as CustomElement;
          return (
            !Editor.isEditor(n) &&
            SlateElement.isElement(n) &&
            n.type === "table-header-cell"
          );
        },
      });

      if (tableHeaderCell) {
        return;
      }
    }

    insertBreak();
  };

  editor.isVoid = (element) =>
    element.type === "table-row-menu" || element.type === "table-cell-menu"
      ? true
      : isVoid(element);

  editor.countRows = () => {
    const { tableBody } = getTable(editor.children as CustomElement[]);
    return tableBody.children.length;
  };

  editor.countColumns = () => {
    const { tableBody } = getTable(editor.children as CustomElement[]);
    return (tableBody.children[0]! as CustomElement).children.filter(
      (element) => (element as CustomElement).type === "table-cell"
    ).length;
  };

  editor.insertRowBelow = () => {
    if (!editor.selection) return;
    const { tableBody, tableBodyIndex } = getTable(
      editor.children as CustomElement[]
    );

    if (editor.selection.anchor) {
      const anchorPath = editor.selection.anchor.path;
      if (anchorPath && anchorPath.length >= 3) {
        const thirdPathElement = anchorPath[2];
        const updatedValue = thirdPathElement && {
          at: [0, tableBodyIndex, thirdPathElement + 1],
        };
        // Use the updatedValue as needed
        Transforms.insertNodes(
          editor,
          {
            type: "table-row",
            children: [
              {
                type: "table-row-menu",
                children: [{ text: "" }],
              },
              ...[
                ...Array<number>(
                  (tableBody.children[0]! as CustomElement).children.length - 1
                ),
              ].map((_) => ({
                type: "table-cell",
                children: [{ type: "paragraph", children: [{ text: "" }] }],
              })),
            ],
          },
          { ...updatedValue }
        );
      }
    }
  };

  editor.insertRowAbove = () => {
    if (!editor.selection) return;
    const { tableBody, tableBodyIndex } = getTable(
      editor.children as CustomElement[]
    );

    Transforms.insertNodes(
      editor,
      {
        type: "table-row",
        children: [
          {
            type: "table-row-menu",
            children: [{ text: "" }],
          },
          ...[
            ...Array<number>(
              (tableBody.children[0]! as CustomElement).children.length - 1
            ),
          ].map((_) => ({
            type: "table-cell",
            children: [{ type: "paragraph", children: [{ text: "" }] }],
          })),
        ],
      },
      { at: [0, tableBodyIndex, editor.selection.anchor.path[2]!] }
    );
  };

  editor.deleteRow = () => {
    if (!editor.selection) return;
    const { tableBodyIndex } = getTable(editor.children as CustomElement[]);

    Transforms.delete(editor, {
      at: [0, tableBodyIndex, editor.selection.anchor.path[2]!],
    });
  };

  editor.insertColumnRight = () => {
    if (!editor.selection) return;

    const { tableBody, tableBodyIndex, tableHeadIndex, tableHead } = getTable(
      editor.children as CustomElement[]
    );

    if (tableHead.children[1]) {
      const anchorPath = editor.selection.anchor.path;
      if (anchorPath && anchorPath[3] !== undefined) {
        Transforms.insertNodes(
          editor,
          {
            type: "table-header-cell",
            children: [{ text: "" }],
          },
          { at: [0, tableHeadIndex, 1, anchorPath[3] + 1] }
        );
      }
    }

    const anchorPath = editor.selection.anchor.path;
    if (anchorPath && anchorPath[3] !== undefined) {
      Transforms.insertNodes(
        editor,
        {
          type: "table-cell-menu",
          children: [{ text: "" }],
        },
        { at: [0, tableHeadIndex, 0, anchorPath[3] + 1] }
      );

      for (let i = 0; i < tableBody.children.length; i++) {
        Transforms.insertNodes(
          editor,
          {
            type: "table-cell",
            children: [{ type: "paragraph", children: [{ text: "" }] }],
          },
          { at: [0, tableBodyIndex, i, anchorPath[3] + 1] }
        );
      }
    }
  };

  editor.insertColumnLeft = () => {
    if (!editor.selection) return;
    const { tableBody, tableBodyIndex, tableHeadIndex, tableHead } = getTable(
      editor.children as CustomElement[]
    );

    if (tableHead.children[1]) {
      Transforms.insertNodes(
        editor,
        {
          type: "table-header-cell",
          children: [{ text: "" }],
        },
        { at: [0, tableHeadIndex, 1, editor.selection.anchor.path[3]!] }
      );
    }

    Transforms.insertNodes(
      editor,
      {
        type: "table-cell-menu",
        children: [{ text: "" }],
      },
      { at: [0, tableHeadIndex, 0, editor.selection.anchor.path[3]!] }
    );

    for (let i = 0; i < tableBody.children.length; i++) {
      if (
        editor.selection?.anchor?.path[3] !== undefined &&
        editor.selection.anchor.path[3] >= 1
      ) {
        Transforms.insertNodes(
          editor,
          {
            type: "table-cell",
            children: [{ type: "paragraph", children: [{ text: "" }] }],
          },
          { at: [0, tableBodyIndex, i, editor.selection.anchor.path[3] - 1] }
        );
      }
    }
  };

  editor.deleteColumn = () => {
    if (!editor.selection) return;
    const { tableBody, tableBodyIndex, tableHeadIndex, tableHead } = getTable(
      editor.children as CustomElement[]
    );

    for (let i = 0; i < tableBody.children.length; i++) {
      Transforms.delete(editor, {
        at: [0, tableBodyIndex, i, editor.selection.anchor.path[3]!],
      });
    }

    Transforms.delete(editor, {
      at: [0, tableHeadIndex, 0, editor.selection.anchor.path[3]!],
    });

    if (
      tableHead.children[1] &&
      editor.selection?.anchor?.path[3] !== undefined
    ) {
      Transforms.delete(editor, {
        at: [0, tableHeadIndex, 1, editor.selection.anchor.path[3]],
      });
    }
  };

  return editor;
};
