import {
  useCallback,
  useState,
} from 'react';

import type { CarbGroupId } from '@/domain/carbs';
import {
  createEmptyMealDraft,
  type MealDraft,
} from '@/domain/meal';
import {
  removeDraftGroup,
  totalDraftCarbohydrates,
  upsertDraftGroup,
} from '@/features/meal-entry/state/mealDraft';

export function useMealDraft() {
  const [draft, setDraft] =
    useState<MealDraft>(() => createEmptyMealDraft());

  const setGroupCarbohydrates = useCallback(
    (
      groupId: CarbGroupId,
      carbohydrateGrams: number,
    ) => {
      setDraft((current) =>
        upsertDraftGroup(
          current,
          groupId,
          carbohydrateGrams,
        ),
      );
    },
    [],
  );

  const removeGroup = useCallback(
    (groupId: CarbGroupId) => {
      setDraft((current) =>
        removeDraftGroup(current, groupId),
      );
    },
    [],
  );

  const reset = useCallback(() => {
    setDraft(createEmptyMealDraft());
  }, []);

  const getGroupCarbohydrates = useCallback(
    (groupId: CarbGroupId): number | undefined =>
      draft.groups.find(
        (group) => group.groupId === groupId,
      )?.carbohydrateGrams,
    [draft.groups],
  );

  return {
    draft,
    totalCarbohydrates:
      totalDraftCarbohydrates(draft),
    setGroupCarbohydrates,
    removeGroup,
    getGroupCarbohydrates,
    reset,
  };
}
