import { createTheme } from '@vanilla-extract/css';
import { colors } from './vanilla-extract.config';

export const [themeClass, vars] = createTheme({
  color: colors,
});
