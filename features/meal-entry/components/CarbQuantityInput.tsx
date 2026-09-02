import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { colors } from '@/design/colors';
import { radius } from '@/design/radius';
import { spacing } from '@/design/spacing';
import { typography } from '@/design/typography';

interface CarbQuantityInputProps {
  value: string;
  onChangeValue: (value: string) => void;
  onDecrease: () => void;
  onIncrease: () => void;
}

export function CarbQuantityInput({
  value,
  onChangeValue,
  onDecrease,
  onIncrease,
}: CarbQuantityInputProps) {
  return (
    <View style={styles.root}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Decrease carbohydrates"
        onPress={onDecrease}
        style={({ pressed }) => [
          styles.stepButton,
          pressed && styles.pressed,
        ]}
      >
        <Text style={styles.stepButtonText}>−</Text>
      </Pressable>

      <View style={styles.inputContainer}>
        <TextInput
          accessibilityLabel="Carbohydrate grams"
          keyboardType="decimal-pad"
          value={value}
          onChangeText={onChangeValue}
          style={styles.input}
          selectTextOnFocus
        />
        <Text style={styles.unit}>g</Text>
      </View>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Increase carbohydrates"
        onPress={onIncrease}
        style={({ pressed }) => [
          styles.stepButton,
          pressed && styles.pressed,
        ]}
      >
        <Text style={styles.stepButtonText}>+</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },

  stepButton: {
    width: 46,
    height: 46,
    borderRadius: radius.full,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
  },

  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.96 }],
  },

  stepButtonText: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.text,
  },

  inputContainer: {
    flex: 1,
    minHeight: 48,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.lg,
  },

  input: {
    flex: 1,
    ...typography.heading,
    color: colors.text,
    textAlign: 'center',
  },

  unit: {
    ...typography.body,
    color: colors.textSecondary,
  },
});
