import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { LanguageProvider } from '@/components/LanguageProvider';
import { Layout } from '@/components/Layout';
import { GridPage } from '@/pages/GridPage';
import { PlayPage } from '@/pages/PlayPage';
import { theme } from '@/theme';

export function App(): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LanguageProvider>
        <HashRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<GridPage />} />
              <Route path="play/:id" element={<PlayPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </HashRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}
