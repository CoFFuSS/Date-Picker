export const pxToRem = (px: number | string): string => {
  if (typeof px !== 'number') return px;
  const rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

  return `${px / rootFontSize}rem` as const;
};

export const spacing = (...args: number[]) => {
  if (args.length > 4) return '0';

  return args.map((arg) => pxToRem(arg)).join(' ');
};
