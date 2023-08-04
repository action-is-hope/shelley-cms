import { Feature } from "../../slateAreaTypes";
import { BulletedListElement } from "./elements/BulletedListElement";
import { ListItemElement } from "./elements/ListItemElement";
import { NumberedListElement } from "./elements/NumberedListElement";
import { BulletedListButton } from "./hover-menu-buttons/BulletedListButton";
import { NumberedListButton } from "./hover-menu-buttons/NumberedListButton";

export const ListFeature = (): Feature => ({
  name: "ListFeature",
  hoverMenuButtons: [NumberedListButton, BulletedListButton],
  elements: {
    "bulleted-list": BulletedListElement,
    "numbered-list": NumberedListElement,
    "list-item": ListItemElement
  }
});
