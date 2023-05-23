import {
  H1,
  H2,
  P,
  Item,
  Button,
  ButtonGroup,
  DialogTrigger,
  Dialog,
  Checkbox,
} from "@actionishope/shelley";
import { Preview } from "../../components/Preview/Preview";
import { PreviewMetaData } from "../../components/PreviewMetaData/PreviewMetaData";
import { PreviewChrome } from "../../components/PreviewChrome/PreviewChrome";
import { PreviewActions } from "../../components/PreviewActions/PreviewActions";
import usePreview from "../../components/Preview/usePreview";
import { PageActions } from "../../components/PageActions/PageActions";
import { EditorLayout } from "../../components/EditorLayout/EditorLayout";
import { ContentArea } from "../../components/ContentArea/ContentArea";

import { classes as editorLayout } from "../../components/EditorLayout/editorLayout.st.css";
import { classes as dialog } from "@actionishope/shelley/components/Dialog/dialog.st.css";
import { classes as finder } from "../../components/Finder/finder.st.css";
import {
  st,
  classes as previewChrome,
} from "../../components/PreviewChrome/previewChrome.st.css";
import {
  // BlockEditorExampleWithReorder,
  BasicBlockEditor,
} from "./BlockEditor.examples";
import { MetaDataEditorWithChildrenExample } from "./MetaDataEditor.examples";
import { BasicHeader } from "./Header.examples";
import { BasicExample as CardsExample } from "./Card.examples";
import { ContentActions } from "../../components/ContentActions/ContentActions";

export const BasicExample = () => {
  const {
    previewMode,
    blockEditorProps,
    contentAreaProps,
    editorLayoutProps,
    previewProps,
    previewChromeProps,
    previewActionsProps,
  } = usePreview();

  return (
    <>
      <BasicHeader />

      <EditorLayout {...editorLayoutProps}>
        <ContentArea className={editorLayout.contentArea} {...contentAreaProps}>
          {/* MetaDataEditor */}
          <MetaDataEditorWithChildrenExample />
          {/* BlockEditors */}
          <BasicBlockEditor {...blockEditorProps} />
          <BasicBlockEditor {...blockEditorProps} />
          <BasicBlockEditor {...blockEditorProps} />
          <BasicBlockEditor {...blockEditorProps} />
          <BasicBlockEditor {...blockEditorProps} />
          {/* <BlockEd itorExampleWithReorder {...blockEditorProps} /> */}
          <ContentActions>
            <DialogTrigger
              portalSelector="#portal"
              // isOpen
              modalClassName={finder.halfScreenModal}
              focusOnProps={{
                ...blockEditorProps,
              }}
            >
              <Button vol={4} variant="secondary" tone={1}>
                Add Content Block
              </Button>
              {(close) => (
                <Dialog>
                  <H2 vol={1} uppercase className={dialog.title} data-title>
                    Add Blocks | Manage Blocks
                  </H2>
                  <hr className={dialog.divider} />
                  <div className={dialog.content}>
                    <Checkbox>Add multiple blocks</Checkbox>
                    <CardsExample />
                  </div>
                  <ButtonGroup className={dialog.buttonGroup}>
                    <Button variant="secondary" onPress={close}>
                      Close
                    </Button>
                  </ButtonGroup>
                </Dialog>
              )}
            </DialogTrigger>
          </ContentActions>
        </ContentArea>
        <Preview className={editorLayout.preview} {...previewProps}>
          {previewMode === "web" && (
            <PreviewMetaData
              title="Shelley Puma UI"
              description="A joyfully easy to use CMS UI built upon a little known library called Shelley."
              image="https://ik.imagekit.io/tcvka0ufln/pontoon_v3jIy64zcnwwx.jpeg?tr=w-1200,h-630,fo-auto"
              slug="shelley.earth"
              domain="shelley.earth"
              fullScreenMode
            />
          )}
          {previewMode !== "web" && (
            <PreviewChrome {...previewChromeProps}>
              {/* Children... */}
              <div className={st(previewChrome.iframe)}>
                {/* Mimic the preview styles. If the preview is not white, set height too 100% and round corners for mobile preview. */}
                <div style={{ background: "white", color: "#333" }}>
                  <H1 vol={6}>Block1</H1>
                  <P>Block2</P>
                  <P>Block3</P>
                  <H2 vol={6}>Block1</H2>
                  <P>Block3</P>
                  <P>Block3</P>
                </div>
              </div>
            </PreviewChrome>
          )}
        </Preview>

        <PreviewActions
          className={editorLayout.previewActions}
          {...previewActionsProps}
        />

        <PageActions
          className={editorLayout.pageActions}
          lastSaved="5 mins ago"
          position={{ portalSelector: "#portal" }}
          onAction={(actionKey) => {
            console.log(actionKey);
          }}
          status={"published"}
        >
          <Item key="archive">Archive</Item>
          <Item key="unpublish">Unpublish</Item>
        </PageActions>
      </EditorLayout>
    </>
  );
};
