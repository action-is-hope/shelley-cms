import type React from "react";
import { st, classes } from "./editorLayout.st.css";

export interface EditorLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {
  gridMode: "fullScreenMode" | "focusMode" | false;
}
const EditorLayout = ({
  className: classNameProp,
  children,
  gridMode = false,
  ...rest
}: EditorLayoutProps) => {
  return (
    <div
      className={st(
        classes.root,
        { gridMode: gridMode || undefined },
        classNameProp
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default EditorLayout;
