import type { ComponentType } from 'react';

import type { CarbGroupId } from '@/domain/carbs';

import {
  BeveragesIcon,
  BologneseIcon,
  CustomIcon,
  DairyIcon,
  DessertsIcon,
  FastFoodIcon,
  FruitIcon,
  MixedMealIcon,
  PastaCookedIcon,
  PastaDryIcon,
  SnacksIcon,
  VegetablesIcon,
  type CarbIconProps,
} from './CarbIcons';

export type CarbIconRegistry = Record<
  CarbGroupId,
  ComponentType<CarbIconProps>
>;

export const carbIconRegistry: CarbIconRegistry = {
  pasta_cooked: PastaCookedIcon,
  fruit: FruitIcon,
  vegetables: VegetablesIcon,
  dairy: DairyIcon,
  snacks: SnacksIcon,
  beverages: BeveragesIcon,
  desserts: DessertsIcon,
  pasta_dry: PastaDryIcon,
  fast_food: FastFoodIcon,
  bolognese: BologneseIcon,
  mixed_meal: MixedMealIcon,
  custom: CustomIcon,
};

export {
  BeveragesIcon,
  BologneseIcon,
  CustomIcon,
  DairyIcon,
  DessertsIcon,
  FastFoodIcon,
  FruitIcon,
  MixedMealIcon,
  PastaCookedIcon,
  PastaDryIcon,
  SnacksIcon,
  VegetablesIcon,
};

export type { CarbIconProps } from './CarbIcons';
