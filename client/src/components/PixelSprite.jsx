// Tiny pixel-art renderer: each string in `rows` is one row of pixels,
// each character maps to a colour in `colors` ('.' = transparent).
export default function PixelSprite({ rows, colors, px = 4, className = '', label }) {
  const h = rows.length;
  const w = rows[0].length;
  const rects = [];
  rows.forEach((row, y) => {
    [...row].forEach((ch, x) => {
      if (colors[ch]) rects.push(<rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill={colors[ch]} />);
    });
  });
  return (
    <svg
      className={`pixel-sprite ${className}`}
      width={w * px}
      height={h * px}
      viewBox={`0 0 ${w} ${h}`}
      shapeRendering="crispEdges"
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      {rects}
    </svg>
  );
}

const INK = '#3a2236';

export const HEART = {
  rows: [
    '.OOO...OOO.',
    'OHPPO.OPPPO',
    'OHPPPOPPPPO',
    'OPPPPPPPPPO',
    'OPPPPPPPPPO',
    '.OPPPPPPPO.',
    '..OPPPPPO..',
    '...OPPPO...',
    '....OPO....',
    '.....O.....',
  ],
  colors: { O: INK, P: '#d678b4', H: '#f7c1e3' },
};

export const CLOUD_PINK = {
  rows: [
    '.....OOOO.....',
    '...OOWWWWOO...',
    '..OWWWWWWWWOO.',
    '.OWWWWWWWWWWWO',
    '.OBBBBBBBBBBBO',
    '..OOOOOOOOOOO.',
  ],
  colors: { O: INK, W: '#e8a6d4', B: '#c77bb8' },
};

export const CLOUD_BLUE = {
  rows: [
    '.....OOOO.....',
    '...OOWWWWOO...',
    '..OWWWWWWWWOO.',
    '.OWWWWWWWWWWWO',
    '.OBBBBBBBBBBBO',
    '..OOOOOOOOOOO.',
  ],
  colors: { O: INK, W: '#dfe4ff', B: '#9fb0ff' },
};

export const STAR = {
  rows: [
    '...O...',
    '...O...',
    '..OSO..',
    'OOSSSOO',
    '..OSO..',
    '...O...',
    '...O...',
  ],
  colors: { O: INK, S: '#ffa67a' },
};
