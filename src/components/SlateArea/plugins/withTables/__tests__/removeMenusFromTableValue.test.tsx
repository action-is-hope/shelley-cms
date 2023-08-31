import { expect, test } from "@jest/globals";
import { addMenusToTableValue } from "../addMenusToTableValue";
import { getTable } from "../getTable";
import { removeMenusFromTableValue } from "../removeMenusFromTableValue";
import {
  createTestTableValue,
  createTestTableValueWithoutHead,
} from "../__testshelpers__/helpers";
import type { Table } from "../tableTypes";

test("running addMenusToTableValue() and then removeMenusToTableValue() returns the table to its original form", () => {
  const initialTableValue = createTestTableValue();
  const tableWithMenus = addMenusToTableValue(initialTableValue) as Table[];
  const newTableValue = removeMenusFromTableValue(tableWithMenus);

  // We check the head and body separately since the order of them may have changed when converting back and forth.
  expect(getTable(newTableValue).tableHead).toEqual(
    getTable(initialTableValue).tableHead
  );
  expect(getTable(newTableValue).tableBody).toEqual(
    getTable(initialTableValue).tableBody
  );
});

test("removeMenusToTableValue() removes empty head", () => {
  const initialTableValue = createTestTableValueWithoutHead();
  const tableWithMenus = addMenusToTableValue(initialTableValue) as Table[];
  const newTableValue = removeMenusFromTableValue(tableWithMenus);

  // We check the head and body separately since the order of them may have changed when converting back and forth.
  expect(getTable(newTableValue).tableHead).toEqual(undefined);
});
