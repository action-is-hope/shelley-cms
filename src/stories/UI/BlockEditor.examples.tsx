import { P, TextField, Button } from "@actionishope/shelley";
import {
  BlockEditor,
  BlockEditorProps,
} from "../../components/BlockEditor/BlockEditor";
import { ContentArea } from "../../components/ContentArea/ContentArea";

// import ReorderItems from "../../components/ReorderItems/ReorderItems";
import { ReorderFieldGroupsExample } from "./ReorderItems.examples";
import SlateArea from "../../components/SlateArea/SlateArea";
import { defaultFeatureSet } from "../../components/SlateArea/featureSets";
import { addMenusToTableValue } from "../../components/SlateArea/plugins/withTables/addMenusToTableValue";
import { removeMenusFromTableValue } from "../../components/SlateArea/plugins/withTables/removeMenusFromTableValue";
import type { Table } from "../../components/SlateArea/plugins/withTables/tableTypes";
import type { SlateAreaEvent } from "../../components/SlateArea/slateAreaTypes";
import { BoldFeature } from "../../components/SlateArea/features/BoldFeature/BoldFeature";
import { ItalicFeature } from "../../components/SlateArea/features/ItalicFeature/ItalicFeature";
import { LinkFeature } from "../../components/SlateArea/features/LinkFeature/LinkFeature";
import { ParagraphFeature } from "../../components/SlateArea/features/ParagraphFeature/ParagraphFeature";
import { TableFeature } from "../../components/SlateArea/features/TableFeature/TableFeature";

const contentBlocksData = [
  {
    id: "1",
    label: "Title",
    description: "Description",
    includeReorderExample: false,
  },
  {
    id: "2",
    label: "Hero",
    description: "Description",
    includeReorderExample: false,
  },
  {
    id: "3",
    label: "Highlights",
    description: "Description",
    includeReorderExample: true,
  },
  {
    id: "4",
    label: "Content listing",
    description: "Description",
    includeReorderExample: true,
  },
];

export const BasicBlockEditor = (args: Partial<BlockEditorProps>) => {
  const mediaFunctionalityProps = {
    featureSet: [...defaultFeatureSet],
    // InlineMenu,
    // inlineMenuProps: { triggerWidget }
  };

  const defaultValue = {
    __typename: "RichTextField",
    html: "<table><thead><tr><th></th><th></th><th></th></tr></thead><tbody><tr><td><p></p></td><td><p></p></td><td><p></p></td></tr><tr><td><p></p></td><td><p></p></td><td><p></p></td></tr></tbody></table>",
    json: '[{"children":[{"children":[{"children":[{"children":[{"text":""}],"type":"table-header-cell"},{"children":[{"text":""}],"type":"table-header-cell"},{"children":[{"text":""}],"type":"table-header-cell"}],"type":"table-row"}],"type":"table-head"},{"children":[{"children":[{"children":[{"children":[{"text":""}],"type":"paragraph"}],"type":"table-cell"},{"children":[{"children":[{"text":""}],"type":"paragraph"}],"type":"table-cell"},{"children":[{"children":[{"text":""}],"type":"paragraph"}],"type":"table-cell"}],"type":"table-row"},{"children":[{"children":[{"children":[{"text":""}],"type":"paragraph"}],"type":"table-cell"},{"children":[{"children":[{"text":""}],"type":"paragraph"}],"type":"table-cell"},{"children":[{"children":[{"text":""}],"type":"paragraph"}],"type":"table-cell"}],"type":"table-row"}],"type":"table-body"}],"type":"table"}]',
  };

  const defaultValue2 = {
    __typename: "RichTextField",
    html: "<table><thead><tr><th></th><th></th><th></th><th></th></tr></thead><tbody><tr><td><p></p></td><td><p></p></td><td><p></p></td><td><p></p></td></tr><tr><td><p></p></td><td><p></p></td><td><p></p></td><td><p></p></td></tr></tbody></table>",
    json: '[{"children":[{"children":[{"children":[{"children":[{"text":""}],"type":"table-header-cell"},{"children":[{"text":""}],"type":"table-header-cell"},{"children":[{"text":""}],"type":"table-header-cell"},{"children":[{"text":""}],"type":"table-header-cell"}],"type":"table-row"}],"type":"table-head"},{"children":[{"children":[{"children":[{"children":[{"text":""}],"type":"paragraph"}],"type":"table-cell"},{"children":[{"children":[{"text":""}],"type":"paragraph"}],"type":"table-cell"},{"children":[{"children":[{"text":""}],"type":"paragraph"}],"type":"table-cell"},{"children":[{"children":[{"text":""}],"type":"paragraph"}],"type":"table-cell"}],"type":"table-row"},{"children":[{"children":[{"children":[{"text":""}],"type":"paragraph"}],"type":"table-cell"},{"children":[{"children":[{"text":""}],"type":"paragraph"}],"type":"table-cell"},{"children":[{"children":[{"text":""}],"type":"paragraph"}],"type":"table-cell"},{"children":[{"children":[{"text":""}],"type":"paragraph"}],"type":"table-cell"}],"type":"table-row"}],"type":"table-body"}],"type":"table"}]',
  };
  const defaultValueWithMenus = {
    json: JSON.stringify(
      addMenusToTableValue(JSON.parse(defaultValue2.json) as Table[])
    ),
  };
  // const onChangeWithRemoveMenus = (event: SlateAreaEvent) =>
  //   onChange({
  //     ...event,
  //     target: {
  //       ...event.target,
  //       value: {
  //         ...event.target.value,
  //         json: JSON.stringify(
  //           removeMenusFromTableValue(
  //             JSON.parse(event.target.value.json as string) as Table[]
  //           )
  //         ),
  //       },
  //     },
  //   });

  return (
    <BlockEditor
      data-id="TEST123"
      label={"Block name"}
      // errorCount={2}
      // onManageSelect={() => console.log("onManageSelect")}
      // onRemoveSelect={() => console.log("onRemoveSelect")}
      // onSettingsClose={() => console.log("onSettingsClose")}
      // disableClickAwayListener
      settingsRender={(close) => (
        <div>
          <P>Setting form etc.</P>
          <Button onPress={() => close()}>Close</Button>
        </div>
      )}
      {...args}
    >
      {/* @todo: provide a form comp defining alignment. */}
      <form action="">
        {/* <SlateArea
          // {...{ onChange, onFocus, ...mediaFunctionalityProps }}
          onChange={(value) => console.log(value)}
          {...mediaFunctionalityProps}
          name="body"
          // mode="FreeBlock"
          defaultValue={`Hi`}
        /> */}

        {/* <SlateArea
          // {...rest}
          // onChange={onChangeWithRemoveMenus}
          // onFocus={onFocus}
          name="table"
          mode="FreeBlock"
          defaultValue={defaultValueWithMenus}
          featureSet={[
            ParagraphFeature,
            BoldFeature,
            ItalicFeature,
            LinkFeature,
            TableFeature,
          ]}
        /> */}

        <TextField
          type="textarea"
          rows={1}
          variant="quiet"
          placeholder={"Title"}
          label={"Title"}
          labelPosition="hidden"
          vol={6}
        />
        <TextField
          type="textarea"
          rows={1}
          variant="quiet"
          placeholder={"Description"}
          label={"Description"}
          labelPosition="hidden"
          vol={2}
        />
      </form>
    </BlockEditor>
  );
};

export const BlockEditorExampleWithReorder = (
  args: Partial<BlockEditorProps>
) => {
  return (
    <ContentArea focusOnProps={{ enabled: false }}>
      {contentBlocksData.map((item) => (
        <BlockEditor
          data-id="TEST123"
          label={item.label}
          // errorCount={2}
          // onManageSelect={() => console.log("onManageSelect")}
          // onRemoveSelect={() => console.log("onRemoveSelect")}
          // onSettingsClose={() => console.log("onSettingsClose")}
          // disableClickAwayListener
          settingsRender={<P>Select taxonomies to display in this listing.</P>}
          {...args}
        >
          {/* @todo: provide a form comp defining alignment. */}
          <form action="">
            <TextField
              type="textarea"
              rows={1}
              variant="quiet"
              placeholder={item.label}
              label={item.label}
              labelPosition="hidden"
              vol={6}
            />
            <TextField
              type="textarea"
              rows={1}
              variant="quiet"
              placeholder={item.description}
              label={item.description}
              labelPosition="hidden"
              vol={2}
            />
          </form>
          {item.includeReorderExample && <ReorderFieldGroupsExample />}
        </BlockEditor>
      ))}
    </ContentArea>
  );
};
