import { HoverMenuButton, HoverMenuButtonRenderProps } from "../../../slateAreaTypes";
import { toggleLink, isLinkActive } from "../linkHelpers";
import { Editor } from "slate";

export const LinkButton: HoverMenuButton = {
  kind: "block",
  type: "link",
  icon: "insert_link",
  onMouseDown: (editor: Editor) => toggleLink(editor),
  isActive: isLinkActive
};
