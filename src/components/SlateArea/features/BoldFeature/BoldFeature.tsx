import { Feature } from "../../slateAreaTypes";
import { BoldButton } from "./hover-menu-buttons/BoldButton";
import { BoldLeaf } from "./leaves/BoldLeaf";

export const BoldFeature = (): Feature => ({
  name: "BoldFeature",
  markHotkeys: {
    "mod+b": "bold"
  },
  hoverMenuButtons: [BoldButton],
  leaves: {
    bold: BoldLeaf
  }
});
