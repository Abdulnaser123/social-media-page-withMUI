import {createTheme} from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0077c2',
    },
    secondary: {
      main: '#c2007f',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
