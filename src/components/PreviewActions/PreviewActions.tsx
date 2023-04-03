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

const PreviewActions = forwardRef(
  (
    {
      className: classNameProp,
      children,
      focusMode,
      focusModeButtonRef,
      onFocusModeClick,
      fullScreenMode,
      fullScreenModeButtonRef,
      onFullScreenModeClick,
      ...rest
    }: PreviewActionsProps,
    ref?: React.Ref<HTMLDivElement>
  ) => {
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
);

PreviewActions.displayName = "PreviewActions";

export default PreviewActions;
