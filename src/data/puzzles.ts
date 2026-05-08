import type { Language } from '@/i18n';
import type { Puzzle } from './types';
import { PUZZLES_DE } from './puzzles.de';
import { PUZZLES_EN } from './puzzles.en';

/**
 * Re-orders puzzles so that types (primary tag) are sprinkled evenly
 * instead of clustered. Each puzzle is assigned a fractional position
 * (rank-within-tag + 0.5) / count-of-tag, then the list is sorted by
 * that score. Items keep their relative order within a tag.
 */
function spreadByPrimaryTag(puzzles: readonly Puzzle[]): readonly Puzzle[] {
  const tagOf = (p: Puzzle): string => p.tags?.[0] ?? '__none__';

  const counts = new Map<string, number>();
  for (const p of puzzles) {
    const tag = tagOf(p);
    counts.set(tag, (counts.get(tag) ?? 0) + 1);
  }

  const seen = new Map<string, number>();
  const scored = puzzles.map((p, originalIndex) => {
    const tag = tagOf(p);
    const rank = seen.get(tag) ?? 0;
    seen.set(tag, rank + 1);
    const total = counts.get(tag) ?? 1;
    const score = (rank + 0.5) / total;
    return { p, score, originalIndex };
  });

  scored.sort((a, b) => {
    if (a.score !== b.score) {
      return a.score - b.score;
    }
    return a.originalIndex - b.originalIndex;
  });

  return scored.map((x) => x.p);
}

/**
 * Fails fast at module load if a deck has duplicate ids. Duplicates are
 * particularly nasty because the grid renders both entries (so the deck looks
 * fine), but `findPuzzle` returns the first match — clicking the second card
 * routes to the wrong puzzle.
 */
function assertUniqueIds(puzzles: readonly Puzzle[], language: Language): void {
  const seen = new Set<string>();
  for (const p of puzzles) {
    if (seen.has(p.id)) {
      throw new Error(
        `Duplicate puzzle id in ${language} deck: "${p.id}". ` +
          'Ids drive localStorage progress and must be unique within a language.',
      );
    }
    seen.add(p.id);
  }
}

assertUniqueIds(PUZZLES_EN, 'en');
assertUniqueIds(PUZZLES_DE, 'de');

const REGISTRY: Record<Language, readonly Puzzle[]> = {
  en: spreadByPrimaryTag(PUZZLES_EN),
  de: spreadByPrimaryTag(PUZZLES_DE),
};

export function getPuzzles(language: Language): readonly Puzzle[] {
  return REGISTRY[language];
}

export function findPuzzle(language: Language, id: string): Puzzle | undefined {
  return REGISTRY[language].find((p) => p.id === id);
}
