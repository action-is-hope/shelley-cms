import { Feature } from "../../slateAreaTypes";
import { InfoPanelButton } from "./hover-menu-buttons/InfoPanelButton";
import { InfoPanelElement } from "./elements/InfoPanelElement";

export const InfoPanelFeature = (): Feature => ({
  name: "InfoPanelFeature",
  hoverMenuButtons: [InfoPanelButton],
  elements: {
    "info-panel": InfoPanelElement
  }
});
