import { useRef, type ReactNode } from "react";
import { Button } from "@actionishope/shelley/Button";
import { st, classes } from "./mediaField.st.css";
import { Edit, Media, Trash } from "../icons";
import { P, Text } from "@actionishope/shelley/Text";
import type { Volume } from "@actionishope/shelley";

export interface MediaFieldProps {
	addText?: string;
	editText?: string;
	removeText?: string;
	labelText?: string;
	onFocus?: () => void;
	onAdd?: () => void;
	onRemove?: () => void;
	onEdit?: () => void;
	className?: string;
	mediaPreview?: ReactNode;
	type?: "image" | "video" | "icon" | "document";
	children?: ReactNode | ((hasPreview: boolean) => void);
	vol?: Volume;
	selectedMediaHelp?: ReactNode;
}

const MediaField = ({
	addText = "Add media",
	editText = "Edit media",
	removeText = "Remove media",
	labelText,
	className,
	type,
	onAdd,
	onFocus,
	onRemove,
	onEdit,
	mediaPreview,
	children,
	vol = 3,
	selectedMediaHelp,
}: MediaFieldProps) => {
	const navRef = useRef<HTMLDivElement>(null);

	const handleClick = () => {
		// Focus the nav element to reveal the controls
		navRef.current && navRef.current.focus();
		onFocus && onFocus();
	};

	return (
		<div
			className={st(
				classes.root,
				{
					type,
					hasPreview: Boolean(mediaPreview),
					hasChildren: Boolean(selectedMediaHelp) || Boolean(children),
					vol: vol !== false ? vol : undefined,
				},
				className,
			)}
		>
			{labelText && <label className={classes.label}>{labelText}</label>}
			<div className={classes.grid}>
				{!mediaPreview ? (
					<>
						<Button
							data-id="SelectImage"
							icon={<Media alt={addText} />}
							variant="fab"
							onPress={onAdd}
							vol={vol}
							className={classes.trigger}
						/>
						{!mediaPreview && children && (
							<Text vol={1} elementType="span" className={classes.orText}>
								or
							</Text>
						)}
					</>
				) : (
					<>
						<div className={classes.media}>{mediaPreview}</div>
						<nav
							tabIndex={0}
							ref={navRef}
							className={classes.editControls}
							onClick={handleClick}
						>
							<Button
								variant="fab"
								className={classes.editButton}
								onPress={onRemove}
								vol={vol === 3 ? 2 : 1}
								icon={<Trash alt={removeText} />}
							/>
							<Button
								variant="fab"
								className={classes.editButton}
								onPress={onEdit}
								vol={vol === 3 ? 2 : 1}
								icon={<Edit alt={editText} />}
							/>
						</nav>
					</>
				)}
				{mediaPreview && selectedMediaHelp && (
					<P className={classes.helpText} vol={2}>
						{selectedMediaHelp}
					</P>
				)}
				{typeof children === "function"
					? children(Boolean(mediaPreview))
					: children}
			</div>
		</div>
	);
};

export { MediaField };
