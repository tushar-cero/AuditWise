import { createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      text800?: string;
      text900?: string;
      primary200?: string;
      primary500?: string;
      border?: string;
    };
  }
  interface ThemeOptions {
    custom: {
      text800?: string;
      text900?: string;
      primary200?: string;
      primary500?: string;
      border?: string;
    };
  }
}

const getTheme = (mode: PaletteMode, module: string) => ({
  palette: {
    mode
  },
  custom: {
    text800: '#81807C',
    text900: '#101010',
    primary200: '#E6FBAB',
    primary500: '#C9F649',
    border: '#E9DFDD'
  }
});

export const generateTheme = (mode: PaletteMode, module: string) => createTheme(getTheme(mode, module));
