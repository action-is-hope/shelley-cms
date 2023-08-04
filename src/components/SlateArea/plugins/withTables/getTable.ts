export const getTable = (tableValue: any) => {
  const table = tableValue.find(x => x.type === "table");
  if (!table) console.error("table not found");

  const tableHeadIndex = table.children.findIndex(child => child.type === "table-head");
  const tableBodyIndex = table.children.findIndex(child => child.type === "table-body");
  const tableBody = table.children[tableBodyIndex];
  const tableHead = table.children[tableHeadIndex];

  return { table, tableHeadIndex, tableBodyIndex, tableBody, tableHead };
};
