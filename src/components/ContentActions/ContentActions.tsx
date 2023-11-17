import React, { forwardRef, useRef } from "react";
import { classes as dialog } from "@actionishope/shelley/Dialog/dialog.st.css";
import { Button } from "@actionishope/shelley/Button";
import { ButtonGroup } from "@actionishope/shelley/ButtonGroup";
import { H2 } from "@actionishope/shelley/Text";
import { VisuallyHidden } from "@actionishope/shelley/VisuallyHidden";
import {
  Dialog,
  DialogTrigger,
  DialogTriggerProps,
} from "@actionishope/shelley/Dialog";
import type { shards } from "src/typings/shared-types";
import { st, classes } from "./contentActions.st.css";
export interface ContentActionsProps
  extends Omit<React.HTMLProps<HTMLDivElement>, "type" | "ref">,
    Pick<DialogTriggerProps, "isOpen" | "onOpenChange"> {
  shards?: shards;
  addContentBlockButton: boolean;
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
    addContentBlockButton,
    ...rest
  } = props;

  const targetRef = useRef(null);

  if (!addContentBlockButton) {
    return <></>;
  }

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
        targetRef={targetRef}
      >
        <Button
          vol={4}
          variant="secondary"
          tone={1}
          ref={targetRef}
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
