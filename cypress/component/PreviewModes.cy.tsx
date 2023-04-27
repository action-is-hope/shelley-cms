import React from "react";
import {
  PreviewModes,
  PreviewModesProps,
} from "../../src/components/PreviewModes/PreviewModes";
const webInputLabel = `[data-id="previewModes--optionWeb--label"]`;
const webInput = `[data-id="previewModes--optionWeb--input"]`;
const laptopInputLabel = '[data-id="previewModes--optionLaptop--label"]';
const laptopInput = '[data-id="previewModes--optionLaptop--input"]';
const tabletInputLabel = `[data-id="previewModes--optionTablet--label"]`;
const tabletInput = `[data-id="previewModes--optionTablet--input"]`;
const mobileInputLabel = '[data-id="previewModes--optionMobile--label"]';
const mobileInput = '[data-id="previewModes--optionMobile--input"]';

export const BasicExample = (args: PreviewModesProps) => {
  return (
    <PreviewModes data-id="previewModes" className={"custom-class"} {...args} />
  );
};

describe("PreviewModes", () => {
  describe("Basics", () => {
    it("renders all input containers and hidden labels", () => {
      cy.mount(<BasicExample />);
      cy.get(webInputLabel)
        .should("exist")
        .and(
          "include.text",
          "As seen on the web, as a Google search result etc"
        );
      cy.get(laptopInputLabel).should("exist").and("include.text", "Laptop");
      cy.get(tabletInputLabel).should("exist").and("include.text", "Tablet");
      cy.get(mobileInputLabel).should("exist").and("include.text", "Mobile");
    });

    it("onChange works as expected", () => {
      const onChangeSpy = cy.spy().as("onChangeSpy");
      cy.mount(<BasicExample onChange={onChangeSpy} />);
      cy.get(tabletInput).realClick();
      cy.get("@onChangeSpy").should("have.been.calledOnceWith", "tablet");
    });
  });
});
