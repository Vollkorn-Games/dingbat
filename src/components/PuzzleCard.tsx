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
      elevation={solved ? 1 : 2}
      sx={{
        position: 'relative',
        outline: solved ? '2px solid' : '2px solid transparent',
        outlineColor: solved ? 'success.main' : 'transparent',
        outlineOffset: solved ? -2 : 0,
        transition: 'outline-color 160ms ease, transform 120ms ease, box-shadow 120ms ease',
        '&:hover': { transform: 'translateY(-2px)', boxShadow: 6 },
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
              ? 'linear-gradient(135deg, rgba(46,125,50,0.10), rgba(46,125,50,0.04))'
              : 'linear-gradient(135deg, rgba(25,118,210,0.04), rgba(156,39,176,0.04))',
            overflow: 'hidden',
          }}
        >
          <PuzzleRenderer visual={puzzle.visual} padding={8} />

          {solved ? (
            <CheckCircleIcon
              color="success"
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                fontSize: 28,
                filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.25))',
                backgroundColor: 'background.paper',
                borderRadius: '50%',
              }}
            />
          ) : null}
        </Box>
        <Box sx={{ p: 1.5 }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="subtitle2" color="text.secondary">
              #{(index + 1).toString().padStart(3, '0')}
            </Typography>
            <Chip
              size="small"
              label={difficultyLabel}
              color={DIFFICULTY_COLOR[puzzle.difficulty]}
              variant="outlined"
            />
          </Stack>
        </Box>
      </CardActionArea>
    </Card>
  );
}
