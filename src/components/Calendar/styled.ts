import styled from 'styled-components';

import { basicTheme } from '@/theme';

export const CalendarContainer = styled.div<{ isShown: boolean }>`
  margin-top: ${basicTheme.spacing(8)};
  position: absolute;
  background-color: ${basicTheme.colors.primary};
  width: ${basicTheme.spacing(230)};
  height: ${basicTheme.spacing(221)};
  border: ${basicTheme.spacing(1)} solid ${basicTheme.colors.lightGray};
  border-radius: ${basicTheme.spacing(8)};
  display: ${(props) => (props.isShown ? 'block' : 'none')};
  padding: ${basicTheme.spacing(10)};
`;
