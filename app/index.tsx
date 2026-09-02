import { useMemo, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { carbIconRegistry } from '@/components/icons/carb';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { Screen } from '@/components/ui/Screen';
import { colors } from '@/design/colors';
import { radius } from '@/design/radius';
import { spacing } from '@/design/spacing';
import { typography } from '@/design/typography';
import {
  carbGroups,
  type CarbGroupId,
} from '@/domain/carbs';
import { CarbGroupGrid } from '@/features/meal-entry/components/CarbGroupGrid';
import { MealDraftSummary } from '@/features/meal-entry/components/MealDraftSummary';
import { SelectedCarbEditor } from '@/features/meal-entry/components/SelectedCarbEditor';
import { useMealDraft } from '@/features/meal-entry/hooks/useMealDraft';

const STEP_GRAMS = 5;
const DEFAULT_GRAMS = 10;

export default function HomeScreen() {
  const [selectedId, setSelectedId] =
    useState<CarbGroupId | undefined>();

  const [quantity, setQuantity] =
    useState(String(DEFAULT_GRAMS));

  const [draftAccepted, setDraftAccepted] =
    useState(false);

  const {
    draft,
    totalCarbohydrates,
    setGroupCarbohydrates,
    removeGroup,
    getGroupCarbohydrates,
  } = useMealDraft();

  const selectedGroup = useMemo(
    () =>
      carbGroups.find(
        (group) => group.id === selectedId,
      ),
    [selectedId],
  );

  const existingQuantity =
    selectedId !== undefined
      ? getGroupCarbohydrates(selectedId)
      : undefined;

  const isEditingExisting =
    existingQuantity !== undefined;

  function invalidateAcceptance() {
    setDraftAccepted(false);
  }

  function selectGroup(id: CarbGroupId) {
    const existing =
      getGroupCarbohydrates(id);

    setSelectedId(id);
    setQuantity(
      String(existing ?? DEFAULT_GRAMS),
    );
  }

  function changeQuantity(value: string) {
    setQuantity(value);
  }

  function stepQuantity(delta: number) {
    const current = Number(quantity);

    const safeCurrent =
      Number.isFinite(current)
        ? current
        : DEFAULT_GRAMS;

    const next = Math.max(
      STEP_GRAMS,
      safeCurrent + delta,
    );

    setQuantity(String(next));
  }

  function acceptGroupQuantity() {
    if (!selectedId) {
      return;
    }

    const grams = Number(quantity);

    if (
      !Number.isFinite(grams) ||
      grams <= 0
    ) {
      return;
    }

    invalidateAcceptance();

    setGroupCarbohydrates(
      selectedId,
      grams,
    );

    setSelectedId(undefined);
    setQuantity(String(DEFAULT_GRAMS));
  }

  function editGroup(id: CarbGroupId) {
    selectGroup(id);
  }

  function removeGroupFromDraft(
    id: CarbGroupId,
  ) {
    invalidateAcceptance();
    removeGroup(id);

    if (selectedId === id) {
      setSelectedId(undefined);
      setQuantity(String(DEFAULT_GRAMS));
    }
  }

  function confirmDraft() {
    setDraftAccepted(true);
  }

  return (
    <Screen>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.content}
      >
        <Text style={styles.eyebrow}>
          Meal entry
        </Text>

        <Text style={styles.title}>
          What are you eating?
        </Text>

        <Text style={styles.subtitle}>
          Choose a carbohydrate group to continue.
        </Text>

        <CarbGroupGrid
          groups={carbGroups}
          icons={carbIconRegistry}
          selectedId={selectedId}
          onSelect={selectGroup}
        />

        {selectedGroup ? (
          <View style={styles.editorCard}>
            <SelectedCarbEditor
              group={selectedGroup}
              value={quantity}
              onChangeValue={changeQuantity}
              onDecrease={() =>
                stepQuantity(-STEP_GRAMS)
              }
              onIncrease={() =>
                stepQuantity(STEP_GRAMS)
              }
            />

            <View style={styles.editorAction}>
              <PrimaryButton
                label={
                  isEditingExisting
                    ? 'Update amount'
                    : 'Add to meal'
                }
                onPress={acceptGroupQuantity}
              />
            </View>
          </View>
        ) : null}

        <MealDraftSummary
          draft={draft}
          totalCarbohydrates={
            totalCarbohydrates
          }
          onEdit={editGroup}
          onRemove={removeGroupFromDraft}
        />

        {draft.groups.length > 0 ? (
          <View style={styles.confirmation}>
            <PrimaryButton
              label={
                draftAccepted
                  ? 'Meal confirmed'
                  : 'Confirm meal'
              }
              disabled={draftAccepted}
              onPress={confirmDraft}
            />

            {draftAccepted ? (
              <Text style={styles.confirmedText}>
                Meal composition confirmed.
              </Text>
            ) : null}
          </View>
        ) : null}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: spacing.md,
    paddingTop: spacing.sm,
    paddingBottom: spacing.lg,
  },

  eyebrow: {
    ...typography.label,
    color: colors.accent,
    fontSize: 12,
    marginBottom: 2,
  },

  title: {
    ...typography.heading,
    color: colors.text,
    fontSize: 21,
    lineHeight: 25,
  },

  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
    fontSize: 13,
    lineHeight: 17,
    marginTop: 3,
    marginBottom: spacing.sm,
  },

  editorCard: {
    width: '100%',
    maxWidth: 700,
    alignSelf: 'center',
    marginTop: spacing.sm,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    backgroundColor: colors.surface,
  },

  editorAction: {
    marginTop: spacing.md,
  },

  confirmation: {
    width: '100%',
    maxWidth: 700,
    alignSelf: 'center',
    marginTop: spacing.md,
  },

  confirmedText: {
    ...typography.body,
    color: colors.status.success,
    textAlign: 'center',
    fontSize: 13,
    marginTop: spacing.sm,
  },
});
