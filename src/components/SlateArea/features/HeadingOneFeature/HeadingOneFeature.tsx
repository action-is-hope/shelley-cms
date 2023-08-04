import { Feature } from "../../slateAreaTypes";
import { HeadingOneButton } from "./hover-menu-buttons/HeadingOneButton";

export const HeadingOneFeature = (): Feature => ({
  name: "HeadingOneFeature",
  hoverMenuButtons: [HeadingOneButton]
});
