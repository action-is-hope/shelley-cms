import ReactDOM from "react-dom";

export const Portal = ({ children }: Element) => {
  const rootElement = window.document.getElementById("root");
  rootElement && ReactDOM.createPortal(children, rootElement);
};
