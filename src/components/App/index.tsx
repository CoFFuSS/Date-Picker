import { ThemeProvider } from 'styled-components';

import { basicTheme } from '@/theme';

export const App = () => (
  <ThemeProvider theme={basicTheme}>
    <h1>Hello World!</h1>
  </ThemeProvider>
);
