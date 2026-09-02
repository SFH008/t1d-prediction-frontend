import { StyleSheet, Text, View } from 'react-native';

import { FoundationSvgIcon } from '@/components/icons/FoundationSvgIcon';
import { colors } from '@/design/colors';
import { spacing } from '@/design/spacing';
import { typography } from '@/design/typography';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FoundationSvgIcon />

      <Text style={styles.title}>T1D Prediction App</Text>

      <Text style={styles.subtitle}>
        Frontend foundation ready
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
    padding: spacing.xl,
  },

  title: {
    ...typography.heading,
    color: colors.text,
    marginTop: spacing.lg,
  },

  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
    marginTop: spacing.md,
  },
});
