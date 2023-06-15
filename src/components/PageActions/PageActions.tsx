import React, { forwardRef, Ref, ReactElement } from "react";
import type { CollectionChildren } from "@react-types/shared/src/collections";
import type { ComponentBase } from "@actionishope/shelley/typings/shared-types";
import { Button } from "@actionishope/shelley/Button";
import { ButtonGroup } from "@actionishope/shelley/ButtonGroup";
import { Text } from "@actionishope/shelley/Text";
import { Menu } from "@actionishope/shelley/Menu";
import {
  MenuTrigger,
  MenuTriggerProps,
} from "@actionishope/shelley/MenuTrigger";
import { Icon } from "@actionishope/shelley/Icon";
import { st, classes } from "./pageActions.st.css";
import { classes as spacing } from "@actionishope/shelley/styles/default/spacing.st.css";

export type statusOptions =
  | "published"
  | "draft"
  | "updated"
  | "archived"
  | "unpublished";

export interface PageActionsProps<T>
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children">,
    ComponentBase {
  /** Provide a status */
  status: statusOptions;
  /** The last saved value, e.g "a week ago", "a few minutes" etc. */
  lastSaved?: string;
  /**
   * Changes the button into a "Review required" state with
   * onAction responding with "review"
   */
  reviewRequired?: boolean;
  /** An array of disable keys to disable menu items. */
  disabledKeys?: string[];
  /**
   * The `onAction` event is fired when either the main
   * button or one of the menu options is selected.
   * See @docs for more info.
   */
  onAction: (key: string | number) => void;
  /** Items for the Menu drop down. */
  children: CollectionChildren<T>;
  /** Position props for the internal Menu. */
  position?: Pick<
    MenuTriggerProps,
    "placement" | "shouldFlip" | "offset" | "crossOffset" | "portalSelector"
  >;
}

function PageActions<T extends { key: string }>(
  props: PageActionsProps<T>,
  ref?: React.Ref<HTMLDivElement>
) {
  const {
    className: classNameProp,
    children,
    status = "draft",
    lastSaved,
    reviewRequired,
    disabledKeys: disabledKeysProp,
    position,
    onAction: onActionProp,
    "data-id": dataId,
    ...rest
  } = props;

  const strings = {
    status: "Status:",
    publish: "Publish",
    unpublish: "Unpublish",
    draft: "Draft",
    archive: "Archive",
    unarchive: "Unarchive",
    publishChanges: "Publish changes",
    publishMenu: "Publish menu",
    published: "Published",
    updated: "Updated",
    archived: "Archived",
    unpublished: "Unpublished",
    reviewRequired: "Review required",
    delete: "Delete",
    changeStatus: "Change status",
    changesSaved: "Changes saved:",
  };

  const lookUp = {
    updated: {
      text: strings.publishChanges,
      action: "publish",
      disabled: false,
    },
    published: {
      text: strings.publish,
      action: "none",
      disabled: true,
    },
    unpublished: {
      text: strings.publish,
      action: "publish",
      disabled: false,
    },
    draft: {
      text: strings.publish,
      action: "publish",
      disabled: false,
    },
    archived: {
      text: strings.unarchive,
      action: "unarchive",
      disabled: false,
    },
  };

  // const disabledKeys = Children.map(children, (child) => {
  //   if (child?.key === "archive" && status === "archived") {
  //     return child?.key;
  //   }
  //   if (child?.key === "unpublish" && status === "unpublished") {
  //     return child?.key;
  //   }
  //   if (child?.key === "make-draft" && status === "draft") {
  //     return child?.key;
  //   }
  // });

  return (
    <div
      className={st(classes.root, classNameProp)}
      {...rest}
      ref={ref}
      data-id={dataId}
    >
      <div className={classes.info}>
        <Text
          as="div"
          vol={1}
          className={st(spacing.mb1, classes.lastSaved)}
          data-id={dataId ? `${dataId}--last-saved` : undefined}
        >
          {lastSaved && `${strings.changesSaved} ${lastSaved}`}
        </Text>
        {/* extra children? */}
      </div>

      <div className={classes.actions}>
        <Text
          as="div"
          vol={1}
          className={st(spacing.mb1, classes.statusText)}
          data-id={dataId ? `${dataId}--status` : undefined}
        >
          {/* @todo: Convert to StatusIndicator component */}
          <span className={st(classes.led, classes[status])}></span>
          <strong>{strings.status}</strong> {strings[status]}
        </Text>
        {/* @todo: shelley -> Button group us adding extra props to the MenuTrigger in this scenario */}
        <ButtonGroup className={classes.buttonGroup} splitButton>
          <Button
            vol={4}
            variant="primary"
            tone={reviewRequired ? 2 : 1}
            className={classes.reviewButton}
            data-id={dataId ? `${dataId}--actionButton` : undefined}
            fullWidth
            onPress={() =>
              onActionProp(reviewRequired ? "review" : lookUp[status].action)
            }
            isDisabled={reviewRequired ? false : lookUp[status].disabled}
          >
            {reviewRequired ? strings.reviewRequired : lookUp[status].text}
          </Button>
          <MenuTrigger offset={8} crossOffset={-80} {...position}>
            <Button
              icon={
                <Icon alt={strings.publishMenu}>
                  <path d="M13 4v2l-5 5-5-5v-2l5 5z"></path>
                </Icon>
              }
              className={classes.menuTrigger}
              data-id={dataId ? `${dataId}--menuTrigger` : undefined}
              vol={4}
              tone={1}
            />
            <Menu
              onAction={(key) => onActionProp(key)}
              // disabledKeys={disabledKeys}
              disabledKeys={disabledKeysProp}
              className={classes.menu}
              data-id={dataId ? `${dataId}--menu` : undefined}
            >
              {children}
            </Menu>
          </MenuTrigger>
        </ButtonGroup>
      </div>
    </div>
  );
}

// forwardRef doesn't support generic parameters -> cast to the correct type.
// https://stackoverflow.com/questions/58469229/react-with-typescript-generics-while-using-react-forwardref
const _PageActions = forwardRef(PageActions) as <T>(
  props: PageActionsProps<T> & { ref?: Ref<HTMLDivElement> }
) => ReactElement;
export { _PageActions as PageActions };
