import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Spoqa Han Sans',
      'Apple SD Gothic Neo',
      'Nanum Barun Gothic',
      'Nanum Gothic',
      '돋움',
      'Dotum',
      'Verdana',
      'Arial',
      'sans-serif',
    ].join(','),
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: '#c5cae9',
    },
    secondary: {
      main: '#BE9FE1',
    },
    contrastThreshold: 3,
  },
  overrides: {
    MuiTypography: {
      root: {
        whiteSpace: 'pre-wrap',
      },
    },
  },
});

export default theme;
