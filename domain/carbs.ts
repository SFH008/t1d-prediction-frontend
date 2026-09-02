export type CarbGroupId =
  | 'pasta_cooked'
  | 'fruit'
  | 'vegetables'
  | 'dairy'
  | 'snacks'
  | 'beverages'
  | 'desserts'
  | 'pasta_dry'
  | 'fast_food'
  | 'bolognese'
  | 'mixed_meal'
  | 'custom';

export type CarbIconKey =
  | 'pastaCooked'
  | 'fruit'
  | 'vegetables'
  | 'dairy'
  | 'snacks'
  | 'beverages'
  | 'desserts'
  | 'pastaDry'
  | 'fastFood'
  | 'bolognese'
  | 'mixedMeal'
  | 'custom';

export interface CarbGroupDefinition {
  id: CarbGroupId;
  label: string;
  iconKey: CarbIconKey;
  themeKey: keyof typeof import('@/design/colors').colors.carbs;
  sortOrder: number;
}

export const carbGroups: readonly CarbGroupDefinition[] = [
  {
    id: 'pasta_cooked',
    label: 'Pasta, cooked',
    iconKey: 'pastaCooked',
    themeKey: 'pastaCooked',
    sortOrder: 10,
  },
  {
    id: 'fruit',
    label: 'Fruit',
    iconKey: 'fruit',
    themeKey: 'fruit',
    sortOrder: 20,
  },
  {
    id: 'vegetables',
    label: 'Vegetables',
    iconKey: 'vegetables',
    themeKey: 'vegetables',
    sortOrder: 30,
  },
  {
    id: 'dairy',
    label: 'Dairy',
    iconKey: 'dairy',
    themeKey: 'dairy',
    sortOrder: 40,
  },
  {
    id: 'snacks',
    label: 'Snacks',
    iconKey: 'snacks',
    themeKey: 'snacks',
    sortOrder: 50,
  },
  {
    id: 'beverages',
    label: 'Beverages',
    iconKey: 'beverages',
    themeKey: 'beverages',
    sortOrder: 60,
  },
  {
    id: 'desserts',
    label: 'Desserts',
    iconKey: 'desserts',
    themeKey: 'desserts',
    sortOrder: 70,
  },
  {
    id: 'pasta_dry',
    label: 'Pasta, dry',
    iconKey: 'pastaDry',
    themeKey: 'pastaDry',
    sortOrder: 80,
  },
  {
    id: 'fast_food',
    label: 'Fast food',
    iconKey: 'fastFood',
    themeKey: 'fastFood',
    sortOrder: 90,
  },
  {
    id: 'bolognese',
    label: 'Bolognese',
    iconKey: 'bolognese',
    themeKey: 'bolognese',
    sortOrder: 100,
  },
  {
    id: 'mixed_meal',
    label: 'Mixed meal',
    iconKey: 'mixedMeal',
    themeKey: 'mixed',
    sortOrder: 110,
  },
  {
    id: 'custom',
    label: 'Custom',
    iconKey: 'custom',
    themeKey: 'custom',
    sortOrder: 120,
  },
] as const;
