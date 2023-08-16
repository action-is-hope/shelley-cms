import type { HoverMenuButton } from "../../../slateAreaTypes";
import { toggleLink, isLinkActive } from "../linkHelpers";
import { Link } from "../../../../icons";
import type { Editor } from "slate";

export const LinkButton: HoverMenuButton = {
  kind: "block",
  type: "link",
  icon: Link,
  onMouseDown: (editor: Editor) => toggleLink(editor),
  isActive: isLinkActive,
};
