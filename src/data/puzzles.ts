import type { Language } from '@/i18n';
import type { Puzzle } from './types';
import { PUZZLES_DE } from './puzzles.de';
import { PUZZLES_EN } from './puzzles.en';

const REGISTRY: Record<Language, readonly Puzzle[]> = {
  en: PUZZLES_EN,
  de: PUZZLES_DE,
};

export function getPuzzles(language: Language): readonly Puzzle[] {
  return REGISTRY[language];
}

export function findPuzzle(language: Language, id: string): Puzzle | undefined {
  return REGISTRY[language].find((p) => p.id === id);
}
