import SlateArea from "../../components/SlateArea/SlateArea";
import { defaultFeatureSet } from "../../components/SlateArea/featureSets";

export const BasicSlateArea = () => {
  const mediaFunctionalityProps = {
    featureSet: [...defaultFeatureSet],
    // InlineMenu,
    // inlineMenuProps: { triggerWidget }
  };
  return (
    <SlateArea
      // {...{ onChange, onFocus, ...mediaFunctionalityProps }}
      onFocus={() => console.log("onFocus")}
      onChange={(value) => console.log("onChange", value)}
      {...mediaFunctionalityProps}
      name="body"
      // mode="FreeBlock"
      defaultValue={`Hi`}
    />
  );
};
