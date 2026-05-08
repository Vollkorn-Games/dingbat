import { useRef } from 'react';
import Box from '@mui/material/Box';
import type {
  PuzzleComposeLayer,
  PuzzleLine,
  PuzzleSegment,
  PuzzleVisual,
} from '@/data/types';
import { useFitScale } from '@/hooks/useFitScale';

/** Fixed canvas size for `compose` visuals. Layers are positioned in
 *  fractions of these dimensions; the whole stage scales to fit the
 *  available container via `useFitScale`. */
const COMPOSE_STAGE_W = 600;
const COMPOSE_STAGE_H = 450;

interface Props {
  visual: PuzzleVisual;
  /**
   * Padding inside the container before the puzzle starts shrinking, in px.
   * Lower = puzzle reaches container edges. Default 16.
   */
  padding?: number;
}

const STYLE_MAP: Record<NonNullable<PuzzleSegment['style']>[number], React.CSSProperties> = {
  bold: { fontWeight: 800 },
  italic: { fontStyle: 'italic' },
  underline: { textDecoration: 'underline' },
  overline: { textDecoration: 'overline' },
  strike: { textDecoration: 'line-through' },
  small: { fontSize: '0.6em' },
  tiny: { fontSize: '0.4em' },
  huge: { fontSize: '1em' }, // base sizing handled by container
  mega: { fontSize: '1.6em', fontWeight: 900 },
  fat: { fontWeight: 900, letterSpacing: '0.02em' },
  mirror: { display: 'inline-block', transform: 'scaleX(-1)' },
  flip: { display: 'inline-block', transform: 'scaleY(-1)' },
  rotate90: { display: 'inline-block', transform: 'rotate(90deg)' },
  rotate180: { display: 'inline-block', transform: 'rotate(180deg)' },
  rotate270: { display: 'inline-block', transform: 'rotate(270deg)' },
  spaced: { letterSpacing: '0.4em' },
  crammed: { letterSpacing: '-0.1em' },
  rainbow: {
    backgroundImage: 'linear-gradient(90deg,#ef4444,#f59e0b,#10b981,#3b82f6,#8b5cf6)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  },
  box: {
    display: 'inline-block',
    padding: '0.05em 0.2em',
    border: '0.08em solid currentColor',
    borderRadius: '0.1em',
  },
  outline: {
    color: 'transparent',
    WebkitTextStroke: '0.04em currentColor',
  },
  shadow: {
    textShadow: '0.06em 0.06em 0 rgba(0,0,0,0.25)',
  },
};

function styleFor(segment: PuzzleSegment): React.CSSProperties {
  const base: React.CSSProperties = segment.color !== undefined ? { color: segment.color } : {};
  const styles = segment.style ?? [];
  return styles.reduce<React.CSSProperties>(
    (acc, key) => ({ ...acc, ...STYLE_MAP[key] }),
    base,
  );
}

function Segment({ segment }: { segment: PuzzleSegment }): React.ReactElement {
  const css = styleFor(segment);
  // preserve internal spaces visually
  return <span style={{ whiteSpace: 'pre', ...css }}>{segment.text}</span>;
}

function Line({ line }: { line: PuzzleLine }): React.ReactElement {
  return (
    <Box
      sx={{
        textAlign: line.align ?? 'center',
        lineHeight: 1.1,
        py: 0.5,
        whiteSpace: 'nowrap',
      }}
    >
      {line.segments.map((seg, idx) => (
        <Segment key={idx} segment={seg} />
      ))}
    </Box>
  );
}

function ComposeLayerNode({ layer }: { layer: PuzzleComposeLayer }): React.ReactElement {
  const scale = layer.scale ?? 1;
  const rotate = layer.rotate ?? 0;
  return (
    <Box
      sx={{
        position: 'absolute',
        left: `${(layer.x * 100).toString()}%`,
        top: `${(layer.y * 100).toString()}%`,
        transform: `translate(-50%, -50%) scale(${scale.toString()}) rotate(${rotate.toString()}deg)`,
        transformOrigin: 'center center',
        whiteSpace: 'nowrap',
        lineHeight: 1.1,
      }}
    >
      {layer.segments.map((seg, idx) => (
        <Segment key={idx} segment={seg} />
      ))}
    </Box>
  );
}

export function PuzzleRenderer({ visual, padding = 16 }: Props): React.ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const fit = useFitScale(containerRef, contentRef);

  if (visual.kind === 'image') {
    const base = import.meta.env.BASE_URL;
    const src = visual.src.startsWith('/') ? `${base.replace(/\/$/, '')}${visual.src}` : visual.src;
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <Box
          component="img"
          src={src}
          alt={visual.alt}
          sx={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
            display: 'block',
          }}
        />
      </Box>
    );
  }

  return (
    <Box
      ref={containerRef}
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        padding: `${padding.toString()}px`,
        boxSizing: 'border-box',
      }}
    >
      <Box
        ref={contentRef}
        sx={
          visual.kind === 'compose'
            ? {
                position: 'relative',
                width: `${COMPOSE_STAGE_W.toString()}px`,
                height: `${COMPOSE_STAGE_H.toString()}px`,
                fontFamily: '"Georgia","Times New Roman",serif',
                fontSize: '2.4rem',
                color: 'text.primary',
                userSelect: 'none',
                transform: `scale(${fit.toString()})`,
                transformOrigin: 'center center',
              }
            : {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: '"Georgia","Times New Roman",serif',
                fontSize: '2.4rem',
                color: 'text.primary',
                userSelect: 'none',
                transform: `scale(${fit.toString()})`,
                transformOrigin: 'center center',
              }
        }
      >
        {visual.kind === 'text'
          ? visual.lines.map((line, idx) => <Line key={idx} line={line} />)
          : visual.layers.map((layer, idx) => (
              <ComposeLayerNode key={idx} layer={layer} />
            ))}
      </Box>
    </Box>
  );
}
