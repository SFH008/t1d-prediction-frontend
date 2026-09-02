import type { CarbGroupId } from './carbs';

export interface MealDraftGroup {
  groupId: CarbGroupId;
  carbohydrateGrams: number;
}

export interface MealDraft {
  occurredAt: string;
  groups: MealDraftGroup[];
  glucoseMgDl?: number;
  notes?: string;
}

export function createEmptyMealDraft(
  occurredAt = new Date().toISOString(),
): MealDraft {
  return {
    occurredAt,
    groups: [],
  };
}
