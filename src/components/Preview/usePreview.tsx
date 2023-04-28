/** usePreview.tsx */
import { useRef, useState } from "react";
import type { PreviewModeType } from "../PreviewModes/PreviewModes";
import type { PreviewActionsProps } from "../PreviewActions/PreviewActions";
import type { PreviewProps } from "./Preview";

type Shards = Array<React.RefObject<any> | HTMLElement> | undefined;

type EditorLayoutProps = {
  "data-id": string;
  gridMode: "fullScreenMode" | "focusMode" | false;
};

type ContentAreaProps = {
  "data-id": string;
  focusOnProps: {
    enabled: boolean;
    onEscapeKey: () => void;
    shards: Shards;
  };
};

type BlockEditorProps = {
  shards: Shards;
};

type PreviewChromeProps = {
  "data-id": string;
  previewMode: PreviewModeType;
  fullScreenMode: boolean;
};

type usePreviewReturn = {
  // Use to choose how to render the mode types ('web' vs devices)
  previewMode: PreviewModeType;
  // Props to spread to components.
  blockEditorProps: BlockEditorProps;
  contentAreaProps: ContentAreaProps;
  editorLayoutProps: EditorLayoutProps;
  previewProps: PreviewProps;
  previewChromeProps: PreviewChromeProps;
  previewActionsProps: PreviewActionsProps;
};

const usePreview = (): usePreviewReturn => {
  /** Refs */
  const previewRef = useRef<HTMLDivElement>(null);
  const previewModesRef = useRef<HTMLDivElement>(null);
  const previewActionsRef = useRef<HTMLDivElement>(null);
  const fullScreenModeButtonRef = useRef<HTMLButtonElement>(null);
  const focusModeButtonRef = useRef<HTMLButtonElement>(null);

  /** States */
  const [focusMode, setFocusMode] = useState<boolean>(false);
  const [previewMode, setPreviewMode] = useState<PreviewModeType>("web");
  const [fullScreenMode, setFullScreenMode] = useState<boolean>(false);

  const editorLayoutProps: EditorLayoutProps = {
    "data-id": "Editor",
    /**
     * Switches the grid on the main container
     * where Preview is used.
     */
    gridMode: fullScreenMode
      ? "fullScreenMode"
      : focusMode
      ? "focusMode"
      : false,
  };

  const contentAreaProps: ContentAreaProps = {
    "data-id": "Content",
    focusOnProps: {
      /**
       * If the focus mode button has been pressed then
       * we turn the focus lock on for the content. We want
       * users to be able to exit back to normal editing so we
       * provide access to the focus mode button via shards.
       */
      enabled: focusMode,
      onEscapeKey: () => setFocusMode(false),
      shards: [focusModeButtonRef],
    },
  };

  const blockEditorProps: BlockEditorProps = {
    /**
     * When the block setting dialog is open we dull
     * out the rest of the UI but we want the preview and
     * the preview mode buttons accessible so that users
     * may interact with the preview whilst adjusting the
     * block settings. So we provide those shards.
     */
    shards: [previewRef, previewModesRef],
  };

  const previewProps: PreviewProps = {
    "data-id": "Preview",
    previewMode,
    ref: previewRef,
    onModeChange: setPreviewMode,
    previewModesRef: previewModesRef,
    focusOnProps: {
      /**
       * When in full screen mode we want to be able
       * to access the preview mode options and the
       * exit fullscreen button.
       */
      enabled: fullScreenMode,
      onEscapeKey: () => setFullScreenMode(false),
      shards: [previewModesRef, fullScreenModeButtonRef],
    },
  };

  const previewChromeProps: PreviewChromeProps = {
    "data-id": "PreviewChrome",
    previewMode,
    fullScreenMode,
  };

  const previewActionsProps: PreviewActionsProps = {
    "data-id": "PreviewActions",
    ref: previewActionsRef,
    focusMode,
    focusModeButtonRef,
    fullScreenModeButtonRef,
    onFocusModeClick: setFocusMode,
    fullScreenMode,
    onFullScreenModeClick: setFullScreenMode,
  };

  return {
    previewMode,
    blockEditorProps,
    contentAreaProps,
    editorLayoutProps,
    previewProps,
    previewChromeProps,
    previewActionsProps,
  };
};
export default usePreview;
