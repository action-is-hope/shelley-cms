import { TextField, Select, Item } from "@actionishope/shelley";
import { BlockEditor } from "../../components/BlockEditor/BlockEditor";
import SlateArea from "../../components/SlateArea/SlateArea";
import { Chip } from "../../components/Chip/Chip";
import { st, classes as chip } from "../../components/Chip/chip.st.css";

export const BasicChipSet = () => {
  return (
    <div className={chip.container}>
      <Chip onRemove={() => console.log("removed")}>Something chipper</Chip>
      <Chip onRemove={() => console.log("removed")}>
        Something else chipper
      </Chip>
    </div>
  );
};

export const ChipsSetAdornment = () => {
  return (
    <TextField
      placeholder="Chip example"
      label="Text Chip"
      vol={1}
      startAdornment={
        <div className={chip.container}>
          <Chip title="part-one" noWrap>
            part-one
          </Chip>
          <Chip title="part-two" noWrap>
            part-two
          </Chip>
        </div>
      }
    />
  );
};

export const ChipsSetAdornmentCollapsed = () => {
  return (
    <TextField
      placeholder="Chip example"
      label="Text Chip"
      vol={1}
      startAdornment={
        <div className={st(chip.container, { isCollapsed: true })}>
          <Chip noWrap>part-one</Chip>
          <Chip noWrap>part-two</Chip>
        </div>
      }
    />
  );
};

export const ChipsSetBlockEditor = () => {
  return (
    <BlockEditor label={"Block name"}>
      <form>
        <SlateArea vol={6} defaultValue={`Title`} name="title" />
        <Select
          label="Choose tags"
          portalSelector="#portal"
          onSelectionChange={(key) => console.log(key)}
        >
          <Item key="t1">Tag</Item>
          <Item key="t2">Tag</Item>
          <Item key="t2">Tag</Item>
        </Select>
        <BasicChipSet />
        <ChipsSetAdornment />
      </form>
    </BlockEditor>
  );
};
