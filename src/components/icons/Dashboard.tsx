import type React from "react";
import type { Ref } from "react";
import { Icon, IconProps } from "@actionishope/shelley";

const Dashboard: React.VFC<IconProps> = (props) => {
  const { ref, ...rest } = props;
  return (
    <Icon {...rest} viewBox="0 0 24 24" ref={ref as Ref<SVGSVGElement>}>
      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path>
    </Icon>
  );
};
export default Dashboard;
