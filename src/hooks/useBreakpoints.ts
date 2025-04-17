import { useEffect, useState } from "react";
import { BREAKPOINTS } from "../constants/BREAKPOINTS";
import type { BreakpointKey } from "../constants/BREAKPOINTS";

export const useBreakpoints = () => {
  const [breakpoint, setBreakpoint] = useState<BreakpointKey>("mobile");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= parseInt(BREAKPOINTS.desktop4k)) {
        setBreakpoint("desktop4k");
      } else if (width >= parseInt(BREAKPOINTS.desktopL)) {
        setBreakpoint("desktopL");
      } else if (width >= parseInt(BREAKPOINTS.desktop)) {
        setBreakpoint("desktop");
      } else if (width >= parseInt(BREAKPOINTS.tablet)) {
        setBreakpoint("tablet");
      } else {
        setBreakpoint("mobile");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    breakpoint,
    isMobile: breakpoint === "mobile",
    isTablet: breakpoint === "tablet",
    isDesktop: breakpoint === "desktop",
    isDesktopL: breakpoint === "desktopL",
    isDesktop4k: breakpoint === "desktop4k",
  };
};
