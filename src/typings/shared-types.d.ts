export type Orientation = "horizontal" | "vertical";

export interface AriaLabelingProps {
  /**
   * Defines a string value that labels the current element.
   */
  "aria-label"?: string;

  /**
   * Identifies the element (or elements) that labels the current element.
   */
  "aria-labelledby"?: string;

  /**
   * Identifies the element (or elements) that describes the object.
   */
  "aria-describedby"?: string;

  /**
   * Identifies the element (or elements) that provide a detailed, extended description for the object.
   */
  "aria-details"?: string;
}

export interface ShelleyComponentBase {
  className?: string;
  "data-id"?: string;
}

export type UserDetailsType =
  | {
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
    }
  | undefined;

export interface Site {
  name: string;
  key: string;
  siteCode?: string;
}

export type shards = Array<React.RefObject<any> | HTMLElement> | undefined;
