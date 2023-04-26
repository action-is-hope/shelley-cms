import React, { forwardRef } from "react";
import { st, classes } from "./header.st.css";
import {
  Toolbar,
  // Icon,
  Button,
  // Switch
} from "@actionishope/shelley";
import Menu from "../icons/Menu";

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  altThemeEnabled?: boolean;
  toggleTheme?: () => void;
}

function Header(props: HeaderProps, ref?: React.Ref<HTMLDivElement>) {
  const {
    altThemeEnabled,
    className: classNameProp,
    children,
    toggleTheme,
    ...rest
  } = props;

  return (
    <Toolbar
      as="header"
      className={st(classes.root, classNameProp)}
      {...rest}
      ref={ref}
    >
      <Button
        className={classes.siteSelectButton}
        variant="secondary"
        tone={10}
        vol={5}
        icon={<Menu />}
        iconPos="start"
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
