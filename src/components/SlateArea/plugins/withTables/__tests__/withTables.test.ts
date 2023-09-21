import { expect, jest, test } from "@jest/globals";
import { TableEditor, withTables } from "../withTables";

const editor = {
  deleteBackward: jest.fn(),
  deleteForward: jest.fn(),
  insertBreak: jest.fn(),
  isVoid: jest.fn(),
  selection: {
    anchor: {
      path: [0, 0, 2]
    }
  },
  children: [
    {
      type: "table",
      children: [
        {
          type: "table-body",
          children: [
            {
              type: "table-row",
              children: [
                {
                  type: "table-cell",
                  children: [{ type: "paragraph", children: [{ text: "" }] }]
                },
                {
                  type: "table-cell",
                  children: [{ type: "paragraph", children: [{ text: "" }] }]
                },
                {
                  type: "table-cell",
                  children: [{ type: "paragraph", children: [{ text: "" }] }]
                }
              ]
            },
            {
              type: "table-row",
              children: [
                {
                  type: "table-cell",
                  children: [{ type: "paragraph", children: [{ text: "" }] }]
                },
                {
                  type: "table-cell",
                  children: [{ type: "paragraph", children: [{ text: "" }] }]
                },
                {
                  type: "table-cell",
                  children: [{ type: "paragraph", children: [{ text: "" }] }]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

test("countRows", () => {
  expect(withTables(editor as unknown as TableEditor).countRows()).toEqual(2);
});

test("countColumns", () => {
  expect(withTables(editor as unknown as TableEditor).countColumns()).toEqual(3);
});
