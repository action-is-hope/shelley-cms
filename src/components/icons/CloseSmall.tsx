import { Icon, IconProps } from "@actionishope/shelley/Icon";

const CloseSmall = ({ className, alt }: IconProps) => {
  return (
    <Icon alt={alt} viewBox="0 0 16 16" className={className}>
      <path d="M12.96 4.46l-1.42-1.42-3.54 3.55-3.54-3.55-1.42 1.42 3.55 3.54-3.55 3.54 1.42 1.42 3.54-3.55 3.54 3.55 1.42-1.42-3.55-3.54 3.55-3.54z"></path>
    </Icon>
  );
};

export default CloseSmall;
