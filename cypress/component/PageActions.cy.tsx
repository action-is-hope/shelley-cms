import React from "react";
import { Item } from "@actionishope/shelley";
import {
  PageActions,
  PageActionsProps,
} from "../../src/components/PageActions/PageActions";

const portal = "#portal";

const pageActions = `[data-id="pageActions"]`;
const lastSaved = '[data-id="pageActions--last-saved"]';
const status = `[data-id="pageActions--status"]`;
const actionButton = `[data-id="pageActions--actionButton"]`;
const menuTrigger = '[data-id="pageActions--menuTrigger"]';

const archiveOption = '[data-key="archive"]';
const unpublishOption = '[data-key="unpublish"]';

export const BasicExample = (
  args: Omit<PageActionsProps<object>, "children">
) => {
  return (
    <PageActions
      // className={"custom classname"}
      lastSaved="5 mins ago"
      includeDataIds
      {...args}
    >
      <Item key="archive">Archive</Item>
      <Item key="unpublish">Unpublish</Item>
    </PageActions>
  );
};

describe("PageActions", () => {
  describe("Basics", () => {
    it("renders last saved text", () => {
      const onActionSpy = cy.spy().as("onActionSpy");
      cy.mount(<BasicExample status="draft" onAction={onActionSpy} />);
      cy.get(lastSaved).should("exist").and("include.text", "5 mins ago");
    });

    it("renders inside a portal", () => {
      const onActionSpy = cy.spy().as("onActionSpy");
      cy.mount(
        <BasicExample
          status="draft"
          onAction={onActionSpy}
          position={{ portalSelector: "#portal" }}
        />
      );
      cy.get(menuTrigger).click();
      cy.get(`${portal} ${archiveOption}`).should("exist");
    });

    it("reviewRequired", () => {
      const onActionSpy = cy.spy().as("onActionSpy");
      cy.mount(
        <BasicExample status="draft" onAction={onActionSpy} reviewRequired />
      );
      cy.get(actionButton).should("include.text", "Review required");
      cy.get(actionButton).realClick();

      cy.get("@onActionSpy").should("have.been.calledOnceWith", "review");
    });
  });

  describe("Menu options", () => {
    it("opens and selecting items fires onAction with key:", () => {
      const onActionSpy = cy.spy().as("onActionSpy");
      cy.mount(<BasicExample status="draft" onAction={onActionSpy} />);
      cy.get(archiveOption).should("not.exist");
      cy.get(menuTrigger).click();
      cy.get(archiveOption).realClick();
      cy.get("@onActionSpy").should("have.been.calledOnceWith", "archive");
    });

    it("supports disabledKeys", () => {
      const onActionSpy = cy.spy().as("onActionSpy");
      cy.mount(
        <BasicExample
          status="draft"
          onAction={onActionSpy}
          disabledKeys={["unpublish"]}
        />
      );
      cy.get(unpublishOption).should("not.exist");
      cy.get(menuTrigger).click();
      cy.get(unpublishOption).realClick();
      cy.get("@onActionSpy").should("not.have.have.been.called");
    });
  });

  describe("Status and onAction responses:", () => {
    it("render as 'draft', onAction fires 'publish'.", () => {
      const onActionSpy = cy.spy().as("onActionSpy");
      cy.mount(<BasicExample status="draft" onAction={onActionSpy} />);
      cy.get(pageActions).should("be.visible");
      cy.get(status).should("have.text", "Status: Draft");
      cy.get(actionButton).click();
      cy.get("@onActionSpy").should("have.been.calledOnceWith", "publish");
    });

    it("render as 'updated', onAction fires 'publish'.", () => {
      const onActionSpy = cy.spy().as("onActionSpy");
      cy.mount(<BasicExample status="updated" onAction={onActionSpy} />);
      cy.get(pageActions).should("be.visible");
      cy.get(status).should("have.text", "Status: Updated");
      cy.get(actionButton).click();
      cy.get("@onActionSpy").should("have.been.calledOnceWith", "publish");
    });

    it("render as 'archived', onAction fires `unarchive`.", () => {
      const onActionSpy = cy.spy().as("onActionSpy");
      cy.mount(<BasicExample status="archived" onAction={onActionSpy} />);
      cy.get(pageActions).should("be.visible");
      cy.get(status).should("have.text", "Status: Archived");
      cy.get(actionButton).click();
      cy.get("@onActionSpy").should("have.been.calledOnceWith", "unarchive");
    });

    it("render as 'unpublished', onAction fires 'publish'.", () => {
      const onActionSpy = cy.spy().as("onActionSpy");
      cy.mount(<BasicExample status="unpublished" onAction={onActionSpy} />);
      cy.get(pageActions).should("be.visible");
      cy.get(status).should("have.text", "Status: Unpublished");
      cy.get(actionButton).click();
      cy.get("@onActionSpy").should("have.been.calledOnceWith", "publish");
    });

    it("render as 'published', onAction has disabled class and does not fire.", () => {
      const onActionSpy = cy.spy().as("onActionSpy");
      cy.mount(<BasicExample status="published" onAction={onActionSpy} />);
      cy.get(pageActions).should("be.visible");
      cy.get(status).should("have.text", "Status: Published");
      cy.get(actionButton)
        .should("have.attr", "class")
        .and("to.have.string", "isDisabled");
      cy.get(actionButton).should("be.disabled");
    });
  });
});
