import { Editor } from "slate";
import { Feature } from "../../slateAreaTypes";
import { LinkElement } from "./elements/LinkElement";
import { LinkButton } from "./hover-menu-buttons/LinkButton";
import { toggleLink } from "./linkHelpers";

/**
 * This feature adds support for links (anchor tags).
 */
export const LinkFeature = (): Feature => ({
  name: "LinkFeature",
  blockHotkeys: {
    "mod+k": (editor: Editor) => toggleLink(editor)
  },
  hoverMenuButtons: [LinkButton],
  elements: {
    link: LinkElement
  }
});
