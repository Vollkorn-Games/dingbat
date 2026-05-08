import type { Puzzle } from './types';

const RED = '#d32f2f';
const BLUE = '#1976d2';
const GREEN = '#2e7d32';
const YELLOW = '#f9a825';
const BROWN = '#5d4037';
const ACCENT = '#7b1fa2';

/**
 * Deutsche Bilderrätsel / Dingbats. Each id is unique within this file
 * (ids are namespaced by language for localStorage progress tracking).
 *
 * Sprachspezifische Wortspiele — keine Übersetzungen aus dem Englischen.
 *
 * Die Aufgabe eines Dingbats: das Bild verschlüsselt eine Lösung, die
 * NICHT wörtlich dasteht. Wer das Bild bloß abliest, hat das Rätsel
 * verfehlt — es geht ums Querdenken.
 */
export const PUZZLES_DE: readonly Puzzle[] = [
  // === Number-as-syllable substitutions ===================================
  // Die Ziffer steht für eine deutsche Zahl (8 = acht, 1 = ein, 4 = vier, …).
  {
    id: 'de-num-achtung',
    answer: 'Achtung',
    difficulty: 'easy',
    tags: ['numbers'],
    explanation: '8 (acht) + UNG = Achtung.',
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
    id: 'de-num-einfach',
    answer: 'einfach',
    alternatives: ['Einfach'],
    difficulty: 'easy',
    tags: ['numbers'],
    explanation: '1 (ein) + FACH = einfach.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: '1', style: ['bold', 'huge'], color: RED },
            { text: 'FACH', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-num-dreieck',
    answer: 'Dreieck',
    difficulty: 'easy',
    tags: ['numbers'],
    explanation: '3 (drei) + ECK = Dreieck.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: '3', style: ['bold', 'huge'], color: BLUE },
            { text: 'ECK', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-num-viertel',
    answer: 'Viertel',
    difficulty: 'easy',
    tags: ['numbers'],
    explanation: '4 (vier) + TEL = Viertel.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: '4', style: ['bold', 'huge'], color: GREEN },
            { text: 'TEL', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-num-null-bock',
    answer: 'Null Bock',
    alternatives: ['Nullbock', '0 Bock'],
    difficulty: 'easy',
    tags: ['numbers', 'redewendung'],
    explanation: '0 (null) + BOCK = Null Bock.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: '0', style: ['bold', 'huge'], color: RED },
            { text: ' BOCK', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-num-macht',
    answer: 'Macht',
    difficulty: 'easy',
    tags: ['numbers'],
    explanation: 'M + 8 (acht) = Macht.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'M', style: ['bold', 'huge'] },
            { text: '8', style: ['bold', 'huge'], color: RED },
          ],
        },
      ],
    },
  },
  {
    id: 'de-num-allein',
    answer: 'allein',
    alternatives: ['Allein'],
    difficulty: 'medium',
    tags: ['numbers'],
    explanation: 'ALL + 1 (ein) = allein.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'ALL', style: ['bold', 'huge'] },
            { text: '1', style: ['bold', 'huge'], color: ACCENT },
          ],
        },
      ],
    },
  },
  {
    id: 'de-num-nacht',
    answer: 'Nacht',
    difficulty: 'medium',
    tags: ['numbers'],
    explanation: 'N + 8 (acht) = Nacht.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'N', style: ['bold', 'huge'] },
            { text: '8', style: ['bold', 'huge'], color: BLUE },
          ],
        },
      ],
    },
  },
  {
    id: 'de-num-zweifel',
    answer: 'Zweifel',
    difficulty: 'medium',
    tags: ['numbers'],
    explanation: '2 (zwei) + FEL = Zweifel.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: '2', style: ['bold', 'huge'], color: ACCENT },
            { text: 'FEL', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-num-gemacht',
    answer: 'gemacht',
    alternatives: ['Gemacht', 'abgemacht', 'Abgemacht'],
    difficulty: 'medium',
    tags: ['numbers'],
    explanation: 'GEM + 8 (acht) = gemacht.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'GEM', style: ['bold', 'huge'] },
            { text: '8', style: ['bold', 'huge'], color: RED },
          ],
        },
      ],
    },
  },
  {
    id: 'de-num-siebensachen-v2',
    answer: 'Siebensachen',
    alternatives: ['siebensachen', 'sieben Sachen', 'meine Siebensachen'],
    difficulty: 'medium',
    tags: ['numbers', 'redewendung'],
    explanation: 'Sieben verschiedene Habseligkeiten – Siebensachen.',
    meaning: 'Umgangssprachlich für alle persönlichen Habseligkeiten – „seine Siebensachen packen".',
    visual: {
      kind: 'text',
      lines: [
        {
          align: 'center',
          segments: [
            { text: '🧳 📚 🎒 👔 🧦 ☂ 🪥', style: ['huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-num-zehnkampf-v2',
    answer: 'Zehnkampf',
    difficulty: 'hard',
    tags: ['numbers', 'sport'],
    explanation: 'Zehn verschiedene Sportarten – Zehnkampf.',
    meaning: 'Olympische Leichtathletik-Disziplin aus zehn verschiedenen Wettkämpfen.',
    visual: {
      kind: 'text',
      lines: [
        {
          align: 'center',
          segments: [
            { text: '🏃 🏊 🚴 🤸 🏋', style: ['huge'] },
          ],
        },
        {
          align: 'center',
          segments: [
            { text: '🥊 ⛹ 🏐 🏌 ⚽', style: ['huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-num-keine-ahnung',
    answer: 'Keine Ahnung',
    alternatives: ['keine ahnung', '0 Ahnung', 'Null Ahnung', 'null ahnung'],
    difficulty: 'medium',
    tags: ['numbers', 'redewendung'],
    explanation: '0 (keine) + AHNUNG = Keine Ahnung.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: '0', style: ['bold', 'huge'], color: RED },
            { text: ' AHNUNG', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-num-ohnmacht',
    answer: 'Ohnmacht',
    difficulty: 'hard',
    tags: ['numbers'],
    explanation: 'OHNM + 8 (acht) = Ohnmacht.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'OHNM', style: ['bold', 'huge'] },
            { text: '8', style: ['bold', 'huge'], color: ACCENT },
          ],
        },
      ],
    },
  },

  // === Repetition / co-positioning idioms =================================
  // Die Anordnung selbst verschlüsselt das verbindende Wort.
  {
    id: 'de-rep-hand-in-hand',
    answer: 'Hand in Hand',
    difficulty: 'easy',
    tags: ['phrase', 'repetition'],
    explanation: 'Zwei „HAND" nebeneinander – Hand in Hand.',
    visual: {
      kind: 'text',
      lines: [
        {
          align: 'center',
          segments: [
            { text: 'HAND', style: ['bold', 'huge'] },
            { text: '   ' },
            { text: 'HAND', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-num-doppelkopf',
    answer: 'Doppelkopf',
    difficulty: 'easy',
    tags: ['numbers', 'repetition'],
    explanation: 'Zwei Köpfe = doppelt – Doppelkopf.',
    visual: {
      kind: 'text',
      lines: [
        {
          align: 'center',
          segments: [
            { text: 'KOPF', style: ['bold', 'huge'] },
            { text: 'KOPF', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-rep-tuer-an-tuer-v2',
    answer: 'Tür an Tür',
    alternatives: ['Tuer an Tuer'],
    difficulty: 'medium',
    tags: ['phrase', 'repetition'],
    explanation: 'Zwei Türen, durch eine Wand getrennt – Tür an Tür wohnen.',
    visual: {
      kind: 'text',
      lines: [
        {
          align: 'center',
          segments: [
            { text: 'TÜR', style: ['bold', 'huge', 'box'] },
            { text: '🧱', style: ['huge'] },
            { text: 'TÜR', style: ['bold', 'huge', 'box'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-rep-stein-auf-stein',
    answer: 'Stein auf Stein',
    difficulty: 'easy',
    tags: ['phrase', 'repetition'],
    explanation: 'Drei STEINE übereinander – Stein auf Stein.',
    meaning: 'Etwas geduldig Schritt für Schritt aufbauen.',
    visual: {
      kind: 'text',
      lines: [
        { align: 'center', segments: [{ text: 'STEIN', style: ['bold', 'huge'] }] },
        { align: 'center', segments: [{ text: 'STEIN', style: ['bold', 'huge'] }] },
        { align: 'center', segments: [{ text: 'STEIN', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-rep-schulter-an-schulter',
    answer: 'Schulter an Schulter',
    difficulty: 'medium',
    tags: ['phrase', 'repetition'],
    explanation: 'Zwei „SCHULTER" direkt nebeneinander – Schulter an Schulter.',
    visual: {
      kind: 'text',
      lines: [
        {
          align: 'center',
          segments: [
            { text: 'SCHULTER', style: ['bold', 'huge'] },
            { text: 'SCHULTER', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-rep-mann-gegen-mann',
    answer: 'Mann gegen Mann',
    difficulty: 'medium',
    tags: ['phrase', 'repetition'],
    explanation: 'Zwei Männer einander zugewandt – einer gespiegelt.',
    visual: {
      kind: 'text',
      lines: [
        {
          align: 'center',
          segments: [
            { text: 'MANN', style: ['bold', 'huge'] },
            { text: '  ' },
            { text: 'MANN', style: ['bold', 'huge', 'mirror'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-rep-auf-und-ab',
    answer: 'Auf und ab',
    difficulty: 'medium',
    tags: ['phrase', 'spatial'],
    explanation: 'Pfeil nach oben + Pfeil nach unten – auf und ab.',
    visual: {
      kind: 'text',
      lines: [
        {
          align: 'center',
          segments: [
            { text: '↑', style: ['bold', 'mega'], color: GREEN },
            { text: '   ' },
            { text: '↓', style: ['bold', 'mega'], color: RED },
          ],
        },
      ],
    },
  },
  {
    id: 'de-rep-hand-aufs-herz',
    answer: 'Hand aufs Herz',
    difficulty: 'medium',
    tags: ['idiom', 'spatial'],
    explanation: '„HAND" über „HERZ" – Hand aufs Herz.',
    meaning: 'Aufrichtig versprechen, ganz ehrlich sein.',
    visual: {
      kind: 'text',
      lines: [
        { align: 'center', segments: [{ text: 'HAND', style: ['bold', 'huge'] }] },
        { align: 'center', segments: [{ text: '─────', style: ['tiny'] }] },
        { align: 'center', segments: [{ text: 'HERZ', style: ['bold', 'huge'], color: RED }] },
      ],
    },
  },
  {
    id: 'de-rep-kopf-in-den-wolken',
    answer: 'Kopf in den Wolken',
    difficulty: 'hard',
    tags: ['idiom', 'spatial'],
    explanation: '„KOPF" mitten im Wort „WOLKEN" – Kopf in den Wolken.',
    meaning: 'Verträumt, abwesend, mit unrealistischen Vorstellungen.',
    visual: {
      kind: 'text',
      lines: [
        {
          align: 'center',
          segments: [
            { text: 'WOL', style: ['bold', 'huge'], color: BLUE },
            { text: 'KOPF', style: ['bold', 'huge'] },
            { text: 'KEN', style: ['bold', 'huge'], color: BLUE },
          ],
        },
      ],
    },
  },
  {
    id: 'de-rep-stein-im-brett',
    answer: 'einen Stein im Brett haben',
    alternatives: ['Stein im Brett', 'Einen Stein im Brett haben'],
    difficulty: 'hard',
    tags: ['idiom', 'spatial'],
    explanation: '„STEIN" eingebettet im Wort „BRETT".',
    meaning: 'Bei jemandem beliebt sein – Bild aus alten Brettspielen, wo Steine Spielfiguren waren.',
    visual: {
      kind: 'text',
      lines: [
        {
          align: 'center',
          segments: [
            { text: 'BR', style: ['bold', 'huge'] },
            { text: '[', style: ['bold', 'small'], color: RED },
            { text: 'STEIN', style: ['bold', 'huge'], color: GREEN },
            { text: ']', style: ['bold', 'small'], color: RED },
            { text: 'ETT', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },

  // === Direction / mirror / rotation as semantic clue ======================
  // Die Transformation gibt einen Hinweis – die Lösung ist NICHT das, was
  // dasteht.
  {
    id: 'de-dir-rueckblick',
    answer: 'Rückblick',
    alternatives: ['Rueckblick'],
    difficulty: 'easy',
    tags: ['direction', 'mirror'],
    explanation: 'BLICK gespiegelt – ein Blick nach hinten ist ein Rückblick.',
    visual: {
      kind: 'text',
      lines: [
        { align: 'center', segments: [{ text: 'BLICK', style: ['bold', 'huge', 'mirror'] }] },
      ],
    },
  },
  {
    id: 'de-dir-rueckzug',
    answer: 'Rückzug',
    alternatives: ['Rueckzug'],
    difficulty: 'easy',
    tags: ['direction', 'mirror'],
    explanation: 'ZUG gespiegelt – ein Zug zurück ist ein Rückzug.',
    visual: {
      kind: 'text',
      lines: [
        { align: 'center', segments: [{ text: 'ZUG', style: ['bold', 'mega', 'mirror'] }] },
      ],
    },
  },
  {
    id: 'de-dir-verkehrte-welt',
    answer: 'Verkehrte Welt',
    difficulty: 'easy',
    tags: ['direction', 'flip', 'idiom'],
    explanation: 'WELT auf dem Kopf – das ist die verkehrte Welt.',
    visual: {
      kind: 'text',
      lines: [
        { align: 'center', segments: [{ text: 'WELT', style: ['bold', 'mega', 'flip'], color: BLUE }] },
      ],
    },
  },
  {
    id: 'de-dir-traenenfluss',
    answer: 'Tränenfluss',
    alternatives: ['Traenenfluss'],
    difficulty: 'medium',
    tags: ['direction', 'falling'],
    explanation: 'Die Buchstaben von TRÄNEN fallen herab – Tränenfluss.',
    visual: {
      kind: 'text',
      lines: [
        { align: 'center', segments: [{ text: 'T', style: ['bold', 'huge'], color: BLUE }] },
        { align: 'center', segments: [{ text: 'R', style: ['bold', 'huge'], color: BLUE }] },
        { align: 'center', segments: [{ text: 'Ä', style: ['bold', 'huge'], color: BLUE }] },
        { align: 'center', segments: [{ text: 'N', style: ['bold', 'huge'], color: BLUE }] },
        { align: 'center', segments: [{ text: 'E', style: ['bold', 'huge'], color: BLUE }] },
        { align: 'center', segments: [{ text: 'N', style: ['bold', 'huge'], color: BLUE }] },
      ],
    },
  },
  {
    id: 'de-dir-sternenaufgang',
    answer: 'Sternenaufgang',
    alternatives: ['Sonnenaufgang'],
    difficulty: 'medium',
    tags: ['direction', 'rising'],
    explanation: 'Die Buchstaben von STERN steigen auf – Sternenaufgang.',
    visual: {
      kind: 'text',
      lines: [
        { align: 'center', segments: [{ text: 'N', style: ['bold', 'huge'], color: ACCENT }] },
        { align: 'center', segments: [{ text: 'R', style: ['bold', 'huge'], color: ACCENT }] },
        { align: 'center', segments: [{ text: 'E', style: ['bold', 'huge'], color: ACCENT }] },
        { align: 'center', segments: [{ text: 'T', style: ['bold', 'huge'], color: ACCENT }] },
        { align: 'center', segments: [{ text: 'S', style: ['bold', 'huge'], color: ACCENT }] },
      ],
    },
  },
  {
    id: 'de-dir-rundgang',
    answer: 'Rundgang',
    difficulty: 'easy',
    tags: ['direction', 'rotation'],
    explanation: 'Kreispfeil + GANG – ein Gang im Kreis ist ein Rundgang.',
    visual: {
      kind: 'text',
      lines: [
        {
          align: 'center',
          segments: [
            { text: '↻ ', style: ['bold', 'mega'], color: GREEN },
            { text: 'GANG', style: ['bold', 'mega'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-dir-umdenken',
    answer: 'Umdenken',
    difficulty: 'medium',
    tags: ['direction', 'rotation'],
    explanation: 'Kreispfeil + DENKEN – das Denken umdrehen.',
    visual: {
      kind: 'text',
      lines: [
        {
          align: 'center',
          segments: [
            { text: '↺ ', style: ['bold', 'mega'], color: ACCENT },
            { text: 'DENKEN', style: ['bold', 'mega'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-dir-talfahrt',
    answer: 'Talfahrt',
    difficulty: 'medium',
    tags: ['direction', 'descending'],
    explanation: 'FAHRT geht abwärts – das ist eine Talfahrt.',
    visual: {
      kind: 'text',
      lines: [
        { align: 'left', segments: [{ text: 'F', style: ['bold', 'huge'] }] },
        { align: 'left', segments: [{ text: ' A', style: ['bold', 'huge'] }] },
        { align: 'left', segments: [{ text: '  H', style: ['bold', 'huge'] }] },
        { align: 'left', segments: [{ text: '   R', style: ['bold', 'huge'] }] },
        { align: 'left', segments: [{ text: '    T', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-dir-aufstieg',
    answer: 'Aufstieg',
    difficulty: 'medium',
    tags: ['direction', 'rising'],
    explanation: 'STIEG klettert nach oben – das ist ein Aufstieg.',
    visual: {
      kind: 'text',
      lines: [
        { align: 'left', segments: [{ text: '    G', style: ['bold', 'huge'], color: GREEN }] },
        { align: 'left', segments: [{ text: '   E', style: ['bold', 'huge'], color: GREEN }] },
        { align: 'left', segments: [{ text: '  I', style: ['bold', 'huge'], color: GREEN }] },
        { align: 'left', segments: [{ text: ' T', style: ['bold', 'huge'], color: GREEN }] },
        { align: 'left', segments: [{ text: 'S', style: ['bold', 'huge'], color: GREEN }] },
      ],
    },
  },
  {
    id: 'de-dir-schraeglage',
    answer: 'Schräglage',
    alternatives: ['Schraeglage'],
    difficulty: 'hard',
    tags: ['direction', 'rotation'],
    explanation: 'LAGE schief gestellt – das ist eine Schräglage.',
    visual: {
      kind: 'text',
      lines: [
        { align: 'center', segments: [{ text: 'LAGE', style: ['bold', 'mega', 'rotate270'], color: RED }] },
      ],
    },
  },

  // === Sprichwörter & Redewendungen, visuell verschlüsselt =================
  {
    id: 'de-spr-stein-vom-herzen',
    answer: 'Stein vom Herzen',
    alternatives: [
      'Ein Stein fällt vom Herzen',
      'Ein Stein faellt vom Herzen',
      'Mir fällt ein Stein vom Herzen',
    ],
    difficulty: 'easy',
    tags: ['idiom', 'sprichwort'],
    explanation: 'Ein STEIN fällt (↓) vom HERZ.',
    meaning: 'Große Erleichterung empfinden, wenn eine Sorge wegfällt.',
    visual: {
      kind: 'text',
      lines: [
        { align: 'center', segments: [{ text: 'STEIN', style: ['bold', 'huge', 'box'] }] },
        { align: 'center', segments: [{ text: '↓', style: ['bold', 'huge'], color: RED }] },
        { align: 'center', segments: [{ text: 'HERZ', style: ['bold', 'huge'], color: RED }] },
      ],
    },
  },
  {
    id: 'de-spr-auf-wolke-sieben',
    answer: 'Auf Wolke sieben',
    alternatives: ['Auf Wolke 7', 'Wolke sieben', 'Wolke 7'],
    difficulty: 'easy',
    tags: ['idiom', 'sprichwort'],
    explanation: 'ICH schwebt über „WOLKE 7".',
    meaning: 'Überglücklich, oft frisch verliebt – im Zustand höchster Glückseligkeit.',
    visual: {
      kind: 'text',
      lines: [
        { align: 'center', segments: [{ text: 'ICH', style: ['italic', 'huge'] }] },
        { align: 'center', segments: [{ text: '☁  WOLKE 7  ☁', style: ['bold', 'huge'], color: BLUE }] },
      ],
    },
  },
  {
    id: 'de-spr-tomaten-auf-den-augen',
    answer: 'Tomaten auf den Augen',
    alternatives: ['Tomaten auf den Augen haben', 'Du hast Tomaten auf den Augen'],
    difficulty: 'easy',
    tags: ['idiom', 'sprichwort'],
    explanation: '🍅🍅 sitzen auf den AUGEN.',
    meaning: 'Etwas Offensichtliches einfach nicht sehen.',
    visual: {
      kind: 'text',
      lines: [
        { align: 'center', segments: [{ text: '🍅   🍅', style: ['huge'] }] },
        { align: 'center', segments: [{ text: 'AUGEN', style: ['bold', 'huge', 'underline'] }] },
      ],
    },
  },
  {
    id: 'de-spr-schmetterlinge-im-bauch',
    answer: 'Schmetterlinge im Bauch',
    alternatives: ['Schmetterlinge im Bauch haben'],
    difficulty: 'medium',
    tags: ['idiom', 'sprichwort'],
    explanation: '🦋 im Inneren von BAUCH.',
    meaning: 'Aufgeregtes Kribbeln im Bauch – meist beim Verliebtsein.',
    visual: {
      kind: 'text',
      lines: [
        {
          align: 'center',
          segments: [
            { text: 'B', style: ['bold', 'huge'] },
            { text: ' 🦋 🦋 ', style: ['huge'] },
            { text: 'AUCH', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-spr-brett-vor-dem-kopf',
    answer: 'Ein Brett vor dem Kopf',
    alternatives: ['Brett vor dem Kopf', 'Ein Brett vor dem Kopf haben'],
    difficulty: 'medium',
    tags: ['idiom', 'sprichwort'],
    explanation: 'BRETT steht direkt vor KOPF.',
    meaning: 'Begriffsstutzig sein, einen Denkblock haben, das Naheliegende nicht erkennen.',
    visual: {
      kind: 'text',
      lines: [
        {
          align: 'center',
          segments: [
            { text: '▌BRETT▐', style: ['bold', 'huge', 'box'] },
            { text: '  ' },
            { text: 'KOPF', style: ['bold', 'huge'], color: ACCENT },
          ],
        },
      ],
    },
  },
  {
    id: 'de-spr-kopf-in-den-sand',
    answer: 'Den Kopf in den Sand stecken',
    alternatives: ['Kopf in den Sand', 'Kopf in den Sand stecken'],
    difficulty: 'medium',
    tags: ['idiom', 'sprichwort'],
    explanation: 'KOPF steckt unter der SAND-Linie – kopfüber.',
    meaning: 'Probleme oder die Realität verdrängen, statt sich ihnen zu stellen.',
    visual: {
      kind: 'text',
      lines: [
        { align: 'center', segments: [{ text: '~~~ SAND ~~~', style: ['bold', 'huge'], color: YELLOW }] },
        { align: 'center', segments: [{ text: 'KOPF', style: ['bold', 'huge', 'flip'] }] },
      ],
    },
  },
  {
    id: 'de-spr-alles-in-butter',
    answer: 'Alles in Butter',
    alternatives: ['Es ist alles in Butter', 'In Butter'],
    difficulty: 'easy',
    tags: ['idiom', 'sprichwort'],
    explanation: 'ALLES sitzt mitten in BUTTER.',
    meaning: 'Alles ist in bester Ordnung – stammt aus einer Zeit, als Glasware in Butter eingegossen sicher transportiert wurde.',
    visual: {
      kind: 'text',
      lines: [
        {
          align: 'center',
          segments: [
            { text: 'BUT ', style: ['bold', 'huge'], color: YELLOW },
            { text: 'ALLES', style: ['bold', 'huge', 'box'] },
            { text: ' TER', style: ['bold', 'huge'], color: YELLOW },
          ],
        },
      ],
    },
  },
  {
    id: 'de-spr-ueber-den-tellerrand',
    answer: 'Über den Tellerrand schauen',
    alternatives: [
      'Ueber den Tellerrand schauen',
      'Über den Tellerrand',
      'Ueber den Tellerrand',
      'Über den Tellerrand hinausschauen',
    ],
    difficulty: 'medium',
    tags: ['idiom', 'sprichwort'],
    explanation: '👁 schaut über den Rand des TELLER hinaus.',
    meaning: 'Über den eigenen Horizont hinaus denken, neue Perspektiven einnehmen.',
    visual: {
      kind: 'text',
      lines: [
        { align: 'center', segments: [{ text: '👁', style: ['huge'] }] },
        { align: 'center', segments: [{ text: '◯ TELLER ◯', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'de-spr-faden-verlieren',
    answer: 'Den Faden verlieren',
    alternatives: ['Den roten Faden verlieren', 'Faden verlieren'],
    difficulty: 'medium',
    tags: ['idiom', 'sprichwort'],
    explanation: 'Die Buchstaben von FADEN trudeln nach unten weg.',
    meaning: 'Den Gedankengang oder den roten Faden im Gespräch verlieren.',
    visual: {
      kind: 'text',
      lines: [
        {
          align: 'center',
          segments: [
            { text: 'F A D', style: ['bold', 'huge'], color: RED },
            { text: ' e ', style: ['small'] },
            { text: ' n', style: ['tiny'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-spr-aus-heiterem-himmel',
    answer: 'Aus heiterem Himmel',
    alternatives: ['Wie aus heiterem Himmel'],
    difficulty: 'medium',
    tags: ['idiom', 'sprichwort'],
    explanation: 'Ein BLITZ ⚡ schlägt aus dem HIMMEL.',
    meaning: 'Völlig unerwartet, ohne Vorwarnung – wie ein Blitz bei klarem Himmel.',
    visual: {
      kind: 'text',
      lines: [
        { align: 'center', segments: [{ text: 'HIMMEL', style: ['bold', 'huge', 'spaced'], color: BLUE }] },
        { align: 'center', segments: [{ text: '⚡', style: ['mega'], color: RED }] },
      ],
    },
  },
  {
    id: 'de-spr-nagel-auf-den-kopf',
    answer: 'Den Nagel auf den Kopf treffen',
    alternatives: ['Nagel auf den Kopf', 'Nagel auf den Kopf treffen'],
    difficulty: 'hard',
    tags: ['idiom', 'sprichwort'],
    explanation: 'NAGEL trifft mit ↓ direkt auf KOPF.',
    meaning: 'Etwas exakt auf den Punkt bringen, einen Sachverhalt präzise treffen.',
    visual: {
      kind: 'text',
      lines: [
        { align: 'center', segments: [{ text: 'NAGEL', style: ['bold', 'huge'] }] },
        { align: 'center', segments: [{ text: '↓', style: ['bold', 'huge'], color: RED }] },
        { align: 'center', segments: [{ text: 'KOPF', style: ['bold', 'huge', 'box'], color: ACCENT }] },
      ],
    },
  },
  {
    id: 'de-spr-unter-vier-augen',
    answer: 'Unter vier Augen',
    alternatives: ['Unter 4 Augen', 'Unter vier Augen reden', 'Unter vier Augen sprechen'],
    difficulty: 'medium',
    tags: ['idiom', 'sprichwort'],
    explanation: 'Die Zahl 4 steht über AUGEN.',
    meaning: 'Vertraulich, nur zu zweit – ohne dass jemand mithört.',
    visual: {
      kind: 'text',
      lines: [
        { align: 'center', segments: [{ text: '4', style: ['bold', 'mega'], color: RED }] },
        { align: 'center', segments: [{ text: '─────────', style: ['bold'] }] },
        { align: 'center', segments: [{ text: 'AUGEN', style: ['bold', 'huge', 'spaced'] }] },
      ],
    },
  },
  {
    id: 'de-spr-hund-begraben',
    answer: 'Da liegt der Hund begraben',
    alternatives: ['Hund begraben', 'Dort liegt der Hund begraben'],
    difficulty: 'hard',
    tags: ['idiom', 'sprichwort'],
    explanation: 'HUND liegt unter der Erdlinie, kopfüber.',
    meaning: 'Hier liegt die wahre Ursache eines Problems – das ist der entscheidende Punkt.',
    visual: {
      kind: 'text',
      lines: [
        { align: 'center', segments: [{ text: '▬▬▬▬▬▬▬▬▬', style: ['bold'], color: BROWN }] },
        { align: 'center', segments: [{ text: 'HUND', style: ['bold', 'huge', 'flip'] }] },
      ],
    },
  },
  {
    id: 'de-spr-haeuschen',
    answer: 'Aus dem Häuschen sein',
    alternatives: ['Aus dem Haeuschen sein', 'Aus dem Häuschen', 'Aus dem Haeuschen'],
    difficulty: 'hard',
    tags: ['idiom', 'sprichwort'],
    explanation: 'ICH steht außerhalb eines kleinen HAUS.',
    meaning: 'Vor Aufregung oder Freude völlig außer sich sein.',
    visual: {
      kind: 'text',
      lines: [
        {
          align: 'center',
          segments: [
            { text: '[ haus ]', style: ['bold', 'small', 'box'] },
            { text: '   →   ', style: ['bold'], color: RED },
            { text: 'ICH', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-spr-ueber-den-berg',
    answer: 'Über den Berg sein',
    alternatives: ['Ueber den Berg sein', 'Über den Berg', 'Ueber den Berg'],
    difficulty: 'hard',
    tags: ['idiom', 'sprichwort'],
    explanation: 'ICH steht oberhalb von BERG.',
    meaning: 'Das Schlimmste überstanden haben – die schwierigste Phase liegt hinter einem.',
    visual: {
      kind: 'text',
      lines: [
        { align: 'center', segments: [{ text: 'ICH', style: ['bold', 'huge'], color: RED }] },
        { align: 'center', segments: [{ text: '▲ BERG ▲', style: ['bold', 'huge'], color: GREEN }] },
      ],
    },
  },

  // === Compose / overlay idioms ===========================================
  // Geschichteter Visual-Stil: Hintergrund-Wort + Overlay-Layer (rotiert,
  // skaliert, frei positioniert). Erlaubt Sprichwörter, die räumlich nicht
  // mit Linien-Layout darstellbar sind.
  {
    id: 'de-spr-hinter-die-ohren-schreiben',
    answer: 'Sich etwas hinter die Ohren schreiben',
    alternatives: [
      'Sich das hinter die Ohren schreiben',
      'Hinter die Ohren schreiben',
      'Etwas hinter die Ohren schreiben',
    ],
    difficulty: 'medium',
    tags: ['idiom', 'sprichwort'],
    explanation: 'Über zwei Ohren wird etwas geschrieben.',
    meaning: 'Sich etwas gut einprägen, damit man es nicht wieder vergisst.',
    visual: {
      kind: 'compose',
      layers: [
        {
          x: 0.5,
          y: 0.55,
          scale: 1.6,
          segments: [
            { text: 'OHR', style: ['bold'] },
            { text: '   ' },
            { text: 'OHR', style: ['bold'] },
          ],
        },
        {
          x: 0.45,
          y: 0.32,
          scale: 0.85,
          rotate: -8,
          segments: [
            { text: '✎ Notiz!', style: ['italic'], color: ACCENT },
          ],
        },
      ],
    },
  },
  {
    id: 'de-spr-einen-vogel-haben',
    answer: 'Einen Vogel haben',
    alternatives: ['Du hast einen Vogel', 'Einen Vogel'],
    difficulty: 'easy',
    tags: ['idiom', 'sprichwort'],
    explanation: 'Im Kopf sitzt ein Vogel.',
    meaning: 'Sonderbar, leicht verrückt sein – nicht ganz richtig im Kopf.',
    visual: {
      kind: 'compose',
      layers: [
        {
          x: 0.5,
          y: 0.55,
          scale: 1.7,
          segments: [
            { text: 'KOPF', style: ['bold', 'box'] },
          ],
        },
        {
          x: 0.5,
          y: 0.28,
          scale: 1.4,
          rotate: -12,
          segments: [
            { text: '🐦', style: [] },
          ],
        },
      ],
    },
  },
  {
    id: 'de-spr-auge-zudruecken',
    answer: 'Ein Auge zudrücken',
    alternatives: [
      'Ein Auge zudruecken',
      'Beide Augen zudrücken',
      'Auge zudrücken',
      'Auge zudruecken',
    ],
    difficulty: 'medium',
    tags: ['idiom', 'sprichwort'],
    explanation: 'Eines von zwei AUGEN ist durchgestrichen – zugedrückt.',
    meaning: 'Bei einem kleinen Vergehen großzügig hinwegsehen, nicht streng sein.',
    visual: {
      kind: 'compose',
      layers: [
        {
          x: 0.5,
          y: 0.5,
          scale: 1.4,
          segments: [
            { text: 'AUGE', style: ['bold'] },
            { text: '   ' },
            { text: 'AUGE', style: ['bold'] },
          ],
        },
        {
          x: 0.32,
          y: 0.5,
          scale: 1.8,
          rotate: -15,
          segments: [
            { text: '✗', style: ['bold'], color: RED },
          ],
        },
      ],
    },
  },

  // === Carried over from the old deck (still real dingbats) ================
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
  {
    id: 'de-trennung',
    answer: 'Trennung',
    difficulty: 'easy',
    tags: ['classic'],
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
    tags: ['classic'],
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
    tags: ['classic'],
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
    id: 'de-querdenker',
    answer: 'Querdenker',
    difficulty: 'medium',
    tags: ['direction'],
    explanation: 'DENKER quer geschrieben.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'DENKER', style: ['bold', 'huge', 'rotate90'] }] },
      ],
    },
  },
  {
    id: 'de-halbmond',
    answer: 'Halbmond',
    difficulty: 'easy',
    tags: ['classic'],
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
    id: 'de-gluehbirne',
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
    id: 'de-vollkorn',
    answer: 'Vollkorn',
    difficulty: 'easy',
    tags: ['classic'],
    explanation: 'KORN ganz voll und fett — Vollkorn.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'KORN', style: ['bold', 'mega', 'fat'], color: BROWN }] },
      ],
    },
  },
];
