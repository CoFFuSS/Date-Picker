import styled from 'styled-components';

import { basicTheme } from '@/theme';

export const Container = styled.div`
  align-items: center;
  justify-content: space-between;
  width: ${basicTheme.spacing(230)};
  height: ${basicTheme.spacing(29)};
  display: flex;
  flex-direction: row;
`;

export const DateSelector = styled.div`
  height: ${basicTheme.spacing(16)};
  width: ${basicTheme.spacing(16)};
  cursor: pointer;
`;

export const SwitcherDateLabel = styled.label`
  height: ${basicTheme.spacing(19)};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SwitcherDateButton = styled.button`
  cursor: pointer;
  background-color: ${basicTheme.colors.primary};
  border: none;
  ${basicTheme.typography.variant.h1}
  color: ${basicTheme.colors.secondary}
`;
