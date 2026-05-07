import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Link as RouterLink, Outlet } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { LANGUAGES, type Language } from '@/i18n';

export function Layout(): React.ReactElement {
  const { language, setLanguage, t } = useLanguage();

  return (
    <Box sx={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="sticky" color="primary" elevation={1}>
        <Toolbar sx={{ gap: 1 }}>
          <Typography
            component={RouterLink}
            to="/"
            variant="h6"
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 800,
              letterSpacing: '0.02em',
              flexGrow: 1,
              minWidth: 0,
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
            }}
          >
            {t.appName}
          </Typography>
          <ToggleButtonGroup
            value={language}
            exclusive
            size="small"
            color="standard"
            onChange={(_, next: Language | null) => {
              if (next !== null) {
                setLanguage(next);
              }
            }}
            aria-label={t.language}
            sx={{
              '& .MuiToggleButton-root': {
                color: 'rgba(255,255,255,0.85)',
                borderColor: 'rgba(255,255,255,0.4)',
                px: 1.25,
                py: 0.25,
                fontWeight: 700,
                fontSize: '0.75rem',
                textTransform: 'uppercase',
              },
              '& .Mui-selected': {
                color: 'primary.main',
                backgroundColor: 'rgba(255,255,255,0.95) !important',
              },
            }}
          >
            {LANGUAGES.map((l) => (
              <ToggleButton key={l} value={l} aria-label={l}>
                {l}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ flexGrow: 1, py: { xs: 2, sm: 4 } }}>
        <Outlet />
      </Container>
      <Box component="footer" sx={{ py: 2, textAlign: 'center', color: 'text.secondary' }}>
        <Typography variant="caption">{t.footer}</Typography>
      </Box>
    </Box>
  );
}
