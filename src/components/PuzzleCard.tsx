import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link as RouterLink } from 'react-router-dom';
import type { Puzzle } from '@/data/types';
import { useLanguage } from '@/hooks/useLanguage';
import { PuzzleRenderer } from './PuzzleRenderer';

interface Props {
  puzzle: Puzzle;
  index: number;
  solved: boolean;
}

const DIFFICULTY_COLOR: Record<Puzzle['difficulty'], 'success' | 'warning' | 'error'> = {
  easy: 'success',
  medium: 'warning',
  hard: 'error',
};

const DIFFICULTY_LABEL_KEY = {
  easy: 'difficultyEasy',
  medium: 'difficultyMedium',
  hard: 'difficultyHard',
} as const;

export function PuzzleCard({ puzzle, index, solved }: Props): React.ReactElement {
  const { t } = useLanguage();
  const difficultyLabel = t[DIFFICULTY_LABEL_KEY[puzzle.difficulty]];
  return (
    <Card
      sx={{
        position: 'relative',
        borderColor: solved ? 'success.light' : 'divider',
        boxShadow: solved
          ? '0 1px 0 rgba(255,255,255,0.6) inset, 0 4px 12px rgba(122,139,83,0.18)'
          : '0 1px 0 rgba(255,255,255,0.6) inset, 0 2px 8px rgba(58,46,29,0.06)',
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow: solved
            ? '0 1px 0 rgba(255,255,255,0.6) inset, 0 10px 22px rgba(122,139,83,0.22)'
            : '0 1px 0 rgba(255,255,255,0.6) inset, 0 10px 22px rgba(58,46,29,0.12)',
          borderColor: solved ? 'success.main' : 'primary.light',
        },
      }}
    >
      <CardActionArea
        component={RouterLink}
        to={`/play/${puzzle.id}`}
        aria-label={`${t.puzzleNumber((index + 1).toString())}, ${difficultyLabel}${solved ? `, ${t.solved}` : ''}`}
      >
        <Box
          sx={{
            position: 'relative',
            aspectRatio: '1 / 1',
            backgroundColor: 'background.paper',
            backgroundImage: solved
              ? 'linear-gradient(140deg, rgba(204,213,174,0.35), rgba(254,250,224,0.7))'
              : 'linear-gradient(140deg, rgba(250,237,205,0.55), rgba(254,250,224,0.85))',
            overflow: 'hidden',
          }}
        >
          <PuzzleRenderer visual={puzzle.visual} padding={8} />

          {solved ? (
            <CheckCircleIcon
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                fontSize: 28,
                color: 'success.dark',
                filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.18))',
                backgroundColor: 'background.paper',
                borderRadius: '50%',
              }}
            />
          ) : null}
        </Box>
        <Box sx={{ px: 1.5, py: 1.25, borderTop: '1px solid', borderColor: 'divider' }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ fontVariantNumeric: 'tabular-nums', letterSpacing: '0.04em' }}
            >
              #{(index + 1).toString().padStart(3, '0')}
            </Typography>
            <Chip
              size="small"
              label={difficultyLabel}
              color={DIFFICULTY_COLOR[puzzle.difficulty]}
              variant="outlined"
              sx={{ fontWeight: 600 }}
            />
          </Stack>
        </Box>
      </CardActionArea>
    </Card>
  );
}
