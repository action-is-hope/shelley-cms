import { TextField, Select, Item } from "@actionishope/shelley";
import { MetaDataEditor } from "../../components/MetaDataEditor/MetaDataEditor";

import { classes } from "../../components/MetaDataEditor/metaDataEditor.st.css";
import { useState, SetStateAction } from "react";

export const MetaDataEditorExample = () => {
  const [langauge, setLanguage] = useState("en");

  return (
    <MetaDataEditor
      data-id="TEST-123"
      // Provide URL Picker
      urlPicker={
        <TextField
          className={classes.urlField}
          labelPosition="hidden"
          vol={1}
          variant="quiet"
          label={"URL"}
          placeholder={"URL"}
        />
      }
      // Provide Media Uploader
      mediaUploader={
        <img
          src="https://ucarecdn.com/68d4e740-b645-4273-bf86-5752a208a6ce/-/crop/3863x2172/0,396/-/preview/-/format/auto/"
          alt=""
        />
      }
      // Title field props
      titleProps={{
        label: "Meta title",
        onChange: () => console.log("hi"),
      }}
      // Description field props
      descriptionProps={{
        defaultValue:
          "This is a lovely long description that even covers two lines but to be honest I'm not sure that I can even make it that far; fear not that was enough waffle.",
        onChange: (value) => console.log(value),
      }}
      // Langauge selector props
      languageSelectorProps={{
        selectedKey: langauge,
        onSelectionChange: (key) => {
          // If key is equal to 'create' don't set the langauge.
          key !== "create" && setLanguage(key as SetStateAction<string>);
          // Create new langauge and when done set it as selected...
          key === "create" && console.log("Create tranlation");
        },
        options: [
          { key: "en", name: "EN" },
          { key: "pt", name: "PT" },
          { key: "fr", name: "FR" },
          { key: "create", name: "Create translated page" },
        ],
      }}
    >
      {/* Provide additional inputs as children */}
    </MetaDataEditor>
  );
};

export const MetaDataEditorWithChildrenExample = () => {
  const [langauge, setLanguage] = useState("en");

  return (
    <MetaDataEditor
      data-id="TEST-123"
      // Provide URL ComboBox component
      urlPicker={
        <TextField
          className={classes.urlField}
          labelPosition="hidden"
          vol={1}
          variant="quiet"
          label={"URL"}
          placeholder={"URL"}
        />
      }
      // Provide Media component
      mediaUploader={
        <img
          src="https://ucarecdn.com/68d4e740-b645-4273-bf86-5752a208a6ce/-/crop/3863x2172/0,396/-/preview/-/format/auto/"
          alt=""
        />
      }
      // Title field props
      titleProps={{
        label: "Meta title",
        onChange: () => console.log("hi"),
      }}
      // Description field props
      descriptionProps={{
        defaultValue:
          "This is a lovely long description that even covers two lines but to be honest I'm not sure that I can even make it that far; fear not that was enough waffle.",
        onChange: (value) => console.log(value),
        isDisabled: true,
      }}
      // Langauge selector props
      languageSelectorProps={{
        selectedKey: langauge,
        onSelectionChange: (key) => {
          // If key is equal to 'create' don't set the langauge.
          key !== "create" && setLanguage(key as SetStateAction<string>);
          // Create new langauge and when done set it as selected...
          key === "create" && console.log("Create tranlation");
        },
        options: [
          { key: "en", name: "EN" },
          { key: "pt", name: "PT" },
          { key: "fr", name: "FR" },
          { key: "create", name: "Create translated page" },
        ],
      }}
    >
      {(isOpen) => (
        <>
          {/* Additional inputs as children */}
          <TextField
            labelPosition="side"
            isDisabled={!isOpen}
            variant="quiet"
            label={"Tagging"}
            description="Select some tags to associate with this content."
            placeholder={"Tagging"}
          />
          <Select
            label="Structured data"
            vol={1}
            isDisabled={!isOpen}
            labelPosition="side"
            onSelectionChange={(key) => console.log(key)}
            variant="outlined"
            portalSelector={"#metaPortal"}
          >
            <Item key="rarely">Rarely</Item>
            <Item key="sometimes">Sometimes</Item>
            <Item key="always">Always</Item>
          </Select>
        </>
      )}
    </MetaDataEditor>
  );
};
