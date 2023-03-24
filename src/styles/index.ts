/** Import Base project */
import { Project as Base } from "@actionishope/shelley/styles/default";
import { Project as Shelley, Light, Dark } from "./cms";

const themes = {
  base: Base,
  shelley: `${Base} ${Shelley}`,
  shelleyLight: `${Base} ${Shelley} ${Light}`,
  shelleyDark: `${Base} ${Shelley} ${Dark}`,
};

export default themes;
