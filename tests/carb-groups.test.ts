import { carbGroups } from '@/domain/carbs';

describe('carbGroups', () => {
  test('defines exactly twelve baseline groups', () => {
    expect(carbGroups).toHaveLength(12);
  });

  test('uses unique identifiers', () => {
    const ids = carbGroups.map((group) => group.id);

    expect(new Set(ids).size).toBe(ids.length);
  });

  test('uses unique sort order values', () => {
    const order = carbGroups.map(
      (group) => group.sortOrder,
    );

    expect(new Set(order).size).toBe(order.length);
  });

  test('keeps custom as the final baseline group', () => {
    expect(carbGroups.at(-1)?.id).toBe('custom');
  });
});
