import type React from "react";
import type { Ref } from "react";
import { Icon, IconProps } from "@actionishope/shelley";

const Calendar: React.VFC<IconProps> = (props) => {
  const { ref, ...rest } = props;
  return (
    <Icon {...rest} viewBox="0 0 24 24" ref={ref as Ref<SVGSVGElement>}>
      <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"></path>
      <path fill="none" d="M0 0h24v24H0z"></path>
    </Icon>
  );
};

export default Calendar;
