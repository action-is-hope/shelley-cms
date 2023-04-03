export type ValidationState = "valid" | "invalid";

export interface Validation {
  /** Whether the input should display its "valid" or "invalid" visual styling. */
  validationState?: ValidationState;
  /**
   * Whether user input is required on the input before form submission.
   * Often paired with the `necessityIndicator` prop to add a visual indicator to the input.
   */
  isRequired?: boolean;
}

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
