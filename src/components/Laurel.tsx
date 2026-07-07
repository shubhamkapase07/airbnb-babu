export function Laurel({
  side,
  className,
}: {
  side: "left" | "right";
  className?: string;
}) {
  // A full half-wreath of leaves curving inward. Mirror for the right side.
  const leaves: [number, number, number, number][] = [
    // cx, cy, rotation, size
    [13, 10, -60, 1],
    [10, 17, -48, 1.1],
    [8, 25, -34, 1.15],
    [7, 33, -20, 1.2],
    [7, 41, -6, 1.2],
    [9, 49, 8, 1.15],
    [12, 56, 22, 1.1],
    [16, 62, 36, 1],
  ];
  return (
    <svg
      viewBox="0 0 40 72"
      width="30"
      height="56"
      className={className}
      aria-hidden="true"
      style={{ transform: side === "right" ? "scaleX(-1)" : undefined }}
      fill="currentColor"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        d="M31 5C17 12 9 26 9 42c0 12 6 21 15 25"
      />
      {leaves.map(([x, y, r, s], i) => (
        <ellipse
          key={i}
          cx={x}
          cy={y}
          rx={6.5 * s}
          ry={2.9 * s}
          transform={`rotate(${r} ${x} ${y})`}
        />
      ))}
    </svg>
  );
}
