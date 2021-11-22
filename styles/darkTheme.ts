import {theme} from 'styles/theme';

export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    // Default text colors
    default3: '#12101A',
    default4: '#3B354D',
    default1: '#DBD9E6',
    default2: '#FCFCFF',

    // Default background colors, use with associated default text colors
    background3: '#DBD9E6',
    background4: '#FCFCFF',
    background1: '#12101A',
    background2: '#3B354D',
  }
}
