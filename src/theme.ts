import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    secondary: { main: '#9c27b0' },
    background: {
      default: '#f5f6fa',
      paper: '#ffffff',
    },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', fontWeight: 600 },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { transition: 'transform 120ms ease, box-shadow 120ms ease' },
      },
    },
  },
});
