import {
  Cell,
  Column,
  Row,
  TableView,
  TableBody,
  TableHeader,
  TextField,
  Switch,
  CheckboxGroup,
  Button,
  ProgressCircle,
} from "@actionishope/shelley";
import { BasicHeader } from "./Header.examples";
import { SettingsPanel } from "../../components/SettingsPanel/SettingsPanel";
import {
  st,
  classes,
} from "../../components/SettingsPanel/settingsPanel.st.css";
import {
  Settings,
  Languages,
  Tag,
  People,
  MenuOpen,
} from "../../components/icons";
import { useState } from "react";
import { Save } from "../../components/icons";

export const BasicExample = () => {
  return (
    <>
      <BasicHeader />

      <SettingsPanel
        icon={<MenuOpen />}
        title="Menus"
        nav={
          <>
            <a href="#">
              <Settings />
              <span>Site</span>
            </a>
            <a href="#">
              <People />
              <span>Users</span>
            </a>
            <a href="#" className={classes.active}>
              <MenuOpen />
              <span>Menus</span>
            </a>
            <a href="#">
              <Tag />
              <span>Taxonomies</span>
            </a>
            <a href="#">
              <Languages />
              <span>Langauges</span>
            </a>
          </>
        }
      >
        <TableView
          aria-label="Example table with static contents"
          selectionMode="multiple"
          vol={1}
          className={classes.innerScroll}
        >
          <TableHeader>
            <Column>Name</Column>
            <Column>Type</Column>
            <Column align="end">Date Modified</Column>
          </TableHeader>
          <TableBody>
            <Row>
              <Cell>Games</Cell>
              <Cell>File folder</Cell>
              <Cell>6/7/2020</Cell>
            </Row>
            <Row>
              <Cell>Program Files</Cell>
              <Cell>File folder</Cell>
              <Cell>4/7/2021</Cell>
            </Row>
            <Row>
              <Cell>bootmgr</Cell>
              <Cell>System file</Cell>
              <Cell>11/20/2010</Cell>
            </Row>
            <Row>
              <Cell>log.txt</Cell>
              <Cell>Text Document</Cell>
              <Cell>1/18/2016</Cell>
            </Row>
            <Row>
              <Cell>Games</Cell>
              <Cell>File folder</Cell>
              <Cell>6/7/2020</Cell>
            </Row>
            <Row>
              <Cell>Program Files</Cell>
              <Cell>File folder</Cell>
              <Cell>4/7/2021</Cell>
            </Row>
            <Row>
              <Cell>bootmgr</Cell>
              <Cell>System file</Cell>
              <Cell>11/20/2010</Cell>
            </Row>
            <Row>
              <Cell>log.txt</Cell>
              <Cell>Text Document</Cell>
              <Cell>1/18/2016</Cell>
            </Row>
            <Row>
              <Cell>Games</Cell>
              <Cell>File folder</Cell>
              <Cell>6/7/2020</Cell>
            </Row>
            <Row>
              <Cell>Program Files</Cell>
              <Cell>File folder</Cell>
              <Cell>4/7/2021</Cell>
            </Row>
            <Row>
              <Cell>bootmgr</Cell>
              <Cell>System file</Cell>
              <Cell>11/20/2010</Cell>
            </Row>
            <Row>
              <Cell>log.txt</Cell>
              <Cell>Text Document</Cell>
              <Cell>1/18/2016</Cell>
            </Row>
            <Row>
              <Cell>Games</Cell>
              <Cell>File folder</Cell>
              <Cell>6/7/2020</Cell>
            </Row>
            <Row>
              <Cell>Program Files</Cell>
              <Cell>File folder</Cell>
              <Cell>4/7/2021</Cell>
            </Row>
            <Row>
              <Cell>bootmgr</Cell>
              <Cell>System file</Cell>
              <Cell>11/20/2010</Cell>
            </Row>
            <Row>
              <Cell>log.txt</Cell>
              <Cell>Text Document</Cell>
              <Cell>1/18/2016</Cell>
            </Row>
            <Row>
              <Cell>Games</Cell>
              <Cell>File folder</Cell>
              <Cell>6/7/2020</Cell>
            </Row>
            <Row>
              <Cell>Program Files</Cell>
              <Cell>File folder</Cell>
              <Cell>4/7/2021</Cell>
            </Row>
            <Row>
              <Cell>bootmgr</Cell>
              <Cell>System file</Cell>
              <Cell>11/20/2010</Cell>
            </Row>
            <Row>
              <Cell>log.txt</Cell>
              <Cell>Text Document</Cell>
              <Cell>1/18/2016</Cell>
            </Row>
          </TableBody>
        </TableView>
      </SettingsPanel>
    </>
  );
};

export const FormExample = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  return (
    <>
      <BasicHeader />

      <SettingsPanel
        icon={<Settings />}
        title="Site"
        actionsArea={
          <span style={{ display: "flex", gap: "20px" }}>
            <CheckboxGroup>
              <Switch
                onChange={() => setIsEditing(!isEditing)}
                inputPosition="end"
                // defaultSelected={false}
                isSelected={isEditing}
              >
                Edit Site Settings
              </Switch>
            </CheckboxGroup>
            <Button
              variant="primary"
              name="Save changes"
              isDisabled={!isEditing}
              iconPos="start"
              icon={
                isSaving === true ? (
                  <ProgressCircle
                    isIndeterminate
                    size="small"
                    aria-label="Loading"
                    variant="overBackground"
                    data-id="siteInfo--loader"
                  />
                ) : (
                  <Save />
                )
              }
              onPress={() => setIsSaving(!isSaving)}
            >
              Save Changes
            </Button>
          </span>
        }
        nav={
          <>
            <a href="#" className={classes.active}>
              <Settings />
              <span>Site</span>
            </a>
            <a href="#">
              <People />
              <span>Users</span>
            </a>
            <a href="#">
              <MenuOpen />
              <span>Menus</span>
            </a>
            <a href="#">
              <Tag />
              <span>Taxonomies</span>
            </a>
            <a href="#">
              <Languages />
              <span>Langauges</span>
            </a>
          </>
        }
      >
        <form className={st(classes.innerScroll, classes.form)}>
          <TextField hasValue isDisabled={!isEditing} label="Site name" />
          <TextField hasValue isDisabled={!isEditing} label="Site owner name" />
          <TextField hasValue isDisabled={!isEditing} label="Slogan" />
          <TextField hasValue isDisabled={!isEditing} label="Email" />
          <TextField
            hasValue
            isDisabled={!isEditing}
            label="Legal information"
          />
          <TextField
            hasValue
            isDisabled={!isEditing}
            label="Google Tag Manager"
          />
          <CheckboxGroup
            isDisabled={!isEditing}
            description="This prevents the system from trying to flush the CDN cache on publish. This is needed if the site is not yet configured in the CDN."
          >
            <Switch isDisabled={!isEditing}>Bypass CDN invalidation</Switch>
          </CheckboxGroup>
        </form>
      </SettingsPanel>
    </>
  );
};
