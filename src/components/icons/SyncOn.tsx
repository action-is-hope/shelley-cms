import type React from "react";
import type { Ref } from "react";
import { Icon, IconProps } from "@actionishope/shelley/Icon";

const SyncOn: React.VFC<IconProps> = (props) => {
  const { ref, ...rest } = props;
  return (
    <Icon {...rest} viewBox="0 0 24 24" ref={ref as Ref<SVGSVGElement>}>
      <path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3 5 6.99h3V14h2V6.99h3L9 3z"></path>
    </Icon>
  );
};
export default SyncOn;
