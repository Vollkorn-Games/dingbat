# Dingbat Puzzle Guidelines

These rules govern every puzzle in `src/data/puzzles.{en,de}.ts`. They exist because we've shipped two decks already and learned, the hard way, what separates a real dingbat from a "Temu dingbat" (a graphic that just labels its own answer).

## The core principle

> **A dingbat is a visual that encodes a word or phrase the player must infer.**
> **What's drawn on screen is the *clue*, not the *answer*.**

If the player reads the visual top-to-bottom, left-to-right, and the result IS the answer, the puzzle fails. They've done no thinking — they've decoded a label.

## The fail test

A puzzle is **not a dingbat** if any of the following is true:

1. **Literal compound stacking** — word A above word B yielding the compound "AB". `ÜBER` / `GABE` → "Übergabe" is just reading the word vertically.
2. **One part highlighted in the answer** — showing `UM[ARM]UNG` and asking for "Umarmung". The answer is literally written, with decoration.
3. **Color-labeled word** — `WEIN` in red → "Rotwein". The color is a label; the rest is reading.
4. **Connecting word printed verbatim** — `AUGE um AUGE` → "Auge um Auge". The visible "um" defeats the puzzle. The connector must be inferred from spatial arrangement, not spelled out.
5. **Self-referential transformation** — `KEHRSEITE` flipped → "Kehrseite", `RÜCKWÄRTS` mirrored → "Rückwärts". The answer just describes the visual operation. The transformation must yield a *different* word.
6. **Sized labels** — `VATER` huge → "Großvater", `KIND` tiny → "Kleinkind". The size adjective is just labeled onto the word.
7. **Compound noun + cosmetic digit substitution** — `7MEILENSTIEFEL` → "Siebenmeilenstiefel". The compound noun stands there literally; only one syllable is dressed up as a digit. The player just swaps "7→sieben" and reads the rest. This is *especially* tempting for `<digit>+<noun>` compounds: `7SACHEN` → Siebensachen, `10KAMPF` → Zehnkampf, `9LEBEN` → Neunleben. Either drop the puzzle, or rebuild it with **quantity counting** (Pattern #8) where the player has to count actual repeated/varied items to derive the number — not just decode a digit.

If any of those apply, fix it or drop it.

## Strong techniques (use these)

1. **Position encodes a preposition.**
   `MIND` over `MATTER` → "Mind over matter". `STAND` with `I` below → "I understand" (under-stand). The vertical/horizontal arrangement *is* the preposition.

2. **Number / letter sound substitution.**
   `MIL1ION` → "One in a million" (1 = one). `T 4 2` → "Tea for two" (T = tea, 4 = for, 2 = two). German: `M8` → "Macht" (8 = acht), `1FACH` → "einfach", `0 BOCK` → "Null Bock". The digit/letter must require the substitution leap; just printing it isn't enough.

3. **Repetition with implied connector.**
   `HAND HAND` → "Hand in Hand". `KOPF KOPF` → "Kopf an Kopf". `CHEEK CHEEK` adjacent → "Cheek to cheek". The connecting word ("in", "an", "to") is *not* drawn — the player infers it from proximity, mirroring, or stacking.

4. **Mirror/rotation that yields a *different* word.**
   `BLICK` mirrored → "Rückblick" ✓ (the operation suggests "rück", combined with "blick" gives a new word).
   `GLANCE` mirrored → "Backward glance" ✓.
   `BLICK` mirrored → "Rückwärts" ✗ — the answer is just describing the operation.

5. **Letters arranged in a shape that encodes a word.**
   `TOWN` written letter-per-line vertically → "Downtown". `WASSER` falling vertically → "Wasserfall". `STIEG` ascending diagonally → "Aufstieg". The shape *is* the missing word.

6. **Hidden / missing / replaced letters.**
   `M_CE M_CE M_CE` → "Three blind mice" (no I = no eye = blind). `T_XT` → "Lückentext" (the gap is the Lücke). The player must read the absence.

7. **Visual idiom / Sprichwort encoding.**
   `READING` between two horizontal lines → "Reading between the lines". `STEIN ↓ HERZ` → "Stein vom Herzen" (the falling arrow is "vom"). `🍅🍅 / AUGEN` → "Tomaten auf den Augen". The scene depicts the idiom; the answer names it.

8. **Quantity counting as a syllable / number.**
   `CYCLE CYCLE CYCLE` → "Tricycle" (three cycles). `GIVING × 4` → "Forgiving" (four-giving). `🧳📚🎒👔🧦☂🪥` (seven different items) → "Siebensachen". The player must **count actual items** to derive the number — `🏃🏊🚴🤸🏋🥊⛹🏐🏌⚽` (ten sports) → "Zehnkampf". Note: `7 SACHEN` (the digit "7" next to the word "SACHEN") is **not** quantity-counting, it's the cosmetic-digit trap (fail test #7).

9. **Style/styling encoding a word.**
   `BIRNE` between sparkles → "Glühbirne" (the sparkles are the "glüh"). `KORN` rendered fat → "Vollkorn" (fat = voll). Be careful: this is borderline. The styling must read as a metaphor for a *separate* word, not as a description of the visible word.

## Quality checklist before adding a puzzle

For every new puzzle, answer these in your head:

- [ ] **Aha moment**: is there one? When you "get" it, does it click?
- [ ] **Reads-back-clean**: does the visual look obvious *after* you know the answer (and confusing before)?
- [ ] **Single-sentence explanation**: can you describe the trick in one sentence that names a transformation, substitution, position, or count? If you can't, the puzzle has no mechanic.
- [ ] **Recognizable answer**: is the answer a phrase / idiom / common compound? Obscure regional words and made-up compounds are bad targets.
- [ ] **Doesn't print the answer**: is any part of the answer literally drawn on screen? (Including connectors like "in" / "an" / "um" / "for".)

If the answer to all five is yes, you have a real dingbat.

## Categories and their pitfalls

- **Stack** (word over word): rarely works, because it's almost always just reading the compound. Only use when there's a real preposition/idiom: `MIND`/`MATTER` works because "over" is implied, not because the word is "MindMatter".
- **Inside**: `JOB IN JOB` → "In between jobs" works because of "between" being implied. `UM[ARM]UNG` doesn't because the answer is the word being shown.
- **Color**: weak by default. Color labeling is just labeling. Use only if the color stands in for an idiom (`WORT` in red → maybe "rotes Tuch" — but even this is thin).
- **Size**: weak by default. Don't use as a category — use it as a *cue inside* a larger puzzle (e.g. fading letters for "Den Faden verlieren").
- **Mirror / flip / rotate**: only works when it yields a different word. Mirror = "rück/back/zurück", flip = "kopfüber/upside down/verkehrt". Combine with another stem.

## Language-specific pitfalls — German ≠ English

English dingbat tropes do **not** translate 1:1 into other languages. When writing German puzzles, think in **German pronunciation** and **German idioms** — never port English logic.

### Number substitutions: only via German pronunciation

In English, homophones like `4 = "four" ≈ "for"`, `8 = "ate"`, `2 = "to"/"too"` work because the digit name and the connector word sound the same. In German the digit pronunciations are *different* — those substitutions are nonsense.

The only valid German digit substitutions are the ones where the spoken digit name is the homophone:

| Digit | Stands for | Examples |
|---|---|---|
| 0 | Null / keine | `0 BOCK` → Null Bock; `0 AHNUNG` → keine/Null Ahnung |
| 1 | ein / eins | `1FACH` → einfach; `ALL1` → allein |
| 2 | zwei | `2FEL` → Zweifel |
| 3 | drei | `3ECK` → Dreieck |
| 4 | vier | `4TEL` → Viertel — **never „für"!** |
| 7 | sieben | (digit alone is weak — see below) |
| 8 | acht | `8UNG` → Achtung; `M8` → Macht; `N8` → Nacht; `GEM8` → gemacht; `OHNM8` → Ohnmacht |
| 10 | zehn | (digit alone is weak — see below) |

**Forbidden in German**: `4 = für`, `8 = ate`, `2 = to/too`, or any substitution that only works as an English homophone. The test: silently pronounce the digit in German — the German number word that comes out must be exactly the syllable the answer needs. If you have to switch languages in your head, the puzzle is wrong.

**When digit-prefix to a noun fails**: `7SACHEN` → "Siebensachen", `10KAMPF` → "Zehnkampf", `7MEILENSTIEFEL` → "Siebenmeilenstiefel" — these all collapse into fail test #7. The compound noun stands there fully, only the prefix is a digit, the player does no work. Two paths out:

1. **Use quantity counting (Pattern #8) instead**: show seven different item emojis for Siebensachen, ten different sport emojis for Zehnkampf — the count itself becomes the inference.
2. **Drop the puzzle**: not every German compound makes a workable dingbat. Märchen-words like Siebenmeilenstiefel are best as image assets if you really want them.

The digit-prefix pattern is only fine when the *result* is a single fused word that sounds nothing like its parts (`M8` → Macht, `N8` → Nacht, `1FACH` → einfach), forcing the player to identify the new word — not when the answer is just `<NumberWord><Noun>` glued together.

### Connectors that are NOT visually encodable in German

Spatial arrangement can only encode *spatial* prepositions. In German this works well for: `in`, `an`, `auf`, `über`, `unter`, `vor` (spatial), `neben`, `zwischen`, `gegen` (via mirror), `um` (via wrapping).

**Hard / impossible to encode in German**: `für`, `bei`, `nach`, `mit`, `ohne`, `aus`. Phrases like „Schritt für Schritt", „Wort für Wort", „Stück für Stück", „Jahr für Jahr", „Tropfen für Tropfen" are tempting because the English mirror (`STEP 4 STEP`) works via `4 = for` — but the trick **does not carry over to German**. Drop these or pick a different idiom; do not invent fake `4 = für` substitutions.

### `XX` repetition often reads as `Doppel-X` in German

In English, `HEADHEAD` unambiguously means „head to head" because „doublehead" isn't a word. In German, many noun doublings collide with an established `Doppel-X` compound, which becomes the *primary* reading:

- `KOPFKOPF` → **Doppelkopf** (Kartenspiel), not „Kopf an Kopf"
- `TÜRTÜR` → Doppeltür, not „Tür an Tür"
- `PUNKTPUNKT` → Doppelpunkt
- `HERZHERZ` → Doppelherz

Before reusing the `XX` → „X an X" pattern, check whether `Doppel-X` is an established German word. If yes, either:
1. Embrace it — make the answer „Doppel-X" (it's a real `numbers` dingbat: two = doppelt).
2. Change the visual so the idiom reading is forced (insert a separator like a wall `🧱` or `│`, or mirror one to mean „gegen").

Safe doublings (no `Doppel-X` collision): `HAND HAND` → Hand in Hand, `SCHULTER SCHULTER` → Schulter an Schulter, `STEIN STEIN STEIN` → Stein auf Stein, `MANN MANN` (mirrored) → Mann gegen Mann.

### Solutions must come from German linguistic instinct

Answer, mechanic, and idiom all need to arise from **German Sprichwörter, Redewendungen, common compounds, and cultural expressions** — not translated English idioms. If a puzzle only makes sense via English homophones or English-only sayings (e.g., literal translations of „cool as a cucumber"), it does not belong in the German deck. When unsure, ask: would a native German speaker recognize both the visual setup *and* the answer as everyday German?

## Tags

- First tag is the technique (used for grid distribution): `numbers`, `phrase`, `idiom`, `direction`, `letters`, `classic`, `scramble`, etc.
- Secondary tags are content (`food`, `clothing`, `sport`, `sprichwort`).
- Use `phrase` for repetition/co-positioning; `idiom`/`sprichwort` for encoded sayings; `numbers` for digit-substitution; `direction` for spatial transformations; `classic` only for puzzles that don't fit elsewhere.

## Style options (renderer)

`bold`, `italic`, `underline`, `overline`, `strike`, `small`, `tiny`, `huge`, `mega`, `fat`, `mirror`, `flip`, `rotate90`, `rotate180`, `rotate270`, `spaced`, `crammed`, `rainbow`, `box`, `outline`, `shadow`. Color is a hex string on the segment. The renderer auto-fits content to the box.

## Visual layout types

A puzzle's `visual` field picks one of three kinds:

- **`text`** — stacked `lines` of `segments`. Default choice. Use when the puzzle is a single column of left/center/right-aligned rows of text.
- **`image`** — static asset under `public/puzzles/`. Use when the visual is hand-drawn / illustrated and can't be expressed typographically (e.g., letters morphed into a silhouette, custom glyph distortions, hand-painted bite marks).
- **`compose`** — free-positioned, scaled, rotated text layers on a fixed canvas. Use when text needs to **overlap, rotate, or sit at non-grid positions** that line layout can't express. Each `layer` has `x`/`y` (0..1 fractions of the canvas, referring to its center), optional `scale` (multiplier on base font size), and optional `rotate` (degrees).

When to reach for `compose`: cursive text crossing a word („Hinter die Ohren schreiben" — `OHR  OHR` + rotated „✎ Notiz!" overlay), a stamp or strikethrough mark angled across letters („Ein Auge zudrücken" — `AUGE AUGE` + red `✗` rotated over one), an icon dropped *into* a box („Einen Vogel haben" — boxed `KOPF` + a bird above/inside). When `text` plus emoji/Unicode is enough — it usually is — stay with `text`. `compose` is for cases where the *spatial relationship between layers* carries the meaning.

Example:

```ts
visual: {
  kind: 'compose',
  layers: [
    { x: 0.5, y: 0.55, scale: 1.6, segments: [{ text: 'OHR   OHR', style: ['bold'] }] },
    { x: 0.45, y: 0.32, scale: 0.85, rotate: -8,
      segments: [{ text: '✎ Notiz!', style: ['italic'], color: ACCENT }] },
  ],
}
```

The canvas is 600×450 (4:3) and is auto-fit-scaled to whatever container size the card uses. Position and scale numbers are relative to that canvas, so the same `x: 0.5` always means horizontal center.

## Required fields

- `id`: stable, URL-safe, prefixed (`de-num-`, `de-rep-`, `de-dir-`, `de-spr-` for new German puzzles; legacy English uses `kebab-case-of-answer`).
- `answer`: canonical answer.
- `alternatives`: ASCII fallbacks for `ä→ae`, `ö→oe`, `ü→ue`, `ß→ss`; common rephrasings (with/without article); digit/word swaps (`Catch 22` / `Catch twenty-two`).
- `difficulty`: `easy` | `medium` | `hard`. Calibrate honestly — if the trick clicks instantly, it's easy.
- `tags`: technique first, content second.
- `explanation`: one short line in the puzzle's language explaining the *trick* — how the visual encodes the answer.
- `meaning` (optional): one short line glossing the *answer itself*, for solutions that aren't self-evident — fairy-tale terms („Siebenmeilenstiefel"), dated idioms („einen Stein im Brett haben"), regional slang. Skip when the meaning is obvious from everyday usage (don't gloss „Schmetterlinge im Bauch" or „Hand in Hand"). Shown italicized below `explanation` on the reveal screen.

## When updating decks

- Never change a puzzle id once shipped — ids drive localStorage progress tracking. Drop and add a new id rather than mutating.
- New puzzles run through `spreadByPrimaryTag` in `src/data/puzzles.ts`, which interleaves by primary tag — so cluster-by-technique in source is fine; the registry sprinkles them.
- After bulk changes, run `pnpm run lint && pnpm run build` and spot-check the grid + a few puzzles in the browser.

## Two examples to internalize

**A real dingbat:**
```
STAND
  I
```
Answer: "I understand". The "I" being placed under "STAND" *is* the word "under". The player must read position as a preposition. The text doesn't say "I understand" — it shows it.

**A Temu dingbat:**
```
ÜBER
GABE
```
Answer: "Übergabe". Reading top to bottom literally produces the answer. There is no inference. The player has done nothing the text didn't already do.

If a new puzzle looks like the second one, throw it away.
