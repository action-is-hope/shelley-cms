import React, { forwardRef, useState } from "react";
import { st, classes } from "./header.st.css";
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

type UserDetailsType =
  | {
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
    }
  | undefined;

export interface HeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ComponentBase {
  altThemeEnabled?: boolean;
  toggleTheme?: () => void;
  user?: UserDetailsType;
  onSignIn: () => void;
  onSignOut: () => void;
  onSiteSelection: (key: string) => void;
  avatarUrL?: string;
  sites: Iterable<{ key: string; name: string }>;
  selectedSite?: string;
  themeSwitcherProps?: SwitchProps;
  isSignedIn?: boolean;
}

function Header(props: HeaderProps, ref?: React.Ref<HTMLDivElement>) {
  const {
    altThemeEnabled,
    className: classNameProp,
    children,
    toggleTheme,
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
          variant="secondary"
          tone={10}
          vol={5}
          icon={<List />}
          aria-label="Change site"
          iconPos="start"
          isDisabled={!user}
          data-id={dataId ? `${dataId}--sitesMenuTrigger` : undefined}
        >
          <span className={classes.publisherName}>Publisher </span>
          {selectedSite && (
            <span
              className={classes.siteName}
              data-id={dataId ? `${dataId}--currentSiteName` : undefined}
            >
              {selectedSite}
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
                selectedKeys={selectedSite && [selectedSite]}
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
          variant="secondary"
          tone={10}
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
                  vol={1}
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
