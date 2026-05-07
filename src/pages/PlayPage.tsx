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
    inputRef.current?.focus();
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
      <Stack direction="row" alignItems="center" spacing={1}>
        <IconButton component={RouterLink} to="/" aria-label={t.back}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h5" component="h1" sx={{ flexGrow: 1 }}>
          {t.puzzleNumber((index + 1).toString().padStart(3, '0'))}
        </Typography>
        <Chip label={difficultyLabel} size="small" variant="outlined" />
        {alreadySolved ? <Chip label={t.solved} size="small" color="success" /> : null}
      </Stack>

      <Paper
        elevation={3}
        sx={{
          aspectRatio: { xs: '1 / 1', sm: '4 / 3' },
          maxWidth: 720,
          mx: 'auto',
          width: '100%',
          backgroundImage:
            'linear-gradient(135deg, rgba(25,118,210,0.06), rgba(156,39,176,0.06))',
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
          <Alert severity="error" variant="outlined">
            {t.notQuite}
          </Alert>
        ) : null}
        {feedback === 'correct' ? (
          <Alert severity="success" variant="filled">
            {t.correctAnswer(puzzle.answer)}
            {puzzle.explanation !== undefined ? ` ${puzzle.explanation}` : ''}
          </Alert>
        ) : null}
        {revealed && feedback !== 'correct' ? (
          <Alert severity="info" variant="outlined">
            {t.revealAnswer(puzzle.answer)}
            {puzzle.explanation !== undefined ? ` ${puzzle.explanation}` : ''}
          </Alert>
        ) : null}
        {hintText !== null && feedback !== 'correct' && !revealed ? (
          <Alert severity="info" variant="outlined" icon={<LightbulbIcon />}>
            <Box component="span" sx={{ fontFamily: 'monospace', letterSpacing: '0.2em' }}>
              {hintText}
            </Box>
          </Alert>
        ) : null}

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
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
            <>
              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={guess.trim().length === 0 || revealed}
                sx={{ flexGrow: 1 }}
              >
                {t.submit}
              </Button>
              <Tooltip title={t.hintTooltip}>
                <span>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<LightbulbIcon />}
                    onClick={() => {
                      setHintLevel((l) => l + 1);
                    }}
                    disabled={!canHint}
                  >
                    {t.hint}
                  </Button>
                </span>
              </Tooltip>
              <Tooltip title={t.revealTooltip}>
                <span>
                  <Button
                    variant="text"
                    size="large"
                    startIcon={<VisibilityIcon />}
                    onClick={() => {
                      setRevealed(true);
                    }}
                    disabled={revealed}
                  >
                    {t.reveal}
                  </Button>
                </span>
              </Tooltip>
            </>
          )}
        </Stack>

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
