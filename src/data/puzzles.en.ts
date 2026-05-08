import type { Puzzle } from './types';

/**
 * English puzzles. Each id must be unique within this language and never reused
 * (used for localStorage progress tracking — ids are namespaced by language).
 *
 * For image puzzles, drop the asset under `public/puzzles/` and reference it
 * as `/puzzles/<file>`. The Vite base path is applied automatically by the
 * renderer, so do not prefix with the repo name.
 */
export const PUZZLES_EN: readonly Puzzle[] = [
  {
    id: 'i-understand',
    answer: 'I understand',
    difficulty: 'easy',
    tags: ['classic', 'phrase'],
    explanation: '“I” is under “STAND” → I under-stand.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'STAND', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'I', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'head-over-heels',
    answer: 'Head over heels',
    difficulty: 'easy',
    tags: ['classic', 'phrase'],
    explanation: '“HEAD” is positioned over “HEELS”.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'HEAD', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'HEELS', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'mind-over-matter',
    answer: 'Mind over matter',
    difficulty: 'easy',
    tags: ['classic', 'phrase'],
    explanation: '“MIND” over “MATTER”.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'MIND', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'MATTER', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'banana-split',
    answer: 'Banana split',
    difficulty: 'easy',
    tags: ['classic', 'food'],
    explanation: 'The word “banana” is split in two: BAN | ANA.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'BAN', style: ['bold', 'huge'] },
            { text: '          ' },
            { text: 'ANA', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'split-level',
    answer: 'Split level',
    difficulty: 'easy',
    tags: ['classic'],
    explanation: '“LEVEL” is split: LE | VEL.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'LE', style: ['bold', 'huge'] },
            { text: '          ' },
            { text: 'VEL', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'downtown',
    answer: 'Downtown',
    difficulty: 'easy',
    tags: ['classic'],
    explanation: '“TOWN” written downwards.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'T', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'O', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'W', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'N', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'backward-glance',
    answer: 'Backward glance',
    alternatives: ['A backward glance'],
    difficulty: 'medium',
    tags: ['classic'],
    explanation: '“GLANCE” written backwards.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'GLANCE', style: ['bold', 'huge', 'mirror'] }] },
      ],
    },
  },
  {
    id: 'one-in-a-million',
    answer: 'One in a million',
    difficulty: 'medium',
    tags: ['classic', 'numbers'],
    explanation: 'A “1” inside the word “MILLION”.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'MIL', style: ['bold', 'huge'] },
            { text: '1', style: ['bold', 'huge'], color: '#d32f2f' },
            { text: 'LION', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'reading-between-the-lines',
    answer: 'Reading between the lines',
    difficulty: 'medium',
    tags: ['classic'],
    explanation: '“READING” is between two lines.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: '──────────' }] },
        { segments: [{ text: 'READING', style: ['bold', 'huge'] }] },
        { segments: [{ text: '──────────' }] },
      ],
    },
  },
  {
    id: 'long-underwear',
    answer: 'Long underwear',
    difficulty: 'easy',
    tags: ['classic', 'clothing'],
    explanation: '“WEAR” is under “LONG”.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'LONG', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'WEAR', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'in-between-jobs',
    answer: 'In between jobs',
    alternatives: ['Between jobs'],
    difficulty: 'medium',
    tags: ['classic'],
    explanation: '“IN” is between two “JOB”s.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'JOB', style: ['bold', 'huge'] },
            { text: '  ' },
            { text: 'IN', style: ['bold', 'huge'], color: '#d32f2f' },
            { text: '  ' },
            { text: 'JOB', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'scrambled-eggs',
    answer: 'Scrambled eggs',
    difficulty: 'medium',
    tags: ['classic', 'food'],
    explanation: 'The letters of “EGGS” are scrambled.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'GGES', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'SEGG', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'EGSG', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'split-personality',
    answer: 'Split personality',
    difficulty: 'medium',
    tags: ['classic'],
    explanation: '“PERSONALITY” split in two.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'PERSON', style: ['bold', 'huge'] },
            { text: '          ' },
            { text: 'ALITY', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'six-feet-underground',
    answer: 'Six feet underground',
    alternatives: ['6 feet underground', 'Six feet under ground'],
    difficulty: 'medium',
    tags: ['classic'],
    explanation: 'Six “FEET” under “GROUND”.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'GROUND', style: ['bold', 'huge'] }] },
        {
          segments: [
            { text: 'FEET FEET FEET FEET FEET FEET', style: ['bold', 'small'] },
          ],
        },
      ],
    },
  },
  {
    id: 'forgiving',
    answer: 'Forgiving',
    alternatives: ['For giving'],
    difficulty: 'medium',
    tags: ['classic'],
    explanation: 'Four “GIVING”s = 4-giving = forgiving.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'GIVING  GIVING  GIVING  GIVING', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'tricycle',
    answer: 'Tricycle',
    difficulty: 'easy',
    tags: ['classic'],
    explanation: 'Three “CYCLE”s.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'CYCLE  CYCLE  CYCLE', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'crossroads',
    answer: 'Crossroads',
    alternatives: ['Cross roads'],
    difficulty: 'medium',
    tags: ['classic'],
    explanation: 'Two “ROAD”s crossing each other.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'R', style: ['bold', 'huge'] }] },
        {
          segments: [
            { text: 'ROAD', style: ['bold', 'huge'] },
          ],
        },
        { segments: [{ text: 'A', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'D', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'about-face',
    answer: 'About face',
    difficulty: 'medium',
    tags: ['classic'],
    explanation: '“FACE” turned about (mirrored).',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'FACE', style: ['bold', 'huge', 'mirror'] }] },
      ],
    },
  },

  // --- Letter / number sound puzzles ---------------------------------------
  {
    id: 'eye-for-an-eye',
    answer: 'Eye for an eye',
    alternatives: ['An eye for an eye'],
    difficulty: 'easy',
    tags: ['letters'],
    explanation: 'I (eye) + 4 (for) + I (eye).',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'I', style: ['bold', 'huge'] },
            { text: '   ' },
            { text: '4', style: ['bold', 'huge'], color: '#d32f2f' },
            { text: '   ' },
            { text: 'I', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'tea-for-two',
    answer: 'Tea for two',
    difficulty: 'easy',
    tags: ['letters', 'numbers'],
    explanation: 'T (tea) + 4 (for) + 2 (two).',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'T', style: ['bold', 'huge'] },
            { text: '   ' },
            { text: '4', style: ['bold', 'huge'], color: '#d32f2f' },
            { text: '   ' },
            { text: '2', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'wait-for-me',
    answer: 'Wait for me',
    difficulty: 'easy',
    tags: ['letters', 'numbers'],
    explanation: 'WAIT + 4 (for) + ME.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'WAIT', style: ['bold', 'huge'] },
            { text: '   ' },
            { text: '4', style: ['bold', 'huge'], color: '#d32f2f' },
            { text: '   ' },
            { text: 'ME', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'high-five',
    answer: 'High five',
    alternatives: ['Hi five', 'Hi-five', 'High-five'],
    difficulty: 'easy',
    tags: ['letters', 'numbers'],
    explanation: 'HI + 5.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'HI', style: ['bold', 'huge'] },
            { text: '   ' },
            { text: '5', style: ['bold', 'huge'], color: '#d32f2f' },
          ],
        },
      ],
    },
  },
  {
    id: 'take-five',
    answer: 'Take five',
    difficulty: 'easy',
    tags: ['numbers'],
    explanation: 'TAKE + 5.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'TAKE', style: ['bold', 'huge'] },
            { text: '   ' },
            { text: '5', style: ['bold', 'huge'], color: '#d32f2f' },
          ],
        },
      ],
    },
  },
  {
    id: 'catch-22',
    answer: 'Catch 22',
    alternatives: ['Catch twenty two', 'Catch twenty-two'],
    difficulty: 'easy',
    tags: ['numbers'],
    explanation: 'CATCH + 22.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'CATCH', style: ['bold', 'huge'] },
            { text: '   ' },
            { text: '22', style: ['bold', 'huge'], color: '#d32f2f' },
          ],
        },
      ],
    },
  },
  {
    id: 'ten-four',
    answer: 'Ten four',
    alternatives: ['10-4', 'Ten-four'],
    difficulty: 'easy',
    tags: ['numbers'],
    explanation: '10 — 4. The radio code for “message received.”',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: '10', style: ['bold', 'huge'] },
            { text: ' — ' },
            { text: '4', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'for-instance',
    answer: 'For instance',
    difficulty: 'medium',
    tags: ['numbers'],
    explanation: 'A “4” (for) inside the word INSTANCE.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'INSTA', style: ['bold', 'huge'] },
            { text: '4', style: ['bold', 'huge'], color: '#d32f2f' },
            { text: 'NCE', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'two-in-one',
    answer: 'Two in one',
    alternatives: ['2 in 1', 'Two-in-one'],
    difficulty: 'easy',
    tags: ['numbers'],
    explanation: 'A “2” inside ONE.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'O', style: ['bold', 'huge'] },
            { text: '2', style: ['bold', 'huge'], color: '#d32f2f' },
            { text: 'NE', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'thank-you',
    answer: 'Thank you',
    alternatives: ['Thanks', 'Thankyou'],
    difficulty: 'medium',
    tags: ['letters'],
    explanation: '“10 Q” → ten-q → thank you.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: '10', style: ['bold', 'huge'] },
            { text: ' ' },
            { text: 'Q', style: ['bold', 'huge'], color: '#d32f2f' },
          ],
        },
      ],
    },
  },
  {
    id: 'excuse-me',
    answer: 'Excuse me',
    difficulty: 'medium',
    tags: ['letters'],
    explanation: 'X + cues (Q’s) + ME → ex-cuse me.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'X', style: ['bold', 'huge'] },
            { text: ' ' },
            { text: 'QQQQQ', style: ['bold', 'huge'], color: '#d32f2f' },
            { text: ' ' },
            { text: 'ME', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'sea-water',
    answer: 'Sea water',
    alternatives: ['Seawater'],
    difficulty: 'hard',
    tags: ['letters'],
    explanation: 'C (sea) + H to O in the alphabet (H₂O = water).',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'C', style: ['bold', 'huge'] },
            { text: '   ' },
            { text: 'HIJKLMNO', style: ['bold', 'huge'], color: '#1976d2' },
          ],
        },
      ],
    },
  },
  {
    id: 'you-are-too-wise-for-me',
    answer: 'You are too wise for me',
    alternatives: ['Youre too wise for me'],
    difficulty: 'hard',
    tags: ['letters', 'numbers'],
    explanation: 'U R 2 Y’s 4 ME — you are too (2) wise (Y’s) for (4) me.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'U R', style: ['bold', 'huge'] },
            { text: '   ' },
            { text: '2', style: ['bold', 'huge'], color: '#d32f2f' },
            { text: ' ' },
            { text: 'YY', style: ['bold', 'huge'], color: '#d32f2f' },
            { text: '   ' },
            { text: '4', style: ['bold', 'huge'], color: '#d32f2f' },
            { text: ' ' },
            { text: 'ME', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'long-time-no-see',
    answer: 'Long time no see',
    difficulty: 'medium',
    tags: ['letters'],
    explanation: 'LONG TIME NO C (see) — and the C is missing.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'LONG  TIME  NO  ', style: ['bold', 'huge'] },
            { text: '?', style: ['bold', 'huge'], color: '#d32f2f' },
          ],
        },
      ],
    },
  },
  {
    id: 'three-blind-mice',
    answer: 'Three blind mice',
    difficulty: 'medium',
    tags: ['classic'],
    explanation: 'Three “MICE” without their I (eye) — three blind mice.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'M_CE   M_CE   M_CE', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'seven-seas',
    answer: 'The seven seas',
    alternatives: ['Seven seas'],
    difficulty: 'easy',
    tags: ['letters'],
    explanation: 'Seven C’s → seven seas.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'C C C C C C C', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'potatoes',
    answer: 'Potatoes',
    difficulty: 'medium',
    tags: ['food', 'letters'],
    explanation: 'POT + 8 O’s → pot-eight-oes → potatoes.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'POT', style: ['bold', 'huge'] },
            { text: '  ' },
            { text: 'OOOOOOOO', style: ['bold', 'huge'], color: '#d32f2f' },
          ],
        },
      ],
    },
  },
  {
    id: 'canine',
    answer: 'Canine',
    difficulty: 'medium',
    tags: ['animals', 'letters'],
    explanation: 'CA written nine times → ca-nine.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'CA CA CA CA CA CA CA CA CA', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'up-before-eight',
    answer: 'Up before eight',
    difficulty: 'easy',
    tags: ['numbers'],
    explanation: 'UP placed before 8.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'UP', style: ['bold', 'huge'] },
            { text: '   ' },
            { text: '8', style: ['bold', 'huge'], color: '#d32f2f' },
          ],
        },
      ],
    },
  },
  {
    id: 'once-upon-a-time',
    answer: 'Once upon a time',
    difficulty: 'medium',
    tags: ['classic', 'numbers'],
    explanation: '1 (once) sitting upon TIME.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: '1', style: ['bold', 'huge'], color: '#d32f2f' }] },
        { segments: [{ text: 'TIME', style: ['bold', 'huge'] }] },
      ],
    },
  },

  // --- Repetition puzzles --------------------------------------------------
  {
    id: 'time-after-time',
    answer: 'Time after time',
    difficulty: 'easy',
    tags: ['classic'],
    explanation: 'TIME positioned after TIME.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'TIME   TIME', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'cheek-to-cheek',
    answer: 'Cheek to cheek',
    difficulty: 'easy',
    tags: ['classic'],
    explanation: 'Two CHEEKs touching.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'CHEEKCHEEK', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'beside-himself',
    answer: 'He is beside himself',
    alternatives: ['Beside himself', "He's beside himself"],
    difficulty: 'medium',
    tags: ['classic'],
    explanation: 'HIMSELF beside HIMSELF.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'HIMSELF   HIMSELF', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'word-for-word',
    answer: 'Word for word',
    difficulty: 'easy',
    tags: ['classic'],
    explanation: 'Literal: WORD for WORD.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'WORD   ', style: ['bold', 'huge'] },
            { text: '4', style: ['bold', 'huge'], color: '#d32f2f' },
            { text: '   WORD', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'eye-to-eye',
    answer: 'Eye to eye',
    alternatives: ['See eye to eye'],
    difficulty: 'easy',
    tags: ['classic'],
    explanation: 'EYE meeting EYE.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'EYE  ', style: ['bold', 'huge'] },
            { text: '2', style: ['bold', 'huge'], color: '#d32f2f' },
            { text: '  EYE', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'history-repeats-itself',
    answer: 'History repeats itself',
    difficulty: 'easy',
    tags: ['classic'],
    explanation: 'HISTORY literally repeats.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'HISTORY HISTORY', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'second-chance',
    answer: 'Second chance',
    difficulty: 'easy',
    tags: ['classic'],
    explanation: 'A second CHANCE.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'CHANCE   CHANCE', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'tripod',
    answer: 'Tripod',
    difficulty: 'easy',
    tags: ['classic'],
    explanation: 'Tri (three) PODs.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'POD  POD  POD', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'three-musketeers',
    answer: 'The three musketeers',
    alternatives: ['Three musketeers'],
    difficulty: 'easy',
    tags: ['classic'],
    explanation: 'Three MUSKETEERs.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'MUSKETEER MUSKETEER MUSKETEER', style: ['bold', 'small'] },
          ],
        },
      ],
    },
  },
  {
    id: 'therefore',
    answer: 'Therefore',
    alternatives: ['There 4'],
    difficulty: 'medium',
    tags: ['classic'],
    explanation: 'THERE × 4 → there-fore.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'THERE THERE THERE THERE', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'forgive-and-forget',
    answer: 'Forgive and forget',
    difficulty: 'hard',
    tags: ['classic'],
    explanation: '4 GIVEs and 4 GETs → forgive and forget.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'GIVE GIVE GIVE GIVE', style: ['bold', 'huge'] }] },
        { segments: [{ text: '&', style: ['bold'] }] },
        { segments: [{ text: 'GET GET GET GET', style: ['bold', 'huge'] }] },
      ],
    },
  },

  // --- Position-based puzzles ----------------------------------------------
  {
    id: 'eggs-over-easy',
    answer: 'Eggs over easy',
    difficulty: 'easy',
    tags: ['food'],
    explanation: 'EGGS over EASY.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'EGGS', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'EASY', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'top-secret',
    answer: 'Top secret',
    difficulty: 'easy',
    tags: ['classic'],
    explanation: 'SECRET sitting at the very top of the frame.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'SECRET', style: ['bold', 'huge'], color: '#d32f2f' }] },
        { segments: [{ text: ' ' }] },
        { segments: [{ text: ' ' }] },
        { segments: [{ text: ' ' }] },
      ],
    },
  },
  {
    id: 'cloud-nine',
    answer: 'On cloud nine',
    alternatives: ['Cloud nine'],
    difficulty: 'easy',
    tags: ['phrase', 'numbers'],
    explanation: '9 sitting on top of CLOUD.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: '9', style: ['bold', 'huge'], color: '#d32f2f' }] },
        { segments: [{ text: 'CLOUD', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'seventh-heaven',
    answer: 'Seventh heaven',
    alternatives: ['Seven heaven'],
    difficulty: 'easy',
    tags: ['numbers'],
    explanation: '7 on top of HEAVEN.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: '7', style: ['bold', 'huge'], color: '#d32f2f' }] },
        { segments: [{ text: 'HEAVEN', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'pie-in-the-sky',
    answer: 'Pie in the sky',
    difficulty: 'easy',
    tags: ['food', 'phrase'],
    explanation: 'PIE positioned above SKY.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'PIE', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'SKY', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'sitting-on-top-of-the-world',
    answer: 'Sitting on top of the world',
    alternatives: ['On top of the world'],
    difficulty: 'medium',
    tags: ['phrase'],
    explanation: 'SITTING on top of WORLD.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'SITTING', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'WORLD', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'underdog',
    answer: 'Underdog',
    difficulty: 'easy',
    tags: ['classic'],
    explanation: 'DOG below a horizontal line — under-dog.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: '─────────────', style: ['bold'] }] },
        { segments: [{ text: 'DOG', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'underage',
    answer: 'Underage',
    difficulty: 'easy',
    tags: ['classic'],
    explanation: 'AGE below a horizontal line.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: '─────────────', style: ['bold'] }] },
        { segments: [{ text: 'AGE', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'overcoat',
    answer: 'Overcoat',
    difficulty: 'easy',
    tags: ['clothing'],
    explanation: 'COAT placed above SHIRT — worn over.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'COAT', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'SHIRT', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'wish-upon-a-star',
    answer: 'Wish upon a star',
    difficulty: 'easy',
    tags: ['phrase'],
    explanation: 'WISH placed upon STAR.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'WISH', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'STAR', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'man-overboard',
    answer: 'Man overboard',
    difficulty: 'medium',
    tags: ['classic'],
    explanation: 'MAN over (a line representing) BOARD.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'MAN', style: ['bold', 'huge'] }] },
        { segments: [{ text: '─────────────' }] },
        { segments: [{ text: 'BOARD', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'down-to-earth',
    answer: 'Down to earth',
    difficulty: 'medium',
    tags: ['phrase'],
    explanation: 'A downward arrow pointing to EARTH.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: '↓', style: ['bold', 'mega'], color: '#d32f2f' }] },
        { segments: [{ text: 'EARTH', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'neon-light',
    answer: 'Neon light',
    difficulty: 'medium',
    tags: ['classic'],
    explanation: 'KNEE on top of LIGHT → knee-on-light → neon light.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'KNEE', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'LIGHT', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'misunderstanding',
    answer: 'Misunderstanding',
    alternatives: ['A misunderstanding'],
    difficulty: 'medium',
    tags: ['classic'],
    explanation: 'MIS over STAND → mis-under-standing.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'MIS', style: ['bold', 'huge'], color: '#d32f2f' }] },
        { segments: [{ text: 'STAND', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'just-between-you-and-me',
    answer: 'Just between you and me',
    alternatives: ['Between you and me'],
    difficulty: 'medium',
    tags: ['phrase'],
    explanation: 'JUST literally between YOU and ME.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'YOU', style: ['bold', 'huge'] },
            { text: '   ' },
            { text: 'JUST', style: ['bold', 'huge'], color: '#d32f2f' },
            { text: '   ' },
            { text: 'ME', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },

  // --- Inside / outside puzzles --------------------------------------------
  {
    id: 'just-in-time',
    answer: 'Just in time',
    difficulty: 'medium',
    tags: ['classic'],
    explanation: 'JUST inside TIME.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'TI', style: ['bold', 'huge'] },
            { text: 'JUST', style: ['bold', 'huge'], color: '#d32f2f' },
            { text: 'ME', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'made-in-china',
    answer: 'Made in China',
    difficulty: 'medium',
    tags: ['classic'],
    explanation: 'MADE inside CHINA.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'CHI', style: ['bold', 'huge'] },
            { text: 'MADE', style: ['bold', 'huge'], color: '#d32f2f' },
            { text: 'NA', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'snake-in-the-grass',
    answer: 'Snake in the grass',
    alternatives: ['A snake in the grass'],
    difficulty: 'medium',
    tags: ['phrase', 'animals'],
    explanation: 'SNAKE inside GRASS.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'GRA', style: ['bold', 'huge'] },
            { text: 'SNAKE', style: ['bold', 'huge'], color: '#2e7d32' },
            { text: 'SS', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'pain-in-the-neck',
    answer: 'Pain in the neck',
    alternatives: ['A pain in the neck'],
    difficulty: 'medium',
    tags: ['phrase'],
    explanation: 'PAIN inside NECK.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'NE', style: ['bold', 'huge'] },
            { text: 'PAIN', style: ['bold', 'huge'], color: '#d32f2f' },
            { text: 'CK', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'drop-in-the-ocean',
    answer: 'A drop in the ocean',
    alternatives: ['Drop in the ocean'],
    difficulty: 'medium',
    tags: ['phrase'],
    explanation: 'DROP inside OCEAN.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'OC', style: ['bold', 'huge'] },
            { text: 'DROP', style: ['bold', 'huge'], color: '#1976d2' },
            { text: 'EAN', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'storm-in-a-teacup',
    answer: 'Storm in a teacup',
    alternatives: ['A storm in a teacup'],
    difficulty: 'medium',
    tags: ['phrase'],
    explanation: 'STORM inside TEACUP.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'TEA', style: ['bold', 'huge'] },
            { text: 'STORM', style: ['bold', 'huge'], color: '#d32f2f' },
            { text: 'CUP', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'once-in-a-while',
    answer: 'Once in a while',
    difficulty: 'medium',
    tags: ['phrase'],
    explanation: 'ONCE inside WHILE.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'WH', style: ['bold', 'huge'] },
            { text: 'ONCE', style: ['bold', 'huge'], color: '#d32f2f' },
            { text: 'ILE', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'red-in-the-face',
    answer: 'Red in the face',
    difficulty: 'medium',
    tags: ['phrase', 'color'],
    explanation: 'A red dot inside FACE.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'FA', style: ['bold', 'huge'] },
            { text: '●', style: ['bold', 'huge'], color: '#d32f2f' },
            { text: 'CE', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'jack-in-the-box',
    answer: 'Jack in the box',
    difficulty: 'easy',
    tags: ['classic'],
    explanation: 'JACK inside a box.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'JACK', style: ['bold', 'huge', 'box'] }] },
      ],
    },
  },
  {
    id: 'square-meal',
    answer: 'Square meal',
    alternatives: ['A square meal'],
    difficulty: 'easy',
    tags: ['food'],
    explanation: 'MEAL inside a square.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'MEAL', style: ['bold', 'huge', 'box'] }] },
      ],
    },
  },
  {
    id: 'square-deal',
    answer: 'Square deal',
    alternatives: ['A square deal'],
    difficulty: 'easy',
    tags: ['classic'],
    explanation: 'DEAL inside a square.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'DEAL', style: ['bold', 'huge', 'box'] }] },
      ],
    },
  },
  {
    id: 'square-root',
    answer: 'Square root',
    difficulty: 'easy',
    tags: ['math'],
    explanation: 'ROOT inside a square.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'ROOT', style: ['bold', 'huge', 'box'] }] },
      ],
    },
  },
  {
    id: 'thinking-outside-the-box',
    answer: 'Thinking outside the box',
    alternatives: ['Think outside the box'],
    difficulty: 'medium',
    tags: ['phrase'],
    explanation: 'THINKING placed outside the box.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'THINKING ', style: ['bold', 'huge'] },
            { text: '   ', style: ['huge', 'box'] },
          ],
        },
      ],
    },
  },

  // --- Color-based puzzles -------------------------------------------------
  {
    id: 'black-eye',
    answer: 'Black eye',
    alternatives: ['A black eye'],
    difficulty: 'easy',
    tags: ['color', 'letters'],
    explanation: 'A black I (eye).',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'I', style: ['bold', 'huge'], color: '#000000' }] },
      ],
    },
  },
  {
    id: 'green-tea',
    answer: 'Green tea',
    difficulty: 'easy',
    tags: ['color', 'letters'],
    explanation: 'A green T (tea).',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'T', style: ['bold', 'huge'], color: '#2e7d32' }] },
      ],
    },
  },
  {
    id: 'red-handed',
    answer: 'Red handed',
    alternatives: ['Caught red handed', 'Red-handed'],
    difficulty: 'easy',
    tags: ['color'],
    explanation: 'HANDED in red.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'HANDED', style: ['bold', 'huge'], color: '#d32f2f' }] },
      ],
    },
  },

  // --- Size puzzles --------------------------------------------------------
  {
    id: 'big-deal',
    answer: 'Big deal',
    difficulty: 'easy',
    tags: ['size'],
    explanation: 'A literally big DEAL.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'DEAL', style: ['bold', 'mega'] }] },
      ],
    },
  },
  {
    id: 'big-bang',
    answer: 'Big bang',
    alternatives: ['The big bang'],
    difficulty: 'easy',
    tags: ['size'],
    explanation: 'A literally big BANG.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'BANG!', style: ['bold', 'mega'], color: '#d32f2f' }] },
      ],
    },
  },
  {
    id: 'big-shot',
    answer: 'Big shot',
    alternatives: ['A big shot'],
    difficulty: 'easy',
    tags: ['size'],
    explanation: 'SHOT writ large.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'SHOT', style: ['bold', 'mega'] }] },
      ],
    },
  },
  {
    id: 'small-fry',
    answer: 'Small fry',
    difficulty: 'easy',
    tags: ['size'],
    explanation: 'FRY writ tiny.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'FRY', style: ['bold', 'tiny'] }] },
      ],
    },
  },
  {
    id: 'fat-chance',
    answer: 'Fat chance',
    difficulty: 'easy',
    tags: ['size'],
    explanation: 'CHANCE in extra-fat letters.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'CHANCE', style: ['mega', 'fat'] }] },
      ],
    },
  },
  {
    id: 'short-story',
    answer: 'Short story',
    alternatives: ['A short story'],
    difficulty: 'easy',
    tags: ['size'],
    explanation: 'STORY writ short and small.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'STORY', style: ['bold', 'small'] }] },
      ],
    },
  },
  {
    id: 'long-story-short',
    answer: 'Long story short',
    alternatives: ['To make a long story short'],
    difficulty: 'medium',
    tags: ['size'],
    explanation: 'STORY stretched, then SHORT crammed.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'S T O R Y', style: ['bold', 'huge', 'spaced'] },
            { text: '   ' },
            { text: 'SHORT', style: ['bold', 'small'] },
          ],
        },
      ],
    },
  },

  // --- Mirror / flip / scramble --------------------------------------------
  {
    id: 'bottoms-up',
    answer: 'Bottoms up',
    difficulty: 'medium',
    tags: ['classic'],
    explanation: 'CHEERS turned upside down — bottoms up.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'CHEERS', style: ['bold', 'huge', 'rotate180'] }] },
      ],
    },
  },
  {
    id: 'antivirus',
    answer: 'Antivirus',
    difficulty: 'medium',
    tags: ['classic'],
    explanation: 'VIRUS reversed → anti-virus.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'VIRUS', style: ['bold', 'huge', 'mirror'] }] },
      ],
    },
  },
  {
    id: 'dont-look-back',
    answer: 'Don’t look back',
    alternatives: ['Dont look back', 'Do not look back'],
    difficulty: 'medium',
    tags: ['classic'],
    explanation: 'BACK written backwards next to LOOK.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'LOOK ', style: ['bold', 'huge'] },
            { text: 'BACK', style: ['bold', 'huge', 'mirror'] },
          ],
        },
      ],
    },
  },
  {
    id: 'trail-mix',
    answer: 'Trail mix',
    difficulty: 'easy',
    tags: ['food'],
    explanation: 'The letters of TRAIL all mixed up.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'L A T R I', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'feedback',
    answer: 'Feedback',
    difficulty: 'medium',
    tags: ['classic'],
    explanation: 'FEED with an arrow looping back.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'FEED', style: ['bold', 'huge'] },
            { text: '  ↩', style: ['bold', 'mega'], color: '#d32f2f' },
          ],
        },
      ],
    },
  },

  // --- Position / direction ------------------------------------------------
  {
    id: 'two-way-street',
    answer: 'Two-way street',
    alternatives: ['Two way street'],
    difficulty: 'easy',
    tags: ['classic'],
    explanation: 'WAY pointing both directions.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: '←  ', style: ['huge'], color: '#d32f2f' },
            { text: 'WAY', style: ['bold', 'huge'] },
            { text: '  →', style: ['huge'], color: '#d32f2f' },
          ],
        },
      ],
    },
  },
  {
    id: 'two-left-feet',
    answer: 'Two left feet',
    difficulty: 'medium',
    tags: ['classic'],
    explanation: 'Two LEFT arrows + FEET.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: '← ←  ', style: ['huge'], color: '#d32f2f' },
            { text: 'FEET', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'open-mind',
    answer: 'Open mind',
    alternatives: ['An open mind'],
    difficulty: 'easy',
    tags: ['classic'],
    explanation: 'MIND with the letters opened up.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'MIND', style: ['bold', 'huge', 'spaced'] }] },
      ],
    },
  },
  {
    id: 'broken-heart',
    answer: 'Broken heart',
    alternatives: ['A broken heart'],
    difficulty: 'easy',
    tags: ['classic'],
    explanation: 'HEART split apart.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'HEA', style: ['bold', 'huge'], color: '#d32f2f' },
            { text: '  ✂  ' },
            { text: 'RT', style: ['bold', 'huge'], color: '#d32f2f' },
          ],
        },
      ],
    },
  },
  {
    id: 'broken-promise',
    answer: 'A broken promise',
    alternatives: ['Broken promise'],
    difficulty: 'easy',
    tags: ['classic'],
    explanation: 'PROMISE split apart.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'PROMI', style: ['bold', 'huge'] },
            { text: '  ✂  ' },
            { text: 'SE', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'lucky-break',
    answer: 'Lucky break',
    alternatives: ['A lucky break'],
    difficulty: 'easy',
    tags: ['classic'],
    explanation: 'LUCKY visibly broken.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'LUC', style: ['bold', 'huge'] },
            { text: '  ✂  ' },
            { text: 'KY', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'piece-of-cake',
    answer: 'A piece of cake',
    alternatives: ['Piece of cake'],
    difficulty: 'easy',
    tags: ['classic', 'food'],
    explanation: 'A piece of CAKE — one letter sliced off.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'C', style: ['bold', 'huge'] },
            { text: ' | ', color: '#d32f2f' },
            { text: 'AKE', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'standing-ovation',
    answer: 'Standing ovation',
    alternatives: ['A standing ovation'],
    difficulty: 'easy',
    tags: ['classic'],
    explanation: 'OVATION standing up vertically.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'O', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'V', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'A', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'T', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'I', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'O', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'N', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'three-degrees-below-zero',
    answer: 'Three degrees below zero',
    difficulty: 'medium',
    tags: ['classic'],
    explanation: 'Three °s positioned below 0.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: '0', style: ['bold', 'huge'] }] },
        { segments: [{ text: '° ° °', style: ['bold', 'huge'], color: '#d32f2f' }] },
      ],
    },
  },

  // --- Vertical stacking (over/under variants) -----------------------------
  {
    id: 'download',
    answer: 'Download',
    difficulty: 'easy',
    tags: ['classic'],
    explanation: 'A downward arrow above LOAD.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: '↓', style: ['bold', 'mega'], color: '#1976d2' }] },
        { segments: [{ text: 'LOAD', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'upload',
    answer: 'Upload',
    difficulty: 'easy',
    tags: ['classic'],
    explanation: 'An upward arrow above LOAD.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: '↑', style: ['bold', 'mega'], color: '#1976d2' }] },
        { segments: [{ text: 'LOAD', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'touchdown',
    answer: 'Touchdown',
    difficulty: 'easy',
    tags: ['classic'],
    explanation: 'TOUCH written downward.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'T', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'O', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'U', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'C', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'H', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'ground-coffee',
    answer: 'Ground coffee',
    difficulty: 'medium',
    tags: ['food', 'classic'],
    explanation: 'The letters of COFFEE ground up — scrambled.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'F E O F C E', style: ['bold', 'huge'], color: '#5d4037' }] },
      ],
    },
  },
  {
    id: 'above-the-law',
    answer: 'Above the law',
    difficulty: 'medium',
    tags: ['phrase'],
    explanation: 'YOU positioned above LAW.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'YOU', style: ['bold', 'huge'], color: '#d32f2f' }] },
        { segments: [{ text: 'LAW', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'below-the-belt',
    answer: 'Below the belt',
    difficulty: 'medium',
    tags: ['phrase'],
    explanation: 'PUNCH below BELT.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'BELT', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'PUNCH', style: ['bold', 'huge'], color: '#d32f2f' }] },
      ],
    },
  },
  {
    id: 'top-hat',
    answer: 'Top hat',
    difficulty: 'easy',
    tags: ['clothing'],
    explanation: 'HAT placed on top of HEAD.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'HAT', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'HEAD', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'apple-pi',
    answer: 'Apple pie',
    difficulty: 'medium',
    tags: ['food', 'letters'],
    explanation: 'APPLE + π (pi) → apple pie.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'APPLE  ', style: ['bold', 'huge'] },
            { text: 'π', style: ['bold', 'huge'], color: '#d32f2f' },
          ],
        },
      ],
    },
  },

  // --- "Pair of …" repetition ---------------------------------------------
  {
    id: 'paradise',
    answer: 'Paradise',
    difficulty: 'hard',
    tags: ['classic'],
    explanation: 'A pair of DICE → para-dice → paradise.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'DICE   DICE', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'paradox',
    answer: 'Paradox',
    alternatives: ['A paradox'],
    difficulty: 'hard',
    tags: ['classic'],
    explanation: 'A pair of DOX (docs) → para-dox.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'DOX   DOX', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'paranormal',
    answer: 'Paranormal',
    difficulty: 'hard',
    tags: ['classic'],
    explanation: 'A pair of NORMAL → para-normal.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'NORMAL   NORMAL', style: ['bold', 'huge'] }] },
      ],
    },
  },

  // --- Doubles -------------------------------------------------------------
  {
    id: 'double-cross',
    answer: 'Double cross',
    difficulty: 'easy',
    tags: ['classic'],
    explanation: 'Two crosses (X’s).',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'X   X', style: ['bold', 'mega'], color: '#d32f2f' }] },
      ],
    },
  },
  {
    id: 'double-take',
    answer: 'Double take',
    difficulty: 'easy',
    tags: ['classic'],
    explanation: 'Two TAKEs.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'TAKE   TAKE', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'double-dutch',
    answer: 'Double dutch',
    difficulty: 'easy',
    tags: ['classic'],
    explanation: 'Two DUTCHes.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'DUTCH   DUTCH', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'two-of-a-kind',
    answer: 'Two of a kind',
    difficulty: 'easy',
    tags: ['classic'],
    explanation: 'Two KINDs.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'KIND   KIND', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'two-faced',
    answer: 'Two faced',
    alternatives: ['Two-faced'],
    difficulty: 'easy',
    tags: ['classic'],
    explanation: 'Two FACEDs.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'FACED   FACED', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'neck-and-neck',
    answer: 'Neck and neck',
    difficulty: 'easy',
    tags: ['classic'],
    explanation: 'Two NECKs running together.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'NECKNECK', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'side-by-side',
    answer: 'Side by side',
    difficulty: 'easy',
    tags: ['classic'],
    explanation: 'Literal: SIDE by SIDE.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'SIDE  ', style: ['bold', 'huge'] },
            { text: 'BY', style: ['bold', 'huge'], color: '#d32f2f' },
            { text: '  SIDE', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'review',
    answer: 'Review',
    difficulty: 'medium',
    tags: ['classic'],
    explanation: 'RE + VIEW. Multiple VIEWs being reviewed.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'VIEW VIEW VIEW VIEW', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'revision',
    answer: 'Revision',
    difficulty: 'medium',
    tags: ['classic'],
    explanation: 'RE + VISION (vision again).',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'VISION   VISION', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'metaphor',
    answer: 'Metaphor',
    difficulty: 'hard',
    tags: ['classic'],
    explanation: 'META × 4 → meta-four → metaphor.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'META META META META', style: ['bold', 'huge'] }] },
      ],
    },
  },

  // --- Mirror "X to X" -----------------------------------------------------
  {
    id: 'head-to-head',
    answer: 'Head to head',
    difficulty: 'medium',
    tags: ['classic'],
    explanation: 'Two HEADs facing each other.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'HEAD ', style: ['bold', 'huge'] },
            { text: 'HEAD', style: ['bold', 'huge', 'mirror'] },
          ],
        },
      ],
    },
  },
  {
    id: 'face-to-face',
    answer: 'Face to face',
    difficulty: 'medium',
    tags: ['classic'],
    explanation: 'Two FACEs facing each other.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'FACE ', style: ['bold', 'huge'] },
            { text: 'FACE', style: ['bold', 'huge', 'mirror'] },
          ],
        },
      ],
    },
  },
  {
    id: 'end-to-end',
    answer: 'End to end',
    difficulty: 'medium',
    tags: ['classic'],
    explanation: 'Two ENDs touching, end to end.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'END', style: ['bold', 'huge'] },
            { text: 'END', style: ['bold', 'huge', 'mirror'] },
          ],
        },
      ],
    },
  },

  // --- Inside puzzles ------------------------------------------------------
  {
    id: 'get-in-touch',
    answer: 'Get in touch',
    difficulty: 'medium',
    tags: ['phrase'],
    explanation: 'GET inside TOUCH.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'TO', style: ['bold', 'huge'] },
            { text: 'GET', style: ['bold', 'huge'], color: '#d32f2f' },
            { text: 'UCH', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'sleep-in',
    answer: 'Sleep in',
    difficulty: 'medium',
    tags: ['phrase'],
    explanation: 'IN inside SLEEP.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'SL', style: ['bold', 'huge'] },
            { text: 'IN', style: ['bold', 'huge'], color: '#d32f2f' },
            { text: 'EEP', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'mind-games',
    answer: 'Mind games',
    difficulty: 'medium',
    tags: ['phrase'],
    explanation: 'GAMES inside MIND.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'MI', style: ['bold', 'huge'] },
            { text: 'GAMES', style: ['bold', 'huge'], color: '#d32f2f' },
            { text: 'ND', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'arm-in-arm',
    answer: 'Arm in arm',
    difficulty: 'medium',
    tags: ['phrase'],
    explanation: 'ARM inside ARM.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'AR', style: ['bold', 'huge'] },
            { text: 'ARM', style: ['bold', 'huge'], color: '#d32f2f' },
            { text: 'M', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'foot-in-mouth',
    answer: 'Foot in mouth',
    alternatives: ['Foot in mouth disease', 'Put your foot in your mouth'],
    difficulty: 'medium',
    tags: ['phrase'],
    explanation: 'FOOT inside MOUTH.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'MO', style: ['bold', 'huge'] },
            { text: 'FOOT', style: ['bold', 'huge'], color: '#d32f2f' },
            { text: 'UTH', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'tongue-in-cheek',
    answer: 'Tongue in cheek',
    difficulty: 'hard',
    tags: ['phrase'],
    explanation: 'TONGUE inside CHEEK.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'C', style: ['bold', 'huge'] },
            { text: 'TONGUE', style: ['bold', 'huge'], color: '#d32f2f' },
            { text: 'HEEK', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'within-reach',
    answer: 'Within reach',
    difficulty: 'medium',
    tags: ['phrase'],
    explanation: 'WITHIN inside REACH.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'RE', style: ['bold', 'huge'] },
            { text: 'WITHIN', style: ['bold', 'huge'], color: '#d32f2f' },
            { text: 'ACH', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'dancing-in-the-rain',
    answer: 'Dancing in the rain',
    difficulty: 'medium',
    tags: ['phrase'],
    explanation: 'DANCING inside RAIN.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'RA', style: ['bold', 'huge'] },
            { text: 'DANCING', style: ['bold', 'huge'], color: '#1976d2' },
            { text: 'IN', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'boxing-day',
    answer: 'Boxing day',
    difficulty: 'easy',
    tags: ['classic'],
    explanation: 'DAY inside a box.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'DAY', style: ['bold', 'huge', 'box'] }] },
      ],
    },
  },
  {
    id: 'inner-circle',
    answer: 'Inner circle',
    alternatives: ['The inner circle'],
    difficulty: 'medium',
    tags: ['classic'],
    explanation: 'INNER nestled inside the word CIRCLE.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'CIR', style: ['bold', 'huge'] },
            { text: 'INNER', style: ['bold', 'huge'], color: '#d32f2f' },
            { text: 'CLE', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'elephant-in-the-room',
    answer: 'Elephant in the room',
    alternatives: ['The elephant in the room'],
    difficulty: 'medium',
    tags: ['phrase'],
    explanation: 'A huge ELEPHANT inside a room (box).',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'ELEPHANT', style: ['bold', 'mega', 'box'] }] },
      ],
    },
  },

  // --- Color puzzles -------------------------------------------------------
  {
    id: 'white-lie',
    answer: 'White lie',
    alternatives: ['A white lie'],
    difficulty: 'medium',
    tags: ['color'],
    explanation: 'A LIE in white outline.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'LIE', style: ['bold', 'mega', 'outline'] }] },
      ],
    },
  },

  // --- Direction / vertical -----------------------------------------------
  {
    id: 'line-up',
    answer: 'Line up',
    alternatives: ['Lineup'],
    difficulty: 'easy',
    tags: ['direction'],
    explanation: 'LINE reading upward (bottom to top).',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'E', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'N', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'I', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'L', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'time-is-up',
    answer: 'Time is up',
    alternatives: ["Time's up"],
    difficulty: 'medium',
    tags: ['direction'],
    explanation: 'TIME reading upward.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'E', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'M', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'I', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'T', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'hands-down',
    answer: 'Hands down',
    difficulty: 'easy',
    tags: ['direction'],
    explanation: 'HANDS reading downward.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'H', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'A', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'N', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'D', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'S', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'eyes-up',
    answer: 'Eyes up',
    alternatives: ['Eyes up here'],
    difficulty: 'medium',
    tags: ['direction'],
    explanation: 'EYES reading upward.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'S', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'E', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'Y', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'E', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'sunrise',
    answer: 'Sunrise',
    difficulty: 'easy',
    tags: ['direction'],
    explanation: 'SUN reading upward (rising).',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'N', style: ['bold', 'huge'], color: '#f9a825' }] },
        { segments: [{ text: 'U', style: ['bold', 'huge'], color: '#f9a825' }] },
        { segments: [{ text: 'S', style: ['bold', 'huge'], color: '#f9a825' }] },
      ],
    },
  },
  {
    id: 'sunset',
    answer: 'Sunset',
    difficulty: 'easy',
    tags: ['direction'],
    explanation: 'SUN reading downward (setting).',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'S', style: ['bold', 'huge'], color: '#ef6c00' }] },
        { segments: [{ text: 'U', style: ['bold', 'huge'], color: '#ef6c00' }] },
        { segments: [{ text: 'N', style: ['bold', 'huge'], color: '#ef6c00' }] },
      ],
    },
  },
  {
    id: 'make-up',
    answer: 'Makeup',
    alternatives: ['Make up'],
    difficulty: 'medium',
    tags: ['direction'],
    explanation: 'MAKE reading upward.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'E', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'K', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'A', style: ['bold', 'huge'] }] },
        { segments: [{ text: 'M', style: ['bold', 'huge'] }] },
      ],
    },
  },

  // --- Size puzzles --------------------------------------------------------
  {
    id: 'big-cheese',
    answer: 'Big cheese',
    alternatives: ['The big cheese'],
    difficulty: 'easy',
    tags: ['size', 'food'],
    explanation: 'CHEESE writ large.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'CHEESE', style: ['bold', 'mega'], color: '#f9a825' }] },
      ],
    },
  },
  {
    id: 'small-change',
    answer: 'Small change',
    difficulty: 'easy',
    tags: ['size'],
    explanation: 'CHANGE in small letters.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'CHANGE', style: ['bold', 'small'] }] },
      ],
    },
  },
  {
    id: 'think-big',
    answer: 'Think big',
    difficulty: 'easy',
    tags: ['size'],
    explanation: 'THINK writ huge.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'THINK', style: ['bold', 'mega'] }] },
      ],
    },
  },
  {
    id: 'small-talk',
    answer: 'Small talk',
    difficulty: 'easy',
    tags: ['size'],
    explanation: 'TALK writ small.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'TALK', style: ['bold', 'small'] }] },
      ],
    },
  },
  {
    id: 'wide-open',
    answer: 'Wide open',
    difficulty: 'easy',
    tags: ['size'],
    explanation: 'OPEN with letters spread wide.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'OPEN', style: ['bold', 'huge', 'spaced'] }] },
      ],
    },
  },
  {
    id: 'tight-spot',
    answer: 'Tight spot',
    alternatives: ['A tight spot', 'In a tight spot'],
    difficulty: 'medium',
    tags: ['size'],
    explanation: 'SPOT crammed tight.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'SPOT', style: ['bold', 'huge', 'crammed'] }] },
      ],
    },
  },

  // --- Special / hybrid ----------------------------------------------------
  {
    id: 'crossword',
    answer: 'Crossword',
    difficulty: 'easy',
    tags: ['classic'],
    explanation: 'A cross (X) on top of WORD.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: '✕', style: ['bold', 'mega'], color: '#d32f2f' }] },
        { segments: [{ text: 'WORD', style: ['bold', 'huge'] }] },
      ],
    },
  },
  {
    id: 'foreign-aid',
    answer: 'Foreign aid',
    difficulty: 'medium',
    tags: ['letters', 'numbers'],
    explanation: 'A + 4 (for) + ID → for-eign-aid.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'A', style: ['bold', 'huge'] },
            { text: '4', style: ['bold', 'huge'], color: '#d32f2f' },
            { text: 'ID', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'splitting-headache',
    answer: 'Splitting headache',
    alternatives: ['A splitting headache'],
    difficulty: 'medium',
    tags: ['classic'],
    explanation: 'HEADACHE split down the middle.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'HEAD', style: ['bold', 'huge'] },
            { text: '  ⚡  ', color: '#d32f2f' },
            { text: 'ACHE', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'split-seconds',
    answer: 'Split seconds',
    difficulty: 'medium',
    tags: ['classic'],
    explanation: 'SECONDS split in two.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'SECON', style: ['bold', 'huge'] },
            { text: '   ' },
            { text: 'DS', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'breakfast',
    answer: 'Breakfast',
    difficulty: 'medium',
    tags: ['classic'],
    explanation: 'FAST broken in two → break + fast.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'FA', style: ['bold', 'huge'] },
            { text: '  ✂  ' },
            { text: 'ST', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'half-time',
    answer: 'Half time',
    alternatives: ['Halftime'],
    difficulty: 'medium',
    tags: ['classic'],
    explanation: 'TIME divided in half.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'TIME', style: ['bold', 'huge'] },
            { text: '  ÷  2', style: ['bold', 'huge'], color: '#d32f2f' },
          ],
        },
      ],
    },
  },
  {
    id: 'half-price',
    answer: 'Half price',
    difficulty: 'medium',
    tags: ['classic'],
    explanation: 'PRICE divided by 2.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'PRICE', style: ['bold', 'huge'] },
            { text: '  ÷  2', style: ['bold', 'huge'], color: '#d32f2f' },
          ],
        },
      ],
    },
  },
  {
    id: 'tip-of-the-iceberg',
    answer: 'Tip of the iceberg',
    alternatives: ['The tip of the iceberg'],
    difficulty: 'hard',
    tags: ['classic'],
    explanation: 'Only the top sliver of ICEBERG sticks above the waterline.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'I', style: ['bold', 'huge'], color: '#1976d2' }] },
        { segments: [{ text: '~~~~~~~~~~', color: '#90caf9' }] },
        { segments: [{ text: 'CEBERG', style: ['bold', 'huge'], color: '#1976d2' }] },
      ],
    },
  },
  {
    id: 'connecting-flights',
    answer: 'Connecting flights',
    difficulty: 'medium',
    tags: ['classic'],
    explanation: 'Two FLIGHTs being connected.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'FLIGHT', style: ['bold', 'huge'] },
            { text: ' ─── ', color: '#d32f2f' },
            { text: 'FLIGHT', style: ['bold', 'huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'high-noon',
    answer: 'High noon',
    difficulty: 'easy',
    tags: ['size'],
    explanation: 'NOON written tall and high.',
    visual: {
      kind: 'text',
      lines: [
        { segments: [{ text: 'NOON', style: ['bold', 'mega'] }] },
      ],
    },
  },
  {
    id: 'end-of-the-road',
    answer: 'End of the road',
    alternatives: ['The end of the road'],
    difficulty: 'medium',
    tags: ['classic'],
    explanation: 'ROAD with a stop sign at the end.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'ROAD ', style: ['bold', 'huge'] },
            { text: '🛑', style: ['huge'] },
          ],
        },
      ],
    },
  },
  {
    id: 'rising-star',
    answer: 'Rising star',
    alternatives: ['A rising star'],
    difficulty: 'medium',
    tags: ['direction'],
    explanation: 'STAR rising — letters climb upward.',
    visual: {
      kind: 'text',
      lines: [
        {
          segments: [
            { text: 'S', style: ['bold', 'small'] },
            { text: 'T', style: ['bold'] },
            { text: 'A', style: ['bold', 'huge'] },
            { text: 'R', style: ['bold', 'mega'] },
          ],
          align: 'center',
        },
      ],
    },
  },

  // --- Layered idioms (compose visual) -------------------------------------
  // Scenes whose meaning lives in the spatial relationship between layers —
  // overlays, rotation, partially hidden symbols. Use compose when text
  // layout can't capture the picture.
  {
    id: 'cat-got-your-tongue',
    answer: 'Cat got your tongue',
    alternatives: ['Cat got your tongue?', 'Has the cat got your tongue', 'Cat got your tongue.'],
    difficulty: 'medium',
    tags: ['idiom'],
    explanation: 'A 🐈 sits on the word TONGUE.',
    meaning: 'Said to someone who is unexpectedly silent.',
    visual: {
      kind: 'compose',
      layers: [
        {
          x: 0.5,
          y: 0.6,
          scale: 1.7,
          segments: [{ text: 'TONGUE', style: ['bold'] }],
        },
        {
          x: 0.5,
          y: 0.32,
          scale: 1.7,
          rotate: -8,
          segments: [{ text: '🐈' }],
        },
      ],
    },
  },
  {
    id: 'apple-of-my-eye',
    answer: 'Apple of my eye',
    alternatives: ['The apple of my eye', 'Apple of the eye'],
    difficulty: 'easy',
    tags: ['idiom'],
    explanation: 'An 🍎 sits inside the word EYE.',
    meaning: 'Someone you cherish above all others.',
    visual: {
      kind: 'compose',
      layers: [
        {
          x: 0.34,
          y: 0.5,
          scale: 1.8,
          segments: [{ text: 'E', style: ['bold'] }],
        },
        {
          x: 0.5,
          y: 0.5,
          scale: 1.4,
          segments: [{ text: '🍎' }],
        },
        {
          x: 0.68,
          y: 0.5,
          scale: 1.8,
          segments: [{ text: 'YE', style: ['bold'] }],
        },
      ],
    },
  },
  {
    id: 'wolf-in-sheeps-clothing',
    answer: "Wolf in sheep's clothing",
    alternatives: [
      "A wolf in sheep's clothing",
      'Wolf in sheeps clothing',
      'A wolf in sheeps clothing',
    ],
    difficulty: 'medium',
    tags: ['idiom'],
    explanation: 'A 🐺 hides inside the word SHEEP.',
    meaning: 'Someone hiding malicious intent behind a friendly face.',
    visual: {
      kind: 'compose',
      layers: [
        {
          x: 0.5,
          y: 0.5,
          scale: 1.8,
          segments: [{ text: 'SHEEP', style: ['bold', 'outline'] }],
        },
        {
          x: 0.5,
          y: 0.5,
          scale: 1.1,
          segments: [{ text: '🐺' }],
        },
      ],
    },
  },
  {
    id: 'pat-on-the-back',
    answer: 'Pat on the back',
    alternatives: ['A pat on the back', 'Give yourself a pat on the back'],
    difficulty: 'easy',
    tags: ['idiom'],
    explanation: 'A ✋ pats the word BACK from above.',
    meaning: 'A gesture of praise or encouragement.',
    visual: {
      kind: 'compose',
      layers: [
        {
          x: 0.5,
          y: 0.62,
          scale: 1.8,
          segments: [{ text: 'BACK', style: ['bold'] }],
        },
        {
          x: 0.5,
          y: 0.3,
          scale: 1.6,
          rotate: -15,
          segments: [{ text: '✋' }],
        },
      ],
    },
  },
  {
    id: 'skeleton-in-the-closet',
    answer: 'Skeleton in the closet',
    alternatives: [
      'A skeleton in the closet',
      'Skeletons in the closet',
      'Skeleton in the cupboard',
      'A skeleton in the cupboard',
    ],
    difficulty: 'medium',
    tags: ['idiom'],
    explanation: 'A 💀 hidden between the letters of CLOSET.',
    meaning: 'A hidden, embarrassing secret from the past.',
    visual: {
      kind: 'compose',
      layers: [
        {
          x: 0.32,
          y: 0.5,
          scale: 1.7,
          segments: [{ text: 'CL', style: ['bold'] }],
        },
        {
          x: 0.5,
          y: 0.5,
          scale: 1.3,
          segments: [{ text: '💀' }],
        },
        {
          x: 0.7,
          y: 0.5,
          scale: 1.7,
          segments: [{ text: 'SET', style: ['bold'] }],
        },
      ],
    },
  },
  {
    id: 'elephant-in-the-room',
    answer: 'Elephant in the room',
    alternatives: ['The elephant in the room', 'An elephant in the room'],
    difficulty: 'medium',
    tags: ['idiom'],
    explanation: 'A 🐘 dominates the small word ROOM.',
    meaning: 'An obvious problem nobody wants to acknowledge.',
    visual: {
      kind: 'compose',
      layers: [
        {
          x: 0.5,
          y: 0.7,
          scale: 0.9,
          segments: [{ text: 'ROOM', style: ['bold', 'box'] }],
        },
        {
          x: 0.5,
          y: 0.4,
          scale: 3.2,
          segments: [{ text: '🐘' }],
        },
      ],
    },
  },
  {
    id: 'cold-feet',
    answer: 'Cold feet',
    alternatives: ['Getting cold feet', 'Got cold feet'],
    difficulty: 'easy',
    tags: ['idiom'],
    explanation: '❄️ snowflakes scattered over the word FEET.',
    meaning: 'Last-minute hesitation or loss of nerve.',
    visual: {
      kind: 'compose',
      layers: [
        {
          x: 0.5,
          y: 0.6,
          scale: 1.8,
          segments: [{ text: 'FEET', style: ['bold'] }],
        },
        {
          x: 0.25,
          y: 0.3,
          scale: 1.3,
          rotate: -15,
          segments: [{ text: '❄️' }],
        },
        {
          x: 0.5,
          y: 0.25,
          scale: 1.5,
          segments: [{ text: '❄️' }],
        },
        {
          x: 0.75,
          y: 0.32,
          scale: 1.3,
          rotate: 15,
          segments: [{ text: '❄️' }],
        },
      ],
    },
  },
  {
    id: 'tip-of-the-iceberg',
    answer: 'Tip of the iceberg',
    alternatives: ['The tip of the iceberg', 'Just the tip of the iceberg'],
    difficulty: 'medium',
    tags: ['idiom'],
    explanation: 'A small 🧊 above a wavy water line — the huge ICEBERG below is hidden.',
    meaning: 'Only a small visible part of a much larger problem or thing.',
    visual: {
      kind: 'compose',
      layers: [
        {
          x: 0.5,
          y: 0.32,
          scale: 1.4,
          segments: [{ text: '🧊' }],
        },
        {
          x: 0.5,
          y: 0.5,
          scale: 1.4,
          segments: [{ text: '〰️〰️〰️〰️', style: ['bold'], color: '#1976d2' }],
        },
        {
          x: 0.5,
          y: 0.7,
          scale: 1.6,
          segments: [{ text: 'ICEBERG', style: ['bold'] }],
        },
      ],
    },
  },
  {
    id: 'open-a-can-of-worms',
    answer: 'Open a can of worms',
    alternatives: [
      'Open a can of worms.',
      'Opening a can of worms',
      'A can of worms',
    ],
    difficulty: 'medium',
    tags: ['idiom'],
    explanation: '🐛 worms escape the boxed CAN at angles.',
    meaning: 'To start a problem that creates many new complications.',
    visual: {
      kind: 'compose',
      layers: [
        {
          x: 0.4,
          y: 0.6,
          scale: 1.6,
          segments: [{ text: 'CAN', style: ['bold', 'box'] }],
        },
        {
          x: 0.65,
          y: 0.4,
          scale: 1.3,
          rotate: -25,
          segments: [{ text: '🐛' }],
        },
        {
          x: 0.78,
          y: 0.55,
          scale: 1.2,
          rotate: 10,
          segments: [{ text: '🐛' }],
        },
        {
          x: 0.7,
          y: 0.7,
          scale: 1.1,
          rotate: 35,
          segments: [{ text: '🐛' }],
        },
      ],
    },
  },
  {
    id: 'storm-in-a-teacup',
    answer: 'Storm in a teacup',
    alternatives: ['A storm in a teacup', 'Tempest in a teapot', 'A tempest in a teapot'],
    difficulty: 'medium',
    tags: ['idiom'],
    explanation: '⛈️ rages above ☕.',
    meaning: 'A big fuss made over something unimportant.',
    visual: {
      kind: 'compose',
      layers: [
        {
          x: 0.5,
          y: 0.32,
          scale: 1.8,
          rotate: -10,
          segments: [{ text: '⛈️' }],
        },
        {
          x: 0.5,
          y: 0.65,
          scale: 2.6,
          segments: [{ text: '☕' }],
        },
      ],
    },
  },
];
