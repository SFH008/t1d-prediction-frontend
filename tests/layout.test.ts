import { getResponsiveColumnCount } from '@/design/layout';

describe('getResponsiveColumnCount', () => {
  test('compact width uses two columns', () => {
    expect(getResponsiveColumnCount(375)).toBe(2);
  });

  test('medium width uses three columns', () => {
    expect(getResponsiveColumnCount(600)).toBe(3);
  });

  test('expanded width uses four columns', () => {
    expect(getResponsiveColumnCount(768)).toBe(4);
  });

  test('breakpoint boundaries are deterministic', () => {
    expect(getResponsiveColumnCount(499)).toBe(2);
    expect(getResponsiveColumnCount(500)).toBe(3);
    expect(getResponsiveColumnCount(767)).toBe(3);
    expect(getResponsiveColumnCount(768)).toBe(4);
  });
});
