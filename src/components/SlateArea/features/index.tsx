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
    .reduce<FocusMenuButtonMap>((acc, focusMenuButtons) => {
      focusMenuButtons &&
        Object.entries(focusMenuButtons).forEach(([type, btns]) => {
          acc[type] = [...(acc[type] || []), ...btns];
        });

      return acc;
    }, {});

export const getElements = (features: Feature[]): ElementMap =>
  features
    .map((f) => f.elements)
    .filter((elements): elements is ElementMap => elements !== undefined)
    .reduce<ElementMap>((acc, m) => ({ ...acc, ...m }), {});

export const getLeaves = (features: Feature[]): LeafMap =>
  features
    .map((f) => f.leaves)
    .filter((leaves): leaves is LeafMap => leaves !== undefined)
    .reduce<LeafMap>((acc, m) => ({ ...acc, ...m }), {});

export const getMarkHotkeys = (features: Feature[]): HotkeyMap =>
  features
    .map((f) => f.markHotkeys)
    .filter(Boolean)
    .reduce<HotkeyMap>((acc, m) => ({ ...acc, ...m }), {});

export const getBlockHotkeys = (features: Feature[]): HotkeyMap =>
  features
    .map((f) => f.blockHotkeys)
    .filter(Boolean)
    .reduce<HotkeyMap>((acc, m) => ({ ...acc, ...m }), {});
