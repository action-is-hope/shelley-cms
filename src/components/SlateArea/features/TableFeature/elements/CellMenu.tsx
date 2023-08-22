import { Key, useEffect, useState } from "react";
import { useSlateStatic } from "slate-react";
import type { TableEditor } from "../../../plugins/withTables/withTables";
import { Button } from "@actionishope/shelley/Button";
import { MenuTrigger } from "@actionishope/shelley/MenuTrigger";
import { Menu } from "@actionishope/shelley/Menu";
import { Item } from "@actionishope/shelley/Item";
import { Icon } from "@actionishope/shelley/Icon";

export interface CellMenuType {
  type: string;
}

type CellMenuElementProps = CellMenuType;

const CellMenu = ({ type }: CellMenuElementProps) => {
  const editor = useSlateStatic() as TableEditor;

  const onAction = (key: Key) => {
    switch (key) {
      case "insertRowAbove":
        editor.insertRowAbove();
        break;
      case "insertRowBelow":
        editor.insertRowBelow();
        break;
      case "deleteRow":
        editor.deleteRow();
        break;
      case "insertColumnRight":
        editor.insertColumnRight();
        break;
      case "insertColumnLeft":
        editor.insertColumnLeft();
        break;
      case "deleteColumn":
        editor.deleteColumn();
        break;
      default:
        console.warn("invalid action key");
    }
  };

  const [options, setOptions] = useState<{ id: string; name: string }[]>([]);
  const [disabledKeys, setDisabledKeys] = useState<string[]>([]);

  useEffect(() => {
    type === "row" &&
      setOptions([
        { id: "insertRowAbove", name: "Insert Row Above" },
        { id: "insertRowBelow", name: "Insert Row Below" },
        { id: "deleteRow", name: "Delete Row" },
      ]);
    type === "column" &&
      setOptions([
        { id: "insertColumnRight", name: "Insert Column Right" },
        { id: "insertColumnLeft", name: "Insert Column Left" },
        { id: "deleteColumn", name: "Delete Column" },
      ]);

    editor.countRows() <= 1 && setDisabledKeys(["deleteRow"]);
    editor.countColumns() <= 1 && setDisabledKeys(["deleteColumn"]);
  }, [type, editor]);

  return (
    <MenuTrigger
      portalSelector="#portal"
      onOpenChange={(isOpen) => console.log("isOpen:", isOpen)}
      // Automatic if the menus selection type is multiple it will be false but you can override.
      // closeOnSelect={false}
      hideArrow
    >
      <Button tone={10} variant="fab" vol={1}>
        <Icon alt="Block settings">
          <g id="ellipsis-dots-h">
            <path d="M4 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path>
            <path d="M10 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path>
            <path d="M16 8c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"></path>
          </g>
        </Icon>
      </Button>
      <Menu
        items={options}
        disabledKeys={disabledKeys}
        onAction={(key) => onAction(key)}
      >
        {(item) => <Item>{item.name}</Item>}
      </Menu>
    </MenuTrigger>
  );
};

export default CellMenu;
