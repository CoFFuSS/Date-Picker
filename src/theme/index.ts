import { THEME_BREAKPOINTS, media } from './breakpoints';
import {
  THEME_COLORS,
  THEME_FONT_FAMILIES,
  THEME_FONT_WEIGHT,
  THEME_TYPOGRAPHY_VARIANTS,
} from './constants';
import { pxToRem, spacing } from './utils';

export const basicTheme = {
  colors: THEME_COLORS,
  breakpoints: THEME_BREAKPOINTS,
  typography: {
    fontFamilies: THEME_FONT_FAMILIES,
    variant: THEME_TYPOGRAPHY_VARIANTS,
  },
  fontWeight: THEME_FONT_WEIGHT,
  spacing,
  media,
  utils: {
    pxToRem,
  },
};
