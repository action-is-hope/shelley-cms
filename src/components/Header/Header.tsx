import React, { forwardRef } from "react";
import { st, classes } from "./header.st.css";
import {
  Toolbar,
  // Icon,
  Button,
  // Switch
} from "@actionishope/shelley";
import Menu from "../icons/Menu";

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  altThemeEnabled?: boolean;
  toggleTheme?: () => void;
}
const Header = forwardRef(
  (
    {
      altThemeEnabled,
      className: classNameProp,
      children,
      toggleTheme,
      ...rest
    }: LayoutProps,
    ref?: React.Ref<HTMLDivElement>
  ) => {
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

        {/* <h1 className={classes.title}>
          <a
            href="/"
            style={{
              textDecoration: "none"
            }}
          >
            Puma publisher
          </a>
        </h1> */}

        {children}
        {/* <div className={classes.controls}>
          <Switch
            defaultSelected={altThemeEnabled}
            onChange={() => toggleTheme()}
          >
            Mode
          </Switch>
          <Icon alt="Toggle theme mode">
            <path d="M16 8l-2.2-1.6 1.1-2.4-2.7-0.2-0.2-2.7-2.4 1.1-1.6-2.2-1.6 2.2-2.4-1.1-0.2 2.7-2.7 0.2 1.1 2.4-2.2 1.6 2.2 1.6-1.1 2.4 2.7 0.2 0.2 2.7 2.4-1.1 1.6 2.2 1.6-2.2 2.4 1.1 0.2-2.7 2.7-0.2-1.1-2.4 2.2-1.6zM8 13c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"></path>
          </Icon>
        </div> */}
      </Toolbar>
    );
  }
);

Header.displayName = "Header";

export default Header;
