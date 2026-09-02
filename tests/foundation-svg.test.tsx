import { render } from '@testing-library/react-native';

import { FoundationSvgIcon } from '@/components/icons/FoundationSvgIcon';

describe('FoundationSvgIcon', () => {
  test('renders through react-native-svg', async () => {
    const screen = await render(
      <FoundationSvgIcon size={32} />,
    );

    expect(
      screen.getByTestId('foundation-svg-icon'),
    ).toBeTruthy();
  });
});
