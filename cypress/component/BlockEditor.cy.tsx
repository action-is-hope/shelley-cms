import React from "react";
import { Item, P, TextField } from "@actionishope/shelley";
import {
  BlockEditor,
  BlockEditorProps,
} from "../../src/components/BlockEditor/BlockEditor";
import { ContentArea } from "../../src/components/ContentArea/ContentArea";

const menuTrigger = '[data-id="blockEditor--menuTrigger"]';
const menu = '[data-id="blockEditor--menu"]';
const modal = '[data-id="blockEditor--modal"]';
const modalContent = '[data-id="blockEditor--modal-content"]';
const modalBackdrop = '[data-id="blockEditor--modal-backdrop"]';
// Main content areas
const content = '[data-id="blockEditor--content"]';
const settings = '[data-id="blockEditor--settings"]';
// Menu items
const manageOption = '[data-key="manage"]';
const settingsOption = '[data-key="settings"]';
const removeOption = '[data-key="remove"]';

export const BlockEditorTemplate = (
  args: Omit<BlockEditorProps, "children">
) => {
  return (
    <ContentArea focusOnProps={{ enabled: false }}>
      <BlockEditor
        data-id="blockEditor"
        label={"BlockName"}
        settingsRender={() => (
          <>
            <P>Settings</P>
            <TextField
              variant="quiet"
              placeholder={"Setting"}
              label={"setting label"}
              labelPosition="hidden"
              vol={2}
            />
          </>
        )}
        {...args}
      >
        <form action="">
          <TextField
            variant="quiet"
            placeholder={"Placeholder text"}
            label={"label"}
            labelPosition="hidden"
            vol={6}
          />
        </form>
      </BlockEditor>
    </ContentArea>
  );
};

describe("BlockEditor", () => {
  describe("Basics", () => {
    it("renders last saved text", () => {
      const onActionSpy = cy.spy().as("onActionSpy");
      cy.mount(<BlockEditorTemplate />);
      cy.get(menuTrigger).realClick();
      cy.get(menu).should("exist");
      // cy.get(lastSaved).should("exist").and("include.text", "5 mins ago");
    });
  });
});
