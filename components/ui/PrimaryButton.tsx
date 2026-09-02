import {
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';

import { colors } from '@/design/colors';
import { radius } from '@/design/radius';
import { spacing } from '@/design/spacing';

interface PrimaryButtonProps {
  label: string;
  disabled?: boolean;
  onPress: () => void;
}

export function PrimaryButton({
  label,
  disabled = false,
  onPress,
}: PrimaryButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        disabled && styles.disabled,
        pressed && !disabled && styles.pressed,
      ]}
    >
      <Text style={styles.label}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: radius.lg,
    backgroundColor: colors.accent,
    paddingHorizontal: spacing.lg,
  },

  label: {
    color: colors.surface,
    fontSize: 16,
    fontWeight: '700',
  },

  pressed: {
    opacity: 0.85,
    transform: [{ scale: 0.99 }],
  },

  disabled: {
    opacity: 0.4,
  },
});
