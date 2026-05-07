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
 * A typographic puzzle is rendered from data — letters, sizes, positions.
 * An image puzzle is a static asset (place files under public/puzzles/).
 */
export type PuzzleVisual =
  | { kind: 'text'; lines: readonly PuzzleLine[] }
  | { kind: 'image'; src: string; alt: string };

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
