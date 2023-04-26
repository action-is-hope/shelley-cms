import React from "react";
import {
  PreviewModes,
  PreviewModesProps,
} from "../../src/components/PreviewModes/PreviewModes";

const web = `[data-id="web"]`;
const laptop = '[data-id="laptop"]';
const tablet = `[data-id="tablet"]`;
const mobile = '[data-id="mobile"]';

export const BasicExample = (args: PreviewModesProps) => {
  return (
    <PreviewModes
      className={"custom-class"}
      {...args}
      // ref={previewModesRef}
    />
  );
};

describe("PreviewModes", () => {
  describe("Basics", () => {
    // Need to allow data-id's through to Radios in Shelley on everything
    // it("renders all the icons and hidden alt text", () => {
    it("renders all the icons", () => {
      cy.mount(<BasicExample />);
      cy.get(web).should("exist");
      // .and(
      //   "include.text",
      //   "As seen on the web, as a Google search result etc"
      // );
      cy.get(laptop).should("exist");
      cy.get(tablet).should("exist");
      cy.get(mobile).should("exist");
    });

    it("onChange works as expected", () => {
      const onChangeSpy = cy.spy().as("onChangeSpy");
      cy.mount(<BasicExample onChange={onChangeSpy} />);
      cy.get(tablet).realClick();

      cy.get("@onChangeSpy").should("have.been.calledOnceWith", "tablet");
    });
  });
});
