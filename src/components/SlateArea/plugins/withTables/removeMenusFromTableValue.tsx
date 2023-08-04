import { Table } from "./tableTypes";

export const removeMenusFromTableValue = (tableValue: Table[]) =>
  tableValue.map(table => ({
    ...table,
    children: table.children
      .map(headOrBody => ({
        ...headOrBody,
        children: headOrBody.children
          .map(tr => ({
            ...tr,
            children: tr.children.filter(
              cell => !["table-row-menu", "table-cell-empty", "table-cell-menu"].includes(cell.type)
            )
          }))
          .filter(tr => tr.children.length)
      }))
      .filter(headOrBody => headOrBody.children.length)
  }));
