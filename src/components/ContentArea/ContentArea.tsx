import React, { useRef, useEffect, forwardRef } from "react";
import { st, classes } from "./contentArea.st.css";
import type { ReactFocusOnProps } from "react-focus-on/dist/es5/types";
import { FocusOn } from "react-focus-on";

export interface ContentAreaProps extends React.HTMLAttributes<HTMLDivElement> {
  /** See https://www.npmjs.com/package/react-focus-on */
  /** Props for the internal `FocusOn` component see - https://github.com/theKashey/react-focus-on#api */
  focusOnProps?: Pick<
    ReactFocusOnProps,
    Exclude<keyof ReactFocusOnProps, "children">
  >;
  /** Callback with boolean status... */
  onScrolled?: (status: boolean) => void;
}

const ContentArea = forwardRef(
  (
    {
      className: classNameProp,
      children,
      focusOnProps,
      onScrolled,
      ...rest
    }: ContentAreaProps,
    ref?: React.Ref<HTMLDivElement>
  ) => {
    const slider = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
      if (slider.current !== null) {
        if (slider.current.scrollTop > 10) {
          onScrolled && onScrolled(true);
        } else if (slider.current.scrollTop < 100) {
          onScrolled && onScrolled(false);
        }
      }
    };

    useEffect(() => {
      slider?.current !== null &&
        slider.current?.addEventListener("scroll", handleScroll);
      return () => {
        slider?.current?.removeEventListener("click", handleScroll);
      };
    }, [onScrolled]);

    return (
      <FocusOn
        className={st(classes.root, classNameProp)}
        ref={ref}
        {...rest}
        {...focusOnProps}
      >
        <div className={classes.scroll} ref={slider}>
          {children}
        </div>
      </FocusOn>
    );
  }
);

ContentArea.displayName = "ContentArea";

export default ContentArea;
