import type React from "react";
import type { ReactElement } from "react";
import { useSlate } from "slate-react";
import { ExtendedEditor } from "../../../ExtendedEditor";
import HoverMenuButton from "./HoverMenuButton";
import type { Editor } from "slate";

interface BlockButtonProps {
  format: string;
  icon: ReactElement;
  onMouseDown?: (editor: Editor) => void;
  isActive?: (editor: Editor) => boolean;
}

const BlockButton = (props: BlockButtonProps) => {
  const editor = useSlate();
  const defaultOnMouseDown = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    event.preventDefault();
    ExtendedEditor.toggleBlock(editor, props.format);
  };
  const defaultIsActive = ExtendedEditor.isBlockActive(editor, props.format);

  const propsOnMouseDown = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    event.preventDefault();
    props?.onMouseDown?.(editor);
  };

  const isActive = props?.isActive?.(editor) ?? defaultIsActive;
  const onMouseDown = props?.onMouseDown
    ? propsOnMouseDown
    : defaultOnMouseDown;

  return (
    <HoverMenuButton
      icon={props.icon}
      onMouseDown={onMouseDown}
      isActive={isActive}
    />
  );
};

export default BlockButton;
