import { createTheme, alpha } from '@mui/material/styles';

// "Refreshing Summer Fun" palette
const PALETTE = {
  skyLight: '#8ecae6',
  teal: '#219ebc',
  deep: '#023047',
  amber: '#ffb703',
  orange: '#fb8500',
} as const;

// Derived neutrals tuned to the cool tones
const TEXT_PRIMARY = PALETTE.deep;
const TEXT_SECONDARY = '#4a6f85';
const DIVIDER = '#dbe7ee';
const PAPER = '#ffffff';
const PAGE_BG = '#f0f7fb';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: PALETTE.deep,
      light: PALETTE.teal,
      dark: '#011d2c',
      contrastText: '#ffffff',
    },
    secondary: {
      main: PALETTE.orange,
      light: PALETTE.amber,
      dark: '#cc6e00',
      contrastText: '#ffffff',
    },
    success: { main: PALETTE.teal, light: PALETTE.skyLight, dark: '#176d83' },
    warning: { main: PALETTE.amber, light: '#ffd05a', dark: '#cc8e00' },
    error: { main: PALETTE.orange, light: '#ffa845', dark: '#c66800' },
    info: { main: PALETTE.skyLight, light: '#bfe1f0', dark: PALETTE.teal },
    background: {
      default: PAGE_BG,
      paper: PAPER,
    },
    text: {
      primary: TEXT_PRIMARY,
      secondary: TEXT_SECONDARY,
    },
    divider: DIVIDER,
    action: {
      hover: alpha(PALETTE.teal, 0.08),
      selected: alpha(PALETTE.teal, 0.16),
      disabled: alpha(PALETTE.deep, 0.26),
      disabledBackground: alpha(PALETTE.deep, 0.08),
    },
  },
  shape: { borderRadius: 14 },
  typography: {
    fontFamily:
      '"Vollkorn","Georgia","Iowan Old Style","Palatino","Times New Roman",serif',
    h1: { fontWeight: 700, letterSpacing: '-0.01em' },
    h2: { fontWeight: 700, letterSpacing: '-0.01em' },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700, letterSpacing: '-0.005em' },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { fontWeight: 600, letterSpacing: '0.01em' },
    body1: { lineHeight: 1.65 },
    body2: { lineHeight: 1.6 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: PAGE_BG,
          // Sky highlight top-left, sunset glow bottom-right — subtle so
          // foreground surfaces (cards, paper) keep their contrast.
          backgroundImage: `radial-gradient(1200px 600px at 0% -10%, ${alpha(
            PALETTE.skyLight,
            0.32,
          )}, transparent 60%), radial-gradient(900px 500px at 100% 110%, ${alpha(
            PALETTE.amber,
            0.16,
          )}, transparent 55%)`,
          backgroundAttachment: 'fixed',
        },
      },
    },
    MuiAppBar: {
      defaultProps: { color: 'transparent', elevation: 0 },
      styleOverrides: {
        root: {
          backgroundColor: alpha('#ffffff', 0.85),
          backdropFilter: 'saturate(1.2) blur(8px)',
          WebkitBackdropFilter: 'saturate(1.2) blur(8px)',
          borderBottom: `1px solid ${DIVIDER}`,
          color: TEXT_PRIMARY,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', fontWeight: 600, borderRadius: 12 },
        containedPrimary: {
          boxShadow: `0 1px 0 ${alpha('#ffffff', 0.4)} inset, 0 6px 14px ${alpha(
            PALETTE.deep,
            0.28,
          )}`,
          '&:hover': {
            boxShadow: `0 1px 0 ${alpha('#ffffff', 0.4)} inset, 0 8px 18px ${alpha(
              PALETTE.deep,
              0.36,
            )}`,
          },
        },
        containedSecondary: {
          boxShadow: `0 1px 0 ${alpha('#ffffff', 0.5)} inset, 0 6px 14px ${alpha(
            PALETTE.orange,
            0.32,
          )}`,
          '&:hover': {
            boxShadow: `0 1px 0 ${alpha('#ffffff', 0.5)} inset, 0 8px 18px ${alpha(
              PALETTE.orange,
              0.4,
            )}`,
          },
        },
      },
    },
    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          backgroundColor: PAPER,
          border: `1px solid ${DIVIDER}`,
          transition: 'transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: 'none' },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          color: TEXT_SECONDARY,
          borderColor: DIVIDER,
          '&.Mui-selected': {
            backgroundColor: alpha(PALETTE.teal, 0.18),
            color: PALETTE.deep,
            borderColor: alpha(PALETTE.teal, 0.5),
            '&:hover': { backgroundColor: alpha(PALETTE.teal, 0.26) },
          },
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(PALETTE.skyLight, 0.18),
          borderRadius: 12,
          padding: 2,
          '& .MuiToggleButton-root': {
            border: 'none',
            borderRadius: 10,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        outlined: { borderColor: DIVIDER },
      },
    },
    MuiTextField: {
      defaultProps: { variant: 'outlined' },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: PAPER,
          '& fieldset': { borderColor: DIVIDER },
          '&:hover fieldset': { borderColor: alpha(PALETTE.teal, 0.55) },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        outlinedSuccess: { backgroundColor: alpha(PALETTE.skyLight, 0.22) },
        outlinedInfo: { backgroundColor: alpha(PALETTE.skyLight, 0.18) },
        outlinedError: { backgroundColor: alpha(PALETTE.orange, 0.1) },
        outlinedWarning: { backgroundColor: alpha(PALETTE.amber, 0.14) },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: { backgroundColor: PAPER, border: `1px solid ${DIVIDER}` },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: { backgroundColor: alpha(PALETTE.deep, 0.06) },
      },
    },
  },
});

export const palette = {
  ...PALETTE,
  textPrimary: TEXT_PRIMARY,
  textSecondary: TEXT_SECONDARY,
  divider: DIVIDER,
  paper: PAPER,
  pageBg: PAGE_BG,
} as const;
