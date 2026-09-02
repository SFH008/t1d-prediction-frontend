import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { carbIconRegistry } from '@/components/icons/carb';
import { colors } from '@/design/colors';
import { spacing } from '@/design/spacing';
import { typography } from '@/design/typography';
import type { CarbGroupDefinition } from '@/domain/carbs';

import { CarbQuantityInput } from './CarbQuantityInput';

interface SelectedCarbEditorProps {
  group: CarbGroupDefinition;
  value: string;
  onChangeValue: (value: string) => void;
  onDecrease: () => void;
  onIncrease: () => void;
}

export function SelectedCarbEditor({
  group,
  value,
  onChangeValue,
  onDecrease,
  onIncrease,
}: SelectedCarbEditorProps) {
  const Icon = carbIconRegistry[group.id];

  return (
    <View style={styles.root}>
      <View style={styles.heading}>
        <Icon size={36} color={colors.text} />

        <View style={styles.headingText}>
          <Text style={styles.label}>
            {group.label}
          </Text>
          <Text style={styles.helper}>
            Enter carbohydrate amount
          </Text>
        </View>
      </View>

      <CarbQuantityInput
        value={value}
        onChangeValue={onChangeValue}
        onDecrease={onDecrease}
        onIncrease={onIncrease}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    gap: spacing.sm,
  },

  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },

  headingText: {
    flex: 1,
  },

  label: {
    ...typography.label,
    color: colors.text,
    fontSize: 15,
  },

  helper: {
    ...typography.body,
    color: colors.textSecondary,
    fontSize: 12,
  },
});
