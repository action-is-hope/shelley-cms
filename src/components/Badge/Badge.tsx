import React, { forwardRef, ReactNode, Ref } from "react";
import { st, classes } from "./badge.st.css";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  badgeContent?: ReactNode;
  dot?: boolean;
  invisible?: boolean;
  showZero?: boolean;
  position?: "topStart" | "topEnd" | "bottomStart" | "bottomEnd";
}
const Badge = forwardRef(
  (
    {
      badgeContent,
      className: classNameProp,
      children,
      dot,
      invisible: invisibleProp = false,
      position = "topEnd",
      showZero = false,
      ...rest
    }: BadgeProps,
    ref?: Ref<HTMLSpanElement>
  ) => {
    const invisible = invisibleProp || (badgeContent === 0 && !showZero);
    return (
      <span
        className={st(
          classes.root,
          {
            position,
            invisible,
          },
          classNameProp
        )}
        {...rest}
        ref={ref}
      >
        {children}
        <span className={classes.badge}>{badgeContent}</span>
      </span>
    );
  }
);

Badge.displayName = "Badge";

export default Badge;

// Badge.propTypes = {
//   // ----------------------------- Warning --------------------------------
//   // | These PropTypes are generated from the TypeScript type definitions |
//   // |     To update them edit the d.ts file and run "yarn proptypes"     |
//   // ----------------------------------------------------------------------
//   /**
//    * The anchor of the badge.
//    * @default {
//    *   vertical: 'top',
//    *   horizontal: 'right',
//    * }
//    */
//   anchorOrigin: PropTypes.shape({
//     horizontal: PropTypes.oneOf(["left", "right"]).isRequired,
//     vertical: PropTypes.oneOf(["bottom", "top"]).isRequired
//   }),
//   /**
//    * The content rendered within the badge.
//    */
//   badgeContent: PropTypes.node,
//   /**
//    * The badge will be added relative to this node.
//    */
//   children: PropTypes.node,
//   /**
//    * Override or extend the styles applied to the component.
//    * @default {}
//    */
//   classes: PropTypes.object,
//   /**
//    * The color of the component. It supports those theme colors that make sense for this component.
//    * @default 'default'
//    */
//   color: PropTypes.oneOf(["default", "error", "primary", "secondary"]),
//   /**
//    * The components used for each slot inside the Badge.
//    * Either a string to use a HTML element or a component.
//    * @default {}
//    */
//   components: PropTypes.shape({
//     Badge: PropTypes.elementType,
//     Root: PropTypes.elementType
//   }),
//   /**
//    * The props used for each slot inside the Badge.
//    * @default {}
//    */
//   componentsProps: PropTypes.object,
//   /**
//    * If `true`, the badge is invisible.
//    */
//   invisible: PropTypes.bool,
//   /**
//    * Max count to show.
//    * @default 99
//    */
//   max: PropTypes.number,
//   /**
//    * Wrapped shape the badge should overlap.
//    * @default 'rectangular'
//    */
//   overlap: PropTypes.oneOf(["circular", "rectangular"]),
//   /**
//    * Controls whether the badge is hidden when `badgeContent` is zero.
//    * @default false
//    */
//   showZero: PropTypes.bool,
//   /**
//    * The system prop that allows defining system overrides as well as additional CSS styles.
//    */
//   sx: PropTypes.object,
//   /**
//    * The variant to use.
//    * @default 'standard'
//    */
//   variant: PropTypes /* @typescript-to-proptypes-ignore */.oneOfType([
//     PropTypes.oneOf(["dot", "standard"]),
//     PropTypes.string
//   ])
// };
