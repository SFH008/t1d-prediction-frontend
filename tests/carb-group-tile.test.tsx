import {
  fireEvent,
  render,
} from '@testing-library/react-native';

import {
  FruitIcon,
} from '@/components/icons/carb';
import { carbGroups } from '@/domain/carbs';
import { CarbGroupTile } from '@/features/meal-entry/components/CarbGroupTile';

const fruit = carbGroups.find(
  (group) => group.id === 'fruit',
);

if (!fruit) {
  throw new Error('Fruit carb group is missing.');
}

describe('CarbGroupTile', () => {
  test('exposes label and selected accessibility state', async () => {
    const screen = await render(
      <CarbGroupTile
        group={fruit}
        icon={FruitIcon}
        selected
      />,
    );

    const tile = screen.getByTestId('carb-group-fruit');

    expect(tile.props.accessibilityLabel).toBe('Fruit');
    expect(tile.props.accessibilityState).toEqual({
      selected: true,
      disabled: false,
    });

    expect(
      screen.getByTestId(
        'carb-group-fruit-selected',
        { includeHiddenElements: true },
      ),
    ).toBeTruthy();
  });

  test('calls onPress when enabled', async () => {
    const onPress = jest.fn();

    const screen = await render(
      <CarbGroupTile
        group={fruit}
        icon={FruitIcon}
        onPress={onPress}
      />,
    );

    fireEvent.press(
      screen.getByTestId('carb-group-fruit'),
    );

    expect(onPress).toHaveBeenCalledTimes(1);
  });

  test('does not call onPress when disabled', async () => {
    const onPress = jest.fn();

    const screen = await render(
      <CarbGroupTile
        group={fruit}
        icon={FruitIcon}
        disabled
        onPress={onPress}
      />,
    );

    fireEvent.press(
      screen.getByTestId('carb-group-fruit'),
    );

    expect(onPress).not.toHaveBeenCalled();

    const tile = screen.getByTestId('carb-group-fruit');

    expect(tile.props.accessibilityState).toEqual({
      selected: false,
      disabled: true,
    });

    expect(
      screen.getByTestId(
        'carb-group-fruit-disabled',
        { includeHiddenElements: true },
      ),
    ).toBeTruthy();
  });
});
