import ReactDOM from "react-dom";
import type { ReactNode } from "react";

export const Portal = ({ children }: { children: ReactNode }) =>
  ReactDOM.createPortal(children, window.document.getElementById("portal")!);
