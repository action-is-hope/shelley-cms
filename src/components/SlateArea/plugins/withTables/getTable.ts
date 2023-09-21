import type { CustomElement } from "../../slate";

export const getTable = (tableValue: CustomElement[]) => {
  const table = tableValue.find((x) => x.type === "table")!;
  if (!table) console.error("table not found");

  const tableHeadIndex = table.children.findIndex(
    (child) => (child as CustomElement).type === "table-head"
  );
  const tableBodyIndex = table.children.findIndex(
    (child) => (child as CustomElement).type === "table-body"
  );
  const tableBody = table.children[tableBodyIndex] as CustomElement;
  const tableHead = table.children[tableHeadIndex] as CustomElement;

  return { table, tableHeadIndex, tableBodyIndex, tableBody, tableHead };
};
