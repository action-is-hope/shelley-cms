import type React from "react";
import type { Ref } from "react";
import { Icon, IconProps } from "@actionishope/shelley/Icon";

const SyncAlt: React.VFC<IconProps> = (props) => {
  const { ref, ...rest } = props;
  return (
    <Icon {...rest} viewBox="0 0 24 24" ref={ref as Ref<SVGSVGElement>}>
      <path d="m18 12 4-4-4-4v3H3v2h15zM6 12l-4 4 4 4v-3h15v-2H6z"></path>
    </Icon>
  );
};
export default SyncAlt;
