import type { Editor } from "slate";
// import type { WidgetProps } from "components/Widget/Widget";
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

  /** Custom button render function. */
  render?: (props: HoverMenuButtonRenderProps) => any;

  onMouseDown?: (editor: Editor) => void;

  isActive?: (editor: Editor) => boolean;
}

export interface InlineMenuButton {
  icon: string;
  label: string;
  // widgetProps?: Partial<WidgetProps>;
}

export interface FocusMenuButton {
  icon: string;
  label: string;
  type: string;
}

export interface ToolbarButton {
  icon: string;
  label: string;
  onClick: string;
}

export interface MenuButtonRenderProps {
  renderButton: any;
}

export type HoverMenuButtonRenderProps = {
  type: string;
  icon: string;
  editor: any;
  value: any;
  renderButton: (props: RenderButton) => any;
};

export type RenderButton = {
  type: string;
  icon: string;
  isActive: boolean;
  onMouseDown: (...args: any[]) => any;
};

export type FocusMenuButtonMap = {
  [slateType: string]: FocusMenuButton[];
};

export type ToolbarButtonMap = {
  [slateType: string]: ToolbarButton[];
};

export type ElementMap = {
  [slateType: string]: any;
};
// export type ElementMap<T> = {
//   [slateType: string]: React.JSXElementConstructor<T>;
// };

export type LeafMap = {
  [matcher: string]: any;
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
    [slateType: string]: ReactNode;
  };

  leaves?: {
    [textType: string]: ReactNode;
  };
}

export type FeatureFactory = (opts: any) => Feature;
