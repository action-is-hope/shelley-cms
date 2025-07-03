/** Import Base project */
import { root as Base } from "@actionishope/shelley/styles";
import { Project as Shelley, Light, Dark } from "./cms";

const themes = {
  base: Base,
  shelley: `${Base} ${Shelley}`,
  shelleyLight: `${Base} ${Shelley} ${Light}`,
  shelleyDark: `${Base} ${Shelley} ${Dark}`,
};

export default themes;
