import { useState } from "react";
import {
  PageActionsProps,
  PageActions,
} from "../../components/PageActions/PageActions";

import { Item } from "@actionishope/shelley";
import type { StatusOptions } from "../../typings/shared-types";

// @todo Attempt (again) to get the automatic args table working in storybook. This is cause seemingly by using Omit, Pick etc
export type PageActionsPropsDocs = PageActionsProps<object>;
export function PageActionsType(props: PageActionsPropsDocs) {
  <>{props}</>;
}

export const BasicExample = (args: PageActionsPropsDocs) => {
  const [status, setStatus] = useState<StatusOptions>("draft");
  const [reviewRequired, setReviewRequired] = useState(true);

  return (
    <PageActions
      className={"custom classnames"}
      lastSaved="5 mins ago"
      lastSavedDateTime="17:29 - 5th November 2023"
      reviewRequired={reviewRequired}
      position={{ portalSelector: "#portal" }}
      data-id="pageActions"
      {...args}
      onAction={(actionKey) => {
        switch (actionKey) {
          case "archive":
            console.log("archived!!");
            setStatus("archived");
            break;
          case "unarchive":
            console.log("unarchive'!!");
            setStatus("draft");
            break;
          case "unpublish":
            console.log("UnPublish!!");
            setStatus("draft");
            break;
          case "delete":
            console.log("delete");
            break;
          case "publish":
            console.log("publish!!");
            setStatus("published");
            break;
          case "review":
            console.log("review");
            setReviewRequired(false);
            setStatus("updated");
            break;
        }
      }}
      // disabledKeys={["unpublish"]}
      status={status}
    >
      <Item key="archive">Archive</Item>
      <Item key="unpublish">Unpublish</Item>
    </PageActions>
  );
};
