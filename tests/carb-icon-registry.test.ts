import { carbIconRegistry } from '@/components/icons/carb';
import { carbGroups } from '@/domain/carbs';

describe('carbIconRegistry', () => {
  test('contains exactly one icon for every baseline group', () => {
    const groupIds = carbGroups
      .map((group) => group.id)
      .sort();

    const iconIds = Object.keys(
      carbIconRegistry,
    ).sort();

    expect(iconIds).toEqual(groupIds);
  });

  test('every registry value is a component function', () => {
    for (const icon of Object.values(carbIconRegistry)) {
      expect(typeof icon).toBe('function');
    }
  });
});
