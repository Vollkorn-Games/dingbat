import type { Puzzle } from './types';

const RED = '#d32f2f';
const BLUE = '#1976d2';
const GREEN = '#2e7d32';
const YELLOW = '#f9a825';
const BROWN = '#5d4037';
const BLACK = '#000000';
const ACCENT = '#7b1fa2';

/**
 * Deutsche Bilderrätsel / Dingbats. Each id is unique within this file
 * (ids are namespaced by language for localStorage progress tracking).
 *
 * Sprachspezifische Wortspiele — keine Übersetzungen aus dem Englischen.
 */
export const PUZZLES_DE: readonly Puzzle[] = [
  // --- Compound stacking: ÜBER / X ----------------------------------------
  {
    id: 'de-uebergabe',
    answer: 'Übergabe',
    difficulty: 'easy',
    tags: ['stack'],
    explanation: 'ÜBER über GABE.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'ÜBER', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'GABE', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-uebersicht',
    answer: 'Übersicht',
    difficulty: 'easy',
    tags: ['stack'],
    explanation: 'ÜBER über SICHT.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'ÜBER', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'SICHT', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-ueberraschung',
    answer: 'Überraschung',
    difficulty: 'medium',
    tags: ['stack'],
    explanation: 'ÜBER über RASCHUNG.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'ÜBER', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'RASCHUNG', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-ueberschrift',
    answer: 'Überschrift',
    difficulty: 'easy',
    tags: ['stack'],
    explanation: 'ÜBER über SCHRIFT.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'ÜBER', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'SCHRIFT', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-ueberdosis',
    answer: 'Überdosis',
    difficulty: 'medium',
    tags: ['stack'],
    explanation: 'ÜBER über DOSIS.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'ÜBER', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'DOSIS', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-uebermut',
    answer: 'Übermut',
    difficulty: 'easy',
    tags: ['stack'],
    explanation: 'ÜBER über MUT.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'ÜBER', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'MUT', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-ueberfluss',
    answer: 'Überfluss',
    difficulty: 'medium',
    tags: ['stack'],
    explanation: 'ÜBER über FLUSS.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'ÜBER', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'FLUSS', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-uebermensch',
    answer: 'Übermensch',
    difficulty: 'medium',
    tags: ['stack'],
    explanation: 'ÜBER über MENSCH.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'ÜBER', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'MENSCH', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-ueberstunden',
    answer: 'Überstunden',
    difficulty: 'medium',
    tags: ['stack'],
    explanation: 'ÜBER über STUNDEN.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'ÜBER', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'STUNDEN', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-ueberblick',
    answer: 'Überblick',
    difficulty: 'easy',
    tags: ['stack'],
    explanation: 'ÜBER über BLICK.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'ÜBER', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'BLICK', style: ['bold', 'huge'] }] },
      ],
    },
  },

  // --- UNTER / X ----------------------------------------------------------
  {
    id: 'de-untergang',
    answer: 'Untergang',
    difficulty: 'easy',
    tags: ['stack'],
    explanation: 'UNTER unter GANG.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'UNTER', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'GANG', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-untertasse',
    answer: 'Untertasse',
    difficulty: 'easy',
    tags: ['stack'],
    explanation: 'UNTER unter TASSE.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'UNTER', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'TASSE', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-unterhose',
    answer: 'Unterhose',
    difficulty: 'easy',
    tags: ['stack', 'kleidung'],
    explanation: 'UNTER unter HOSE.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'UNTER', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'HOSE', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-unterhemd',
    answer: 'Unterhemd',
    difficulty: 'easy',
    tags: ['stack', 'kleidung'],
    explanation: 'UNTER unter HEMD.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'UNTER', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'HEMD', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-unterschrift',
    answer: 'Unterschrift',
    difficulty: 'easy',
    tags: ['stack'],
    explanation: 'UNTER unter SCHRIFT.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'UNTER', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'SCHRIFT', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-unterricht',
    answer: 'Unterricht',
    difficulty: 'medium',
    tags: ['stack'],
    explanation: 'UNTER unter RICHT.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'UNTER', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'RICHT', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-unterwasser',
    answer: 'Unterwasser',
    alternatives: ['Unter Wasser'],
    difficulty: 'easy',
    tags: ['stack'],
    explanation: 'UNTER unter WASSER.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'UNTER', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'WASSER', style: ['bold', 'huge'], color: BLUE }] },
      ],
    },
  },
  {
    id: 'de-untergrund',
    answer: 'Untergrund',
    difficulty: 'easy',
    tags: ['stack'],
    explanation: 'UNTER unter GRUND.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'UNTER', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'GRUND', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-unterschied',
    answer: 'Unterschied',
    difficulty: 'medium',
    tags: ['stack'],
    explanation: 'UNTER unter SCHIED.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'UNTER', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'SCHIED', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-unterhalt',
    answer: 'Unterhalt',
    difficulty: 'medium',
    tags: ['stack'],
    explanation: 'UNTER unter HALT.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'UNTER', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'HALT', style: ['bold', 'huge'] }] },
      ],
    },
  },

  // --- AUF / X ------------------------------------------------------------
  {
    id: 'de-aufgabe',
    answer: 'Aufgabe',
    difficulty: 'easy',
    tags: ['stack'],
    explanation: 'AUF auf GABE.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'AUF', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'GABE', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-aufzug',
    answer: 'Aufzug',
    difficulty: 'easy',
    tags: ['stack'],
    explanation: 'AUF auf ZUG.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'AUF', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'ZUG', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-aufstand',
    answer: 'Aufstand',
    difficulty: 'easy',
    tags: ['stack'],
    explanation: 'AUF auf STAND.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'AUF', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'STAND', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-aufschlag',
    answer: 'Aufschlag',
    difficulty: 'medium',
    tags: ['stack'],
    explanation: 'AUF auf SCHLAG.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'AUF', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'SCHLAG', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-aufschnitt',
    answer: 'Aufschnitt',
    difficulty: 'medium',
    tags: ['stack', 'essen'],
    explanation: 'AUF auf SCHNITT.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'AUF', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'SCHNITT', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-aufruhr',
    answer: 'Aufruhr',
    difficulty: 'medium',
    tags: ['stack'],
    explanation: 'AUF auf RUHR.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'AUF', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'RUHR', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-aufgang',
    answer: 'Aufgang',
    difficulty: 'easy',
    tags: ['stack'],
    explanation: 'AUF auf GANG.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'AUF', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'GANG', style: ['bold', 'huge'] }] },
      ],
    },
  },

  // --- AUS / X ------------------------------------------------------------
  {
    id: 'de-ausgang',
    answer: 'Ausgang',
    difficulty: 'easy',
    tags: ['stack'],
    explanation: 'AUS auf GANG.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'AUS', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'GANG', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-aussicht',
    answer: 'Aussicht',
    difficulty: 'easy',
    tags: ['stack'],
    explanation: 'AUS über SICHT.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'AUS', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'SICHT', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-ausweg',
    answer: 'Ausweg',
    difficulty: 'easy',
    tags: ['stack'],
    explanation: 'AUS über WEG.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'AUS', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'WEG', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-ausflug',
    answer: 'Ausflug',
    difficulty: 'easy',
    tags: ['stack'],
    explanation: 'AUS über FLUG.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'AUS', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'FLUG', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-ausdruck',
    answer: 'Ausdruck',
    difficulty: 'medium',
    tags: ['stack'],
    explanation: 'AUS über DRUCK.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'AUS', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'DRUCK', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-aussage',
    answer: 'Aussage',
    difficulty: 'medium',
    tags: ['stack'],
    explanation: 'AUS über SAGE.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'AUS', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'SAGE', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-ausblick',
    answer: 'Ausblick',
    difficulty: 'medium',
    tags: ['stack'],
    explanation: 'AUS über BLICK.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'AUS', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'BLICK', style: ['bold', 'huge'] }] },
      ],
    },
  },

  // --- EIN / X ------------------------------------------------------------
  {
    id: 'de-eingang',
    answer: 'Eingang',
    difficulty: 'easy',
    tags: ['stack'],
    explanation: 'EIN über GANG.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'EIN', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'GANG', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-einkauf',
    answer: 'Einkauf',
    difficulty: 'easy',
    tags: ['stack'],
    explanation: 'EIN über KAUF.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'EIN', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'KAUF', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-einbruch',
    answer: 'Einbruch',
    difficulty: 'easy',
    tags: ['stack'],
    explanation: 'EIN über BRUCH.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'EIN', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'BRUCH', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-einfall',
    answer: 'Einfall',
    difficulty: 'easy',
    tags: ['stack'],
    explanation: 'EIN über FALL.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'EIN', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'FALL', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-einsicht',
    answer: 'Einsicht',
    difficulty: 'medium',
    tags: ['stack'],
    explanation: 'EIN über SICHT.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'EIN', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'SICHT', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-einblick',
    answer: 'Einblick',
    difficulty: 'medium',
    tags: ['stack'],
    explanation: 'EIN über BLICK.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'EIN', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'BLICK', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-eindruck',
    answer: 'Eindruck',
    difficulty: 'medium',
    tags: ['stack'],
    explanation: 'EIN über DRUCK.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'EIN', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'DRUCK', style: ['bold', 'huge'] }] },
      ],
    },
  },

  // --- VOR / NACH / DURCH / HOCH / TIEF / etc. ----------------------------
  {
    id: 'de-vorsicht',
    answer: 'Vorsicht',
    difficulty: 'easy',
    tags: ['stack'],
    explanation: 'VOR über SICHT.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'VOR', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'SICHT', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-vorhang',
    answer: 'Vorhang',
    difficulty: 'easy',
    tags: ['stack'],
    explanation: 'VOR über HANG.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'VOR', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'HANG', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-vorname',
    answer: 'Vorname',
    difficulty: 'easy',
    tags: ['stack'],
    explanation: 'VOR über NAME.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'VOR', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'NAME', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-vorbild',
    answer: 'Vorbild',
    difficulty: 'easy',
    tags: ['stack'],
    explanation: 'VOR über BILD.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'VOR', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'BILD', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-vorwort',
    answer: 'Vorwort',
    difficulty: 'easy',
    tags: ['stack'],
    explanation: 'VOR über WORT.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'VOR', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'WORT', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-nachwort',
    answer: 'Nachwort',
    difficulty: 'easy',
    tags: ['stack'],
    explanation: 'NACH über WORT.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'NACH', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'WORT', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-nachname',
    answer: 'Nachname',
    difficulty: 'easy',
    tags: ['stack'],
    explanation: 'NACH über NAME.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'NACH', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'NAME', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-nachhilfe',
    answer: 'Nachhilfe',
    difficulty: 'easy',
    tags: ['stack'],
    explanation: 'NACH über HILFE.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'NACH', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'HILFE', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-nachspeise',
    answer: 'Nachspeise',
    difficulty: 'easy',
    tags: ['stack', 'essen'],
    explanation: 'NACH über SPEISE.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'NACH', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'SPEISE', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-nachteil',
    answer: 'Nachteil',
    difficulty: 'easy',
    tags: ['stack'],
    explanation: 'NACH über TEIL.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'NACH', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'TEIL', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-durchgang',
    answer: 'Durchgang',
    difficulty: 'easy',
    tags: ['stack'],
    explanation: 'DURCH über GANG.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'DURCH', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'GANG', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-durchblick',
    answer: 'Durchblick',
    difficulty: 'medium',
    tags: ['stack'],
    explanation: 'DURCH über BLICK.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'DURCH', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'BLICK', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-durchbruch',
    answer: 'Durchbruch',
    difficulty: 'medium',
    tags: ['stack'],
    explanation: 'DURCH über BRUCH.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'DURCH', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'BRUCH', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-durchfall',
    answer: 'Durchfall',
    difficulty: 'medium',
    tags: ['stack'],
    explanation: 'DURCH über FALL.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'DURCH', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'FALL', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-hochhaus',
    answer: 'Hochhaus',
    difficulty: 'easy',
    tags: ['stack'],
    explanation: 'HOCH über HAUS.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'HOCH', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'HAUS', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-hochmut',
    answer: 'Hochmut',
    difficulty: 'medium',
    tags: ['stack'],
    explanation: 'HOCH über MUT.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'HOCH', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'MUT', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-hochzeit',
    answer: 'Hochzeit',
    difficulty: 'easy',
    tags: ['stack'],
    explanation: 'HOCH über ZEIT.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'HOCH', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'ZEIT', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-hochsprung',
    answer: 'Hochsprung',
    difficulty: 'easy',
    tags: ['stack'],
    explanation: 'HOCH über SPRUNG.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'HOCH', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'SPRUNG', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-hochwasser',
    answer: 'Hochwasser',
    difficulty: 'easy',
    tags: ['stack'],
    explanation: 'HOCH über WASSER.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'HOCH', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'WASSER', style: ['bold', 'huge'], color: BLUE }] },
      ],
    },
  },
  {
    id: 'de-tiefgang',
    answer: 'Tiefgang',
    difficulty: 'medium',
    tags: ['stack'],
    explanation: 'TIEF über GANG.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'TIEF', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'GANG', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-tiefkuehl',
    answer: 'Tiefkühl',
    alternatives: ['Tiefkuehl'],
    difficulty: 'easy',
    tags: ['stack'],
    explanation: 'TIEF über KÜHL.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'TIEF', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'KÜHL', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-tiefsee',
    answer: 'Tiefsee',
    difficulty: 'easy',
    tags: ['stack'],
    explanation: 'TIEF über SEE.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'TIEF', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'SEE', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-tiefschlaf',
    answer: 'Tiefschlaf',
    difficulty: 'easy',
    tags: ['stack'],
    explanation: 'TIEF über SCHLAF.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'TIEF', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'SCHLAF', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-mittelpunkt',
    answer: 'Mittelpunkt',
    difficulty: 'easy',
    tags: ['stack'],
    explanation: 'MITTEL über PUNKT.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'MITTEL', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'PUNKT', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-hinterhof',
    answer: 'Hinterhof',
    difficulty: 'easy',
    tags: ['stack'],
    explanation: 'HINTER über HOF.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'HINTER', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'HOF', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-hintergrund',
    answer: 'Hintergrund',
    difficulty: 'easy',
    tags: ['stack'],
    explanation: 'HINTER über GRUND.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'HINTER', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'GRUND', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-vorderseite',
    answer: 'Vorderseite',
    difficulty: 'easy',
    tags: ['stack'],
    explanation: 'VORDER über SEITE.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'VORDER', style: ['bold', 'huge'], color: RED }] },
        { segments: [{ text: 'SEITE', style: ['bold', 'huge'] }] },
      ],
    },
  },

  // --- Number prefix puzzles -----------------------------------------------
  {
    id: 'de-dreieck',
    answer: 'Dreieck',
    difficulty: 'easy',
    tags: ['zahlen'],
    explanation: '3 (drei) + ECK.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: '3', style: ['bold', 'huge'], color: RED },
            { text: ' ECK', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-viereck',
    answer: 'Viereck',
    difficulty: 'easy',
    tags: ['zahlen'],
    explanation: '4 (vier) + ECK.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: '4', style: ['bold', 'huge'], color: RED },
            { text: ' ECK', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-fuenfeck',
    answer: 'Fünfeck',
    alternatives: ['Fuenfeck'],
    difficulty: 'easy',
    tags: ['zahlen'],
    explanation: '5 (fünf) + ECK.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: '5', style: ['bold', 'huge'], color: RED },
            { text: ' ECK', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-sechseck',
    answer: 'Sechseck',
    difficulty: 'easy',
    tags: ['zahlen'],
    explanation: '6 (sechs) + ECK.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: '6', style: ['bold', 'huge'], color: RED },
            { text: ' ECK', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-achteck',
    answer: 'Achteck',
    difficulty: 'easy',
    tags: ['zahlen'],
    explanation: '8 (acht) + ECK.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: '8', style: ['bold', 'huge'], color: RED },
            { text: ' ECK', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-einhorn',
    answer: 'Einhorn',
    difficulty: 'easy',
    tags: ['zahlen', 'tiere'],
    explanation: '1 (ein) + HORN.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: '1', style: ['bold', 'huge'], color: RED },
            { text: ' HORN', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-einbaum',
    answer: 'Einbaum',
    difficulty: 'hard',
    tags: ['zahlen'],
    explanation: '1 (ein) + BAUM.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: '1', style: ['bold', 'huge'], color: RED },
            { text: ' BAUM', style: ['bold', 'huge'], color: GREEN },
          ],
        },
      ],
    },
  },
  {
    id: 'de-zweikampf',
    answer: 'Zweikampf',
    difficulty: 'easy',
    tags: ['zahlen'],
    explanation: '2 (zwei) + KAMPF.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: '2', style: ['bold', 'huge'], color: RED },
            { text: ' KAMPF', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-zweirad',
    answer: 'Zweirad',
    difficulty: 'easy',
    tags: ['zahlen'],
    explanation: '2 (zwei) + RAD.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: '2', style: ['bold', 'huge'], color: RED },
            { text: ' RAD', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-dreirad',
    answer: 'Dreirad',
    difficulty: 'easy',
    tags: ['zahlen'],
    explanation: '3 (drei) + RAD.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: '3', style: ['bold', 'huge'], color: RED },
            { text: ' RAD', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-vierbeiner',
    answer: 'Vierbeiner',
    difficulty: 'medium',
    tags: ['zahlen', 'tiere'],
    explanation: '4 (vier) + BEINER.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: '4', style: ['bold', 'huge'], color: RED },
            { text: ' BEINER', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-elfmeter',
    answer: 'Elfmeter',
    difficulty: 'medium',
    tags: ['zahlen', 'sport'],
    explanation: '11 (elf) + METER.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: '11', style: ['bold', 'huge'], color: RED },
            { text: ' METER', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-zehnkampf',
    answer: 'Zehnkampf',
    difficulty: 'medium',
    tags: ['zahlen', 'sport'],
    explanation: '10 (zehn) + KAMPF.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: '10', style: ['bold', 'huge'], color: RED },
            { text: ' KAMPF', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-achterbahn',
    answer: 'Achterbahn',
    difficulty: 'medium',
    tags: ['zahlen'],
    explanation: '8 (acht) + ER + BAHN.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: '8', style: ['bold', 'huge'], color: RED },
            { text: 'ER BAHN', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-achtung',
    answer: 'Achtung',
    difficulty: 'medium',
    tags: ['zahlen'],
    explanation: '8 (acht) + UNG.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: '8', style: ['bold', 'huge'], color: RED },
            { text: 'UNG', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-zweifel',
    answer: 'Zweifel',
    difficulty: 'medium',
    tags: ['zahlen'],
    explanation: '2 (zwei) + FEL.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: '2', style: ['bold', 'huge'], color: RED },
            { text: 'FEL', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-siebenschlaefer',
    answer: 'Siebenschläfer',
    alternatives: ['Siebenschlaefer'],
    difficulty: 'medium',
    tags: ['zahlen', 'tiere'],
    explanation: '7 (sieben) + SCHLÄFER.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: '7', style: ['bold', 'huge'], color: RED },
            { text: ' SCHLÄFER', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-tausendfuessler',
    answer: 'Tausendfüßler',
    alternatives: ['Tausendfuessler', 'Tausendfüssler'],
    difficulty: 'medium',
    tags: ['zahlen', 'tiere'],
    explanation: '1000 (tausend) + FÜSSLER.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: '1000', style: ['bold', 'huge'], color: RED },
            { text: ' FÜSSLER', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-einsamkeit',
    answer: 'Einsamkeit',
    difficulty: 'medium',
    tags: ['zahlen'],
    explanation: '1 (ein) + SAMKEIT.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: '1', style: ['bold', 'huge'], color: RED },
            { text: 'SAMKEIT', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-zweisamkeit',
    answer: 'Zweisamkeit',
    difficulty: 'hard',
    tags: ['zahlen'],
    explanation: '2 (zwei) + SAMKEIT.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: '2', style: ['bold', 'huge'], color: RED },
            { text: 'SAMKEIT', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-dreisatz',
    answer: 'Dreisatz',
    difficulty: 'medium',
    tags: ['zahlen'],
    explanation: '3 (drei) + SATZ.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: '3', style: ['bold', 'huge'], color: RED },
            { text: ' SATZ', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },

  // --- UM[…] = "around" ----------------------------------------------------
  {
    id: 'de-umarmung',
    answer: 'Umarmung',
    difficulty: 'medium',
    tags: ['inside'],
    explanation: '„UM“ umfasst „ARM“ → UM-ARM-UNG.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'UM', style: ['bold', 'huge'], color: RED },
            { text: 'ARM', style: ['bold', 'huge', 'box'] },
            { text: 'UNG', style: ['bold', 'huge'], color: RED },
          ],
        },
      ],
    },
  },
  {
    id: 'de-umweg',
    answer: 'Umweg',
    difficulty: 'easy',
    tags: ['inside'],
    explanation: '„UM“ umfasst „WEG“.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'UM', style: ['bold', 'huge'], color: RED },
            { text: 'WEG', style: ['bold', 'huge', 'box'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-umzug',
    answer: 'Umzug',
    difficulty: 'easy',
    tags: ['inside'],
    explanation: '„UM“ umfasst „ZUG“.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'UM', style: ['bold', 'huge'], color: RED },
            { text: 'ZUG', style: ['bold', 'huge', 'box'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-umfrage',
    answer: 'Umfrage',
    difficulty: 'medium',
    tags: ['inside'],
    explanation: '„UM“ umfasst „FRAGE“.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'UM', style: ['bold', 'huge'], color: RED },
            { text: 'FRAGE', style: ['bold', 'huge', 'box'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-umschlag',
    answer: 'Umschlag',
    difficulty: 'medium',
    tags: ['inside'],
    explanation: '„UM“ umfasst „SCHLAG“.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'UM', style: ['bold', 'huge'], color: RED },
            { text: 'SCHLAG', style: ['bold', 'huge', 'box'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-umlaut',
    answer: 'Umlaut',
    difficulty: 'medium',
    tags: ['inside'],
    explanation: '„UM“ umfasst „LAUT“.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'UM', style: ['bold', 'huge'], color: RED },
            { text: 'LAUT', style: ['bold', 'huge', 'box'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-umfeld',
    answer: 'Umfeld',
    difficulty: 'medium',
    tags: ['inside'],
    explanation: '„UM“ umfasst „FELD“.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'UM', style: ['bold', 'huge'], color: RED },
            { text: 'FELD', style: ['bold', 'huge', 'box'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-umkehr',
    answer: 'Umkehr',
    difficulty: 'medium',
    tags: ['inside'],
    explanation: '„UM“ umfasst „KEHR“.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'UM', style: ['bold', 'huge'], color: RED },
            { text: 'KEHR', style: ['bold', 'huge', 'box'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-umkleide',
    answer: 'Umkleide',
    difficulty: 'medium',
    tags: ['inside'],
    explanation: '„UM“ umfasst „KLEIDE“.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'UM', style: ['bold', 'huge'], color: RED },
            { text: 'KLEIDE', style: ['bold', 'huge', 'box'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-umstand',
    answer: 'Umstand',
    difficulty: 'medium',
    tags: ['inside'],
    explanation: '„UM“ umfasst „STAND“.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'UM', style: ['bold', 'huge'], color: RED },
            { text: 'STAND', style: ['bold', 'huge', 'box'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-inhalt',
    answer: 'Inhalt',
    difficulty: 'easy',
    tags: ['inside'],
    explanation: '„IN“ umfasst „HALT“.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'IN', style: ['bold', 'huge'], color: RED },
            { text: 'HALT', style: ['bold', 'huge', 'box'] },
          ],
        },
      ],
    },
  },

  // --- Color puzzles -------------------------------------------------------
  {
    id: 'de-rotwein',
    answer: 'Rotwein',
    difficulty: 'easy',
    tags: ['farbe'],
    explanation: 'WEIN in Rot.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'WEIN', style: ['bold', 'huge'], color: RED }] },
      ],
    },
  },
  {
    id: 'de-weisswein',
    answer: 'Weißwein',
    alternatives: ['Weisswein'],
    difficulty: 'medium',
    tags: ['farbe'],
    explanation: 'WEIN in Weiß (Umriss).',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'WEIN', style: ['bold', 'mega', 'outline'] }] },
      ],
    },
  },
  {
    id: 'de-rotkaeppchen',
    answer: 'Rotkäppchen',
    alternatives: ['Rotkaeppchen'],
    difficulty: 'easy',
    tags: ['farbe'],
    explanation: 'KÄPPCHEN in Rot.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'KÄPPCHEN', style: ['bold', 'huge'], color: RED }] },
      ],
    },
  },
  {
    id: 'de-rotlicht',
    answer: 'Rotlicht',
    difficulty: 'easy',
    tags: ['farbe'],
    explanation: 'LICHT in Rot.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'LICHT', style: ['bold', 'huge'], color: RED }] },
      ],
    },
  },
  {
    id: 'de-rotstift',
    answer: 'Rotstift',
    difficulty: 'easy',
    tags: ['farbe'],
    explanation: 'STIFT in Rot.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'STIFT', style: ['bold', 'huge'], color: RED }] },
      ],
    },
  },
  {
    id: 'de-schwarzwald',
    answer: 'Schwarzwald',
    difficulty: 'easy',
    tags: ['farbe'],
    explanation: 'WALD in Schwarz.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'WALD', style: ['bold', 'huge', 'fat'], color: BLACK }] },
      ],
    },
  },
  {
    id: 'de-schwarzbrot',
    answer: 'Schwarzbrot',
    difficulty: 'easy',
    tags: ['farbe', 'essen'],
    explanation: 'BROT in Schwarz.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'BROT', style: ['bold', 'huge', 'fat'], color: BLACK }] },
      ],
    },
  },
  {
    id: 'de-schwarzmarkt',
    answer: 'Schwarzmarkt',
    difficulty: 'medium',
    tags: ['farbe'],
    explanation: 'MARKT in Schwarz.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'MARKT', style: ['bold', 'huge', 'fat'], color: BLACK }] },
      ],
    },
  },
  {
    id: 'de-gruenkohl',
    answer: 'Grünkohl',
    alternatives: ['Gruenkohl'],
    difficulty: 'easy',
    tags: ['farbe', 'essen'],
    explanation: 'KOHL in Grün.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'KOHL', style: ['bold', 'huge'], color: GREEN }] },
      ],
    },
  },
  {
    id: 'de-gelbsucht',
    answer: 'Gelbsucht',
    difficulty: 'medium',
    tags: ['farbe'],
    explanation: 'SUCHT in Gelb.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'SUCHT', style: ['bold', 'huge'], color: YELLOW }] },
      ],
    },
  },
  {
    id: 'de-blaubeere',
    answer: 'Blaubeere',
    difficulty: 'easy',
    tags: ['farbe', 'essen'],
    explanation: 'BEERE in Blau.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'BEERE', style: ['bold', 'huge'], color: BLUE }] },
      ],
    },
  },
  {
    id: 'de-blaulicht',
    answer: 'Blaulicht',
    difficulty: 'easy',
    tags: ['farbe'],
    explanation: 'LICHT in Blau.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'LICHT', style: ['bold', 'huge'], color: BLUE }] },
      ],
    },
  },
  {
    id: 'de-rotvorWut',
    answer: 'Rot vor Wut',
    difficulty: 'medium',
    tags: ['farbe'],
    explanation: 'WUT in knallrot.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'WUT!', style: ['bold', 'mega', 'fat'], color: RED }] },
      ],
    },
  },
  {
    id: 'de-gruenvorNeid',
    answer: 'Grün vor Neid',
    alternatives: ['Gruen vor Neid'],
    difficulty: 'medium',
    tags: ['farbe'],
    explanation: 'NEID in Grün.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'NEID', style: ['bold', 'mega'], color: GREEN }] },
      ],
    },
  },
  {
    id: 'de-himmelblau',
    answer: 'Himmelblau',
    difficulty: 'medium',
    tags: ['farbe'],
    explanation: 'HIMMEL in Blau.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'HIMMEL', style: ['bold', 'huge'], color: BLUE }] },
      ],
    },
  },
  {
    id: 'de-schneeweiss',
    answer: 'Schneeweiß',
    alternatives: ['Schneeweiss'],
    difficulty: 'medium',
    tags: ['farbe'],
    explanation: 'SCHNEE in Weiß.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'SCHNEE', style: ['bold', 'mega', 'outline'] }] },
      ],
    },
  },

  // --- Mirror / flip / scramble -------------------------------------------
  {
    id: 'de-rueckwaerts',
    answer: 'Rückwärts',
    alternatives: ['Rueckwaerts'],
    difficulty: 'easy',
    tags: ['mirror'],
    explanation: 'Das Wort RÜCKWÄRTS rückwärts geschrieben.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'RÜCKWÄRTS', style: ['bold', 'huge', 'mirror'] }] },
      ],
    },
  },
  {
    id: 'de-spiegelbild',
    answer: 'Spiegelbild',
    difficulty: 'medium',
    tags: ['mirror'],
    explanation: 'BILD als Spiegelbild.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'BILD', style: ['bold', 'huge', 'mirror'] }] },
      ],
    },
  },
  {
    id: 'de-kehrseite',
    answer: 'Kehrseite',
    difficulty: 'medium',
    tags: ['mirror'],
    explanation: 'KEHRSEITE auf den Kopf gestellt.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'KEHRSEITE', style: ['bold', 'huge', 'flip'] }] },
      ],
    },
  },
  {
    id: 'de-buchstabensalat',
    answer: 'Buchstabensalat',
    difficulty: 'easy',
    tags: ['scramble'],
    explanation: 'Die Buchstaben sind durcheinander.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'BAHCSU', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'TEABNS', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-wirrwarr',
    answer: 'Wirrwarr',
    difficulty: 'medium',
    tags: ['scramble'],
    explanation: 'Die Buchstaben gehen durcheinander.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'RWIR', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'RAWR', style: ['bold', 'huge'] }] },
      ],
    },
  },

  // --- Doubling ------------------------------------------------------------
  {
    id: 'de-doppelkinn',
    answer: 'Doppelkinn',
    difficulty: 'easy',
    tags: ['doppel'],
    explanation: 'Zwei KINNs übereinander.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'KINN', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'KINN', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-doppelpass',
    answer: 'Doppelpass',
    difficulty: 'easy',
    tags: ['doppel'],
    explanation: 'Zwei PASSes nebeneinander.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'PASS   PASS', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-doppeldecker',
    answer: 'Doppeldecker',
    difficulty: 'easy',
    tags: ['doppel'],
    explanation: 'Zwei DECKER übereinander.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'DECKER', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'DECKER', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-dreiklang',
    answer: 'Dreiklang',
    difficulty: 'medium',
    tags: ['doppel'],
    explanation: 'KLANG dreimal.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'KLANG  KLANG  KLANG', style: ['bold', 'small'] }] },
      ],
    },
  },

  // --- Size puzzles --------------------------------------------------------
  {
    id: 'de-grossvater',
    answer: 'Großvater',
    alternatives: ['Grossvater', 'Opa'],
    difficulty: 'easy',
    tags: ['size'],
    explanation: 'VATER groß geschrieben.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'VATER', style: ['bold', 'mega'] }] },
      ],
    },
  },
  {
    id: 'de-grossmutter',
    answer: 'Großmutter',
    alternatives: ['Grossmutter', 'Oma'],
    difficulty: 'easy',
    tags: ['size'],
    explanation: 'MUTTER groß geschrieben.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'MUTTER', style: ['bold', 'mega'] }] },
      ],
    },
  },
  {
    id: 'de-kleinkind',
    answer: 'Kleinkind',
    difficulty: 'easy',
    tags: ['size'],
    explanation: 'KIND winzig geschrieben.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'KIND', style: ['bold', 'tiny'] }] },
      ],
    },
  },
  {
    id: 'de-grossstadt',
    answer: 'Großstadt',
    alternatives: ['Grossstadt'],
    difficulty: 'easy',
    tags: ['size'],
    explanation: 'STADT groß.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'STADT', style: ['bold', 'mega'] }] },
      ],
    },
  },
  {
    id: 'de-kleinstadt',
    answer: 'Kleinstadt',
    difficulty: 'easy',
    tags: ['size'],
    explanation: 'STADT klein.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'STADT', style: ['bold', 'tiny'] }] },
      ],
    },
  },
  {
    id: 'de-kleingeld',
    answer: 'Kleingeld',
    difficulty: 'easy',
    tags: ['size'],
    explanation: 'GELD winzig.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'GELD', style: ['bold', 'tiny'] }] },
      ],
    },
  },
  {
    id: 'de-langeweile',
    answer: 'Langeweile',
    difficulty: 'medium',
    tags: ['size'],
    explanation: 'WEILE in die Länge gezogen.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'WEILE', style: ['bold', 'huge', 'spaced'] }] },
      ],
    },
  },
  {
    id: 'de-vollkorn',
    answer: 'Vollkorn',
    difficulty: 'easy',
    tags: ['size', 'essen'],
    explanation: 'KORN ganz voll und fett.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'KORN', style: ['bold', 'mega', 'fat'], color: BROWN }] },
      ],
    },
  },

  // --- Half puzzles --------------------------------------------------------
  {
    id: 'de-halbmond',
    answer: 'Halbmond',
    difficulty: 'easy',
    tags: ['halb'],
    explanation: 'Nur die Hälfte vom MOND.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'MO', style: ['bold', 'huge'] },
            { text: 'ND', style: ['bold', 'huge', 'outline'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-vollmond',
    answer: 'Vollmond',
    difficulty: 'easy',
    tags: ['size'],
    explanation: 'MOND ganz voll und rund.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'MOND', style: ['bold', 'mega', 'fat'] }] },
      ],
    },
  },
  {
    id: 'de-halbzeit',
    answer: 'Halbzeit',
    difficulty: 'easy',
    tags: ['halb'],
    explanation: 'ZEIT durch 2.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'ZEIT', style: ['bold', 'huge'] },
            { text: '  ÷  2', style: ['bold', 'huge'], color: RED },
          ],
        },
      ],
    },
  },
  {
    id: 'de-halbinsel',
    answer: 'Halbinsel',
    difficulty: 'medium',
    tags: ['halb'],
    explanation: 'INSEL halbiert.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'INSEL', style: ['bold', 'huge'] },
            { text: '  ÷  2', style: ['bold', 'huge'], color: RED },
          ],
        },
      ],
    },
  },
  {
    id: 'de-halbbruder',
    answer: 'Halbbruder',
    difficulty: 'easy',
    tags: ['halb'],
    explanation: 'BRUDER nur halb.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'BRUDER', style: ['bold', 'huge'] },
            { text: '  ÷  2', style: ['bold', 'huge'], color: RED },
          ],
        },
      ],
    },
  },

  // --- Position ------------------------------------------------------------
  {
    id: 'de-oben',
    answer: 'Oben',
    difficulty: 'easy',
    tags: ['position'],
    explanation: 'OBEN ganz oben platziert.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'OBEN', style: ['bold', 'huge'] }] },
        { segments: [{ text: ' ' }] },
        { segments: [{ text: ' ' }] },
        { segments: [{ text: ' ' }] },
      ],
    },
  },
  {
    id: 'de-unten',
    answer: 'Unten',
    difficulty: 'easy',
    tags: ['position'],
    explanation: 'UNTEN ganz unten platziert.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: ' ' }] },
        { segments: [{ text: ' ' }] },
        { segments: [{ text: ' ' }] },
        { segments: [{ text: 'UNTEN', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-mitternacht',
    answer: 'Mitternacht',
    difficulty: 'medium',
    tags: ['position'],
    explanation: 'NACHT genau in der Mitte.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: ' ' }] },
        { segments: [{ text: 'NACHT', style: ['bold', 'huge'] }] },
        { segments: [{ text: ' ' }] },
      ],
    },
  },
  {
    id: 'de-hoehepunkt',
    answer: 'Höhepunkt',
    alternatives: ['Hoehepunkt'],
    difficulty: 'medium',
    tags: ['position'],
    explanation: 'Punkt ganz oben.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: '•', style: ['bold', 'mega'], color: RED }] },
        { segments: [{ text: ' ' }] },
        { segments: [{ text: ' ' }] },
      ],
    },
  },
  {
    id: 'de-tiefpunkt',
    answer: 'Tiefpunkt',
    difficulty: 'medium',
    tags: ['position'],
    explanation: 'Punkt ganz unten.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: ' ' }] },
        { segments: [{ text: ' ' }] },
        { segments: [{ text: '•', style: ['bold', 'mega'], color: RED }] },
      ],
    },
  },

  // --- Punctuation ---------------------------------------------------------
  {
    id: 'de-fragezeichen',
    answer: 'Fragezeichen',
    difficulty: 'easy',
    tags: ['symbol'],
    explanation: 'Das Zeichen einer Frage.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: '?', style: ['bold', 'mega'], color: ACCENT }] },
      ],
    },
  },
  {
    id: 'de-ausrufezeichen',
    answer: 'Ausrufezeichen',
    difficulty: 'easy',
    tags: ['symbol'],
    explanation: 'Das Zeichen eines Ausrufs.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: '!', style: ['bold', 'mega'], color: ACCENT }] },
      ],
    },
  },
  {
    id: 'de-doppelpunkt',
    answer: 'Doppelpunkt',
    difficulty: 'easy',
    tags: ['symbol'],
    explanation: 'Zwei Punkte übereinander.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: ':', style: ['bold', 'mega'], color: ACCENT }] },
      ],
    },
  },
  {
    id: 'de-strichpunkt',
    answer: 'Strichpunkt',
    alternatives: ['Semikolon'],
    difficulty: 'medium',
    tags: ['symbol'],
    explanation: 'Strich und Punkt: Semikolon.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: ';', style: ['bold', 'mega'], color: ACCENT }] },
      ],
    },
  },
  {
    id: 'de-bindestrich',
    answer: 'Bindestrich',
    difficulty: 'easy',
    tags: ['symbol'],
    explanation: 'Ein einzelner Bindestrich.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: '—', style: ['bold', 'mega'], color: ACCENT }] },
      ],
    },
  },
  {
    id: 'de-klammern',
    answer: 'Klammern',
    difficulty: 'easy',
    tags: ['symbol'],
    explanation: 'Ein Paar runde Klammern.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: '(    )', style: ['bold', 'mega'], color: ACCENT }] },
      ],
    },
  },
  {
    id: 'de-sternchen',
    answer: 'Sternchen',
    difficulty: 'easy',
    tags: ['symbol'],
    explanation: 'Ein Stern.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: '*', style: ['bold', 'mega'], color: ACCENT }] },
      ],
    },
  },
  {
    id: 'de-gleichheitszeichen',
    answer: 'Gleichheitszeichen',
    difficulty: 'easy',
    tags: ['symbol'],
    explanation: 'Das Zeichen für Gleichheit.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: '=', style: ['bold', 'mega'], color: ACCENT }] },
      ],
    },
  },
  {
    id: 'de-pluszeichen',
    answer: 'Pluszeichen',
    difficulty: 'easy',
    tags: ['symbol'],
    explanation: 'Ein Pluszeichen.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: '+', style: ['bold', 'mega'], color: ACCENT }] },
      ],
    },
  },

  // --- Style-as-meaning ----------------------------------------------------
  {
    id: 'de-fettdruck',
    answer: 'Fettdruck',
    difficulty: 'easy',
    tags: ['style'],
    explanation: 'DRUCK in fetter Schrift.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'DRUCK', style: ['bold', 'mega', 'fat'] }] },
      ],
    },
  },
  {
    id: 'de-kursivschrift',
    answer: 'Kursivschrift',
    difficulty: 'medium',
    tags: ['style'],
    explanation: 'SCHRIFT in kursiv.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'SCHRIFT', style: ['bold', 'huge', 'italic'] }] },
      ],
    },
  },
  {
    id: 'de-grossbuchstabe',
    answer: 'Großbuchstabe',
    alternatives: ['Grossbuchstabe'],
    difficulty: 'easy',
    tags: ['style'],
    explanation: 'Ein einzelner großer Buchstabe.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'A', style: ['bold', 'mega'] }] },
      ],
    },
  },
  {
    id: 'de-kleinbuchstabe',
    answer: 'Kleinbuchstabe',
    difficulty: 'easy',
    tags: ['style'],
    explanation: 'Ein einzelner kleiner Buchstabe.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'a', style: ['bold', 'tiny'] }] },
      ],
    },
  },
  {
    id: 'de-schraegstrich',
    answer: 'Schrägstrich',
    alternatives: ['Schraegstrich'],
    difficulty: 'medium',
    tags: ['symbol'],
    explanation: 'Ein schräger Strich.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: '/', style: ['bold', 'mega'], color: ACCENT }] },
      ],
    },
  },

  // --- Special / hybrid ----------------------------------------------------
  {
    id: 'de-trennung',
    answer: 'Trennung',
    difficulty: 'easy',
    tags: ['special'],
    explanation: 'TRENNUNG mit großer Lücke.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'TREN', style: ['bold', 'huge'] },
            { text: '   ✂   ', color: RED },
            { text: 'NUNG', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-zwischenraum',
    answer: 'Zwischenraum',
    difficulty: 'medium',
    tags: ['special'],
    explanation: 'RAUM mit Lücke dazwischen.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'R A U M', style: ['bold', 'huge', 'spaced'] }] },
      ],
    },
  },
  {
    id: 'de-lueckentext',
    answer: 'Lückentext',
    alternatives: ['Lueckentext'],
    difficulty: 'medium',
    tags: ['special'],
    explanation: 'TEXT mit einer Lücke.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'T', style: ['bold', 'huge'] },
            { text: '_', style: ['bold', 'huge'], color: RED },
            { text: 'XT', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-schwarzweiss',
    answer: 'Schwarzweiß',
    alternatives: ['Schwarzweiss', 'schwarz weiß'],
    difficulty: 'medium',
    tags: ['farbe'],
    explanation: 'Halb schwarz, halb weiß.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'SCHWARZ', style: ['bold', 'huge', 'fat'], color: BLACK },
            { text: ' ', style: ['huge'] },
            { text: 'WEIß', style: ['bold', 'huge', 'outline'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-kreuzwortraetsel',
    answer: 'Kreuzworträtsel',
    alternatives: ['Kreuzwortraetsel'],
    difficulty: 'medium',
    tags: ['special'],
    explanation: 'Ein Kreuz auf einem Wort-Rätsel.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: '✕', style: ['bold', 'mega'], color: RED }] },
        { segments: [{ text: 'RÄTSEL', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-aufwaerts',
    answer: 'Aufwärts',
    alternatives: ['Aufwaerts'],
    difficulty: 'medium',
    tags: ['direction'],
    explanation: 'Pfeil nach oben + WÄRTS.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: '↑', style: ['bold', 'mega'], color: RED },
            { text: ' WÄRTS', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-abwaerts',
    answer: 'Abwärts',
    alternatives: ['Abwaerts'],
    difficulty: 'medium',
    tags: ['direction'],
    explanation: 'Pfeil nach unten + WÄRTS.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: '↓', style: ['bold', 'mega'], color: RED },
            { text: ' WÄRTS', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-vorwaerts',
    answer: 'Vorwärts',
    alternatives: ['Vorwaerts'],
    difficulty: 'medium',
    tags: ['direction'],
    explanation: 'Pfeil nach vorn + WÄRTS.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: '→', style: ['bold', 'mega'], color: RED },
            { text: ' WÄRTS', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-querdenker',
    answer: 'Querdenker',
    difficulty: 'medium',
    tags: ['style'],
    explanation: 'DENKER quer geschrieben.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'DENKER', style: ['bold', 'huge', 'rotate90'] }] },
      ],
    },
  },
  {
    id: 'de-ohrwurm',
    answer: 'Ohrwurm',
    difficulty: 'medium',
    tags: ['classic'],
    explanation: 'OHR mit einem WURM dazwischen.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'OHR', style: ['bold', 'huge'] },
            { text: '~~~', style: ['bold', 'huge'], color: GREEN },
            { text: 'WURM', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-augenblick',
    answer: 'Augenblick',
    difficulty: 'medium',
    tags: ['classic'],
    explanation: 'AUGE + BLICK.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'AUGE', style: ['bold', 'huge'] },
            { text: ' 👁 ', style: ['huge'] },
            { text: 'BLICK', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-handschuh',
    answer: 'Handschuh',
    difficulty: 'easy',
    tags: ['classic'],
    explanation: 'HAND + SCHUH.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'HAND', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'SCHUH', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-kopfsalat',
    answer: 'Kopfsalat',
    difficulty: 'easy',
    tags: ['essen'],
    explanation: 'KOPF + SALAT.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'KOPF', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'SALAT', style: ['bold', 'huge'], color: GREEN }] },
      ],
    },
  },
  {
    id: 'de-fussball',
    answer: 'Fußball',
    alternatives: ['Fussball'],
    difficulty: 'easy',
    tags: ['sport'],
    explanation: 'FUSS + BALL.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'FUSS', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'BALL', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-mausefalle',
    answer: 'Mausefalle',
    difficulty: 'medium',
    tags: ['classic'],
    explanation: 'MAUSE + FALLE.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'MAUSE', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'FALLE', style: ['bold', 'huge'], color: RED }] },
      ],
    },
  },
  {
    id: 'de-glühbirne',
    answer: 'Glühbirne',
    alternatives: ['Gluehbirne'],
    difficulty: 'medium',
    tags: ['classic'],
    explanation: 'BIRNE die glüht.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: '✨', style: ['huge'] },
            { text: 'BIRNE', style: ['bold', 'huge'], color: YELLOW },
            { text: '✨', style: ['huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-wasserfall',
    answer: 'Wasserfall',
    difficulty: 'medium',
    tags: ['direction'],
    explanation: 'WASSER fällt nach unten.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'W', style: ['bold', 'huge'], color: BLUE }] },
        { segments: [{ text: 'A', style: ['bold', 'huge'], color: BLUE }] },
        { segments: [{ text: 'S', style: ['bold', 'huge'], color: BLUE }] },
        { segments: [{ text: 'S', style: ['bold', 'huge'], color: BLUE }] },
        { segments: [{ text: 'E', style: ['bold', 'huge'], color: BLUE }] },
        { segments: [{ text: 'R', style: ['bold', 'huge'], color: BLUE }] },
      ],
    },
  },
];
