import { Feature } from "../../slateAreaTypes";
import { ParagraphElement } from "./elements/ParagraphElement";

export const ParagraphFeature = (): Feature => ({
  name: "ParagraphFeature",
  elements: {
    paragraph: ParagraphElement
  }
});
