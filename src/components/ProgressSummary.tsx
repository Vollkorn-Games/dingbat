import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import type { Difficulty, Puzzle } from '@/data/types';
import { useLanguage } from '@/hooks/useLanguage';

interface Props {
  puzzles: readonly Puzzle[];
  solved: ReadonlySet<string>;
}

const DIFFICULTY_ORDER: readonly Difficulty[] = ['easy', 'medium', 'hard'];
const DIFFICULTY_LABEL_KEY = {
  easy: 'difficultyEasy',
  medium: 'difficultyMedium',
  hard: 'difficultyHard',
} as const;

interface Breakdown {
  total: number;
  done: number;
}

function summarize(
  puzzles: readonly Puzzle[],
  solved: ReadonlySet<string>,
): { overall: Breakdown; byDifficulty: Record<Difficulty, Breakdown> } {
  const byDifficulty: Record<Difficulty, Breakdown> = {
    easy: { total: 0, done: 0 },
    medium: { total: 0, done: 0 },
    hard: { total: 0, done: 0 },
  };
  for (const p of puzzles) {
    const slot = byDifficulty[p.difficulty];
    slot.total += 1;
    if (solved.has(p.id)) {
      slot.done += 1;
    }
  }
  const overall: Breakdown = {
    total: puzzles.length,
    done: solved.size,
  };
  return { overall, byDifficulty };
}

export function ProgressSummary({ puzzles, solved }: Props): React.ReactElement {
  const theme = useTheme();
  const { t } = useLanguage();
  const { overall, byDifficulty } = summarize(puzzles, solved);
  const overallPct = overall.total === 0 ? 0 : Math.round((overall.done / overall.total) * 100);

  const colorFor: Record<Difficulty, string> = {
    easy: theme.palette.success.main,
    medium: theme.palette.warning.main,
    hard: theme.palette.error.main,
  };

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="baseline" mb={1}>
        <Typography variant="body2" color="text.secondary">
          {t.progress}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Box component="span" sx={{ fontWeight: 700, color: 'text.primary' }}>
            {overall.done.toString()}
          </Box>{' '}
          / {overall.total.toString()} {t.solved} ({overallPct.toString()}%)
        </Typography>
      </Stack>

      <Box
        role="img"
        aria-label={`${overall.done.toString()} / ${overall.total.toString()}`}
        sx={{
          display: 'flex',
          width: '100%',
          height: 14,
          borderRadius: 7,
          overflow: 'hidden',
          backgroundColor: 'action.hover',
        }}
      >
        {DIFFICULTY_ORDER.map((d) => {
          const { total, done } = byDifficulty[d];
          if (total === 0) {
            return null;
          }
          const widthPct = (total / overall.total) * 100;
          const fillPct = total === 0 ? 0 : (done / total) * 100;
          return (
            <Box
              key={d}
              sx={{
                width: `${widthPct.toString()}%`,
                height: '100%',
                position: 'relative',
                borderRight: '1px solid rgba(255,255,255,0.6)',
                '&:last-of-type': { borderRight: 'none' },
              }}
              title={`${t[DIFFICULTY_LABEL_KEY[d]]}: ${done.toString()} / ${total.toString()}`}
            >
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  width: `${fillPct.toString()}%`,
                  backgroundColor: colorFor[d],
                  transition: 'width 280ms ease',
                }}
              />
            </Box>
          );
        })}
      </Box>

      <Stack
        direction="row"
        spacing={{ xs: 1.5, sm: 3 }}
        mt={1.25}
        flexWrap="wrap"
        useFlexGap
      >
        {DIFFICULTY_ORDER.map((d) => {
          const { total, done } = byDifficulty[d];
          if (total === 0) {
            return null;
          }
          return (
            <Stack key={d} direction="row" alignItems="center" spacing={0.75}>
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  backgroundColor: colorFor[d],
                  flexShrink: 0,
                }}
              />
              <Typography variant="caption" color="text.secondary">
                {t[DIFFICULTY_LABEL_KEY[d]]}{' '}
                <Box component="span" sx={{ color: 'text.primary', fontWeight: 600 }}>
                  {done.toString()} / {total.toString()}
                </Box>
              </Typography>
            </Stack>
          );
        })}
      </Stack>
    </Box>
  );
}
