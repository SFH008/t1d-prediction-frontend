import { render } from '@testing-library/react-native';

import { carbIconRegistry } from '@/components/icons/carb';
import { carbGroups } from '@/domain/carbs';
import { CarbGroupGrid } from '@/features/meal-entry/components/CarbGroupGrid';

describe('CarbGroupGrid', () => {
  test('renders all twelve baseline groups', async () => {
    const screen = await render(
      <CarbGroupGrid
        groups={carbGroups}
        icons={carbIconRegistry}
      />,
    );

    for (const group of carbGroups) {
      expect(
        screen.getByText(group.label),
      ).toBeTruthy();
    }
  });

  test('passes selected and disabled states to tiles', async () => {
    const screen = await render(
      <CarbGroupGrid
        groups={carbGroups}
        icons={carbIconRegistry}
        selectedId="fruit"
        disabledIds={['custom']}
      />,
    );

    expect(
      screen.getByTestId('carb-group-fruit').props
        .accessibilityState,
    ).toEqual({
      selected: true,
      disabled: false,
    });

    expect(
      screen.getByTestId('carb-group-custom').props
        .accessibilityState,
    ).toEqual({
      selected: false,
      disabled: true,
    });
  });
});
