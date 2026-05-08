import { useEffect, useMemo, useRef, useState } from 'react';
import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LightbulbIcon from '@mui/icons-material/LightbulbOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { PuzzleRenderer } from '@/components/PuzzleRenderer';
import { findPuzzle, getPuzzles } from '@/data/puzzles';
import type { Puzzle } from '@/data/types';
import { useLanguage } from '@/hooks/useLanguage';
import { useProgress } from '@/hooks/useProgress';
import { isCorrect } from '@/lib/answer';

function buildHint(answer: string, level: number): string {
  let revealed = 0;
  return answer
    .split('')
    .map((ch) => {
      if (!/\p{L}|\p{N}/u.test(ch)) {
        return ch;
      }
      if (revealed < level) {
        revealed += 1;
        return ch;
      }
      return '_';
    })
    .join('');
}

const DIFFICULTY_LABEL_KEY = {
  easy: 'difficultyEasy',
  medium: 'difficultyMedium',
  hard: 'difficultyHard',
} as const;

// Keyboard auto-focus is helpful with a physical keyboard but jarring on
// touch devices, where it pops up the soft keyboard before the player
// has had a chance to look at the puzzle.
function hasFinePointer(): boolean {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(pointer: fine)').matches
  );
}

export function PlayPage(): React.ReactElement {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const puzzles = useMemo(() => getPuzzles(language), [language]);
  const { isSolved, markSolved } = useProgress();

  const puzzleId = params.id ?? '';
  const puzzle = useMemo(() => findPuzzle(language, puzzleId), [language, puzzleId]);

  const index = useMemo(
    () => puzzles.findIndex((p) => p.id === puzzleId),
    [puzzles, puzzleId],
  );
  const next: Puzzle | undefined =
    index >= 0 && index < puzzles.length - 1 ? puzzles[index + 1] : undefined;
  const prev: Puzzle | undefined = index > 0 ? puzzles[index - 1] : undefined;

  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState<'idle' | 'wrong' | 'correct'>('idle');
  const [hintLevel, setHintLevel] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setGuess('');
    setFeedback('idle');
    setHintLevel(0);
    setRevealed(false);
    if (hasFinePointer()) {
      inputRef.current?.focus();
    }
  }, [puzzleId]);

  if (!puzzle) {
    return (
      <Stack spacing={2} alignItems="flex-start">
        <Typography variant="h5">{t.notFound}</Typography>
        <Button component={RouterLink} to="/" variant="contained">
          {t.backToGrid}
        </Button>
      </Stack>
    );
  }

  const alreadySolved = isSolved(puzzle.id);

  function submit(): void {
    if (!puzzle) {
      return;
    }
    if (isCorrect(puzzle, guess)) {
      setFeedback('correct');
      markSolved(puzzle.id);
    } else {
      setFeedback('wrong');
    }
  }

  function goNext(): void {
    if (next) {
      navigate(`/play/${next.id}`);
    } else {
      navigate('/');
    }
  }

  const hintText = hintLevel > 0 ? buildHint(puzzle.answer, hintLevel) : null;
  const maxHintLevel = puzzle.answer.replace(/[^\p{L}\p{N}]/gu, '').length - 1;
  const canHint = hintLevel < maxHintLevel && feedback !== 'correct' && !revealed;
  const difficultyLabel = t[DIFFICULTY_LABEL_KEY[puzzle.difficulty]];

  return (
    <Stack spacing={3}>
      <Box
        sx={{
          position: 'sticky',
          top: { xs: 56, sm: 64 },
          zIndex: (theme) => theme.zIndex.appBar - 1,
          // Bleed to container edges and dock visually under the AppBar.
          mx: { xs: -2, sm: -3 },
          mt: { xs: -2, sm: -4 },
          px: { xs: 1, sm: 2 },
          py: 0.5,
          backgroundColor: 'rgba(240, 247, 251, 0.88)',
          backdropFilter: 'saturate(1.2) blur(8px)',
          WebkitBackdropFilter: 'saturate(1.2) blur(8px)',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <IconButton
            component={RouterLink}
            to="/"
            aria-label={t.back}
            size="large"
            sx={{ color: 'text.primary' }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="h1"
            sx={{
              flexGrow: 1,
              minWidth: 0,
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            {t.puzzleNumber((index + 1).toString().padStart(3, '0'))}
          </Typography>
          <Chip label={difficultyLabel} size="small" variant="outlined" />
          {alreadySolved ? (
            <Chip
              label={t.solved}
              size="small"
              color="success"
              sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
            />
          ) : null}
        </Stack>
      </Box>

      <Paper
        elevation={0}
        sx={{
          aspectRatio: { xs: '1 / 1', sm: '4 / 3' },
          maxWidth: 720,
          mx: 'auto',
          width: '100%',
          border: '1px solid',
          borderColor: 'divider',
          backgroundColor: 'background.paper',
          boxShadow:
            '0 1px 0 rgba(255,255,255,0.7) inset, 0 12px 28px rgba(2,48,71,0.18)',
        }}
      >
        <PuzzleRenderer visual={puzzle.visual} padding={24} />
      </Paper>

      <Stack
        component="form"
        spacing={2}
        sx={{ maxWidth: 560, mx: 'auto', width: '100%' }}
        onSubmit={(e) => {
          e.preventDefault();
          if (feedback === 'correct') {
            goNext();
          } else {
            submit();
          }
        }}
      >
        <TextField
          inputRef={inputRef}
          label={t.yourAnswer}
          value={guess}
          onChange={(e) => {
            setGuess(e.target.value);
            if (feedback === 'wrong') {
              setFeedback('idle');
            }
          }}
          autoComplete="off"
          fullWidth
          disabled={feedback === 'correct' || revealed}
          slotProps={{
            htmlInput: {
              'aria-label': t.yourAnswer,
              autoCorrect: 'off',
              autoCapitalize: 'off',
              spellCheck: false,
              enterKeyHint: 'send',
            },
          }}
        />

        {feedback === 'wrong' ? (
          <Alert severity="error" variant="outlined" sx={{ overflowWrap: 'anywhere' }}>
            {t.notQuite}
          </Alert>
        ) : null}
        {feedback === 'correct' ? (
          <Alert severity="success" variant="filled" sx={{ overflowWrap: 'anywhere' }}>
            {t.correctAnswer(puzzle.answer)}
            {puzzle.explanation !== undefined ? ` ${puzzle.explanation}` : ''}
            {puzzle.meaning !== undefined ? (
              <Box
                component="span"
                sx={{ display: 'block', mt: 0.75, fontStyle: 'italic', opacity: 0.92 }}
              >
                {puzzle.meaning}
              </Box>
            ) : null}
          </Alert>
        ) : null}
        {revealed && feedback !== 'correct' ? (
          <Alert severity="info" variant="outlined" sx={{ overflowWrap: 'anywhere' }}>
            {t.revealAnswer(puzzle.answer)}
            {puzzle.explanation !== undefined ? ` ${puzzle.explanation}` : ''}
            {puzzle.meaning !== undefined ? (
              <Box
                component="span"
                sx={{ display: 'block', mt: 0.75, fontStyle: 'italic', opacity: 0.85 }}
              >
                {puzzle.meaning}
              </Box>
            ) : null}
          </Alert>
        ) : null}
        {hintText !== null && feedback !== 'correct' && !revealed ? (
          <Alert severity="info" variant="outlined" icon={<LightbulbIcon />}>
            <Box
              component="span"
              sx={{
                fontFamily: 'monospace',
                letterSpacing: '0.2em',
                overflowWrap: 'anywhere',
              }}
            >
              {hintText}
            </Box>
          </Alert>
        ) : null}

        {feedback === 'correct' ? (
          <Button
            type="submit"
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIcon />}
            fullWidth
          >
            {next ? t.nextPuzzle : t.backToGrid}
          </Button>
        ) : (
          <Stack spacing={1}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              disabled={guess.trim().length === 0 || revealed}
            >
              {t.submit}
            </Button>
            <Stack direction="row" spacing={1}>
              <Tooltip title={t.hintTooltip}>
                <Box component="span" sx={{ flex: 1, display: 'flex' }}>
                  <Button
                    variant="outlined"
                    size="large"
                    fullWidth
                    startIcon={<LightbulbIcon />}
                    onClick={() => {
                      setHintLevel((l) => l + 1);
                    }}
                    disabled={!canHint}
                  >
                    {t.hint}
                  </Button>
                </Box>
              </Tooltip>
              <Tooltip title={t.revealTooltip}>
                <Box component="span" sx={{ flex: 1, display: 'flex' }}>
                  <Button
                    variant="text"
                    size="large"
                    fullWidth
                    startIcon={<VisibilityIcon />}
                    onClick={() => {
                      setRevealed(true);
                    }}
                    disabled={revealed}
                  >
                    {t.reveal}
                  </Button>
                </Box>
              </Tooltip>
            </Stack>
          </Stack>
        )}

        <Stack direction="row" justifyContent="space-between" pt={1}>
          <Button
            component={RouterLink}
            to={prev ? `/play/${prev.id}` : '/'}
            startIcon={<ArrowBackIcon />}
            disabled={!prev}
          >
            {t.previous}
          </Button>
          <Button
            component={RouterLink}
            to={next ? `/play/${next.id}` : '/'}
            endIcon={<ArrowForwardIcon />}
            disabled={!next}
          >
            {t.next}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
