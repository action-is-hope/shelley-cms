import React, { useRef, useState } from "react";
// import classnames from "classnames";

// import Dialog from "../Dialog/Dialog";
import {
  Button,
  ButtonGroup,
  H2,
  Menu,
  MenuTrigger,
  Modal,
  Item,
  Dialog,
} from "@actionishope/shelley";

import { classes as dialog } from "@actionishope/shelley/components/Dialog/dialog.st.css";

import { st, classes } from "./blockEditor.st.css";
import MoreHor from "../icons/MoreHor";
// import Badge from "../Badge/Badge";

// TEMP
export type SetContentManager = (
  visibility: boolean,
  activeTab: number
) => void;

export type message = {
  id: string | number;
  content: string;
  settings?: boolean;
  type: "warning" | "error" | "info";
  "data-id"?: string;
};

export interface BlockEditorProps
  extends Omit<React.HTMLAttributes<HTMLBaseElement>, "onFocus"> {
  /** Set data-id for use by end to end tests / analytics. */
  "data-id"?: string;
  /** Provide function to invoke content manager. */
  setContentManager?: SetContentManager;
  /** Disable the clickaway listener. */
  disableClickAwayListener?: boolean;
  /** Callback fired on removing the block. */
  removeItem?: (index?: number) => void;
  /** Focus function to fire in order to focus the preview instance.  */
  onFocus?: (index?: number) => void;
  /** Callback fired when settings overlay is closed. */
  onSettingsClose?: () => void;
  /** The settings UI to render, overlay status available as arg. */
  settingsRender?: (state: BlockEditorState) => void;
  /** Error/Hint messages... TBC Define this */
  messages?: message[];

  shards?: Array<React.RefObject<any> | HTMLElement>;
  label?: string;
}

type overlayStatus = boolean;

export interface BlockEditorState {
  overlayOpen: overlayStatus;
}

const BlockEditor = ({
  className: classNameProp,
  children,
  removeItem,
  settingsRender,
  onFocus,
  onSettingsClose,
  label,
  messages = [],
  setContentManager,
  disableClickAwayListener,
  shards = [],
  "data-id": dataId,
  ...rest
}: BlockEditorProps) => {
  const strings = {
    settingsTitle: "Block settings",
    manageItems: "Manage items",
    manageTitle: "Manage blocks",
    removeTitle: "Delete block",
  };

  const [overlayOpen, setOverlayOpen] = useState<overlayStatus>(false);

  const provideMenu = settingsRender || setContentManager || removeItem;

  const invokeSettings = (onFocus: BlockEditorProps["onFocus"]) => {
    // emit onFocus to scroll the preview area into view.
    onFocus && onFocus();
    setOverlayOpen(true);
  };

  const invokeContentManager = (
    setContentManager: SetContentManager,
    onFocus: BlockEditorProps["onFocus"]
  ) => {
    onFocus && onFocus();
    setContentManager(true, 1);
  };

  const closeOverlay = () => {
    setOverlayOpen(false);
  };

  // const mainMessages: message[] = messages.filter(item => !item.settings);
  const settingsMessages: message[] = messages.filter((item) => item.settings);

  console.log(settingsMessages);

  const disabledKeys = [];
  !setContentManager && disabledKeys.push("manage");
  !settingsRender && disabledKeys.push("settings");
  !removeItem && disabledKeys.push("remove");

  return (
    <section
      className={st(classes.root, classNameProp)}
      data-id={dataId}
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
              // icon={
              //   <Badge badgeContent={messages?.length}>
              //     <MoreHor />
              //   </Badge>
              // }
              icon={<MoreHor />}
            />
            <Menu
              className={classes.menu}
              disabledKeys={disabledKeys}
              data-id={dataId ? `${dataId}--menu` : undefined}
              onAction={(actionKey) => {
                switch (actionKey) {
                  case "manage":
                    setContentManager &&
                      invokeContentManager(setContentManager, onFocus);
                    break;
                  case "settings":
                    invokeSettings(onFocus);
                    break;
                  case "remove":
                    removeItem && removeItem();
                    break;
                }
              }}
            >
              <Item key="manage">{strings.manageTitle}</Item>
              <Item key="settings">{strings.settingsTitle}</Item>
              <Item key="remove">{strings.removeTitle}</Item>
            </Menu>
          </MenuTrigger>
        )}
      </nav>

      <Modal
        data-id={dataId ? `${dataId}--modal` : undefined}
        isOpen={overlayOpen !== false}
        onDismiss={() => !disableClickAwayListener && closeOverlay()}
        className={classes.modal}
        portalSelector={false}
        variant={false}
        focusOnProps={{ shards: shards, returnFocus: true }}
        // disableBackgroundClick
        // disableEscapeKey
        // disableFocusLock
        data-testid="modal-window"
        transitionProps={{
          timeout: 190,
          onEntering: () => document.body.classList.add("on"),
          onExiting: () => document.body.classList.remove("on"),
        }}
      >
        {settingsRender && (
          // className={classes.dialogContentWithActions}
          // aria-hidden={!overlayOpen}
          // data-id={dataId ? `${dataId}--settings` : undefined}
          <Dialog data-id={dataId ? `${dataId}--settings` : undefined}>
            <H2 className={dialog.title} vol={4} data-title>
              {label} settings
            </H2>
            <hr className={dialog.divider} />
            <div className={dialog.content}>
              {settingsRender({
                // Provide overlay state to render.
                overlayOpen,
              })}
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
        {label && <H2 className={classes.label}>{label}</H2>}
        {children}
      </div>
    </section>
  );
};

export default BlockEditor;
