import { expect, test } from "@jest/globals";
import { addMenusToTableValue } from "../addMenusToTableValue";
import {
  createTestTable,
  createTestTableWithMenus,
  createTestTableWithoutHead,
  createTestTableWithoutHeadWithMenus
} from "../__testshelpers__/helpers";

test("addMenusToTableValue() adds menus while preserving the content", () => {
  const initialTableValue = createTestTable();
  // @ts-ignore
  expect(addMenusToTableValue(initialTableValue)).toEqual(createTestTableWithMenus());
});

test("addMenusToTableValue() adds menus while preserving the content when there isn't a header row", () => {
  const initialTableValue = createTestTableWithoutHead();
  // @ts-ignore
  expect(addMenusToTableValue(initialTableValue)).toEqual(createTestTableWithoutHeadWithMenus());
});
