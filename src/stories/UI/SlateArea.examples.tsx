import SlateArea from "../../components/SlateArea/SlateArea";

export const BasicSlateArea = () => {
  return (
    <SlateArea
      onFocus={() => console.log("onFocus")}
      onChange={(value) => console.log("onChange", value)}
      name="body"
      defaultValue={`Hi`}
    />
  );
};
