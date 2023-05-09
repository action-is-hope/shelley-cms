import React, { ReactNode, forwardRef } from "react";
import { H1, ComponentBase } from "@actionishope/shelley";
// import { default as DashboardIcon } from "../../components/Icons/Dashboard";
import { st, classes } from "./dashboard.st.css";

export interface DashboardProps
  extends Omit<React.HTMLAttributes<HTMLBaseElement>, "title">,
    ComponentBase {
  /** A title for the info panel. */
  title?: ReactNode;
  /** Current site name */
  currentSiteName?: string;
}

function Dashboard(props: DashboardProps, ref?: React.Ref<HTMLDivElement>) {
  const {
    className: classNameProp,
    children,
    title,
    currentSiteName,
    "data-id": dataId,
    ...rest
  } = props;

  return (
    <main
      className={st(classes.root, classNameProp)}
      data-id={dataId}
      ref={ref}
      {...rest}
    >
      <H1 className={classes.title} vol={7}>
        {/* <DashboardIcon className={classes.icon} aria-hidden="true" /> */}
        {title}
        <span>{currentSiteName}</span>
      </H1>
      <div className={classes.grid}>{children}</div>
    </main>
  );
}

/**
 * Dashboard provides a grid layout for the dashboard of the CMS to be filled with info panels and other widgets.
 */
const _Dashboard = forwardRef(Dashboard);
export { _Dashboard as Dashboard };
