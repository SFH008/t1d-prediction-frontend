import { createEmptyMealDraft } from '@/domain/meal';
import {
  MealDraftValidationError,
  removeDraftGroup,
  totalDraftCarbohydrates,
  upsertDraftGroup,
  validateCarbohydrateGrams,
} from '@/features/meal-entry/state/mealDraft';

describe('MealDraft', () => {
  test('creates an empty draft', () => {
    const draft = createEmptyMealDraft(
      '2026-09-02T12:00:00.000Z',
    );

    expect(draft).toEqual({
      occurredAt: '2026-09-02T12:00:00.000Z',
      groups: [],
    });
  });

  test('adds multiple carbohydrate groups', () => {
    let draft = createEmptyMealDraft();

    draft = upsertDraftGroup(
      draft,
      'pasta_cooked',
      45,
    );

    draft = upsertDraftGroup(
      draft,
      'fruit',
      15,
    );

    expect(draft.groups).toHaveLength(2);
    expect(totalDraftCarbohydrates(draft)).toBe(60);
  });

  test('updates an existing group without duplicating it', () => {
    let draft = createEmptyMealDraft();

    draft = upsertDraftGroup(
      draft,
      'fruit',
      15,
    );

    draft = upsertDraftGroup(
      draft,
      'fruit',
      22,
    );

    expect(draft.groups).toEqual([
      {
        groupId: 'fruit',
        carbohydrateGrams: 22,
      },
    ]);
  });

  test('removes a group without affecting others', () => {
    let draft = createEmptyMealDraft();

    draft = upsertDraftGroup(
      draft,
      'fruit',
      15,
    );

    draft = upsertDraftGroup(
      draft,
      'dairy',
      10,
    );

    draft = removeDraftGroup(
      draft,
      'fruit',
    );

    expect(draft.groups).toEqual([
      {
        groupId: 'dairy',
        carbohydrateGrams: 10,
      },
    ]);
  });

  test('rejects zero carbohydrate amounts', () => {
    expect(() =>
      validateCarbohydrateGrams(0),
    ).toThrow(MealDraftValidationError);
  });

  test('rejects negative carbohydrate amounts', () => {
    expect(() =>
      validateCarbohydrateGrams(-5),
    ).toThrow(MealDraftValidationError);
  });

  test('rejects non-finite carbohydrate amounts', () => {
    expect(() =>
      validateCarbohydrateGrams(Number.NaN),
    ).toThrow(MealDraftValidationError);

    expect(() =>
      validateCarbohydrateGrams(Infinity),
    ).toThrow(MealDraftValidationError);
  });
});
