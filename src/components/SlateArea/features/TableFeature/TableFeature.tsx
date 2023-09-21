import type { Feature } from "../../slateAreaTypes";
import TableCellElement from "./elements/TableCellElement";
import TableCellEmptyElement from "./elements/TableCellEmptyElement";
import TableCellMenuElement from "./elements/TableCellMenuElement";
import TableElement from "./elements/TableElement";
import TableBodyElement from "./elements/TableBodyElement";
import { TableRowElement } from "./elements/TableRowElement";
import TableRowMenuElement from "./elements/TableRowMenuElement";
import TableHeadElement from "./elements/TableHeadElement";
import TableHeaderCellElement from "./elements/TableHeaderCellElement";

export const TableFeature = (): Feature => ({
  name: "TableFeature",
  elements: {
    table: TableElement,
    "table-body": TableBodyElement,
    "table-head": TableHeadElement,
    "table-row": TableRowElement,
    "table-row-menu": TableRowMenuElement,
    "table-cell-menu": TableCellMenuElement,
    "table-cell": TableCellElement,
    "table-header-cell": TableHeaderCellElement,
    "table-cell-empty": TableCellEmptyElement,
  },
});
