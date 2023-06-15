import React, { forwardRef } from "react";
import type { ComponentBase } from "@actionishope/shelley/typings/shared-types";
import PreviewIcon from "../icons/Preview";
import PreviewOffIcon from "../icons/PreviewOff";
import ExpandIcon from "../icons/ExpandScreen";
import CompressIcon from "../icons/CompressScreen";
import { Button } from "@actionishope/shelley/Button";
import { st, classes } from "./previewActions.st.css";

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
        variant={false}
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
        variant={false}
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
