import React, { forwardRef } from "react";
import { st, classes } from "./contentActions.st.css";
import { classes as dialog } from "@actionishope/shelley/components/Dialog/dialog.st.css";
import {
  H2,
  Button,
  ButtonGroup,
  DialogTrigger,
  Dialog,
  VisuallyHidden,
  DialogTriggerProps,
} from "@actionishope/shelley";
import type { shards } from "src/typings/shared-types";

export interface ContentActionsProps
  extends Omit<React.HTMLProps<HTMLDivElement>, "type">,
    Pick<DialogTriggerProps, "isOpen" | "onOpenChange"> {
  shards?: shards;
}
function ContentActions(
  props: ContentActionsProps,
  ref?: React.Ref<HTMLDivElement>
) {
  const {
    className: classNameProp,
    children,
    shards,
    isOpen,
    onOpenChange,
    ...rest
  } = props;
  return (
    <div className={st(classes.root, classNameProp)} {...rest} ref={ref}>
      <DialogTrigger
        portalSelector="#portal"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        modalClassName={classes.halfScreenModal}
        focusOnProps={{
          shards,
        }}
      >
        <Button
          vol={4}
          variant="secondary"
          tone={1}
          className={classes.addBlockButton}
        >
          Add Content Block
        </Button>
        {(close) => (
          <Dialog className={classes.dialog}>
            <VisuallyHidden>
              <H2 vol={1} uppercase className={dialog.title} data-title>
                Adding and managing block order
              </H2>
            </VisuallyHidden>
            <div className={dialog.content}>{children}</div>
            <ButtonGroup className={dialog.buttonGroup}>
              <Button variant="secondary" onPress={close}>
                Close
              </Button>
            </ButtonGroup>
          </Dialog>
        )}
      </DialogTrigger>
    </div>
  );
}

/**
 * ContentActions contains actions for content editing such as Add or Manage Block.
 */
const _ContentActions = forwardRef(ContentActions);
export { _ContentActions as ContentActions };
