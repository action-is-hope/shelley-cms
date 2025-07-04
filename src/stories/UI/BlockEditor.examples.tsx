import {
	P,
	TextField,
	Button,
	IconButton,
	ButtonGroup,
	CheckboxGroup,
	ProgressCircle,
	Select,
	Checkbox,
	Item,
	Switch,
} from "@actionishope/shelley";
import {
	BlockEditor,
	BlockEditorProps,
} from "../../components/BlockEditor/BlockEditor";
import { FocusOn } from "react-focus-on";
import { ContentArea } from "../../components/ContentArea/ContentArea";
import { st, classes as field } from "../../styles/cms/field.st.css";
import { MediaField } from "../../components/MediaField/MediaField";
import { ReorderFieldGroupsExample } from "./ReorderItems.examples";
import SlateArea from "../../components/SlateArea/SlateArea";
import { Link, Trash } from "../../components/icons";
import { classes as mediaField } from "../../components/MediaField/mediaField.st.css";

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
	return (
		<BlockEditor
			data-id="TEST123"
			label={"Block name"}
			// errorCount={2}
			// onManageSelect={() => console.log("onManageSelect")}
			// onRemoveSelect={() => console.log("onRemoveSelect")}
			// onSettingsClose={() => console.log("onSettingsClose")}
			// disableClickAwayListener
			settingsRender={() => (
				<form>
					<CheckboxGroup description="There must always be a title for accessibility but you can choose to visually hide it.">
						<Switch>Title visible</Switch>
					</CheckboxGroup>

					<TextField
						label="Media URL"
						placeholder="media url: https://vimeo.com/728522953/a4971ecdb3"
						variant="outlined"
						vol={1}
					/>

					<Select
						label="Choose frequency"
						vol={2}
						portalSelector="#settingsPortal"
						onSelectionChange={(key) => console.log(key)}
					>
						<Item key="rarely">Rarely</Item>
						<Item key="sometimes">Sometimes</Item>
						<Item key="always">Always</Item>
					</Select>

					<CheckboxGroup>
						<Checkbox defaultSelected>Subscribe (uncontrolled)</Checkbox>
					</CheckboxGroup>
					<CheckboxGroup label="Advanced settings">
						<Switch>Switch label</Switch>
						<Switch>Switch label</Switch>
						<Switch>Switch label</Switch>
					</CheckboxGroup>
					<P vol={1}>Description text</P>
				</form>
			)}
			{...args}
		>
			{/* @todo: provide a form comp defining alignment. */}
			<form action="">
				<MediaField
					type="image"
					onAdd={() => console.log("Add Media")}
					onEdit={() => console.log("Edit Media")}
					onRemove={() => console.log("Remove media")}
				>
					<TextField
						// label="Media URL"
						label={<Link alt="Media URL" />}
						labelPosition="top"
						placeholder="media url: https://vimeo.com/728522953/a4971ecdb3"
						variant="quiet"
						vol={1}
						className={st(mediaField.childrenArea, field.url)}
					/>
				</MediaField>

				<MediaField
					type="image"
					onAdd={() => console.log("Add Media")}
					onEdit={() => console.log("Edit Media")}
					onRemove={() => console.log("Remove media")}
					vol={3}
					mediaPreview={
						<img
							src="https://ucarecdn.com/68d4e740-b645-4273-bf86-5752a208a6ce/-/crop/3863x2172/0,396/-/preview/-/format/auto/"
							alt=""
						/>
					}
				>
					{(hasPreview) => {
						return (
							<>
								{!hasPreview && (
									<TextField
										label={<Link alt="Media URL" />}
										labelPosition="top"
										placeholder="media url: https://vimeo.com/728522953/a4971ecdb3"
										variant="quiet"
										vol={1}
										className={st(mediaField.childrenArea, field.url)}
									/>
								)}
							</>
						);
					}}
				</MediaField>

				<MediaField
					type="image"
					onAdd={() => console.log("Add Media")}
					onEdit={() => console.log("Edit Media")}
					onRemove={() => console.log("Remove media")}
				/>
				<SlateArea vol={6} defaultValue={`Title`} name="title" />
				<SlateArea vol={3} defaultValue={`Description`} name="description" />
				<Select
					label="Choose frequency"
					vol={2}
					portalSelector="#portal"
					onSelectionChange={(key) => console.log(key)}
				>
					<Item key="rarely">Rarely</Item>
					<Item key="sometimes">Sometimes</Item>
					<Item key="always">Always</Item>
				</Select>

				<div className={field.ctaContainer}>
					<FocusOn enabled={false}>
						<div>
							<div className={field.ctaFieldRemove}>
								<TextField
									label="CTA"
									labelPosition="hidden"
									placeholder="CTA Text"
									variant="outlined"
									vol={1}
									className={field.ctaButton}
								/>
								<IconButton
									isFab
									tone="contrast"
									variant="quiet"
									vol={1}
									icon={<Trash alt="Remove CTA" />}
								/>
							</div>
							<TextField
								label={<Link />}
								labelPosition="top"
								placeholder="CTA URL"
								variant="quiet"
								vol={1}
								value="http://google.com"
								className={field.url}
							/>
						</div>
						<ButtonGroup>
							<Button vol={1} variant="primary">
								Save CTA
							</Button>
							<Button vol={1} variant="secondary">
								Cancel
							</Button>
						</ButtonGroup>
					</FocusOn>
				</div>
				<P vol={2}>Description text</P>
			</form>
			<ReorderFieldGroupsExample />
			<Button>Add Item</Button>
		</BlockEditor>
	);
};

export const BlockEditorExampleWithReorder = (
	args: Partial<BlockEditorProps>,
) => {
	return (
		<ContentArea focusOnProps={{ enabled: false }}>
			{contentBlocksData.map((item) => (
				<BlockEditor
					data-id="TEST1234"
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
					<Button variant="secondary">Add Item</Button>
				</BlockEditor>
			))}
		</ContentArea>
	);
};

export const BlockEditorLoading = (args: Partial<BlockEditorProps>) => {
	return (
		<BlockEditor data-id="TEST12345" label={"Block name"} {...args}>
			<ProgressCircle isIndeterminate />
		</BlockEditor>
	);
};
