import SlateArea from "../../components/SlateArea/SlateArea";
import { addMenusToTableValue } from "../../components/SlateArea/plugins/withTables/addMenusToTableValue";
import type { Table } from "../../components/SlateArea/plugins/withTables/tableTypes";
import { BoldFeature } from "../../components/SlateArea/features/BoldFeature/BoldFeature";
import { ItalicFeature } from "../../components/SlateArea/features/ItalicFeature/ItalicFeature";
import { LinkFeature } from "../../components/SlateArea/features/LinkFeature/LinkFeature";
import { ParagraphFeature } from "../../components/SlateArea/features/ParagraphFeature/ParagraphFeature";
import { TableFeature } from "../../components/SlateArea/features/TableFeature/TableFeature";

export const BasicSlateArea = () => {
  return (
    <SlateArea
      onFocus={() => console.log("onFocus")}
      onChange={(value) => console.log("onChange", value)}
      name="body"
      defaultValue={`Default text value`}
    />
  );
};

export const SlateAreaVolume = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "10px" }}>
      <SlateArea
        onFocus={() => console.log("onFocus")}
        onChange={(value) => console.log("onChange", value)}
        name="vol1"
        vol={1}
        defaultValue={`Volume One`}
      />
      <SlateArea
        onFocus={() => console.log("onFocus")}
        onChange={(value) => console.log("onChange", value)}
        name="vol2"
        vol={2}
        defaultValue={`Volume Two`}
      />
      <SlateArea
        onFocus={() => console.log("onFocus")}
        onChange={(value) => console.log("onChange", value)}
        name="vol3"
        vol={3}
        defaultValue={`Volume Three`}
      />
      <SlateArea
        onFocus={() => console.log("onFocus")}
        onChange={(value) => console.log("onChange", value)}
        name="vol4"
        vol={4}
        defaultValue={`Volume Four`}
      />
      <SlateArea
        onFocus={() => console.log("onFocus")}
        onChange={(value) => console.log("onChange", value)}
        name="vol5"
        vol={5}
        defaultValue={`Volume Five`}
      />
      <SlateArea
        onFocus={() => console.log("onFocus")}
        onChange={(value) => console.log("onChange", value)}
        name="vol6"
        vol={6}
        defaultValue={`Volume Six`}
      />
    </div>
  );
};

export const SlateAreaTable = () => {
  const defaultValue = {
    __typename: "RichTextField",
    html: "<table><thead><tr><th></th><th></th><th></th><th></th></tr></thead><tbody><tr><td><p></p></td><td><p></p></td><td><p></p></td><td><p></p></td></tr><tr><td><p></p></td><td><p></p></td><td><p></p></td><td><p></p></td></tr></tbody></table>",
    json: '[{"children":[{"children":[{"children":[{"children":[{"text":""}],"type":"table-header-cell"},{"children":[{"text":""}],"type":"table-header-cell"},{"children":[{"text":""}],"type":"table-header-cell"},{"children":[{"text":""}],"type":"table-header-cell"}],"type":"table-row"}],"type":"table-head"},{"children":[{"children":[{"children":[{"children":[{"text":""}],"type":"paragraph"}],"type":"table-cell"},{"children":[{"children":[{"text":""}],"type":"paragraph"}],"type":"table-cell"},{"children":[{"children":[{"text":""}],"type":"paragraph"}],"type":"table-cell"},{"children":[{"children":[{"text":""}],"type":"paragraph"}],"type":"table-cell"}],"type":"table-row"},{"children":[{"children":[{"children":[{"text":""}],"type":"paragraph"}],"type":"table-cell"},{"children":[{"children":[{"text":""}],"type":"paragraph"}],"type":"table-cell"},{"children":[{"children":[{"text":""}],"type":"paragraph"}],"type":"table-cell"},{"children":[{"children":[{"text":""}],"type":"paragraph"}],"type":"table-cell"}],"type":"table-row"}],"type":"table-body"}],"type":"table"}]',
  };
  const defaultValueWithMenus = {
    json: JSON.stringify(
      addMenusToTableValue(JSON.parse(defaultValue.json) as Table[])
    ),
  };

  return (
    <SlateArea
      name="table"
      defaultValue={defaultValueWithMenus}
      featureSet={[
        ParagraphFeature,
        BoldFeature,
        ItalicFeature,
        LinkFeature,
        TableFeature,
      ]}
    />
  );
};
