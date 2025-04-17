export enum Breakpoint {
  MOBILE = "375px",
  TABLET = "768px",
  DESKTOP = "1024px",
  DESKTOP_L = "1440px",
  DESKTOP_4K = "2560px",
}

export const BREAKPOINTS = {
  mobile: Breakpoint.MOBILE,
  tablet: Breakpoint.TABLET,
  desktop: Breakpoint.DESKTOP,
  desktopL: Breakpoint.DESKTOP_L,
  desktop4k: Breakpoint.DESKTOP_4K,
} as const;

// Типи для брейкпоінів
export type BreakpointKey = keyof typeof BREAKPOINTS;
export type BreakpointValue = (typeof BREAKPOINTS)[BreakpointKey];

// Утиліти для медіа-запитів
export const mediaQueries = {
  up: (breakpoint: BreakpointKey) =>
    `@media (min-width: ${BREAKPOINTS[breakpoint]})`,
  down: (breakpoint: BreakpointKey) =>
    `@media (max-width: ${BREAKPOINTS[breakpoint]})`,
  between: (min: BreakpointKey, max: BreakpointKey) =>
    `@media (min-width: ${BREAKPOINTS[min]}) and (max-width: ${BREAKPOINTS[max]})`,
} as const;
