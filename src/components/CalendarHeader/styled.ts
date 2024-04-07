import styled from 'styled-components';

import { basicTheme } from '@/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: ${basicTheme.spacing(230)};
  height: ${basicTheme.spacing(32)};
`;

export const HeaderCell = styled.div`
  gap: ${basicTheme.spacing(10)};
  display: flex;
  height: ${basicTheme.spacing(32)};
  width: ${basicTheme.spacing(32)};
  align-items: center;
  justify-content: center;
`;

export const HeaderCellText = styled.p`
  margin: none;
  ${basicTheme.typography.variant.h1};
`;
