import React, { Key, forwardRef } from "react";
import type { ComponentBase } from "@actionishope/shelley/typings/shared-types";

import {
  TextField,
  TextInputProps,
  MenuTrigger,
  Button,
  Menu,
  ComboBox,
  ComboBoxProps,
  Item,
  Disclosure,
} from "@actionishope/shelley";

import { st, classes } from "./reorderMenuItem.st.css";
import { Add } from "../icons";

export interface ReorderMenuItemProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
    ComponentBase {
  type: "PAGE" | "EXTERNAL";
  insertMenuOnAction?: (key: Key) => void;
  itemLabel?: string;
  itemLabelOnChange: TextInputProps["onChange"];
  domain?: string;
  externalUrl?: string;
  externalUrlOnChange?: TextInputProps["onChange"];
  pagesListProps?: Partial<
    ComboBoxProps<{ id: string; title: string; slug: string }>
  >;
  isSubMenuExpanded?: boolean;
}

function ReorderMenuItem(
  props: ReorderMenuItemProps,
  ref?: React.Ref<HTMLDivElement>
) {
  const {
    className: classNameProp,
    children,
    type,
    pagesListProps,
    itemLabel,
    itemLabelOnChange,
    externalUrl,
    externalUrlOnChange,
    insertMenuOnAction,
    isSubMenuExpanded,
    domain,
    "data-id": dataId,
    ...rest
  } = props;

  return (
    <div className={st(classes.root, classNameProp)} {...rest} ref={ref}>
      <TextField
        className={classes.labelField}
        onChange={itemLabelOnChange}
        label={"Label"}
        labelPosition="over"
        hasValue
        defaultValue={itemLabel}
        placeholder="Menu item label"
        variant="outlined"
        vol={1}
      />
      {type === "PAGE" && pagesListProps && (
        <ComboBox
          label="Page"
          className={classes.destinationField}
          portalSelector="#portal"
          placeholder="Search pages..."
          hasValue
          {...pagesListProps}
        >
          {(item) => (
            <Item>
              {domain}
              {item.slug} - {item.title}
            </Item>
          )}
        </ComboBox>
      )}
      {type === "EXTERNAL" && (
        <TextField
          className={classes.destinationField}
          label={"URL"}
          labelPosition="over"
          hasValue
          placeholder="https://example.com/your-url"
          variant="outlined"
          defaultValue={externalUrl}
          onChange={externalUrlOnChange}
          vol={1}
        />
      )}

      {insertMenuOnAction && (
        <>
          <MenuTrigger portalSelector="#portal">
            <Button
              className={classes.insertMenu}
              vol={1}
              variant="fab"
              icon={<Add />}
            />
            <Menu onAction={insertMenuOnAction}>
              <Item key="add-page-below">Add page below</Item>
              <Item key="add-url-below">Add URL below</Item>
              <Item key="add-submenu-page-below">Add submenu page</Item>
              <Item key="add-submenu-url-below">Add submenu URL</Item>
            </Menu>
          </MenuTrigger>

          {children && (
            <div className={classes.children}>
              <Disclosure
                title="Submenu"
                triggerProps={{ iconPos: "start", vol: 2 }}
                className={classes.disclosure}
                isExpanded={isSubMenuExpanded}
              >
                <>{children}</>
              </Disclosure>
            </div>
          )}
        </>
      )}
    </div>
  );
}

/**
 * App ReorderMenuItem wrapper
 */
const _ReorderMenuItem = forwardRef(ReorderMenuItem);
export { _ReorderMenuItem as ReorderMenuItem };
