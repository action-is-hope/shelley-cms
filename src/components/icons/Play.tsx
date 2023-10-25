import type React from "react";
import type { Ref } from "react";
import { Icon, IconProps } from "@actionishope/shelley/Icon";

const Play: React.VFC<IconProps> = (props) => {
  const { ref, ...rest } = props;
  return (
    <Icon {...rest} viewBox="0 0 24 24" ref={ref as Ref<SVGSVGElement>}>
      <path d="M8 5v14l11-7z"></path>
    </Icon>
  );
};
export default Play;
