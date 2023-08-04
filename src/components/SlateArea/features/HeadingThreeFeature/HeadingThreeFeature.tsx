import { Feature } from "../../slateAreaTypes";
import { HeadingThreeElement } from "./elements/HeadingThreeElement";
import { HeadingThreeButton } from "./hover-menu-buttons/HeadingThreeButton";

export const HeadingThreeFeature = (): Feature => ({
  name: "HeadingThreeFeature",
  blockHotkeys: {
    "mod+alt+3": "heading-three"
  },
  hoverMenuButtons: [HeadingThreeButton],
  elements: {
    "heading-three": HeadingThreeElement
  }
});
