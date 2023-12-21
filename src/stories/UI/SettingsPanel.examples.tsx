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
  ButtonGroup,
  Button,
  ProgressCircle,
  Select,
  Item,
} from "@actionishope/shelley";
import { BasicHeader } from "./Header.examples";
import { SettingsPanel } from "../../components/SettingsPanel/SettingsPanel";
import { ReorderItems } from "../../components/ReorderItems/ReorderItems";
import { ReorderMenuItem } from "../../components/ReorderMenuItem/ReorderMenuItem";

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
  Add,
  Preview,
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
          <TextField
            placeholder="Placeholder"
            hasValue
            isDisabled={!isEditing}
            label="Site name"
          />
          <TextField
            placeholder="Placeholder"
            hasValue
            isDisabled={!isEditing}
            label="Site owner name"
          />
          <TextField
            placeholder="Placeholder"
            hasValue
            isDisabled={!isEditing}
            label="Slogan"
          />
          <TextField
            placeholder="Placeholder"
            hasValue
            isDisabled={!isEditing}
            label="Email"
          />
          <TextField
            placeholder="Placeholder"
            hasValue
            isDisabled={!isEditing}
            label="Legal information"
          />
          <TextField
            defaultValue="Default Value"
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

export const MenuExample = () => {
  const pageOptions = [
    { id: "1", slug: "/page-1", title: "Title one", published: true },
    { id: "2", slug: "/page-2", title: "Title two", published: true },
    { id: "3", slug: "/page-3", title: "Title tree", published: true },
    { id: "4", slug: "/page-4", title: "Title four", published: true },
    { id: "5", slug: "/page-5", title: "Title five", published: true },
    { id: "6", slug: "/page-6", title: "Title six", published: true },
    { id: "7", slug: "/page-7", title: "Title seven", published: true },
    { id: "8", slug: "/page-8", title: "Title eight", published: true },
    { id: "9", slug: "/page-9", title: "Title nine", published: true },
  ];

  const nestedItems = [
    {
      id: "19",
      content: (
        <ReorderMenuItem
          type="EXTERNAL"
          itemLabelOnChange={(value) => console.log(value)}
        />
      ),
    },
    {
      id: "20",
      content: (
        <ReorderMenuItem
          type="PAGE"
          itemLabelOnChange={(value) => console.log(value)}
        />
      ),
    },
  ];

  const menuItemsData = [
    {
      id: "18",
      content: (
        <ReorderMenuItem
          type="PAGE"
          itemLabel="Item 18"
          itemLabelOnChange={(value) => console.log(value)}
          insertMenuOnAction={(action) => console.log(action)}
          domain="http://www.ac.com"
          pagesListProps={{
            items: pageOptions,
            onSelectionChange: (key) => console.log(key),
          }}
        >
          <ReorderItems
            items={nestedItems}
            onRemoveSelect={(index) => console.log("Index", index)}
            hasButtonAfter
            moveItem={({ fromIndex, toIndex, result }) => {
              console.log(result);
              const items = Array.from(menuItems);
              const [reorderedItem] = items.splice(fromIndex, 1);
              reorderedItem && items.splice(toIndex, 0, reorderedItem);
              updateMenuItems(items);
            }}
          />
        </ReorderMenuItem>
      ),
    },
    {
      id: "19",
      content: (
        <ReorderMenuItem
          type="EXTERNAL"
          itemLabel="Item 19"
          itemLabelOnChange={(value) => console.log(value)}
          insertMenuOnAction={(action) => console.log(action)}
        />
      ),
    },
    {
      id: "20",
      content: (
        <ReorderMenuItem
          type="PAGE"
          itemLabel="Item 20"
          itemLabelOnChange={(value) => console.log(value)}
          domain="https://www.ac.com"
          pagesListProps={{
            items: pageOptions,
            onSelectionChange: (key) => console.log(key),
          }}
          insertMenuOnAction={(action) => console.log(action)}
        />
      ),
    },
    {
      id: "21",
      content: (
        <ReorderMenuItem
          type="EXTERNAL"
          itemLabel="Item 21"
          itemLabelOnChange={(value) => console.log(value)}
          externalUrl="https://whatever.com/21"
          externalUrlOnChange={(value) => console.log(value)}
          insertMenuOnAction={(action) => console.log(action)}
        />
      ),
    },
    {
      id: "22",
      content: (
        <ReorderMenuItem
          type="EXTERNAL"
          itemLabel="Item 22"
          itemLabelOnChange={(value) => console.log(value)}
          externalUrl="https://whatever.com/22"
          externalUrlOnChange={(value) => console.log(value)}
          insertMenuOnAction={(action) => console.log(action)}
        />
      ),
    },
    {
      id: "23",
      content: (
        <ReorderMenuItem
          type="EXTERNAL"
          itemLabel="Item 23"
          itemLabelOnChange={(value) => console.log(value)}
          externalUrl="https://whatever.com/23"
          externalUrlOnChange={(value) => console.log(value)}
          insertMenuOnAction={(action) => console.log(action)}
        />
      ),
    },
  ];

  const [menuItems, updateMenuItems] = useState(menuItemsData);

  return (
    <>
      <BasicHeader />

      <SettingsPanel
        icon={<MenuOpen />}
        title="Menus"
        actionsArea={
          <div className={classes.menuSelect}>
            <Select
              label="Select Menu"
              labelPosition="side"
              onSelectionChange={(key) => console.log(key)}
              vol={1}
              portalSelector="#portal"
              selectedKey="main-nav"
            >
              <Item key="main-nav">Main Navigation</Item>
              <Item key="footer-nav">Footer Navigation</Item>
              <Item key="social-nav">Social Navigation</Item>
            </Select>
            <Button
              icon={<Preview alt="Preview Menu" />}
              variant="fab"
              vol={2}
              tone={10}
            />
          </div>
        }
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
        <div className={st(classes.menus, classes.innerScroll)}>
          {/* <ProgressCircle isIndeterminate size="large" /> */}
          {/* <H2 vol={3}>Main Navigation</H2> */}
          <ReorderItems
            className={classes.reorderMenuItems}
            items={menuItems}
            onRemoveSelect={(index) => console.log("Index", index)}
            hasButtonAfter
            moveItem={({ fromIndex, toIndex, result }) => {
              console.log(result);
              const items = Array.from(menuItems);
              const [reorderedItem] = items.splice(fromIndex, 1);
              reorderedItem && items.splice(toIndex, 0, reorderedItem);
              updateMenuItems(items);
            }}
          />
          <ButtonGroup className={classes.buttonGroup}>
            <Button icon={<Add />} variant="primary">
              Add Page to menu
            </Button>
            <span>or</span>
            <Button icon={<Add />} variant="secondary">
              Add URL to menu
            </Button>
          </ButtonGroup>

          <div className={classes.addMultiLanguage}>
            <CheckboxGroup>
              <Switch defaultSelected>
                Create or edit and existing multi-language menu
              </Switch>
            </CheckboxGroup>

            <Select
              label="Select Language"
              labelPosition="over"
              onSelectionChange={(key) => console.log(key)}
              vol={1}
              portalSelector="#portal"
              selectedKey="fr"
            >
              <Item key="fr">French</Item>
              <Item key="de">German</Item>
              <Item key="pl">Polish</Item>
            </Select>
          </div>

          <ReorderItems
            className={classes.reorderMenuItems}
            items={menuItems}
            onRemoveSelect={(index) => console.log("Index", index)}
            hasButtonAfter
            moveItem={({ fromIndex, toIndex, result }) => {
              console.log(result);
              const items = Array.from(menuItems);
              const [reorderedItem] = items.splice(fromIndex, 1);
              reorderedItem && items.splice(toIndex, 0, reorderedItem);
              updateMenuItems(items);
            }}
          />
          <ButtonGroup className={classes.buttonGroup}>
            <Button icon={<Add />} variant="primary">
              Add Page to menu
            </Button>
            <span>or</span>
            <Button icon={<Add />} variant="secondary">
              Add URL to menu
            </Button>
          </ButtonGroup>
        </div>
      </SettingsPanel>
    </>
  );
};
