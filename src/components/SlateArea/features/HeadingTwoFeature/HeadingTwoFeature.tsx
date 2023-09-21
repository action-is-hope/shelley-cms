import type { Feature } from "../../slateAreaTypes";
import { HeadingTwoElement } from "./elements/HeadingTwoElement";
import { HeadingTwoButton } from "./hover-menu-buttons/HeadingTwoButton";

export const HeadingTwoFeature = (): Feature => ({
  name: "HeadingTwoFeature",
  blockHotkeys: {
    "mod+alt+2": "heading-two",
  },
  hoverMenuButtons: [HeadingTwoButton],
  elements: {
    "heading-two": HeadingTwoElement,
  },
});
