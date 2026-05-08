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
 * fine), but lookup by id returns just the first match — clicking the second
 * card routes to the wrong puzzle. They also break localStorage progress.
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

/**
 * Deterministic, opaque, short URL slug derived from a puzzle id (djb2 →
 * base36). Used so URLs don't spoil the answer — `splitting-headache` would
 * give it away, but its slug is just a few alphanumeric characters. Stable
 * across releases: the same id always produces the same slug.
 */
export function slugFor(id: string): string {
  let h = 5381;
  for (let i = 0; i < id.length; i++) {
    h = (Math.imul(h, 33) ^ id.charCodeAt(i)) | 0;
  }
  return (h >>> 0).toString(36);
}

/**
 * Fails fast if two ids in a deck happen to hash to the same slug. With ~250
 * puzzles and a 32-bit hash this is vanishingly unlikely, but still possible
 * — and the failure mode (one slug routes to two different puzzles) is just
 * as bad as duplicate ids.
 */
function assertNoSlugCollisions(puzzles: readonly Puzzle[], language: Language): void {
  const slugToId = new Map<string, string>();
  for (const p of puzzles) {
    const slug = slugFor(p.id);
    const existing = slugToId.get(slug);
    if (existing !== undefined) {
      throw new Error(
        `Slug collision in ${language} deck: "${p.id}" and "${existing}" both hash to "${slug}". ` +
          'Tweak one of the ids.',
      );
    }
    slugToId.set(slug, p.id);
  }
}

assertNoSlugCollisions(PUZZLES_EN, 'en');
assertNoSlugCollisions(PUZZLES_DE, 'de');

const REGISTRY: Record<Language, readonly Puzzle[]> = {
  en: spreadByPrimaryTag(PUZZLES_EN),
  de: spreadByPrimaryTag(PUZZLES_DE),
};

const SLUG_INDEX: Record<Language, ReadonlyMap<string, Puzzle>> = {
  en: new Map(REGISTRY.en.map((p) => [slugFor(p.id), p])),
  de: new Map(REGISTRY.de.map((p) => [slugFor(p.id), p])),
};

export function getPuzzles(language: Language): readonly Puzzle[] {
  return REGISTRY[language];
}

export function findPuzzleBySlug(language: Language, slug: string): Puzzle | undefined {
  return SLUG_INDEX[language].get(slug);
}
