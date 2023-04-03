import React, { useState } from "react";
// import classnames from "classnames";

// import Dialog from "../Dialog/Dialog";
import {
  Button,
  H2,
  Menu,
  MenuTrigger,
  Modal,
  Item,
} from "@actionishope/shelley";

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
};

export interface BlockEditorProps
  extends Omit<React.HTMLAttributes<HTMLBaseElement>, "onFocus"> {
  /** Set data-testid for use by end to end tests. */
  "data-testid": string;
  /** Provide function to invoke content manager. */
  setContentManager?: SetContentManager;
  /** Disable the clickaway listener. */
  disableClickAwayListener?: boolean;
  /** Callback fired on removing the block. */
  removeBlock?: (index?: number) => void;
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
  removeBlock,
  settingsRender,
  onFocus,
  onSettingsClose,
  label,
  messages = [],
  setContentManager,
  disableClickAwayListener,
  shards = [],
  ...rest
}: BlockEditorProps) => {
  const strings = {
    settingsTitle: "Block settings",
    manageItems: "Manage items",
    manageTitle: "Manage blocks",
    removeTitle: "Delete block",
  };

  const [overlayOpen, setOverlayOpen] = useState<overlayStatus>(false);

  const provideMenu = settingsRender || setContentManager || removeBlock;

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
  console.log(classes);
  let disabledKeys = [];
  !setContentManager && disabledKeys.push("manage");
  !settingsRender && disabledKeys.push("settings");
  !removeBlock && disabledKeys.push("remove");
  return (
    <section className={st(classes.root, classNameProp)} {...rest}>
      <nav className={classes.options}>
        {provideMenu && (
          <MenuTrigger portalSelector="#portal" crossOffset={-50}>
            <Button
              className={classes.menuTrigger}
              variant="fab"
              tone={10}
              aria-label="Block menu"
              vol={1}
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
                    removeBlock && removeBlock();
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
        isOpen={overlayOpen !== false}
        onDismiss={() => !disableClickAwayListener && closeOverlay()}
        // initialFocusRef={inputRef}
        // transition={"up"}
        className={classes.modal}
        portalSelector={false}
        variant={false}
        // className=
        // variant={2}
        // entryNode={false}
        focusOnProps={{ shards: shards }}
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
          <div
            className={classes.dialogContentWithActions}
            aria-hidden={!overlayOpen}
            style={{
              transition: "transform 190ms",
              // We need this in the DOM for the Dialog transitions to work.
              transform: overlayOpen ? `scale(1)` : `scale(1)`,
            }}
          >
            <H2 className={classes.settingsTitle} vol={2} uppercase>
              Block settings
            </H2>
            {settingsRender({
              // Provide overlay state to render.
              overlayOpen,
            })}
            <Button
              onPress={() => {
                onSettingsClose && onSettingsClose();
                return closeOverlay();
              }}
            >
              Close
            </Button>
          </div>
        )}
      </Modal>

      {/* Main content */}
      <div className={classes.mainContent}>
        {label && <H2 className={classes.label}>{label}</H2>}
        {children}
      </div>
    </section>
  );
};

export default BlockEditor;
