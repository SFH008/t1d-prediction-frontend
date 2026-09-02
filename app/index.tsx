import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

import { carbIconRegistry } from '@/components/icons/carb';
import { Screen } from '@/components/ui/Screen';
import { colors } from '@/design/colors';
import { spacing } from '@/design/spacing';
import { typography } from '@/design/typography';
import {
  carbGroups,
  type CarbGroupId,
} from '@/domain/carbs';
import { CarbGroupGrid } from '@/features/meal-entry/components/CarbGroupGrid';

export default function HomeScreen() {
  const [selected, setSelected] =
    useState<CarbGroupId | undefined>();

  return (
    <Screen>
      <ScrollView
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
          selectedId={selected}
          onSelect={setSelected}
        />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: spacing.lg,
    paddingTop: spacing.xl,
  },

  eyebrow: {
    ...typography.label,
    color: colors.accent,
    marginBottom: spacing.sm,
  },

  title: {
    ...typography.heading,
    color: colors.text,
  },

  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
    marginTop: spacing.sm,
    marginBottom: spacing.lg,
  },
});
