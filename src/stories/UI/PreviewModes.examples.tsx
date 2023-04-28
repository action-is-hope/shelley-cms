import { P } from "@actionishope/shelley";
import { useState } from "react";
import { PreviewModes } from "../../components/PreviewModes/PreviewModes";

export const BasicExample = () => {
  const [mode, setMode] = useState("web");

  return (
    <>
      <PreviewModes
        className={"custom-class"}
        defaultValue={"web"}
        onChange={(key) => {
          console.log(key);
          setMode(key);
        }}
        // ref={previewModesRef}
      />
      <P vol={1}>Mode is set to "{mode}"</P>
    </>
  );
};
