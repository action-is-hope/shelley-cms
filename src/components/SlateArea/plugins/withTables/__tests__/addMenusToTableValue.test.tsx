import { expect, test } from "@jest/globals";
import { addMenusToTableValue } from "../addMenusToTableValue";
import {
  createTestTableValue,
  createTestTableValueWithMenus,
  createTestTableValueWithoutHead,
  createTestTableValueWithoutHeadWithMenus,
} from "../__testshelpers__/helpers";

test("addMenusToTableValue() adds menus while preserving the content", () => {
  const initialTableValue = createTestTableValue();
  expect(addMenusToTableValue(initialTableValue)).toEqual(
    createTestTableValueWithMenus()
  );
});

test("addMenusToTableValue() adds menus while preserving the content when there isn't a header row", () => {
  const initialTableValue = createTestTableValueWithoutHead();
  expect(addMenusToTableValue(initialTableValue)).toEqual(
    createTestTableValueWithoutHeadWithMenus()
  );
});
