import Svg, { Circle, Path } from 'react-native-svg';

interface FoundationSvgIconProps {
  size?: number;
  color?: string;
}

export function FoundationSvgIcon({
  size = 48,
  color = '#246BCE',
}: FoundationSvgIconProps) {
  return (
    <Svg
      testID="foundation-svg-icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityRole="image"
    >
      <Circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke={color}
        strokeWidth="2"
      />

      <Path
        d="M8 12h8"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
}
