import styled from 'styled-components';

import { basicTheme } from '@/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: ${basicTheme.spacing(230)};
  height: ${basicTheme.spacing(29)};
`;

export const DateSelector = styled.div`
  cursor: pointer;
  width: ${basicTheme.spacing(16)};
  height: ${basicTheme.spacing(16)};
`;

export const SwitcherDateLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${basicTheme.spacing(19)};
`;

export const SwitcherDateButton = styled.button`
  cursor: pointer;
  color: ${basicTheme.colors.secondary};
  background-color: ${basicTheme.colors.primary};
  border: none;
  ${basicTheme.typography.variant.h1};
`;
