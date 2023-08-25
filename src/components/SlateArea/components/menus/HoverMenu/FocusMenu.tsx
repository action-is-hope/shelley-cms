import { Node, Transforms } from "slate";
import { ReactEditor, useSlate } from "slate-react";
import React, { useEffect, useRef, useState } from "react";
import type { FocusMenuButtonMap } from "../../../slateAreaTypes";
import HoverMenuButton from "./HoverMenuButton";
import { classes } from "./hoverMenu.st.css";

/** We key the display state by node id to make the state work correctly when multiple images are
 * added, since there is only one instance of the menu. */
interface DisplayState {
  [nodeId: string]: string;
}

// interface NodeType {
//   type: string;
//   data: { id: string; display: string };
// }

export interface FocusMenuProps {
  focusMenuButtons: FocusMenuButtonMap;
}

const FocusMenu = ({ focusMenuButtons }: FocusMenuProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const editor = useSlate();
  const [displayState, setDisplayState] = useState<DisplayState>({});
  const validBlockTypes = Object.keys(focusMenuButtons);

  const updateMenu = () => {
    const node = getNode();
    const el = ref.current;
    const { selection } = editor;

    if (!el) {
      return;
    }

    if (!selection || !node || !validBlockTypes.includes(node.type)) {
      el.removeAttribute("style");
      return;
    }

    /**
     * Getting the DOM node as usual (like in the hover menu) only gives us the
     * empty span within the void node. To solve this we get the grandparent of
     * that node. This is a obviously a bit of a hack and might need changing
     * later.
     */
    const findNativeVoidNode = () => {
      const node = Node.get(editor, editor.selection!.anchor.path);
      if (!node) return;
      return ReactEditor.toDOMNode(editor, node).parentElement!.parentElement!;
    };

    const nativeNode = findNativeVoidNode();
    if (!nativeNode) return;

    const nativeRect = nativeNode.getBoundingClientRect();
    const parentRect = nativeNode.parentElement!.getBoundingClientRect();

    el.style.opacity = "1";
    el.style.top = `${nativeRect.top - parentRect.top - el.offsetHeight / 2}px`;
    el.style.left = `${nativeRect.left - parentRect.left}px`;
  };

  useEffect(updateMenu);
  useEffect(() => {
    // const scrollContainer = document.querySelector("[data-scroll-cards]")!;
    // const handleScroll = () => window.requestAnimationFrame(updateMenu);
    // scrollContainer.addEventListener("scroll", handleScroll);
    // return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  const onClickButton = (
    event: React.MouseEvent<HTMLElement>,
    // nodeId,
    type: string
  ) => {
    // console.log("@todo", nodeId);
    event.preventDefault();
    setDisplay(type);
  };

  const renderButtons = () => {
    const node = getNode();
    if (!node) return null;

    const featureMenuButtons = focusMenuButtons[node.type];
    if (!featureMenuButtons) return null;
    return featureMenuButtons.map(({ type, icon }) => (
      <HoverMenuButton
        key={type}
        icon={icon}
        // Unlike in the hover menu, for some reason the node doesn't
        // update when we click the buttons. Therefore we introduce some state.
        // @todo: figure out why and remove the local state.
        isActive={
          displayState[node.data.id]
            ? displayState[node.data.id] === type
            : isActive(type)
        }
        // onMouseDown={(event) => onClickButton(event, node.data.id, type)}
        onMouseDown={(event) => onClickButton(event, type)}
      />
    ));
  };

  const getNode = (): any =>
    editor.selection ? Node.parent(editor, editor.selection.anchor.path) : null;

  const setDisplay = (display: string) => {
    const node = getNode();
    if (!node) return;

    setDisplayState({ ...displayState, [node.data.id]: display });

    Transforms.setNodes<Node>(
      editor,
      { data: { ...node.data, display } },
      {
        match: (n) => {
          if (!n.data) return false;
          return node.data.id === n.data.id;
        },
      }
    );
  };

  const isActive = (type: string) => {
    const node = getNode();
    if (!node) return false;

    const { display } = node.data;
    return display === type;
  };

  return (
    <div ref={ref} className={classes.menu}>
      {renderButtons()}
    </div>
  );
};

export default FocusMenu;
