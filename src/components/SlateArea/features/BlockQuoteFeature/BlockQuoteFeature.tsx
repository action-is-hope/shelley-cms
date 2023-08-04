import { Feature } from "../../slateAreaTypes";
import { BlockQuoteButton } from "./hover-menu-buttons/BlockQuoteButton";
import { BlockQuoteElement } from "./elements/BlockQuoteElement";

export const BlockQuoteFeature = (): Feature => ({
  name: "BlockQuoteFeature",
  hoverMenuButtons: [BlockQuoteButton],
  elements: {
    "block-quote": BlockQuoteElement
  }
});
