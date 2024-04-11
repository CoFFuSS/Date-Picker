import styled from 'styled-components';

import { basicTheme } from '@/theme';

export const CalendarContainer = styled.div<{ isShown: boolean }>`
  position: absolute;

  display: ${(props) => (props.isShown ? 'block' : 'none')};

  width: ${basicTheme.spacing(230)};
  margin-top: ${basicTheme.spacing(8)};
  padding: ${basicTheme.spacing(10)};

  background-color: ${basicTheme.colors.primary};
  border: ${basicTheme.spacing(1)} solid ${basicTheme.colors.lightGray};
  border-radius: ${basicTheme.spacing(8)};
`;
