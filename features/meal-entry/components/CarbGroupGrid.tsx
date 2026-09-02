import type { ComponentType } from 'react';
import {
  FlatList,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';

import type { CarbIconProps } from '@/components/icons/carb';
import { getResponsiveColumnCount } from '@/design/layout';
import { spacing } from '@/design/spacing';
import type {
  CarbGroupDefinition,
  CarbGroupId,
} from '@/domain/carbs';
import { CarbGroupTile } from './CarbGroupTile';

interface CarbGroupGridProps {
  groups: readonly CarbGroupDefinition[];
  icons: Record<string, ComponentType<CarbIconProps>>;
  selectedId?: CarbGroupId;
  disabledIds?: readonly CarbGroupId[];
  onSelect?: (id: CarbGroupId) => void;
}

const MAX_CONTENT_WIDTH = 1100;

export function CarbGroupGrid({
  groups,
  icons,
  selectedId,
  disabledIds = [],
  onSelect,
}: CarbGroupGridProps) {
  const { width } = useWindowDimensions();

  const columns = getResponsiveColumnCount(width);
  const cellWidth = `${100 / columns}%` as `${number}%`;

  return (
    <View style={styles.outer}>
      <FlatList
        key={columns}
        data={[...groups]}
        numColumns={columns}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        columnWrapperStyle={
          columns > 1 ? styles.row : undefined
        }
        contentContainerStyle={styles.content}
        renderItem={({ item }) => {
          const Icon = icons[item.id];

          if (!Icon) {
            return null;
          }

          const disabled = disabledIds.includes(item.id);

          return (
            <View
              style={[
                styles.cell,
                { width: cellWidth },
              ]}
            >
              <CarbGroupTile
                group={item}
                icon={Icon}
                selected={selectedId === item.id}
                disabled={disabled}
                onPress={() => {
                  if (!disabled) {
                    onSelect?.(item.id);
                  }
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    width: '100%',
    maxWidth: MAX_CONTENT_WIDTH,
    alignSelf: 'center',
  },

  content: {
    paddingVertical: 2,
  },

  row: {
    alignItems: 'stretch',
  },

  cell: {
    padding: 4,
  },
});
