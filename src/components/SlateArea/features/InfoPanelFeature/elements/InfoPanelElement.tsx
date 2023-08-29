import Info from "../../../../icons/Info";
import { classes } from "./infoPanel.st.css";

const InfoPanelElement = ({ attributes, children }: Element) => (
  <aside className={classes.root} {...attributes}>
    <Info className={classes.icon} />
    <div>{children}</div>
  </aside>
);

export default InfoPanelElement;
