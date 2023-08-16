import React from "react";
import Info from "../../../../icons/Info";
import { classes } from "./infoPanel.st.css";

type InfoPanelElementProps = Element;

const InfoPanelElement = ({ attributes, children }: InfoPanelElementProps) => (
  <aside className={classes.root} {...attributes}>
    <Info className={classes.icon} />
    <div>{children}</div>
  </aside>
);

export default InfoPanelElement;
