import { BasicTheme } from './types/theme';
import 'styled-components';

declare module '*.module.css' {
  interface ClassNames {
    [className: string]: string;
  }
  const classNames: ClassNames;
  export = classNames;
}
declare module 'styled-components' {
  export interface DefaultTheme extends BasicTheme {}
}
