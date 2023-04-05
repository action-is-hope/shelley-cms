import {
  TextField,
  InputTextProps,
  MenuTrigger,
  Menu,
  Button,
  Item,
} from "@actionishope/shelley";
import ReorderItems from "../../components/ReorderItems/ReorderItems";
import { useState } from "react";

export const ReorderBlocksExample = () => {
  const contentBlocksData = [
    { id: "1", label: "Title", description: "Description/Identity text" },
    { id: "2", label: "Hero", description: "Description/Identity text" },
    { id: "3", label: "Body", description: "Description/Identity text" },
    { id: "4", label: "Body", description: "Description/Identity text" },
    { id: "5", label: "Body", description: "Description/Identity text" },
  ];
  const [blocks, updateBlocks] = useState(contentBlocksData);
  return (
    <ReorderItems
      // This seems odd, I'm not sure how it is suppose to work.
      // hightlightItemIndex={(i) => {
      //   console.log(i);
      //   return i ? i : 1;
      // }}
      // From existing: entryBlockIndex
      // (i?: number) =>
      //       i
      //         ? setContentManagerState({
      //             ...contentManagerState,
      //             contentManagerEntryBlockIndex: i
      //           })
      //         : contentManagerState.contentManagerEntryBlockIndex
      //     }
      title={"Reorder Content Blocks"}
      items={blocks}
      removeItem={(index) => console.log("Index", index)}
      moveItem={({ fromIndex, toIndex }) => {
        const items = Array.from(blocks);
        const [reorderedItem] = items.splice(fromIndex, 1);
        reorderedItem && items.splice(toIndex, 0, reorderedItem);
        updateBlocks(items);
      }}
    />
  );
};

export const ReorderFieldGroupsExample = () => {
  const ItemForm = (props: Partial<InputTextProps>) => (
    <form style={{ display: "grid", gap: "16px" }}>
      <TextField
        {...props}
        label="Test"
        labelPosition="hidden"
        placeholder="Title"
        variant="quiet"
        vol={3}
      />
      <TextField
        label="Description"
        labelPosition="hidden"
        placeholder="Description"
        variant="quiet"
        vol={1}
      />
    </form>
  );

  const blockItemData = [
    {
      id: "18",
      content: (
        <ItemForm
          defaultValue="Five"
          onChange={(value: string) => console.log(value)}
        />
      ),
    },
    {
      id: "19",
      content: (
        <ItemForm
          defaultValue="Six"
          onChange={(value: string) => console.log(value)}
        />
      ),
    },
    {
      id: "20",
      content: (
        <ItemForm
          defaultValue="Seven"
          onChange={(value: string) => console.log(value)}
        />
      ),
    },
  ];

  const [blockItems, updateBlockItems] = useState(blockItemData);

  return (
    <ReorderItems
      items={blockItems}
      removeItem={(index) => console.log("Index", index)}
      moveItem={({ fromIndex, toIndex, result }) => {
        console.log(result);
        const items = Array.from(blockItems);
        const [reorderedItem] = items.splice(fromIndex, 1);
        reorderedItem && items.splice(toIndex, 0, reorderedItem);
        updateBlockItems(items);
      }}
    />
  );
};

export const TestMenu = () => (
  <MenuTrigger portalSelector="#portal" crossOffset={-50}>
    <Button>Menu</Button>
    <Menu onAction={(info) => alert(info)}>
      <Item key="publish">Publish</Item>
      <Item key="archive">Archive</Item>
      <Item key="delete">Delete</Item>
    </Menu>
  </MenuTrigger>
  // <MenuTrigger portalSelector="#portal" crossOffset={-50}>
  //   <Button
  //     className={classes.menuTrigger}
  //     variant="fab"
  //     tone={10}
  //     aria-label="Block menu"
  //     vol={1}
  //     data-id={dataId ? `${dataId}--menuTrigger` : undefined}
  //     // icon={
  //     //   <Badge badgeContent={messages?.length}>
  //     //     <MoreHor />
  //     //   </Badge>
  //     // }
  //     icon={<MoreHor />}
  //   />
  //   <Menu
  //     className={classes.menu}
  //     disabledKeys={disabledKeys}
  //     data-id={dataId ? `${dataId}--menu` : undefined}
  //     onAction={(actionKey) => {
  //       switch (actionKey) {
  //         case "manage":
  //           setContentManager &&
  //             invokeContentManager(setContentManager, onFocus);
  //           break;
  //         case "settings":
  //           invokeSettings(onFocus);
  //           break;
  //         case "remove":
  //           removeItem && removeItem();
  //           break;
  //       }
  //     }}
  //   >
  //     <Item key="manage">{strings.manageTitle}</Item>
  //     <Item key="settings">{strings.settingsTitle}</Item>
  //     <Item key="remove">{strings.removeTitle}</Item>
  //   </Menu>
  // </MenuTrigger>
);
