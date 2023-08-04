import { expect, test } from "@jest/globals";
import {
  createTestTable,
  createTestTableHead,
  createTestTableWithoutHead
} from "../__testshelpers__/helpers";
import { getTable } from "../getTable";

// Table head tests.

test("getTable() returns tableHeadIndex when there is a head", () => {
  const tableValue = createTestTable();
  expect(getTable(tableValue).tableHeadIndex).toEqual(1);
});

test("getTable() returns tableHead when there is a head", () => {
  const tableValue = createTestTable();
  const tableHead = createTestTableHead();
  expect(getTable(tableValue).tableHead).toEqual(tableHead);
});

test("getTable() returns tableHead undefined when there is no head", () => {
  const tableValue = createTestTableWithoutHead();
  expect(getTable(tableValue).tableHead).toEqual(undefined);
});

test("getTable() returns tableHeadIndex -1 when there is NOT a head", () => {
  const tableValue = createTestTableWithoutHead();
  expect(getTable(tableValue).tableHeadIndex).toEqual(-1);
});

// Table body tests.

test("getTable() returns tableBodyIndex", () => {
  const tableValue = createTestTable();
  expect(getTable(tableValue).tableBodyIndex).toEqual(0);
});

test("getTable() returns tableBodyIndex -1 when there is no table body", () => {
  expect(getTable([{ type: "table", children: [] }]).tableBodyIndex).toEqual(-1);
});

test("getTable() returns tableBody when there is a table body", () => {
  const tableValue = createTestTable();
  const tableBody = tableValue[0].children[0];
  expect(getTable(tableValue).tableBody).toEqual(tableBody);
});

test("getTable() returns tableBody undefined when there is no table body", () => {
  let tableValue = createTestTable();
  tableValue[0].children.shift();
  expect(getTable(tableValue).tableBody).toEqual(undefined);
});
