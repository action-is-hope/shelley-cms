import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core";
import { Editor, Range } from "slate";
import { ReactEditor, useSlate } from "slate-react";
import React, { useEffect, useRef } from "react";
import { Portal } from "../../../../Portal/Portal";
import { HoverMenuButton } from "../../../slateAreaTypes";
import BlockButton from "./BlockButton";
import MarkButton from "./MarkButton";

const styles = (theme: Theme) =>
  createStyles({
    menu: {
      "&> *": {
        display: "inline-block"
      },
      "&> * + *": {
        marginLeft: "15px"
      },
      // menu styles
      "&.button": {
        color: "hotpink"
      },
      // hover menu styles
      padding: "12px",
      position: "absolute",
      zIndex: 1,
      top: "-10000px",
      left: "-10000px",
      marginTop: "-6px",
      opacity: 0,
      backgroundColor: "#333",
      borderRadius: "5px",
      transition: "opacity 0.75s"
    }
  });

interface NewHoverMenuProps extends WithStyles<typeof styles> {
  hoverMenuButtons: HoverMenuButton[];
}

const HoverMenu = ({ classes, hoverMenuButtons }: NewHoverMenuProps) => {
  const ref = useRef<any>();
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
    const { selection } = editor;

    if (!el) {
      return;
    }

    if (shouldMenuBeHidden()) {
      el.removeAttribute("style");
      return;
    }

    const domSelection = window.getSelection();
    const domRange = domSelection.getRangeAt(0);
    const rect = domRange.getBoundingClientRect();

    // @ts-ignore
    el.style.opacity = 1;
    el.style.top = `${rect.top + window.pageYOffset - el.offsetHeight}px`;
    el.style.left = `${Math.max(
      rect.left + window.pageXOffset - el.offsetWidth / 2 + rect.width / 2,
      10
    )}px`;
  };

  useEffect(updateMenu);
  useEffect(() => {
    const scrollContainer = document.querySelector("[data-scroll-cards]")!;
    const handleScroll = () => window.requestAnimationFrame(updateMenu);
    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Portal>
      <div ref={ref} className={classes.menu}>
        {hoverMenuButtons.map(({ kind, type: format, icon, isActive, onMouseDown }) => {
          if (kind === "mark")
            return <MarkButton key={format} {...{ format, icon, isActive, onMouseDown }} />;
          if (kind === "block")
            return <BlockButton key={format} {...{ format, icon, isActive, onMouseDown }} />;
        })}
      </div>
    </Portal>
  );
};

export default withStyles(styles)(HoverMenu);
