export interface Table {
  type: "table";
  children: (TableHead | TableBody)[];
}

export interface TableHead {
  type: "table-head";
  children: TableRow[];
}

export interface TableBody {
  type: "table-body";
  children: TableRow[];
}

export interface TableRow {
  type: "table-row";
  children: (
    | TableCell
    | TableHeaderCell
    | TableRowMenu
    | TableCellEmpty
    | TableCellMenu
  )[];
}

export interface TableCell {
  type: "table-cell";
  children: {
    type: "paragraph";
    children: { text: string }[];
  }[];
}

export interface TableHeaderCell {
  type: "table-header-cell";
  children: { text: string }[];
}

export interface TableRowMenu {
  type: "table-row-menu";
  children: { text: string }[];
}

export interface TableCellEmpty {
  type: "table-cell-empty";
  children: { text: string }[];
}

export interface TableCellMenu {
  type: "table-cell-menu";
  children: { text: string }[];
}
