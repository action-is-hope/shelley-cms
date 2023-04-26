import React, { forwardRef } from "react";
import { st, classes } from "./previewActions.st.css";

import PreviewIcon from "../icons/Preview";
import PreviewOffIcon from "../icons/PreviewOff";
import ExpandIcon from "../icons/ExpandScreen";
import CompressIcon from "../icons/CompressScreen";

import { Button } from "@actionishope/shelley";

export interface PreviewActionsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  "data-id"?: string;
  focusMode: boolean;
  focusModeButtonRef: React.Ref<HTMLButtonElement>;
  onFocusModeClick: (mode: boolean) => void;
  fullScreenMode: boolean;
  fullScreenModeButtonRef: React.Ref<HTMLButtonElement>;
  onFullScreenModeClick: (mode: boolean) => void;
  // Required for usePreview.
  ref?: React.Ref<HTMLDivElement>;
}

function PreviewActions(
  props: PreviewActionsProps,
  ref?: React.Ref<HTMLDivElement>
) {
  const {
    className: classNameProp,
    children,
    focusMode,
    focusModeButtonRef,
    onFocusModeClick,
    fullScreenMode,
    fullScreenModeButtonRef,
    onFullScreenModeClick,
    // "data-id": dataId,
    ...rest
  } = props;

  return (
    <div className={st(classes.root, classNameProp)} {...rest} ref={ref}>
      {children}

      <Button
        onPress={() => onFocusModeClick(!focusMode)}
        variant="secondary"
        vol={5}
        ref={focusModeButtonRef}
        className={classes.toggleFocusButton}
        icon={
          focusMode ? (
            <PreviewOffIcon alt="Toggle preview on" />
          ) : (
            <PreviewIcon alt="Toggle preview off" />
          )
        }
      />
      <Button
        variant="secondary"
        vol={5}
        ref={fullScreenModeButtonRef}
        className={classes.toggleFullScreenButton}
        onPress={() => onFullScreenModeClick(!fullScreenMode)}
        icon={
          !fullScreenMode ? (
            <ExpandIcon alt="Toggle full screen on" />
          ) : (
            <CompressIcon alt="Toggle full screen off" />
          )
        }
      />
    </div>
  );
}

/**
 * Used on the main edit screen, it controls the publishing and unpublishing of a page.
 */
const _PreviewActions = forwardRef(PreviewActions);
export { _PreviewActions as PreviewActions };
