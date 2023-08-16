import flatMap from "lodash/flatMap";
import type {
  ElementMap,
  Feature,
  FocusMenuButtonMap,
  HotkeyMap,
  LeafMap,
} from "../slateAreaTypes";

export const getHoverMenuButtons = (features: Feature[]) =>
  flatMap(features, (f) => f.hoverMenuButtons || []);

export const getInlineMenuButtons = (features: Feature[]) =>
  flatMap(features, (f) => f.inlineMenuButtons || []);

export const getFocusMenuButtons = (features: Feature[]): FocusMenuButtonMap =>
  features
    .map((f) => f.focusMenuButtons)
    .filter(Boolean)
    .reduce((acc: FocusMenuButtonMap, focusMenuButtons) => {
      Object.entries(focusMenuButtons).forEach(([type, btns]) => {
        acc[type] = [...(acc[type] || []), ...btns];
      });

      return acc;
    }, {});

export const getElements = (features: Feature[]): ElementMap =>
  features
    .map((f) => f.elements)
    .filter(Boolean)
    .reduce((acc: ElementMap, m) => ({ ...acc, ...m }), {});

export const getLeaves = (features: Feature[]): LeafMap =>
  features
    .map((f) => f.leaves)
    .filter(Boolean)
    .reduce((acc: LeafMap, m) => ({ ...acc, ...m }), {});

export const getMarkHotkeys = (features: Feature[]): HotkeyMap =>
  features
    .map((f) => f.markHotkeys)
    .filter(Boolean)
    .reduce((acc: HotkeyMap, m) => ({ ...acc, ...m }), {});

export const getBlockHotkeys = (features: Feature[]): HotkeyMap =>
  features
    .map((f) => f.blockHotkeys)
    .filter(Boolean)
    .reduce((acc: HotkeyMap, m) => ({ ...acc, ...m }), {});
