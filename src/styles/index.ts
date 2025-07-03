/** Import Base project */
import { root as Base } from "@actionishope/shelley/styles";
import { Project as Shelley } from "./cms";

const themes = {
  cms: `${Base as string} ${Shelley}`,
};

export default themes;
