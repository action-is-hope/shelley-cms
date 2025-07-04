import "./commands";
import { root } from "@actionishope/shelley/styles";
import { Project as CMS } from "../../src/styles/cms";

const ShelleyDark = `${root} ${CMS}`;
// const ShelleyLight = `${Default} ${CMS} ${Light}`;
document.body.className = ShelleyDark;
