import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { carbIconRegistry } from '@/components/icons/carb';
import { colors } from '@/design/colors';
import { radius } from '@/design/radius';
import { spacing } from '@/design/spacing';
import { typography } from '@/design/typography';
import { carbGroups, type CarbGroupId } from '@/domain/carbs';
import type { MealDraft } from '@/domain/meal';

interface MealDraftSummaryProps {
  draft: MealDraft;
  totalCarbohydrates: number;
  onEdit: (groupId: CarbGroupId) => void;
  onRemove: (groupId: CarbGroupId) => void;
}

export function MealDraftSummary({
  draft,
  totalCarbohydrates,
  onEdit,
  onRemove,
}: MealDraftSummaryProps) {
  if (draft.groups.length === 0) {
    return null;
  }

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Meal draft
        </Text>

        <Text style={styles.total}>
          {totalCarbohydrates} g total
        </Text>
      </View>

      {draft.groups.map((item) => {
        const definition = carbGroups.find(
          (group) => group.id === item.groupId,
        );

        if (!definition) {
          return null;
        }

        const Icon = carbIconRegistry[item.groupId];

        return (
          <View
            key={item.groupId}
            testID={`draft-group-${item.groupId}`}
            style={styles.row}
          >
            <View style={styles.identity}>
              <View style={styles.icon}>
                <Icon
                  size={28}
                  color={colors.text}
                />
              </View>

              <View style={styles.text}>
                <Text style={styles.groupLabel}>
                  {definition.label}
                </Text>

                <Text style={styles.grams}>
                  {item.carbohydrateGrams} g
                </Text>
              </View>
            </View>

            <View style={styles.actions}>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel={`Edit ${definition.label}`}
                onPress={() => onEdit(item.groupId)}
                style={({ pressed }) => [
                  styles.action,
                  pressed && styles.pressed,
                ]}
              >
                <Text style={styles.editText}>
                  Edit
                </Text>
              </Pressable>

              <Pressable
                accessibilityRole="button"
                accessibilityLabel={`Remove ${definition.label}`}
                onPress={() => onRemove(item.groupId)}
                style={({ pressed }) => [
                  styles.action,
                  pressed && styles.pressed,
                ]}
              >
                <Text style={styles.removeText}>
                  Remove
                </Text>
              </Pressable>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    maxWidth: 700,
    alignSelf: 'center',
    marginTop: spacing.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    backgroundColor: colors.surface,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },

  title: {
    ...typography.label,
    color: colors.text,
    fontSize: 15,
  },

  total: {
    ...typography.body,
    color: colors.textSecondary,
    fontSize: 13,
  },

  row: {
    minHeight: 52,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },

  identity: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    width: 38,
    alignItems: 'center',
  },

  text: {
    flex: 1,
  },

  groupLabel: {
    ...typography.label,
    color: colors.text,
    fontSize: 13,
  },

  grams: {
    ...typography.body,
    color: colors.textSecondary,
    fontSize: 12,
  },

  actions: {
    flexDirection: 'row',
    gap: spacing.sm,
  },

  action: {
    minHeight: 40,
    justifyContent: 'center',
    paddingHorizontal: spacing.sm,
  },

  editText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.accent,
  },

  removeText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.status.error,
  },

  pressed: {
    opacity: 0.6,
  },
});
