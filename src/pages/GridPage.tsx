import { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { ProgressSummary } from '@/components/ProgressSummary';
import { PuzzleCard } from '@/components/PuzzleCard';
import { getPuzzles } from '@/data/puzzles';
import { useLanguage } from '@/hooks/useLanguage';
import { useProgress } from '@/hooks/useProgress';

type Filter = 'all' | 'unsolved' | 'solved';

export function GridPage(): React.ReactElement {
  const { language, t } = useLanguage();
  const puzzles = useMemo(() => getPuzzles(language), [language]);
  const { isSolved, solved, reset } = useProgress();
  const [filter, setFilter] = useState<Filter>('all');
  const [confirmReset, setConfirmReset] = useState(false);

  // Solved puzzles in the *current* language only — solving an English puzzle
  // shouldn't count toward German progress and vice versa.
  const solvedInLang = useMemo(() => {
    return new Set(puzzles.filter((p) => solved.has(p.id)).map((p) => p.id));
  }, [puzzles, solved]);

  const visible = useMemo(() => {
    if (filter === 'solved') {
      return puzzles.filter((p) => solvedInLang.has(p.id));
    }
    if (filter === 'unsolved') {
      return puzzles.filter((p) => !solvedInLang.has(p.id));
    }
    return puzzles;
  }, [filter, puzzles, solvedInLang]);

  return (
    <Stack spacing={3}>
      <Box>
        <Typography variant="h4" component="h1" gutterBottom>
          {t.pickPuzzle}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {t.pickPuzzleDescription}
        </Typography>
      </Box>

      <ProgressSummary puzzles={puzzles} solved={solvedInLang} />

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={1.5}
        justifyContent="space-between"
        alignItems={{ xs: 'stretch', sm: 'center' }}
      >
        <ToggleButtonGroup
          value={filter}
          exclusive
          size="small"
          color="primary"
          onChange={(_, next: Filter | null) => {
            if (next !== null) {
              setFilter(next);
            }
          }}
          aria-label="filter"
        >
          <ToggleButton value="all">
            {t.filterAll} ({puzzles.length.toString()})
          </ToggleButton>
          <ToggleButton value="unsolved">
            {t.filterUnsolved} ({(puzzles.length - solvedInLang.size).toString()})
          </ToggleButton>
          <ToggleButton value="solved" disabled={solvedInLang.size === 0}>
            {t.filterSolved} ({solvedInLang.size.toString()})
          </ToggleButton>
        </ToggleButtonGroup>

        <Button
          startIcon={<RestartAltIcon />}
          color="inherit"
          size="small"
          disabled={solved.size === 0}
          onClick={() => {
            setConfirmReset(true);
          }}
          sx={{ alignSelf: { xs: 'flex-end', sm: 'center' } }}
        >
          {t.resetProgress}
        </Button>
      </Stack>

      {visible.length === 0 ? (
        <Box sx={{ py: 6, textAlign: 'center' }}>
          <Typography variant="body1" color="text.secondary">
            {filter === 'solved' ? t.emptySolved : t.emptyAllDone}
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{
            display: 'grid',
            gap: 2,
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              sm: 'repeat(3, 1fr)',
              md: 'repeat(4, 1fr)',
              lg: 'repeat(5, 1fr)',
            },
          }}
        >
          {visible.map((puzzle) => {
            const idx = puzzles.indexOf(puzzle);
            return (
              <PuzzleCard
                key={puzzle.id}
                puzzle={puzzle}
                index={idx}
                solved={isSolved(puzzle.id)}
              />
            );
          })}
        </Box>
      )}

      <Dialog
        open={confirmReset}
        onClose={() => {
          setConfirmReset(false);
        }}
      >
        <DialogTitle>{t.resetPrompt}</DialogTitle>
        <DialogContent>
          <DialogContentText>{t.resetWarning(solved.size)}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setConfirmReset(false);
            }}
          >
            {t.cancel}
          </Button>
          <Button
            color="error"
            variant="contained"
            onClick={() => {
              reset();
              setConfirmReset(false);
            }}
          >
            {t.reset}
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
}
