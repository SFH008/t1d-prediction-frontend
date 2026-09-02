import {
  fireEvent,
  render,
} from '@testing-library/react-native';

import { PrimaryButton } from '@/components/ui/PrimaryButton';

describe('PrimaryButton', () => {
  test('calls onPress when enabled', async () => {
    const onPress = jest.fn();

    const screen = await render(
      <PrimaryButton
        label="Confirm meal"
        onPress={onPress}
      />,
    );

    fireEvent.press(
      screen.getByLabelText('Confirm meal'),
    );

    expect(onPress).toHaveBeenCalledTimes(1);
  });

  test('does not call onPress when disabled', async () => {
    const onPress = jest.fn();

    const screen = await render(
      <PrimaryButton
        label="Meal confirmed"
        disabled
        onPress={onPress}
      />,
    );

    fireEvent.press(
      screen.getByLabelText('Meal confirmed'),
    );

    expect(onPress).not.toHaveBeenCalled();
  });
});
