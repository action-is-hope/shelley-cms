import { Editor, Range } from "slate";
import { ReactEditor, useSlate } from "slate-react";
import { useEffect, useRef } from "react";
import { Portal } from "../../Portal";
import type { HoverMenuButton } from "../../../slateAreaTypes";
import BlockButton from "./BlockButton";
import MarkButton from "./MarkButton";
import { classes } from "./hoverMenu.st.css";

interface NewHoverMenuProps {
  hoverMenuButtons: HoverMenuButton[];
}

const HoverMenu = ({ hoverMenuButtons }: NewHoverMenuProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const editor = useSlate();
  const shouldMenuBeHidden = () => {
    const el = ref.current;
    const { selection } = editor;

    if (!el) {
      return true;
    }

    if (
      !hoverMenuButtons.length ||
      !selection ||
      !ReactEditor.isFocused(editor as ReactEditor) ||
      Range.isCollapsed(selection) ||
      Editor.string(editor, selection) === ""
    ) {
      return true;
    }

    return false;
  };
  const updateMenu = () => {
    const el = ref.current;

    if (!el) {
      return;
    }

    if (shouldMenuBeHidden()) {
      el.removeAttribute("style");
      return;
    }

    const domSelection = window.getSelection();
    const domRange = domSelection?.getRangeAt(0);
    const rect = domRange
      ? domRange.getBoundingClientRect()
      : { top: 0, left: 0, width: 0 };

    el.style.opacity = "1";
    el.style.top = `${rect.top + window.scrollY - el.offsetHeight}px`;
    el.style.left = `${Math.max(
      rect.left + window.scrollX - el.offsetWidth / 2 + rect.width / 2,
      10
    )}px`;
  };

  useEffect(updateMenu);
  useEffect(() => {
    const scrollContainer = document.querySelector("[data-content-scroller]");

    if (scrollContainer) {
      const handleScroll = () => window.requestAnimationFrame(updateMenu);
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    } else return;
  });

  return (
    <Portal>
      <div ref={ref} className={classes.menu}>
        {hoverMenuButtons.map(
          ({ kind, type: format, icon, isActive, onMouseDown }) => {
            switch (kind) {
              case "mark":
                return (
                  <MarkButton
                    key={format}
                    {...{ format, icon, isActive, onMouseDown }}
                  />
                );
              case "block":
                return (
                  <BlockButton
                    key={format}
                    {...{ format, icon, isActive, onMouseDown }}
                  />
                );
              default:
                return null;
            }
          }
        )}
      </div>
    </Portal>
  );
};

export default HoverMenu;
