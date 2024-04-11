import styled from 'styled-components';

import { basicTheme } from '@/theme';

export const Container = styled.div`
  user-select: none;

  display: flex;
  flex-direction: row;

  width: ${basicTheme.spacing(230)};
  height: ${basicTheme.spacing(32)};
`;

export const HeaderCell = styled.div`
  display: flex;
  gap: ${basicTheme.spacing(10)};
  align-items: center;
  justify-content: center;

  width: ${basicTheme.spacing(32)};
  height: ${basicTheme.spacing(32)};
`;

export const HeaderCellText = styled.p`
  margin: none;
  ${basicTheme.typography.variant.h1};
`;
