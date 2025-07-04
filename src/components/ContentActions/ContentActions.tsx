import React, { forwardRef, useRef } from "react";
import { classes as dialog } from "@actionishope/shelley/Dialog/dialog.st.css";
import { Button } from "@actionishope/shelley/Button";
import { ButtonGroup } from "@actionishope/shelley/Button";
import { H2 } from "@actionishope/shelley/Text";
import { VisuallyHidden } from "@actionishope/shelley/VisuallyHidden";
import {
  Dialog,
  DialogTrigger,
  DialogTriggerProps,
} from "@actionishope/shelley/Dialog";
import type { shards } from "src/typings/shared-types";
import { st, classes } from "./contentActions.st.css";
import type { ComponentBase } from "@actionishope/shelley";

export interface ContentActionsProps
  extends Omit<React.HTMLProps<HTMLDivElement>, "type" | "ref">,
    Pick<DialogTriggerProps, "isOpen" | "onOpenChange">,
    ComponentBase {
  shards?: shards;
  focusMode?: boolean;
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
    focusMode,
    "data-id": dataId,
    ...rest
  } = props;

  const targetRef = useRef(null);
  return (
    <div
      className={st(classes.root, classNameProp)}
      {...rest}
      ref={ref}
      data-id={dataId}
    >
      <DialogTrigger
        portalSelector="#portal"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        modalClassName={st(classes.halfScreenModal, { focusMode })}
        focusOnProps={{
          shards,
        }}
        targetRef={targetRef}
      >
        <Button
          vol={4}
          // tone={1}
          variant="secondary"
          className={classes.addBlockButton}
          ref={targetRef}
          data-id={dataId ? `${dataId}--addContentButton` : undefined}
        >
          Add Content Block
        </Button>
        {(close) => (
          <Dialog
            className={classes.dialog}
            data-id={dataId ? `${dataId}--dialog` : undefined}
          >
            <VisuallyHidden>
              <H2 vol={1} uppercase className={dialog.title} data-title>
                Adding and managing block order
              </H2>
            </VisuallyHidden>
            <div className={dialog.content}>{children}</div>
            <ButtonGroup className={dialog.buttonGroup}>
              <Button
                variant="secondary"
                onPress={close}
                data-id={dataId ? `${dataId}--dialog--closeButton` : undefined}
              >
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
