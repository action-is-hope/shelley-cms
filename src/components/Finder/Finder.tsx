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
import {
  H1,
  IconButton,
  ComponentBase,
  DialogTrigger,
  TextField,
} from "@actionishope/shelley";
import useSize from "@react-hook/size";
import Search from "../icons/Search";
import Filter from "../icons/Filter";

type OverloadedChildren = (isMobile: boolean) => ReactElement;

export interface FinderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title" | "children">,
    ComponentBase {
  sideBarContent?: OverloadedChildren | ReactElement;
  children: OverloadedChildren | ReactElement;
  filterTriggerString?: string;
  title: ReactNode;
  addButton: ReactNode;
  searchFieldProps: {
    onChange: (value: string) => void;
    placeholder?: string;
    label?: string;
  };
  searchBarChildren?: ReactNode;
}
function Finder(props: FinderProps, ref?: React.Ref<HTMLDivElement>) {
  const {
    className: classNameProp,
    addButton,
    children,
    sideBarContent,
    filterTriggerString = "Search filters",
    title,
    "data-id": dataId,
    searchFieldProps,
    searchBarChildren,
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
      className={st(classes.root, { isMobile }, classNameProp)}
      data-id={dataId}
      ref={ref ? mergeRefs(measureRef, ref) : measureRef}
      {...rest}
    >
      <div className={classes.actionBar}>
        <H1
          className={classes.title}
          vol={4}
          data-id={dataId ? `${dataId}--title` : undefined}
        >
          {title}
        </H1>
        <div className={classes.actionButton}>{addButton}</div>
      </div>

      {!isMobile && (
        <div
          className={st(classes.sideBar, classes.sideBarDesktop)}
          data-id={dataId ? `${dataId}--sideBarDesktop` : undefined}
        >
          {typeof sideBarContent === "function"
            ? sideBarContent(isMobile)
            : sideBarContent}
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
          {isMobile && (
            <DialogTrigger
              transition="startToEnd"
              portalSelector="#portal"
              isDismissable
              disableModalBackdropBlur
              modalClassName={classes.sideBarModal}
              data-id={dataId ? `${dataId}--mobileFilterModal` : undefined}
            >
              <IconButton
                aria-label={filterTriggerString}
                data-id={dataId ? `${dataId}--mobileFilterButton` : undefined}
              >
                <Filter />
              </IconButton>
              <div className={st(classes.sideBar, classes.sideBarMobile)}>
                {typeof sideBarContent === "function"
                  ? sideBarContent(isMobile)
                  : sideBarContent}
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
