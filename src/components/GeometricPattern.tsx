interface GeometricPatternProps {
  id: string;
  className?: string;
  size?: number;
}

/**
 * Subtle eight-pointed geometric motif (two rotated squares), drawing on
 * Islamic visual geometry, used as a restrained background texture.
 */
export function GeometricPattern({ id, className = "", size = 72 }: GeometricPatternProps) {
  return (
    <svg className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} aria-hidden="true">
      <defs>
        <pattern id={id} width={size} height={size} patternUnits="userSpaceOnUse">
          <g fill="none" stroke="currentColor" strokeWidth="1">
            <rect
              x={size / 2 - 15}
              y={size / 2 - 15}
              width="30"
              height="30"
            />
            <rect
              x={size / 2 - 15}
              y={size / 2 - 15}
              width="30"
              height="30"
              transform={`rotate(45 ${size / 2} ${size / 2})`}
            />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}