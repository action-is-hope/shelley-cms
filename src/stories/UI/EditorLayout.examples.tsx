import { H1, H2, P, Item, Tabs, Checkbox } from "@actionishope/shelley";
import { Preview } from "../../components/Preview/Preview";
import { PreviewMetaData } from "../../components/PreviewMetaData/PreviewMetaData";
import { PreviewChrome } from "../../components/PreviewChrome/PreviewChrome";
import { PreviewActions } from "../../components/PreviewActions/PreviewActions";
import usePreview from "../../components/Preview/usePreview";
import { PageActions } from "../../components/PageActions/PageActions";
import { ReorderItems } from "../../components/ReorderItems/ReorderItems";
import { EditorLayout } from "../../components/EditorLayout/EditorLayout";
import { ContentArea } from "../../components/ContentArea/ContentArea";
import { ToastProvider } from "@actionishope/shelley";

import { classes as editorLayout } from "../../components/EditorLayout/editorLayout.st.css";

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
import { MultipleCardsExample } from "./Card.examples";
import { ContentActions } from "../../components/ContentActions/ContentActions";
import { classes as contentActions } from "../../components/ContentActions/contentActions.st.css";
import { useState } from "react";

export const BasicExample = () => {
  const {
    previewMode,
    blockEditorProps,
    contentAreaProps,
    editorLayoutProps,
    previewProps,
    previewChromeProps,
    previewActionsProps,
  } = usePreview("laptop");

  // We need to set this dialog to open as part of BlockEditor->onMangeSelect
  const [contentActionDialogOpen, setContentActionDialogOpen] = useState(false);

  const contentBlocksData = [
    { id: "1", label: "Title", description: "Description/Identity text" },
    { id: "2", label: "Hero", description: "Description/Identity text" },
    { id: "3", label: "Body", description: "Description/Identity text" },
    { id: "4", label: "Body", description: "Description/Identity text" },
    { id: "5", label: "Body", description: "Description/Identity text" },
  ];
  const [blocks, updateBlocks] = useState(contentBlocksData);

  return (
    <ToastProvider>
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
          {/* Content Actions - provides the 'Add Block' Buttton */}
          <ContentActions
            shards={blockEditorProps.shards}
            // @todo: https://github.com/action-is-hope/shelley/issues/106
            isOpen={contentActionDialogOpen}
            onOpenChange={(isOpen) => setContentActionDialogOpen(isOpen)}
            data-id="contentActions"
          >
            <Tabs
              aria-label="History of Ancient Rome"
              className={contentActions.tabs}
              data-id="contentActions--tabs"
            >
              <Item key="FoR" title="Add Block">
                <Checkbox
                  className={contentActions.addMultipleCheckbox}
                  data-autofocus
                >
                  Add multiple blocks
                </Checkbox>
                <div className={contentActions.cardGrid}>
                  <MultipleCardsExample />
                </div>
              </Item>
              <Item key="MaR" title="Manage Blocks">
                <ReorderItems
                  id="test"
                  className={contentActions.reorderItems}
                  hightlightItemIndex={(i) => console.log(i)}
                  items={blocks}
                  onRemoveSelect={(index) => console.log("Index", index)}
                  moveItem={({ fromIndex, toIndex }) => {
                    const items = Array.from(blocks);
                    const [reorderedItem] = items.splice(fromIndex, 1);
                    reorderedItem && items.splice(toIndex, 0, reorderedItem);
                    updateBlocks(items);
                  }}
                />
              </Item>
            </Tabs>
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
    </ToastProvider>
  );
};
