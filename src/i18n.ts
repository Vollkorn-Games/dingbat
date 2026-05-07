export type Language = 'en' | 'de';

export const LANGUAGES: readonly Language[] = ['en', 'de'];

export const LANGUAGE_LABEL: Record<Language, string> = {
  en: 'English',
  de: 'Deutsch',
};

interface Strings {
  appName: string;
  appTagline: string;
  pickPuzzle: string;
  pickPuzzleDescription: string;
  progress: string;
  solved: string;
  difficultyEasy: string;
  difficultyMedium: string;
  difficultyHard: string;
  filterAll: string;
  filterUnsolved: string;
  filterSolved: string;
  resetProgress: string;
  resetPrompt: string;
  resetWarning: (n: number) => string;
  cancel: string;
  reset: string;
  emptySolved: string;
  emptyAllDone: string;
  back: string;
  puzzleNumber: (n: string) => string;
  yourAnswer: string;
  submit: string;
  hint: string;
  reveal: string;
  hintTooltip: string;
  revealTooltip: string;
  notQuite: string;
  correctAnswer: (answer: string) => string;
  revealAnswer: (answer: string) => string;
  nextPuzzle: string;
  backToGrid: string;
  previous: string;
  next: string;
  notFound: string;
  footer: string;
  language: string;
}

const EN: Strings = {
  appName: 'Dingbats',
  appTagline: 'Visual word puzzles',
  pickPuzzle: 'Pick a puzzle',
  pickPuzzleDescription: 'Decode the visual clue and type the phrase.',
  progress: 'Progress',
  solved: 'solved',
  difficultyEasy: 'Easy',
  difficultyMedium: 'Medium',
  difficultyHard: 'Hard',
  filterAll: 'All',
  filterUnsolved: 'Unsolved',
  filterSolved: 'Solved',
  resetProgress: 'Reset progress',
  resetPrompt: 'Reset progress?',
  resetWarning: (n) =>
    `This will clear your ${n.toString()} solved puzzle${n === 1 ? '' : 's'}. This can’t be undone.`,
  cancel: 'Cancel',
  reset: 'Reset',
  emptySolved: 'No puzzles solved yet — pick one and give it a try.',
  emptyAllDone: 'You’ve solved them all. Nice.',
  back: 'Back to grid',
  puzzleNumber: (n) => `Puzzle #${n}`,
  yourAnswer: 'Your answer',
  submit: 'Submit',
  hint: 'Hint',
  reveal: 'Reveal',
  hintTooltip: 'Reveal one more letter',
  revealTooltip: 'Give up and reveal the answer',
  notQuite: 'Not quite — try again.',
  correctAnswer: (answer) => `Correct! The answer is ${answer}.`,
  revealAnswer: (answer) => `The answer was ${answer}.`,
  nextPuzzle: 'Next puzzle',
  backToGrid: 'Back to grid',
  previous: 'Previous',
  next: 'Next',
  notFound: 'Puzzle not found',
  footer: 'Made for fun. Puzzles are classics in the public domain.',
  language: 'Language',
};

const DE: Strings = {
  appName: 'Bilderrätsel',
  appTagline: 'Wörter sehen, Lösung erraten',
  pickPuzzle: 'Wähle ein Rätsel',
  pickPuzzleDescription: 'Entschlüssle das Bild und tippe die Lösung ein.',
  progress: 'Fortschritt',
  solved: 'gelöst',
  difficultyEasy: 'Leicht',
  difficultyMedium: 'Mittel',
  difficultyHard: 'Schwer',
  filterAll: 'Alle',
  filterUnsolved: 'Offen',
  filterSolved: 'Gelöst',
  resetProgress: 'Fortschritt zurücksetzen',
  resetPrompt: 'Fortschritt zurücksetzen?',
  resetWarning: (n) =>
    `Dies löscht deine ${n.toString()} gelösten Rätsel. Das kann nicht rückgängig gemacht werden.`,
  cancel: 'Abbrechen',
  reset: 'Zurücksetzen',
  emptySolved: 'Noch keine Rätsel gelöst — wähle eins und probier es aus.',
  emptyAllDone: 'Alle gelöst. Stark.',
  back: 'Zurück zur Übersicht',
  puzzleNumber: (n) => `Rätsel #${n}`,
  yourAnswer: 'Deine Lösung',
  submit: 'Prüfen',
  hint: 'Tipp',
  reveal: 'Auflösen',
  hintTooltip: 'Einen weiteren Buchstaben aufdecken',
  revealTooltip: 'Aufgeben und Lösung anzeigen',
  notQuite: 'Nicht ganz — versuch’s nochmal.',
  correctAnswer: (answer) => `Richtig! Die Lösung ist ${answer}.`,
  revealAnswer: (answer) => `Die Lösung war ${answer}.`,
  nextPuzzle: 'Nächstes Rätsel',
  backToGrid: 'Zurück zur Übersicht',
  previous: 'Vorheriges',
  next: 'Nächstes',
  notFound: 'Rätsel nicht gefunden',
  footer: 'Aus Spaß gemacht. Klassiker aus dem Volksgut.',
  language: 'Sprache',
};

export const STRINGS: Record<Language, Strings> = { en: EN, de: DE };

export function detectLanguage(): Language {
  if (typeof navigator === 'undefined') {
    return 'en';
  }
  const candidates = navigator.languages.length > 0 ? navigator.languages : [navigator.language];
  for (const c of candidates) {
    const base = c.toLowerCase().split('-')[0] ?? '';
    if (base === 'de') {
      return 'de';
    }
    if (base === 'en') {
      return 'en';
    }
  }
  return 'en';
}
