import React, { forwardRef, useState } from "react";
import type { Site, UserDetailsType } from "../../typings/shared-types";
import {
  Toolbar,
  Button,
  ComponentBase,
  DialogTrigger,
  IconButton,
  Dialog,
  P,
  H2,
  ListBox,
  Item,
  Switch,
  ActionButton,
  SwitchProps,
} from "@actionishope/shelley";
import Menu from "../icons/Menu";
import List from "../icons/List";
import ClickAwayListener from "react-click-away-listener";
import { classes as dialog } from "@actionishope/shelley/components/Dialog/dialog.st.css";
import { st, classes } from "./header.st.css";

export interface HeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ComponentBase {
  /** User object for the signed in user info popup. */
  user?: UserDetailsType;
  /** Callback for onSignIn. */
  onSignIn: () => void;
  /** Callback for onSignOut. */
  onSignOut: () => void;
  /** Callback for onSiteSelection from the modal. */
  onSiteSelection: (key: string) => void;
  /** Avatar url, falls back to auto generated image based on user.username */
  avatarUrL?: string;
  /** An iteratable collection of Sites */
  sites: Iterable<Site>;
  /** The currently selected Site. */
  selectedSite?: Site;
  /** Props for the themeSwitcher Switch component. */
  themeSwitcherProps?: SwitchProps;
  /** Is the user logged in */
  isSignedIn?: boolean;
}

function Header(props: HeaderProps, ref?: React.Ref<HTMLDivElement>) {
  const {
    className: classNameProp,
    children,
    "data-id": dataId,
    avatarUrL,
    sites,
    user,
    onSignIn,
    onSignOut,
    onSiteSelection,
    selectedSite,
    themeSwitcherProps,
    ...rest
  } = props;

  const [menuOpen, setMenuOpen] = useState(false);

  const userAvatar = user
    ? user.image
      ? user.image
      : user.name && `https://ui-avatars.com/api/?name=${user.name}`
    : `https://ui-avatars.com/api/?name=unknown`;

  return (
    <Toolbar
      as="header"
      className={st(classes.root, classNameProp)}
      {...rest}
      ref={ref}
      data-id={dataId}
    >
      <DialogTrigger isDismissable portalSelector="#portal">
        <Button
          className={classes.siteListTrigger}
          variant={false}
          tone={10}
          vol={5}
          icon={<List />}
          aria-label="Change site"
          iconPos="start"
          isDisabled={!user}
          data-id={dataId ? `${dataId}--sitesMenuTrigger` : undefined}
        >
          <span className={classes.publisherName}>Publisher</span>
          {selectedSite?.siteCode && (
            <span
              className={classes.siteName}
              data-id={dataId ? `${dataId}--currentSiteName` : undefined}
            >
              {selectedSite.siteCode}
            </span>
          )}
        </Button>
        {(close) => (
          <Dialog
            size="small"
            className={classes.sitesDialog}
            data-id={dataId ? `${dataId}--sitesDialog` : undefined}
          >
            <H2 className={dialog.title} vol={5} data-title>
              Sites
            </H2>
            <hr className={dialog.divider} />
            <div className={dialog.content}>
              <ListBox
                shouldFocusWrap
                selectionMode="single"
                selectedKeys={selectedSite && [selectedSite.key]}
                data-id={dataId ? `${dataId}--sitesListBox` : undefined}
                onSelectionChange={(key) => {
                  const selectedKey = Array.from(key as Set<string>)[0];
                  if (selectedKey) {
                    onSiteSelection(selectedKey);
                    close();
                  }
                }}
                label="Select a site to edit:"
                items={sites}
              >
                {(item) => <Item key={item.key}>{item.name}</Item>}
              </ListBox>
            </div>
          </Dialog>
        )}
      </DialogTrigger>
      <ClickAwayListener onClickAway={() => setMenuOpen(false)}>
        <nav className={st(classes.nav, { isOpen: menuOpen })}>{children}</nav>
      </ClickAwayListener>
      <div className={classes.userActions}>
        <Button
          className={classes.navTrigger}
          variant={false}
          vol={5}
          icon={<Menu />}
          aria-label="Menu"
          iconPos="start"
          isDisabled={!user}
          onPress={() => setMenuOpen(!menuOpen)}
          data-id={dataId ? `${dataId}--mainNav` : undefined}
        />

        {user ? (
          <DialogTrigger type="popup" portalSelector="#portal">
            <IconButton
              data-id={dataId ? `${dataId}--userMenuTrigger` : undefined}
            >
              <span className={classes.avatar}>
                <img
                  alt="User menu"
                  className={classes.avatarImage}
                  src={userAvatar as string}
                />
              </span>
            </IconButton>
            <div className={classes.userDialog}>
              <div
                className={classes.userDetails}
                data-id={dataId ? `${dataId}--userDetails` : undefined}
              >
                <span className={classes.avatar}>
                  <img
                    alt="User menu"
                    className={classes.avatarImage}
                    src={userAvatar as string}
                  />
                </span>
                <div>
                  <P
                    vol={1}
                    weight={5}
                    data-id={dataId ? `${dataId}--userName` : undefined}
                  >
                    {user.name}
                  </P>
                  <P
                    vol={1}
                    data-id={dataId ? `${dataId}--userEmail` : undefined}
                  >
                    {user.email}
                  </P>
                </div>
              </div>
              <H2 className={classes.userDetailsHeader} vol={2} weight={5}>
                Preferences
              </H2>
              {themeSwitcherProps && (
                <Switch
                  {...themeSwitcherProps}
                  className={classes.themeSwitcher}
                  size={1}
                  data-id={dataId ? `${dataId}--themeSwitcher` : undefined}
                >
                  Dark mode
                </Switch>
              )}
              <ActionButton
                onPress={onSignOut}
                data-id={dataId ? `${dataId}--signOutButton` : undefined}
              >
                Sign out
              </ActionButton>
            </div>
          </DialogTrigger>
        ) : (
          <ActionButton
            onPress={onSignIn}
            isQuiet
            data-id={dataId ? `${dataId}--signInButton` : undefined}
          >
            Sign in
          </ActionButton>
        )}
      </div>
    </Toolbar>
  );
}

/**
 * App Header wrapper
 */
const _Header = forwardRef(Header);
export { _Header as Header };
