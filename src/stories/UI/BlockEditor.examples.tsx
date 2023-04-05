import { P, TextField } from "@actionishope/shelley";
import BlockEditor, {
  BlockEditorProps,
} from "../../components/BlockEditor/BlockEditor";
import ContentArea from "../../components/ContentArea/ContentArea";

// import ReorderItems from "../../components/ReorderItems/ReorderItems";
import { ReorderFieldGroupsExample } from "./ReorderItems.examples";

const contentBlocksData = [
  { id: "1", label: "Title", description: "Description/Identity text" },
  { id: "2", label: "Hero", description: "Description/Identity text" },
  { id: "3", label: "Body", description: "Description/Identity text" },
  {
    id: "4",
    label: "Content listing",
    description: "Description/Identity text",
  },
  { id: "5", label: "Body", description: "Description/Identity text" },
  { id: "6", label: "Body", description: "Description/Identity text" },
  {
    id: "7",
    label: "Body",
    description: "Description/Identity text",
    content: <P>JSX</P>,
  },
];

export const BlockEditorExample = (args: Partial<BlockEditorProps>) => {
  return (
    <ContentArea focusOnProps={{ enabled: false }}>
      {contentBlocksData.map((item) => (
        <BlockEditor
          data-id="TEST123"
          label={item.label}
          settingsRender={() => (
            <P>Select taxonomies to display in this listing.</P>
          )}
          {...args}
        >
          <form action="">
            <TextField
              variant="quiet"
              placeholder={item.label}
              label={item.label}
              labelPosition="hidden"
              vol={6}
            />
            <TextField
              variant="quiet"
              placeholder={item.description}
              label={item.description}
              labelPosition="hidden"
              vol={2}
            />
          </form>
          <ReorderFieldGroupsExample />
        </BlockEditor>
      ))}
    </ContentArea>
  );
};
