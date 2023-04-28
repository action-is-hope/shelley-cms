import React, { forwardRef } from "react";
import { st, classes } from "./editorLayout.st.css";
export interface EditorLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {
  gridMode: "fullScreenMode" | "focusMode" | false;
}

function EditorLayout(
  props: EditorLayoutProps,
  ref?: React.Ref<HTMLDivElement>
) {
  const {
    className: classNameProp,
    children,
    gridMode = false,
    ...rest
  } = props;
  return (
    <div
      className={st(
        classes.root,
        { gridMode: gridMode || undefined },
        classNameProp
      )}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  );
}

/**
 * EditorLayout defines the main grid for the editor screens and
 * some variants on that grid for fullScreenMode and focusMode editing.
 */
const _EditorLayout = forwardRef(EditorLayout);
export { _EditorLayout as EditorLayout };
