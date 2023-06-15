import React, { forwardRef } from "react";
import { P } from "@actionishope/shelley/Text";
import { Widget, WidgetProps } from "../Widget/Widget";
import { st, classes } from "./userWidget.st.css";
import type { UserDetailsType } from "../../typings/shared-types";

export interface UserWidgetProps extends WidgetProps {
  user: UserDetailsType;
}

function UserWidget(props: UserWidgetProps, ref?: React.Ref<HTMLDivElement>) {
  const {
    className: classNameProp,
    user,
    children,
    "data-id": dataId,
    ...rest
  } = props;

  const userAvatar = user
    ? user.image
      ? user.image
      : user.name && `https://ui-avatars.com/api/?name=${user.name}`
    : `https://ui-avatars.com/api/?name=unknown`;

  return (
    <Widget
      className={st(classes.root, classNameProp)}
      data-id={dataId}
      ref={ref}
      {...rest}
    >
      {user && (
        <div
          className={classes.userDetails}
          data-id={dataId ? `${dataId}--userDetails` : undefined}
        >
          <span className={classes.avatar}>
            <img
              alt=""
              className={classes.avatarImage}
              src={userAvatar as string}
              data-id={dataId ? `${dataId}--avatar` : undefined}
            />
          </span>
          <div>
            <P
              vol={5}
              weight={3}
              className={classes.welcomeText}
              data-id={dataId ? `${dataId}--welcomeText` : undefined}
            >
              Welcome back{" "}
              <span
                className={classes.userName}
                data-id={dataId ? `${dataId}--userName` : undefined}
              >
                {user.name}
              </span>
            </P>
          </div>
        </div>
      )}
      {children}
    </Widget>
  );
}

/**
 * UserWidgets can be used to display usful information to CMS users.
 */
const _UserWidget = forwardRef(UserWidget);
export { _UserWidget as UserWidget };
