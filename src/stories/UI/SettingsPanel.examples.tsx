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
} from "@actionishope/shelley";
import { BasicHeader } from "./Header.examples";

// import { H2, H3, P, DialogTrigger, Dialog } from "@actionishope/shelley";

import { SettingsPanel } from "../../components/SettingsPanel/SettingsPanel";
import { classes } from "../../components/SettingsPanel/settingsPanel.st.css";
import {
  Settings,
  Languages,
  Tag,
  People,
  MenuOpen,
} from "../../components/icons";

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
  return (
    <>
      <BasicHeader />

      <SettingsPanel
        icon={<Settings />}
        title="Site"
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
        <form className={classes.form}>
          <TextField hasValue label="Site name" />
          <TextField hasValue label="Site owner name" />
          <TextField hasValue label="Slogan" />
          <TextField hasValue label="Email" />
          <TextField hasValue label="Legal information" />
          <TextField hasValue label="Google Tag Manager" />
          <CheckboxGroup description="This prevents the system from trying to flush the CDN cache on publish. This is needed if the site is not yet configured in the CDN.">
            <Switch>Bypass CDN invalidation</Switch>
          </CheckboxGroup>
        </form>
      </SettingsPanel>
    </>
  );
};
