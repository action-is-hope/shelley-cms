import type { Table } from "./tableTypes";

export const addMenusToTableValue = (tableValue: Table[]) =>
  tableValue.map((table) => {
    const numberOfColumns =
      table.children[0]?.children[0] &&
      table.children[0].children[0].children.length;
    const tableBody = table.children.find(
      (child) => child.type === "table-body"
    );
    const tableHead = table.children.find(
      (child) => child.type === "table-head"
    );

    return {
      ...table,
      children: [
        {
          type: "table-head",
          children: [
            {
              type: "table-row",
              children: [
                {
                  type: "table-cell-empty",
                  children: [{ text: "" }],
                },
                ...Array(numberOfColumns)
                  .fill(undefined)
                  .map(() => ({
                    type: "table-cell-menu",
                    children: [{ text: "" }],
                  })),
              ],
            },
            tableHead && {
              type: "table-row",
              children: [
                {
                  type: "table-cell-empty",
                  children: [{ text: "" }],
                },
                ...(tableHead?.children[0]?.children || []), // Use an empty array if children is undefined
              ],
            },
          ].filter(Boolean),
        },
        {
          type: "table-body",
          children: tableBody?.children.map((r, i) => ({
            ...r,
            children: [
              {
                type: "table-row-menu",
                children: [{ text: "" }],
              },
              ...(tableBody?.children[i]?.children || []), // Use an empty array if children is undefined
            ],
          })),
        },
      ],
    };
  });
