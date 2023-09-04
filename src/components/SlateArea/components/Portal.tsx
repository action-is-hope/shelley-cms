import ReactDOM from "react-dom";

export const Portal = ({ children }: any) =>
  ReactDOM.createPortal(children, window.document.getElementById("root")!);
