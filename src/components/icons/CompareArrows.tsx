import type React from "react";
import type { Ref } from "react";
import { Icon, IconProps } from "@actionishope/shelley/Icon";

const CompareArrows: React.VFC<IconProps> = (props) => {
  const { ref, ...rest } = props;
  return (
    <Icon {...rest} viewBox="0 0 24 24" ref={ref as Ref<SVGSVGElement>}>
      <path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"></path>
    </Icon>
  );
};
export default CompareArrows;
