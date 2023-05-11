import type React from "react";
import type { Ref } from "react";
import { Icon, IconProps } from "@actionishope/shelley";

const Text: React.VFC<IconProps> = (props) => {
  const { ref, ...rest } = props;
  return (
    <Icon {...rest} viewBox="0 0 24 24" ref={ref as Ref<SVGSVGElement>}>
      <path d="M5 4v3h5.5v12h3V7H19V4z"></path>
      <path fill="none" d="M0 0h24v24H0V0z"></path>
    </Icon>
  );
};

export default Text;
