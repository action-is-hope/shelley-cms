import React, { forwardRef } from "react";
import { st, classes } from "./header.st.css";
import {
  Toolbar,
  // Icon,
  Button,
  ComponentBase,
  // Switch
} from "@actionishope/shelley";
import Menu from "../icons/Menu";

export interface HeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ComponentBase {
  altThemeEnabled?: boolean;
  toggleTheme?: () => void;
}

function Header(props: HeaderProps, ref?: React.Ref<HTMLDivElement>) {
  const {
    altThemeEnabled,
    className: classNameProp,
    children,
    toggleTheme,
    "data-id": dataId,
    ...rest
  } = props;

  return (
    <Toolbar
      as="header"
      className={st(classes.root, classNameProp)}
      {...rest}
      ref={ref}
      data-id={dataId}
    >
      <Button
        className={classes.siteSelectButton}
        variant="secondary"
        tone={10}
        vol={5}
        icon={<Menu />}
        iconPos="start"
        data-id={dataId ? `${dataId}--menuButton` : undefined}
      >
        <span>Publisher -</span> <span>USA</span>
      </Button>

      {children}
    </Toolbar>
  );
}

/**
 * App Header wrapper
 */
const _Header = forwardRef(Header);
export { _Header as Header };
