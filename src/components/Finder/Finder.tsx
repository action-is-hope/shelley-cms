import React, {
  forwardRef,
  useEffect,
  useRef,
  useState,
  ReactNode,
  ReactElement,
} from "react";
import { st, classes } from "./finder.st.css";
import { mergeRefs } from "@react-aria/utils";
import { IconButton } from "@actionishope/shelley/IconButton";
import { H1 } from "@actionishope/shelley/Text";
import { DialogTrigger } from "@actionishope/shelley/Dialog";
import { TextField } from "@actionishope/shelley/TextField";
import type { ComponentBase } from "@actionishope/shelley/typings/shared-types";

import useSize from "@react-hook/size";
import Search from "../icons/Search";
import Filter from "../icons/Filter";
import { SubHeader } from "../SubHeader/SubHeader";

type OverloadedChildren = (isMobile: boolean) => ReactElement;

export interface FinderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title" | "children">,
    ComponentBase {
  sidebarContent?: OverloadedChildren | ReactElement;
  children: OverloadedChildren | ReactElement;
  filterTriggerString?: string;
  title?: ReactNode;
  addButton?: ReactNode;
  searchFieldProps: {
    onChange: (value: string) => void;
    placeholder?: string;
    label?: string;
  };
  searchBarChildren?: ReactNode;
  disableActionBar?: boolean;
}
function Finder(props: FinderProps, ref?: React.Ref<HTMLDivElement>) {
  const {
    className: classNameProp,
    addButton,
    children,
    sidebarContent,
    filterTriggerString = "Search filters",
    title,
    "data-id": dataId,
    searchFieldProps,
    searchBarChildren,
    disableActionBar = false,
    ...rest
  } = props;
  const measureRef = useRef(null);
  const [containerWidth] = useSize(measureRef);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(
    () => (containerWidth < 700 ? setIsMobile(true) : setIsMobile(false)),
    [containerWidth]
  );

  return (
    <div
      className={st(
        classes.root,
        { isMobile, disableActionBar, hasSidebar: Boolean(sidebarContent) },
        classNameProp
      )}
      data-id={dataId}
      ref={ref ? mergeRefs(measureRef, ref) : measureRef}
      {...rest}
    >
      {!disableActionBar && (
        <SubHeader
          title={title}
          className={classes.actionBar}
          data-id="actionBar"
        >
          {addButton}
        </SubHeader>
      )}

      {!isMobile && sidebarContent && (
        <div
          className={st(classes.sidebar, classes.sidebarDesktop)}
          data-id={dataId ? `${dataId}--sidebarDesktop` : undefined}
        >
          {typeof sidebarContent === "function"
            ? sidebarContent(isMobile)
            : sidebarContent}
        </div>
      )}

      <main className={classes.main}>
        <div
          className={classes.searchBar}
          data-id={dataId ? `${dataId}--searchBar` : undefined}
        >
          <TextField
            className={classes.searchField}
            startAdornment={<Search aria-hidden="true" />}
            label="Search"
            variant="filled"
            labelPosition="hidden"
            placeholder="Search"
            vol={3}
            {...searchFieldProps}
            data-id={dataId ? `${dataId}--searchField` : undefined}
          />
          {isMobile && sidebarContent && (
            <DialogTrigger
              transition="startToEnd"
              portalSelector="#portal"
              isDismissable
              disableModalBackdropBlur
              modalClassName={classes.sidebarModal}
              data-id={dataId ? `${dataId}--mobileFilterModal` : undefined}
            >
              <IconButton
                aria-label={filterTriggerString}
                data-id={dataId ? `${dataId}--mobileFilterButton` : undefined}
              >
                <Filter />
              </IconButton>
              <div className={st(classes.sidebar, classes.sidebarMobile)}>
                {typeof sidebarContent === "function"
                  ? sidebarContent(isMobile)
                  : sidebarContent}
              </div>
            </DialogTrigger>
          )}
          {searchBarChildren}
        </div>
        <div
          className={classes.content}
          data-id={dataId ? `${dataId}--content` : undefined}
        >
          {typeof children === "function" ? children(isMobile) : children}
        </div>
      </main>
    </div>
  );
}

/**
 * Finder
 */
const _Finder = forwardRef(Finder);
export { _Finder as Finder };
