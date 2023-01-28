import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import colorsApp from './colors-app';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: colorsApp.primary,
    },
    secondary: {
      main: colorsApp.secondary,
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
