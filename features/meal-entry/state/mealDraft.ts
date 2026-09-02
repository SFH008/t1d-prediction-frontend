import type {
  MealDraft,
  MealDraftGroup,
} from '@/domain/meal';
import type { CarbGroupId } from '@/domain/carbs';

export class MealDraftValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'MealDraftValidationError';
  }
}

export function validateCarbohydrateGrams(
  grams: number,
): void {
  if (!Number.isFinite(grams)) {
    throw new MealDraftValidationError(
      'Carbohydrate amount must be a finite number.',
    );
  }

  if (grams <= 0) {
    throw new MealDraftValidationError(
      'Carbohydrate amount must be greater than zero.',
    );
  }

  if (grams > 1000) {
    throw new MealDraftValidationError(
      'Carbohydrate amount is outside the supported range.',
    );
  }
}

export function upsertDraftGroup(
  draft: MealDraft,
  groupId: CarbGroupId,
  carbohydrateGrams: number,
): MealDraft {
  validateCarbohydrateGrams(carbohydrateGrams);

  const existingIndex = draft.groups.findIndex(
    (group) => group.groupId === groupId,
  );

  const nextGroup: MealDraftGroup = {
    groupId,
    carbohydrateGrams,
  };

  if (existingIndex === -1) {
    return {
      ...draft,
      groups: [...draft.groups, nextGroup],
    };
  }

  return {
    ...draft,
    groups: draft.groups.map((group, index) =>
      index === existingIndex
        ? nextGroup
        : group,
    ),
  };
}

export function removeDraftGroup(
  draft: MealDraft,
  groupId: CarbGroupId,
): MealDraft {
  return {
    ...draft,
    groups: draft.groups.filter(
      (group) => group.groupId !== groupId,
    ),
  };
}

export function totalDraftCarbohydrates(
  draft: MealDraft,
): number {
  return draft.groups.reduce(
    (total, group) =>
      total + group.carbohydrateGrams,
    0,
  );
}
