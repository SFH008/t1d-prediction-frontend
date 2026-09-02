import type { ReactNode } from 'react';
import Svg, {
  Circle,
  G,
  Line,
  Path,
  Rect,
} from 'react-native-svg';

export interface CarbIconProps {
  size?: number;
  color?: string;
}

function IconFrame({
  size = 64,
  children,
}: {
  size?: number;
  children: ReactNode;
}) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      {children}
    </Svg>
  );
}

export function PastaCookedIcon({
  size = 64,
  color = '#1C1C1E',
}: CarbIconProps) {
  return (
    <IconFrame size={size}>
      <G
        fill="none"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      >
        <Path d="M4 8c2-2 3 2 5 0s3 2 5 0 3 2 6 0" />
        <Path d="M4 12c2-2 3 2 5 0s3 2 5 0 3 2 6 0" />
        <Path d="M4 16c2-2 3 2 5 0s3 2 5 0 3 2 6 0" />
      </G>
    </IconFrame>
  );
}

export function FruitIcon({
  size = 64,
  color = '#1C1C1E',
}: CarbIconProps) {
  return (
    <IconFrame size={size}>
      <Path
        d="M12 7c-4 0-7 2.8-7 6.5S7.7 20 12 20s7-2.8 7-6.5S16 7 12 7Z"
        fill="none"
        stroke={color}
        strokeWidth="1.8"
      />
      <Path
        d="M12 7c0-2 1.2-3.4 3.5-4"
        fill="none"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <Path
        d="M14 5c1.7-.5 3.2 0 4 1.5-1.6.6-3 .3-4-1.5Z"
        fill={color}
      />
    </IconFrame>
  );
}

export function VegetablesIcon({
  size = 64,
  color = '#1C1C1E',
}: CarbIconProps) {
  return (
    <IconFrame size={size}>
      <Circle
        cx="12"
        cy="12"
        r="4.5"
        fill="none"
        stroke={color}
        strokeWidth="1.8"
      />
      <Circle
        cx="8"
        cy="9"
        r="3"
        fill="none"
        stroke={color}
        strokeWidth="1.6"
      />
      <Circle
        cx="16"
        cy="9"
        r="3"
        fill="none"
        stroke={color}
        strokeWidth="1.6"
      />
      <Rect
        x="10.5"
        y="15"
        width="3"
        height="5"
        rx="1"
        fill={color}
      />
    </IconFrame>
  );
}

export function DairyIcon({
  size = 64,
  color = '#1C1C1E',
}: CarbIconProps) {
  return (
    <IconFrame size={size}>
      <Path
        d="M8 4h8l2 4v12H6V8l2-4Z"
        fill="none"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <Line
        x1="6"
        y1="9"
        x2="18"
        y2="9"
        stroke={color}
        strokeWidth="1.5"
      />
      <Circle cx="12" cy="14" r="2.3" fill={color} />
    </IconFrame>
  );
}

export function SnacksIcon({
  size = 64,
  color = '#1C1C1E',
}: CarbIconProps) {
  return (
    <IconFrame size={size}>
      <Path
        d="M7 4h10l1 16H6L7 4Z"
        fill="none"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <Path
        d="M8 8h8"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Circle cx="10" cy="13" r="1.2" fill={color} />
      <Circle cx="14" cy="15" r="1.2" fill={color} />
    </IconFrame>
  );
}

export function BeveragesIcon({
  size = 64,
  color = '#1C1C1E',
}: CarbIconProps) {
  return (
    <IconFrame size={size}>
      <Path
        d="M7 6h10l-1 14H8L7 6Z"
        fill="none"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <Line
        x1="10"
        y1="6"
        x2="14"
        y2="3"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <Line
        x1="9"
        y1="11"
        x2="15"
        y2="11"
        stroke={color}
        strokeWidth="1.4"
      />
    </IconFrame>
  );
}

export function DessertsIcon({
  size = 64,
  color = '#1C1C1E',
}: CarbIconProps) {
  return (
    <IconFrame size={size}>
      <Path
        d="M6 18h12L15 9H9l-3 9Z"
        fill="none"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <Path
        d="M9 9c1-3 5-3 6 0"
        fill="none"
        stroke={color}
        strokeWidth="1.6"
      />
      <Circle cx="12" cy="5" r="1.4" fill={color} />
    </IconFrame>
  );
}

export function PastaDryIcon({
  size = 64,
  color = '#1C1C1E',
}: CarbIconProps) {
  return (
    <IconFrame size={size}>
      {[7, 10, 13, 16].map((x) => (
        <Rect
          key={x}
          x={x}
          y="4"
          width="1.6"
          height="16"
          rx="0.8"
          fill={color}
        />
      ))}
    </IconFrame>
  );
}

export function FastFoodIcon({
  size = 64,
  color = '#1C1C1E',
}: CarbIconProps) {
  return (
    <IconFrame size={size}>
      <Path
        d="M5 11c1-4 3.5-6 7-6s6 2 7 6H5Z"
        fill="none"
        stroke={color}
        strokeWidth="1.8"
      />
      <Line
        x1="5"
        y1="13"
        x2="19"
        y2="13"
        stroke={color}
        strokeWidth="1.8"
      />
      <Path
        d="M6 15h12l-2 4H8l-2-4Z"
        fill="none"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </IconFrame>
  );
}

export function BologneseIcon({
  size = 64,
  color = '#1C1C1E',
}: CarbIconProps) {
  return (
    <IconFrame size={size}>
      <Path
        d="M5 8h14l-1 10c-.1 1.2-.8 2-2 2H8c-1.2 0-1.9-.8-2-2L5 8Z"
        fill="none"
        stroke={color}
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <Circle cx="9" cy="13" r="1.3" fill={color} />
      <Circle cx="14.5" cy="14" r="1.3" fill={color} />
      <Circle cx="12" cy="16.5" r="1" fill={color} />
    </IconFrame>
  );
}

export function MixedMealIcon({
  size = 64,
  color = '#1C1C1E',
}: CarbIconProps) {
  return (
    <IconFrame size={size}>
      <Circle
        cx="12"
        cy="12"
        r="8"
        fill="none"
        stroke={color}
        strokeWidth="1.8"
      />
      <Path
        d="M12 4v8l6.5 4"
        fill="none"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <Path
        d="M12 12 6 17"
        fill="none"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </IconFrame>
  );
}

export function CustomIcon({
  size = 64,
  color = '#1C1C1E',
}: CarbIconProps) {
  return (
    <IconFrame size={size}>
      <Circle
        cx="12"
        cy="12"
        r="8"
        fill="none"
        stroke={color}
        strokeWidth="1.8"
      />
      <Line
        x1="12"
        y1="8"
        x2="12"
        y2="16"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <Line
        x1="8"
        y1="12"
        x2="16"
        y2="12"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </IconFrame>
  );
}
