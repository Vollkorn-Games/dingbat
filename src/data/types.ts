export type Difficulty = 'easy' | 'medium' | 'hard';

export interface PuzzleSegment {
  text: string;
  /** Inline style hints. Multiple may combine. */
  style?: readonly (| 'bold'
    | 'italic'
    | 'underline'
    | 'overline'
    | 'strike'
    | 'small'
    | 'tiny'
    | 'huge'
    | 'mega'
    | 'fat'
    | 'mirror'
    | 'flip'
    | 'rotate90'
    | 'rotate180'
    | 'rotate270'
    | 'spaced'
    | 'crammed'
    | 'rainbow'
    | 'box'
    | 'outline'
    | 'shadow')[];
  /** Optional CSS color override. */
  color?: string;
}

export interface PuzzleLine {
  segments: readonly PuzzleSegment[];
  /** Horizontal alignment of this line within the puzzle box. */
  align?: 'left' | 'center' | 'right';
}

/**
 * One free-positioned text fragment inside a `compose` visual. Use this
 * when a puzzle needs overlapping, rotated, or scaled layers — e.g.
 * cursive script across a word, an icon dropped into specific spot, a
 * stamp angled across letters. Coordinates are fractions of the canvas
 * (0 = top/left, 1 = bottom/right) and refer to the layer's center.
 */
export interface PuzzleComposeLayer {
  segments: readonly PuzzleSegment[];
  /** Horizontal center, fraction of the canvas (0..1). */
  x: number;
  /** Vertical center, fraction of the canvas (0..1). */
  y: number;
  /** Multiplier on the base font size. Default 1. */
  scale?: number;
  /** Rotation around the layer's own center, in degrees. Default 0. */
  rotate?: number;
}

/**
 * A typographic puzzle (`text`) is rendered as stacked lines of segments.
 * An image puzzle (`image`) is a static asset under public/puzzles/.
 * A composed puzzle (`compose`) places independently positioned, scaled,
 * and rotated text layers on a canvas — for overlapping or off-grid
 * arrangements that line-based layout can't express.
 */
export type PuzzleVisual =
  | { kind: 'text'; lines: readonly PuzzleLine[] }
  | { kind: 'image'; src: string; alt: string }
  | { kind: 'compose'; layers: readonly PuzzleComposeLayer[] };

export interface Puzzle {
  /** Stable, URL-safe id. Never reuse or rename — used for progress tracking. */
  id: string;
  /** Canonical answer (case-insensitive comparison). */
  answer: string;
  /** Other accepted spellings. */
  alternatives?: readonly string[];
  difficulty: Difficulty;
  /** Free-form category labels. */
  tags?: readonly string[];
  /** Optional explanation shown on the reveal screen. */
  explanation?: string;
  /** Where the puzzle came from (URL or attribution). */
  source?: string;
  visual: PuzzleVisual;
}
