import type { HoverMenuButton } from "../../../slateAreaTypes";

import { ReactComponent as headingTwoSVG } from "./h2_24px.svg";

export const HeadingTwoButton: HoverMenuButton = {
  kind: "block",
  type: "heading-two",
  icon: headingTwoSVG as React.FC<React.SVGProps<SVGSVGElement>>,
};
