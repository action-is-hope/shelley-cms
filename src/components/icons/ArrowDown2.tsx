import { Icon, IconProps } from "@actionishope/shelley/Icon";

const ArrowDown2 = ({ className, alt }: IconProps) => {
  return (
    <Icon alt={alt} className={className}>
      <path d="M3 2v2l5 5 5-5v-2l-5 5z"></path>
      <path d="M3 7v2l5 5 5-5v-2l-5 5z"></path>
    </Icon>
  );
};

export default ArrowDown2;
