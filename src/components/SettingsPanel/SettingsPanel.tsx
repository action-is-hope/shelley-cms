import type { ReactNode } from "react";
import React, { forwardRef } from "react";
import { Text } from "@actionishope/shelley/Text";
import { SubHeader } from "../SubHeader/SubHeader";
import { SettingsSuggestions } from "../../components/icons";
import { st, classes } from "./settingsPanel.st.css";
interface SettingsPanelProps {
	children?: ReactNode;
	nav?: ReactNode;
	title?: ReactNode;
	actionsArea?: ReactNode;
	icon?: ReactNode;
}
function SettingsPanel(
	props: SettingsPanelProps,
	ref?: React.Ref<HTMLDivElement>,
) {
	const { children, title, actionsArea, nav, icon } = props;

	return (
		<div className={st(classes.root)} ref={ref}>
			<Text elementType="nav" vol={1} className={classes.nav}>
				{nav}
			</Text>
			<SubHeader
				title={
					<>
						{icon ?? <SettingsSuggestions />}
						<Text
							elementType="span"
							uppercase
							vol={false}
							className={classes.settingsString}
						>
							Settings
						</Text>{" "}
						<Text elementType="span">{title}</Text>
					</>
				}
				className={classes.subHeader}
			>
				{actionsArea}
			</SubHeader>
			<div className={classes.main}>{children}</div>
		</div>
	);
}

/**
 * SettingsPanel defines the main grid and layout for a settings panel.
 */
const _SettingsPanel = forwardRef(SettingsPanel);
export { _SettingsPanel as SettingsPanel };
