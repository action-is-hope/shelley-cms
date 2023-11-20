import { H2, P } from "@actionishope/shelley";
import { Preview } from "../../components/Preview/Preview";
import { PreviewMetaData } from "../../components/PreviewMetaData/PreviewMetaData";
import { PreviewChrome } from "../../components/PreviewChrome/PreviewChrome";
import { PreviewActions } from "../../components/PreviewActions/PreviewActions";
import usePreview from "../../components/Preview/usePreview";

import {
  st,
  classes as previewChrome,
} from "../../components/PreviewChrome/previewChrome.st.css";
import { classes } from "./previewExample.st.css";

export const BasicExample = () => {
  const {
    previewMode,
    // To spread to the other editor UI.
    // blockEditorProps,
    // contentProps,
    // editorLayoutProps,
    previewProps,
    previewChromeProps,
    previewActionsProps,
  } = usePreview("laptop");

  return (
    <div className={classes.previewExample}>
      <Preview
        // className={editorLayout.preview}
        {...previewProps}
      >
        {previewMode === "web" && (
          <PreviewMetaData
            data-id="previewMetaData"
            title="Shelley Puma UI"
            description="A joyfully easy to use CMS UI built upon a little known library called Shelley."
            image="https://ik.imagekit.io/tcvka0ufln/pontoon_v3jIy64zcnwwx.jpeg?tr=w-1200,h-630,fo-auto"
            slug="shelley.earth"
            domain="shelley.earth"
            fullScreenMode
          />
        )}
        {previewMode !== "web" && (
          <PreviewChrome {...previewChromeProps} data-id="previewChrome">
            {/* Children... */}
            <div className={st(previewChrome.iframe)}>
              {/* Mimic the preview styles. If the preview is not white, set height too 100% and round corners for mobile preview. */}
              <div style={{ background: "white", color: "#333" }}>
                <H2 vol={6}>Block1</H2>
                <P>Block2</P>
                <P>Block3</P>
                <P>Block3</P>
                <P>Block3</P>
                <H2 vol={6}>Block1</H2>
                <P>Block3</P>
                <P>Block3</P>
                <P>Block3</P>
                <H2 vol={6}>Block1</H2>
                <P>Block3</P>
                <P>Block3</P>
                <P>Block3</P>
              </div>
            </div>
          </PreviewChrome>
        )}
      </Preview>

      <PreviewActions
        data-id="previewActions"
        // className={editorLayout.previewActions}
        {...previewActionsProps}
      />
    </div>
  );
};
