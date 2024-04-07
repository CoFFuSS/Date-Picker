import { DefaultTheme, FlattenInterpolation, ThemeProps, css } from 'styled-components';

import { pxToRem } from './utils';

export const THEME_COLORS = {
  primary: '#FFFFFF',
  secondary: '#000000',
  mediumDark: '#333333',
  gray: '#BBBBBB',
  mediumGray: '#AAAAAA',
  lightGray: '#E1E1E1',
  blue: '#2F80ED',
  lightPeachy: '#ffccb8',
  green: '#2ECC40',
} as const;

export const THEME_FONT_FAMILIES = {
  primary: 'Open Sans, sans-serif',
} as const;

export const THEME_FONT_WEIGHT = {
  light: '100',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
} as const;

interface TypographyVariants {
  [key: string]: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}

export const THEME_TYPOGRAPHY_VARIANTS: TypographyVariants = {
  h1: css`
    font-family: ${THEME_FONT_FAMILIES.primary};
    font-size: ${pxToRem(14)};
    font-weight: ${THEME_FONT_WEIGHT.bold};
    line-height: ${19 / 14};
  `,

  h2: css`
    font-family: ${THEME_FONT_FAMILIES.primary};
    font-size: ${pxToRem(13)};
    font-weight: ${THEME_FONT_WEIGHT.semibold};
    line-height: ${18 / 13};
  `,
  h3: css`
    font-family: ${THEME_FONT_FAMILIES.primary};
    font-size: ${pxToRem(15)};
    font-weight: ${THEME_FONT_WEIGHT.regular};
    line-height: ${20 / 15};
  `,
  h4: css`
    font-family: ${THEME_FONT_FAMILIES.primary};
    font-size: ${pxToRem(12)};
    font-weight: ${THEME_FONT_WEIGHT.semibold};
    line-height: ${16 / 12};
  `,
} as const;
