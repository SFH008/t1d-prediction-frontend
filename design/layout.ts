import { breakpoints } from './breakpoints';

export function getResponsiveColumnCount(width: number): number {
  if (width <= breakpoints.compactMax) {
    return 2;
  }

  if (width <= breakpoints.mediumMax) {
    return 3;
  }

  return 4;
}
