import React, { useState, ReactElement, forwardRef } from "react";
import {
  Button,
  ButtonGroup,
  H2,
  Menu,
  MenuTrigger,
  Modal,
  Item,
  Dialog,
  ComponentBase,
} from "@actionishope/shelley";

import { classes as dialog } from "@actionishope/shelley/Dialog/dialog.st.css";
import { st, classes } from "./blockEditor.st.css";
import MoreHor from "../icons/MoreHor";
import Badge from "../Badge/Badge";

export type DialogClose = (close: () => void) => ReactElement;

//TEMP
export type onManageSelect = (visibility: boolean, activeTab: number) => void;

// export type message = {
//   id: string | number;
//   content: string;
//   settings?: boolean;
//   type: "warning" | "error" | "info";
//   "data-id"?: string;
// };

export interface BlockEditorProps
  extends Omit<React.HTMLAttributes<HTMLBaseElement>, "onFocus">,
    ComponentBase {
  /** Provide function to invoke content manager. */
  onManageSelect?: onManageSelect;
  /** Disable the clickaway listener. */
  disableClickAwayListener?: boolean;
  /** Callback fired on removing the block. */
  onRemoveSelect?: (index?: number) => void;
  /** Focus function to fire in order to focus the preview instance.  */
  onFocus?: (index?: number) => void;
  /** Callback fired when settings overlay is closed. */
  onSettingsClose?: () => void;
  /** The settings UI to render in the Modal. */
  settingsRender?: DialogClose | ReactElement;
  /** Warning message alerting users to issues */
  warningMessage?: string;
  /** Set the number to show in the menu button badge. Combine with a warningMessage */
  errorCount?: number;
  /** Array of refs to remain accessible when the settings modal is open. */
  shards?: Array<React.RefObject<any> | HTMLElement>;
  /** A label, typically the block name. */
  label?: string;
}

type overlayStatus = boolean;

export interface BlockEditorState {
  isOverlayOpen: overlayStatus;
}

function BlockEditor(props: BlockEditorProps, ref?: React.Ref<HTMLDivElement>) {
  const {
    className: classNameProp,
    children,
    onRemoveSelect,
    settingsRender,
    onFocus,
    onSettingsClose,
    label,
    onManageSelect,
    disableClickAwayListener,
    warningMessage,
    errorCount = 0,
    shards = [],
    "data-id": dataId,
    ...rest
  } = props;

  const strings = {
    settingsTitle: "Block settings",
    manageItems: "Manage items",
    manageTitle: "Manage blocks",
    removeTitle: "Delete block",
  };

  const [isOverlayOpen, setOverlayOpen] = useState<overlayStatus>(false);

  const provideMenu = settingsRender || onManageSelect || onRemoveSelect;

  const invokeSettings = (onFocus: BlockEditorProps["onFocus"]) => {
    // emit onFocus to scroll the preview area into view.
    onFocus && onFocus();
    setOverlayOpen(true);
  };

  const invokeContentManager = (
    onManageSelect: onManageSelect,
    onFocus: BlockEditorProps["onFocus"]
  ) => {
    onFocus && onFocus();
    onManageSelect(true, 1);
  };

  const closeOverlay = () => {
    setOverlayOpen(false);
  };

  const disabledKeys = [];
  !onManageSelect && disabledKeys.push("manage");
  !settingsRender && disabledKeys.push("settings");
  !onRemoveSelect && disabledKeys.push("remove");

  return (
    <section
      className={st(classes.root, classNameProp)}
      data-id={dataId}
      ref={ref}
      {...rest}
    >
      <nav className={classes.options}>
        {provideMenu && (
          <MenuTrigger portalSelector="#portal" crossOffset={-50}>
            <Button
              className={classes.menuTrigger}
              variant="fab"
              tone={10}
              aria-label="Block menu"
              vol={1}
              data-id={dataId ? `${dataId}--menuTrigger` : undefined}
              icon={
                <Badge badgeContent={errorCount}>
                  <MoreHor />
                </Badge>
              }
              // icon={<MoreHor />}
            />
            <Menu
              className={classes.menu}
              disabledKeys={disabledKeys}
              data-id={dataId ? `${dataId}--menu` : undefined}
              onAction={(actionKey) => {
                switch (actionKey) {
                  case "manage":
                    onManageSelect &&
                      invokeContentManager(onManageSelect, onFocus);
                    break;
                  case "settings":
                    invokeSettings(onFocus);
                    break;
                  case "remove":
                    onRemoveSelect && onRemoveSelect();
                    break;
                }
              }}
            >
              {/* Check support for text non-select items for message */}
              <Item key="manage">{strings.manageTitle}</Item>
              <Item key="settings">{strings.settingsTitle}</Item>
              <Item key="remove">{strings.removeTitle}</Item>
            </Menu>
          </MenuTrigger>
        )}
      </nav>

      <Modal
        data-id={dataId ? `${dataId}--modal` : undefined}
        isOpen={isOverlayOpen !== false}
        onDismiss={() => !disableClickAwayListener && closeOverlay()}
        className={classes.modal}
        portalSelector={false}
        variant={false}
        focusOnProps={{ shards: shards, returnFocus: true }}
        transitionProps={{
          // Add style hook for other sections of app UI when modal is up.
          onEntering: () => document.body.classList.add("blockEditorModalOn"),
          onExiting: () => document.body.classList.remove("blockEditorModalOn"),
        }}
      >
        {settingsRender && (
          <Dialog
            className={classes.dialog}
            data-id={dataId ? `${dataId}--settings` : undefined}
          >
            <H2 className={dialog.title} vol={4} data-title>
              {label} settings
            </H2>
            <hr className={dialog.divider} />
            <div className={dialog.content}>
              {typeof settingsRender === "function"
                ? settingsRender(() => closeOverlay())
                : settingsRender}
            </div>
            <ButtonGroup className={dialog.buttonGroup}>
              <Button
                variant="secondary"
                onPress={() => {
                  onSettingsClose && onSettingsClose();
                  return closeOverlay();
                }}
              >
                Cancel
              </Button>
            </ButtonGroup>
          </Dialog>
        )}
      </Modal>

      {/* Main content */}
      <div
        className={classes.mainContent}
        data-id={dataId ? `${dataId}--content` : undefined}
      >
        {label && (
          <H2 className={classes.label}>
            {label}
            {warningMessage && (
              <span className={classes.warningMessage}>
                &nbsp;- {warningMessage}
              </span>
            )}
          </H2>
        )}
        {children}
      </div>
    </section>
  );
}

/**
 * BlockEditor holds the input fields and the settings for the content blocks.
 */
const _BlockEditor = forwardRef(BlockEditor);
export { _BlockEditor as BlockEditor };
