/* A decorative QR-like pattern (not a scannable code). Deterministic, so server and client render the same cells. */
const SIZE = 25;

function cells(): [number, number][] {
  let seed = 7;
  const rnd = () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    return seed / 0x7fffffff;
  };
  const isFinder = (x: number, y: number) =>
    (x < 7 && y < 7) || (x >= SIZE - 7 && y < 7) || (x < 7 && y >= SIZE - 7);
  const out: [number, number][] = [];
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      let on = false;
      if (isFinder(x, y)) {
        const fx = x < 7 ? x : x - (SIZE - 7);
        const fy = y < 7 ? y : y - (SIZE - 7);
        const ring = Math.max(Math.abs(fx - 3), Math.abs(fy - 3));
        on = ring === 3 || ring <= 1;
      } else if ((y === 6 && x > 7 && x < SIZE - 8) || (x === 6 && y > 7 && y < SIZE - 8)) {
        on = (x + y) % 2 === 0; // timing pattern
      } else {
        on = rnd() < 0.45;
      }
      if (on) out.push([x, y]);
    }
  }
  return out;
}

const CELLS = cells();

export function QrPattern({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox={`0 0 ${SIZE} ${SIZE}`} shapeRendering="crispEdges" role="img" aria-label="Claim code as a QR code">
      <g fill="#172220">
        {CELLS.map(([x, y]) => (
          <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" />
        ))}
      </g>
    </svg>
  );
}
