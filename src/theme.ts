import { createTheme, alpha } from '@mui/material/styles';

// "Golden Summer Fields" palette
const PALETTE = {
  sage: '#ccd5ae',
  paleSage: '#e9edc9',
  ivory: '#fefae0',
  cream: '#faedcd',
  tan: '#d4a373',
} as const;

// Derived warm tones to round out semantic colors
const SAGE_DEEP = '#7a8b53';
const HONEY = '#c98a35';
const RUST = '#b35a3a';
const COCOA = '#3a2e1d';
const COCOA_SOFT = '#6e5a3f';
const PARCHMENT = '#efe6cf';
const PAPER = '#fffaee';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: PALETTE.tan,
      light: '#e2bd8f',
      dark: '#a37a51',
      contrastText: '#fff',
    },
    secondary: {
      main: SAGE_DEEP,
      light: PALETTE.sage,
      dark: '#5d6a3d',
      contrastText: '#fff',
    },
    success: { main: SAGE_DEEP, light: PALETTE.sage, dark: '#5d6a3d' },
    warning: { main: HONEY, light: '#e0ad6a', dark: '#9a6826' },
    error: { main: RUST, light: '#d08163', dark: '#84412a' },
    info: { main: '#7d8aa3', light: '#a3acbc', dark: '#5e6a82' },
    background: {
      default: PALETTE.ivory,
      paper: PAPER,
    },
    text: {
      primary: COCOA,
      secondary: COCOA_SOFT,
    },
    divider: PARCHMENT,
    action: {
      hover: alpha(PALETTE.tan, 0.08),
      selected: alpha(PALETTE.tan, 0.16),
      disabled: alpha(COCOA, 0.26),
      disabledBackground: alpha(COCOA, 0.08),
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
          backgroundColor: PALETTE.ivory,
          // Subtle paper-grain feel via two soft radial highlights.
          backgroundImage: `radial-gradient(1200px 600px at 0% -10%, ${alpha(
            PALETTE.cream,
            0.7,
          )}, transparent 60%), radial-gradient(900px 500px at 100% 110%, ${alpha(
            PALETTE.paleSage,
            0.55,
          )}, transparent 55%)`,
          backgroundAttachment: 'fixed',
        },
      },
    },
    MuiAppBar: {
      defaultProps: { color: 'transparent', elevation: 0 },
      styleOverrides: {
        root: {
          backgroundColor: alpha(PAPER, 0.85),
          backdropFilter: 'saturate(1.1) blur(8px)',
          WebkitBackdropFilter: 'saturate(1.1) blur(8px)',
          borderBottom: `1px solid ${PARCHMENT}`,
          color: COCOA,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', fontWeight: 600, borderRadius: 12 },
        containedPrimary: {
          boxShadow: '0 1px 0 rgba(255,255,255,0.5) inset, 0 6px 14px rgba(212,163,115,0.28)',
          '&:hover': {
            boxShadow: '0 1px 0 rgba(255,255,255,0.5) inset, 0 8px 18px rgba(212,163,115,0.34)',
          },
        },
      },
    },
    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          backgroundColor: PAPER,
          border: `1px solid ${PARCHMENT}`,
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
          color: COCOA_SOFT,
          borderColor: PARCHMENT,
          '&.Mui-selected': {
            backgroundColor: alpha(PALETTE.tan, 0.18),
            color: COCOA,
            borderColor: alpha(PALETTE.tan, 0.5),
            '&:hover': { backgroundColor: alpha(PALETTE.tan, 0.24) },
          },
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(PALETTE.cream, 0.5),
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
        outlined: { borderColor: PARCHMENT },
      },
    },
    MuiTextField: {
      defaultProps: { variant: 'outlined' },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: PAPER,
          '& fieldset': { borderColor: PARCHMENT },
          '&:hover fieldset': { borderColor: alpha(PALETTE.tan, 0.5) },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        outlinedSuccess: { backgroundColor: alpha(PALETTE.sage, 0.25) },
        outlinedInfo: { backgroundColor: alpha(PALETTE.cream, 0.5) },
        outlinedError: { backgroundColor: alpha(RUST, 0.08) },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: { backgroundColor: PAPER, border: `1px solid ${PARCHMENT}` },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: { backgroundColor: alpha(COCOA, 0.06) },
      },
    },
  },
});

export const palette = {
  ...PALETTE,
  sageDeep: SAGE_DEEP,
  honey: HONEY,
  rust: RUST,
  cocoa: COCOA,
  cocoaSoft: COCOA_SOFT,
  parchment: PARCHMENT,
  paper: PAPER,
} as const;
