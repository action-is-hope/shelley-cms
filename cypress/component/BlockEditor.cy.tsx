import React from "react";
import { P, TextField } from "@actionishope/shelley";
import {
  BlockEditor,
  BlockEditorProps,
} from "../../src/components/BlockEditor/BlockEditor";
import { ContentArea } from "../../src/components/ContentArea/ContentArea";

const blockEditor = '[data-id="blockEditor"]';
const blockEditorInput = '[data-id="blockEditor"] input';
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
    it("renders block options menu", () => {
      cy.mount(<BlockEditorTemplate />);
      cy.get(blockEditor).should("exist").and("be.visible");
      cy.get(menu).should("not.exist");
      cy.get(menuTrigger).should("be.visible").realClick();
      cy.get(menu).should("be.visible").and("exist").contains("Block settings").realClick();
      cy.get(settings + " h2").should("be.visible").and("exist").contains("BlockName settings");
      cy.get(settings + " div p").should("be.visible").and("exist").contains("Settings");
      cy.get(settings + " div button").should("be.visible").and("exist").contains("Cancel").realClick();
      cy.get(menu).should("not.exist");
      cy.get(blockEditor).should("be.visible");
    });
  });

  describe("Accessibility", () => {
    it("accessibility basics", () => {
      cy.mount(<BlockEditorTemplate />);
      cy.get(blockEditor).should("exist").and("be.visible");
      cy.realPress("Tab");
      cy.focused(menuTrigger);
      cy.realPress("Tab");
      cy.focused(blockEditorInput).type("Hello Groot").should("have.value", "Hello Groot");
    })

  });


});
