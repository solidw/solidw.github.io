import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles';

const GMARGET_SANS_LIGHT = 'GmarketSansLight';
const GMARGET_SANS_MEDIUM = 'GmarketSansMedium';

const theme = createMuiTheme({
  typography: {
    fontFamily: [GMARGET_SANS_MEDIUM, GMARGET_SANS_LIGHT].join(','),
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: '#007ACC',
    },
    secondary: {
      main: '#000000',
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
