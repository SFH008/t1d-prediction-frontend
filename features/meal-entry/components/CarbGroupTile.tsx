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
          size={34}
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
    minHeight: 96,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xs,
    borderWidth: 1,
    borderRadius: radius.lg,
    position: 'relative',
  },

  selected: {
    borderWidth: 2,
  },

  pressed: {
    transform: [{ scale: 0.97 }],
    opacity: 0.88,
  },

  disabled: {
    opacity: 0.5,
  },

  iconContainer: {
    width: 52,
    height: 52,
    borderRadius: radius.full,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },

  label: {
    ...typography.label,
    color: colors.text,
    textAlign: 'center',
    lineHeight: 14,
    fontSize: 11,
  },

  disabledLabel: {
    color: colors.textSecondary,
  },

  selectedIndicator: {
    position: 'absolute',
    top: 5,
    right: 5,
    width: 22,
    height: 22,
    borderRadius: radius.full,
    justifyContent: 'center',
    alignItems: 'center',
  },

  selectedMark: {
    color: colors.surface,
    fontSize: 13,
    fontWeight: '700',
  },

  disabledBadge: {
    position: 'absolute',
    left: 4,
    right: 4,
    bottom: 3,
    alignItems: 'center',
  },

  disabledBadgeText: {
    fontSize: 9,
    fontWeight: '600',
    color: colors.textSecondary,
  },
});
