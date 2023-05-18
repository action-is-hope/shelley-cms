import "./commands";
import { Project as Default } from "@actionishope/shelley/styles/default";
import { Project as CMS } from "../../src/styles/cms";

const ShelleyDark = `${Default} ${CMS}`;
// const ShelleyLight = `${Default} ${CMS} ${Light}`;
document.body.className = ShelleyDark;
