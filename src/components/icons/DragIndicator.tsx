import type React from "react";
import type { Ref } from "react";
import { Icon, IconProps } from "@actionishope/shelley/Icon";

const DragIndicator: React.VFC<IconProps> = (props) => {
  const { ref, ...rest } = props;
  return (
    <Icon {...rest} viewBox="0 0 24 24" ref={ref as Ref<SVGSVGElement>}>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
    </Icon>
  );
};
export default DragIndicator;
