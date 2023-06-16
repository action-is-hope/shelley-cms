import { useLayoutEffect, useState } from "react";
import { debounce } from "lodash";

const useIsDevice = (
  device?: "sm" | "md" | "lg" | "xl" | "xxl" | number
): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  const lookUp = {
    sm: {
      width: 568,
    },
    md: {
      width: 950,
    },
    lg: {
      width: 1200,
    },
    xl: {
      width: 1600,
    },
    xxl: {
      width: 1800,
    },
  };

  const ceilingValue = device
    ? typeof device === "number"
      ? device
      : lookUp[device].width
    : 700;

  useLayoutEffect(() => {
    const updateSize = (): void => {
      setIsMobile(window.innerWidth < ceilingValue);
    };
    window.addEventListener("resize", debounce(updateSize, 250));
    updateSize();
    return (): void => window.removeEventListener("resize", updateSize);
  }, [ceilingValue]);

  return isMobile;
};

export default useIsDevice;
