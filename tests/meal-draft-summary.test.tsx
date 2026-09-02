import {
  fireEvent,
  render,
} from '@testing-library/react-native';

import type { MealDraft } from '@/domain/meal';
import { MealDraftSummary } from '@/features/meal-entry/components/MealDraftSummary';

const draft: MealDraft = {
  occurredAt: '2026-09-02T12:00:00.000Z',
  groups: [
    {
      groupId: 'fruit',
      carbohydrateGrams: 15,
    },
    {
      groupId: 'dairy',
      carbohydrateGrams: 10,
    },
  ],
};

describe('MealDraftSummary', () => {
  test('renders draft groups and total', async () => {
    const screen = await render(
      <MealDraftSummary
        draft={draft}
        totalCarbohydrates={25}
        onEdit={jest.fn()}
        onRemove={jest.fn()}
      />,
    );

    expect(screen.getByText('Fruit')).toBeTruthy();
    expect(screen.getByText('Dairy')).toBeTruthy();
    expect(screen.getByText('25 g total')).toBeTruthy();
  });

  test('calls edit for the requested group', async () => {
    const onEdit = jest.fn();

    const screen = await render(
      <MealDraftSummary
        draft={draft}
        totalCarbohydrates={25}
        onEdit={onEdit}
        onRemove={jest.fn()}
      />,
    );

    fireEvent.press(
      screen.getByLabelText('Edit Fruit'),
    );

    expect(onEdit).toHaveBeenCalledWith(
      'fruit',
    );
  });

  test('calls remove for the requested group', async () => {
    const onRemove = jest.fn();

    const screen = await render(
      <MealDraftSummary
        draft={draft}
        totalCarbohydrates={25}
        onEdit={jest.fn()}
        onRemove={onRemove}
      />,
    );

    fireEvent.press(
      screen.getByLabelText('Remove Dairy'),
    );

    expect(onRemove).toHaveBeenCalledWith(
      'dairy',
    );
  });
});
