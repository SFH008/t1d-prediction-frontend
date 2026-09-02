import type { ComponentType } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import type { CarbIconProps } from '@/components/icons/carb';
import { colors } from '@/design/colors';
import { radius } from '@/design/radius';
import { spacing } from '@/design/spacing';
import { typography } from '@/design/typography';
import type { CarbGroupDefinition } from '@/domain/carbs';

interface CarbGroupTileProps {
  group: CarbGroupDefinition;
  icon: ComponentType<CarbIconProps>;
  selected?: boolean;
  disabled?: boolean;
  onPress?: () => void;
}

export function CarbGroupTile({
  group,
  icon: Icon,
  selected = false,
  disabled = false,
  onPress,
}: CarbGroupTileProps) {
  const accent = colors.carbs[group.themeKey];

  return (
    <Pressable
      testID={`carb-group-${group.id}`}
      accessibilityRole="button"
      accessibilityLabel={group.label}
      accessibilityHint={
        disabled
          ? 'This carbohydrate group is currently unavailable.'
          : selected
            ? 'Selected carbohydrate group.'
            : 'Select this carbohydrate group.'
      }
      accessibilityState={{
        selected,
        disabled,
      }}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.tile,
        {
          borderColor: selected ? accent : colors.border,
          backgroundColor: selected
            ? `${accent}20`
            : colors.surface,
        },
        selected && styles.selected,
        pressed && !disabled && styles.pressed,
        disabled && styles.disabled,
      ]}
    >
      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor: `${accent}22`,
          },
        ]}
      >
        <Icon
          size={60}
          color={disabled ? colors.textSecondary : colors.text}
        />
      </View>

      <Text
        style={[
          styles.label,
          disabled && styles.disabledLabel,
        ]}
        numberOfLines={2}
      >
        {group.label}
      </Text>

      {selected ? (
        <View
          testID={`carb-group-${group.id}-selected`}
          accessibilityElementsHidden
          importantForAccessibility="no-hide-descendants"
          style={[
            styles.selectedIndicator,
            {
              backgroundColor: accent,
            },
          ]}
        >
          <Text style={styles.selectedMark}>✓</Text>
        </View>
      ) : null}

      {disabled ? (
        <View
          testID={`carb-group-${group.id}-disabled`}
          accessibilityElementsHidden
          importantForAccessibility="no-hide-descendants"
          style={styles.disabledBadge}
        >
          <Text style={styles.disabledBadgeText}>
            Unavailable
          </Text>
        </View>
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tile: {
    minHeight: 168,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.lg,
    borderWidth: 1,
    borderRadius: radius.lg,
    position: 'relative',
  },

  selected: {
    borderWidth: 3,
  },

  pressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.88,
  },

  disabled: {
    opacity: 0.5,
  },

  iconContainer: {
    width: 88,
    height: 88,
    borderRadius: radius.full,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
  },

  label: {
    ...typography.label,
    color: colors.text,
    textAlign: 'center',
    lineHeight: 19,
  },

  disabledLabel: {
    color: colors.textSecondary,
  },

  selectedIndicator: {
    position: 'absolute',
    top: spacing.sm,
    right: spacing.sm,
    width: 26,
    height: 26,
    borderRadius: radius.full,
    justifyContent: 'center',
    alignItems: 'center',
  },

  selectedMark: {
    color: colors.surface,
    fontSize: 15,
    fontWeight: '700',
  },

  disabledBadge: {
    position: 'absolute',
    left: spacing.sm,
    right: spacing.sm,
    bottom: spacing.sm,
    alignItems: 'center',
  },

  disabledBadgeText: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.textSecondary,
  },
});
