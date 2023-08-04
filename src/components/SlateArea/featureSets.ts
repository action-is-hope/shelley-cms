import { BlockQuoteFeature } from "./features/BlockQuoteFeature/BlockQuoteFeature";
import { BoldFeature } from "./features/BoldFeature/BoldFeature";
import { HeadingThreeFeature } from "./features/HeadingThreeFeature/HeadingThreeFeature";
import { HeadingTwoFeature } from "./features/HeadingTwoFeature/HeadingTwoFeature";
import { InfoPanelFeature } from "./features/InfoPanelFeature/InfoPanelFeature";
import { ItalicFeature } from "./features/ItalicFeature/ItalicFeature";
import { LinkFeature } from "./features/LinkFeature/LinkFeature";
import { ListFeature } from "./features/ListFeature/ListFeature";
import { ParagraphFeature } from "./features/ParagraphFeature/ParagraphFeature";
import { TableFeature } from "./features/TableFeature/TableFeature";
import { FeatureFactory } from "./slateAreaTypes";

export const defaultFeatureSet: FeatureFactory[] = [
  ParagraphFeature,
  BoldFeature
  // ItalicFeature,
  // LinkFeature,
  // HeadingTwoFeature,
  // HeadingThreeFeature,
  // BlockQuoteFeature,
  // InfoPanelFeature,
  // ListFeature,
  // TableFeature
];

export const singleLineFeatureSet: FeatureFactory[] = [
  ParagraphFeature,
  BoldFeature,
  ItalicFeature
];
