import type { Puzzle } from '@/data/types';

/** Lowercase, collapse whitespace, strip punctuation. Used for answer comparison. */
export function normalize(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function isCorrect(puzzle: Puzzle, guess: string): boolean {
  const candidates = [puzzle.answer, ...(puzzle.alternatives ?? [])];
  const normalizedGuess = normalize(guess);
  if (normalizedGuess.length === 0) {
    return false;
  }
  return candidates.some((c) => normalize(c) === normalizedGuess);
}
