import SlateArea from "../../components/SlateArea/SlateArea";
import { addMenusToTableValue } from "../../components/SlateArea/plugins/withTables/addMenusToTableValue";
import type { Table } from "../../components/SlateArea/plugins/withTables/tableTypes";
import { BoldFeature } from "../../components/SlateArea/features/BoldFeature/BoldFeature";
import { ItalicFeature } from "../../components/SlateArea/features/ItalicFeature/ItalicFeature";
import { LinkFeature } from "../../components/SlateArea/features/LinkFeature/LinkFeature";
import { ParagraphFeature } from "../../components/SlateArea/features/ParagraphFeature/ParagraphFeature";
import { TableFeature } from "../../components/SlateArea/features/TableFeature/TableFeature";
import { Button } from "@actionishope/shelley/Button";
import { Menu } from "@actionishope/shelley/Menu";
import { MenuTrigger } from "@actionishope/shelley/MenuTrigger";
import { Item } from "@actionishope/shelley/Item";
import { default as AddIcon } from "@actionishope/shelley/icons/Add";
import { default as AddImageIcon } from "@actionishope/shelley/icons/AddImage";
import { default as AddPDFIcon } from "@actionishope/shelley/icons/PictureAsPdf";
import { default as AddVideoIcon } from "@actionishope/shelley/icons/PermMedia";
import { default as AddSocialIcon } from "@actionishope/shelley/icons/Share";

import { classes as speedDial } from "../../styles/cms/speedDialMenu.st.css";
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

export const SlateAreaWithMenu = () => {
  return (
    <>
      <SlateArea
        onFocus={() => console.log("onFocus")}
        onChange={(value) => console.log("onChange", value)}
        name="body"
        defaultValue={`Default text value`}
      />
      <MenuTrigger
        portalSelector="#portal"
        onOpenChange={(isOpen) => console.log("isOpen:", isOpen)}
        // isOpen
        hideArrow
        placement="right"
        offset={20}
        popupClassName={speedDial.inlineMenuPopup}
      >
        <Button
          tone={false}
          variant="fab"
          vol={2}
          icon={<AddIcon alt="Add item" />}
          className={speedDial.inlineMenuButton}
        />
        <Menu
          selectionMode="none"
          onAction={(value) => console.log(value)}
          className={speedDial.inlineMenu}
        >
          <Item key="addImage">
            <AddImageIcon alt="Add image" />
          </Item>
          <Item key="addVideo">
            <AddVideoIcon alt="Add video" />
          </Item>
          <Item key="addDocument">
            <AddPDFIcon alt="Add Document" />
          </Item>
          <Item key="addSocial">
            <AddSocialIcon alt="Add Social" />
          </Item>
        </Menu>
      </MenuTrigger>
    </>
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
      onChange={(value) => console.log("onChange", value)}
      // tabIndex={-1}
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
