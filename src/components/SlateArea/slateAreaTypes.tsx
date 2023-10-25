import type { Editor, Element } from "slate";
import type { ReactElement, ReactNode } from "react";

export interface SlateAreaEvent {
  target: {
    name: string;
    value: any;
  };
}

/**
 * Describes a menu button to render.
 */
export interface HoverMenuButton {
  kind: "block" | "mark";

  /** Slate type that will get triggered when the button is pressed, e.g. "block-quote" */
  type: string;

  /** Icon to render */
  icon: ReactElement;

  onMouseDown?: (editor: Editor) => void;

  isActive?: (editor: Editor) => boolean;
}

export interface InlineMenuButton {
  icon: ReactElement;
  label: string;
  name: string;
  widgetProps?: any;
}

export interface FocusMenuButton {
  icon: ReactElement;
  label: string;
  type: string;
}

export interface ToolbarButton {
  icon: ReactElement;
  label: string;
  onClick: string;
}

export type FocusMenuButtonMap = {
  [slateType: string]: FocusMenuButton[];
};

export type ToolbarButtonMap = {
  [slateType: string]: ToolbarButton[];
};

export type ElementMap = {
  [slateType: string]: Element;
};

export type LeafMap = {
  [matcher: string]: Element;
};

/**
 * The key specifies the key/key combination and the value represents either:
 * 1. The mark to toggle if it's a string, e.g 'bold'.
 * 2. A function function to run.
 */
export type HotkeyMap = {
  [key: string]: string | ((editor: Editor) => void);
};

export interface Feature {
  /** Feature name */
  name: string;

  /**
   * Hotkeys which toggle a mark on the current selection.
   */
  markHotkeys?: HotkeyMap;

  /**
   * Hotkeys which toggle a block on the current selection.
   */
  blockHotkeys?: HotkeyMap;

  hoverMenuButtons?: HoverMenuButton[];

  inlineMenuButtons?: InlineMenuButton[];

  focusMenuButtons?: FocusMenuButtonMap;

  toolbarMenuButtons?: ToolbarButtonMap;

  elements?: {
    [slateType: string]: ReactNode | ((props: any) => ReactNode);
  };

  leaves?: {
    [textType: string]: ReactNode;
  };
}

export type FeatureFactory = () => Feature;
