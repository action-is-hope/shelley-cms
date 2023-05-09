import React, { forwardRef } from "react";
import { st, classes } from "./previewActions.st.css";

import PreviewIcon from "../Icons/Preview";
import PreviewOffIcon from "../Icons/PreviewOff";
import ExpandIcon from "../Icons/ExpandScreen";
import CompressIcon from "../Icons/CompressScreen";

import { Button, ComponentBase } from "@actionishope/shelley";

export interface PreviewActionsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ComponentBase {
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
    "data-id": dataId,
    ...rest
  } = props;

  return (
    <div
      className={st(classes.root, classNameProp)}
      {...rest}
      ref={ref}
      data-id={dataId}
    >
      {children}
      <Button
        onPress={() => onFocusModeClick(!focusMode)}
        variant="secondary"
        vol={5}
        ref={focusModeButtonRef}
        className={classes.toggleFocusButton}
        data-id={dataId ? `${dataId}--focusModeButton` : undefined}
        icon={
          focusMode ? (
            <PreviewOffIcon
              alt="Toggle preview on"
              data-id={dataId ? `${dataId}--previewOffIcon` : undefined}
            />
          ) : (
            <PreviewIcon
              alt="Toggle preview off"
              data-id={dataId ? `${dataId}--previewOnIcon` : undefined}
            />
          )
        }
      />
      <Button
        variant="secondary"
        vol={5}
        ref={fullScreenModeButtonRef}
        className={classes.toggleFullScreenButton}
        onPress={() => onFullScreenModeClick(!fullScreenMode)}
        data-id={dataId ? `${dataId}--fullScreenModeButton` : undefined}
        icon={
          !fullScreenMode ? (
            <ExpandIcon
              alt="Toggle full screen on"
              data-id={dataId ? `${dataId}--fullScreenOnIcon` : undefined}
            />
          ) : (
            <CompressIcon
              alt="Toggle full screen off"
              data-id={dataId ? `${dataId}--fullScreenOffIcon` : undefined}
            />
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
