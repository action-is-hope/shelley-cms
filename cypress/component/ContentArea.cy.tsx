import React from "react";
import {
  ContentArea,
  ContentAreaProps,
} from "../../src/components/ContentArea/ContentArea";

const contentArea = '[data-id="contentArea"]';

export const ContentAreaTemplate = (
  args: Omit<ContentAreaProps, "children">
) => {
  return (
    <ContentArea focusOnProps={{ enabled: false }} data-id="contentArea">
      Content Blocks
    </ContentArea>
  );
};

describe("ContentArea", () => {
  describe("Basics", () => {
    it("renders", () => {
      cy.mount(<ContentAreaTemplate />);
      cy.get(contentArea).should("exist");
    });
    // @todo Add more :-)
  });
});
