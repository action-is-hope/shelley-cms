import { P } from "@actionishope/shelley";
import { useState } from "react";
import {
  PreviewModes,
  PreviewModeType,
} from "../../components/PreviewModes/PreviewModes";

export const BasicExample = () => {
  const [mode, setMode] = useState<PreviewModeType>("web");

  return (
    <>
      <PreviewModes
        className={"custom-class"}
        data-id="previewModes"
        value={mode}
        onChange={(key) => {
          console.log(key);
          setMode(key);
        }}
      />
      <P vol={1}>Mode is set to "{mode}"</P>
    </>
  );
};
