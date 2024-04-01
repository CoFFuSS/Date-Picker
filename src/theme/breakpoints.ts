import { CSSObject, FlattenSimpleInterpolation, SimpleInterpolation, css } from 'styled-components';

export const THEME_BREAKPOINTS = {
  xs: '0px',
  sm: '600px',
  md: '900px',
  lg: '1200px',
  xl: '1546px',
} as const;

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type Accumulator = {
  [key in Breakpoint]: (
    first: TemplateStringsArray | CSSObject,
    ...interpolations: SimpleInterpolation[]
  ) => FlattenSimpleInterpolation;
};

export const media = Object.keys(THEME_BREAKPOINTS).reduce<Accumulator>((acc, label) => {
  acc[label as Breakpoint] = (...args) => css`
    /* stylelint-disable-next-line block-no-empty */
    @media (min-width: ${THEME_BREAKPOINTS[label as Breakpoint]}) {
      ${css(...args)};
    }
  `;

  return acc;
}, {} as Accumulator);
