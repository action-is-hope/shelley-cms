import { Feature } from "../../slateAreaTypes";
import { ItalicButton } from "./hover-menu-buttons/ItalicButton";
import { ItalicLeaf } from "./leaves/ItalicLeaf";

export const ItalicFeature = (): Feature => ({
  name: "ItalicFeature",
  markHotkeys: {
    "mod+i": "italic"
  },
  hoverMenuButtons: [ItalicButton],
  leaves: {
    italic: ItalicLeaf
  }
});
