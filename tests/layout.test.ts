import { getResponsiveColumnCount } from '../design/layout';

describe('getResponsiveColumnCount', () => {
  it('uses three columns for compact phone layouts', () => {
    expect(getResponsiveColumnCount(390)).toBe(3);
  });

  it('uses three columns for medium layouts', () => {
    expect(getResponsiveColumnCount(600)).toBe(3);
  });

  it('uses four columns for expanded layouts', () => {
    expect(getResponsiveColumnCount(768)).toBe(4);
  });

  it('keeps breakpoint boundaries deterministic', () => {
    expect(getResponsiveColumnCount(499)).toBe(3);
    expect(getResponsiveColumnCount(500)).toBe(3);
    expect(getResponsiveColumnCount(767)).toBe(3);
    expect(getResponsiveColumnCount(768)).toBe(4);
  });
});
