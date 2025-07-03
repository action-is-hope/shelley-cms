import { Key, useEffect, useState } from "react";
import { useSlateStatic } from "slate-react";
import type { TableEditor } from "../../../plugins/withTables/withTables";
import { IconButton } from "@actionishope/shelley/Button";
import { MenuTrigger } from "@actionishope/shelley/Menu";
import { Menu } from "@actionishope/shelley/Menu";
import { Item } from "@actionishope/shelley/Item";
// import MoreHor from "../../../../icons/MoreHor";
import Insert from "../../../../icons/Insert";
import { st, classes } from "./slateTable.st.css";

export interface CellMenuType {
	type: "column" | "row";
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
	}, [type, editor]);

	let disabledKeys: string[] = [];
	if (editor.countRows() <= 1) disabledKeys = ["deleteRow"];
	if (editor.countColumns() <= 1) disabledKeys = ["deleteColumn"];

	return (
		<MenuTrigger
			portalSelector="#portal"
			// onOpenChange={(isOpen) => console.log("isOpen:", isOpen)}
			// Automatic if the menus selection type is multiple it will be false but you can override.
			// closeOnSelect={false}
			hideArrow
		>
			<IconButton
				// tone={10}
				isFab
				vol={1}
				aria-label={type === "row" ? "Row menu" : "Column menu"}
				icon={<Insert className={st(classes.cellMenuIcon, { type })} />}
			/>
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
