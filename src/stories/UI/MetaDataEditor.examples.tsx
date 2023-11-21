import { TextField, Select, Item } from "@actionishope/shelley";
import { MetaDataEditor } from "../../components/MetaDataEditor/MetaDataEditor";
import { classes } from "../../components/MetaDataEditor/metaDataEditor.st.css";
import { useState, SetStateAction } from "react";
import { MediaField } from "../../components/MediaField/MediaField";
import { Button, ButtonGroup, useToast } from "@actionishope/shelley";

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
        <MediaField
          type="image"
          onAdd={() => console.log("Add Media")}
          onEdit={() => console.log("Edit Media")}
          onRemove={() => console.log("Remove media")}
          vol={2}
          mediaPreview={
            <img
              src="https://ucarecdn.com/68d4e740-b645-4273-bf86-5752a208a6ce/-/crop/3863x2172/0,396/-/preview/-/format/auto/"
              alt=""
            />
          }
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

  const [disableClickAway, setDisableClickAway] = useState(false);

  const toastQueue = useToast();

  return (
    <MetaDataEditor
      data-id="TEST-123"
      disableClickAway={disableClickAway}
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
            portalSelector="#portal"
            /* Example that disables the clickaway listener. */
            onOpenChange={setDisableClickAway}
          >
            <Item key="rarely">Rarely</Item>
            <Item key="sometimes">Sometimes</Item>
            <Item key="always">Always</Item>
          </Select>

          <ButtonGroup variant="secondary" style={{ position: "absolute" }}>
            <Button
              onPress={() =>
                toastQueue.add(
                  { title: "Bread can be toasted (P0)" },
                  { priority: 0 }
                )
              }
            >
              Neutral (P0)
            </Button>
            <Button
              onPress={() =>
                toastQueue.add({ title: "Toasting... (P1)" }, { priority: 1 })
              }
            >
              Info (P1)
            </Button>
            <Button
              onPress={() =>
                toastQueue.add({ title: "Toast is done (P2)" }, { priority: 2 })
              }
            >
              Success (P2)
            </Button>
            <Button
              onPress={() =>
                toastQueue.add(
                  { title: "Toast is burning (P3)" },
                  { priority: 3 }
                )
              }
            >
              Warning (P3)
            </Button>
            <Button
              onPress={() =>
                toastQueue.add(
                  { title: "Toast is on fire (P4)" },
                  { priority: 4 }
                )
              }
            >
              Error (P4)
            </Button>
          </ButtonGroup>
        </>
      )}
    </MetaDataEditor>
  );
};
