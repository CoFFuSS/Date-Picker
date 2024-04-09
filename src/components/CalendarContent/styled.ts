import styled from 'styled-components';

import { basicTheme } from '@/theme';

export const DateCell = styled.div`
  cursor: pointer;

  position: relative;

  display: flex;
  gap: ${basicTheme.spacing(10)};
  align-items: center;
  justify-content: center;

  width: ${basicTheme.spacing(32)};
  height: ${basicTheme.spacing(32)};

  background-color: ${basicTheme.colors.primary};
  border-radius: ${basicTheme.spacing(8)};

  &[data-isweekend='true'] {
    background-color: ${basicTheme.colors.lightPeachy};
  }

  &[data-isholiday='true'] {
    background-color: ${basicTheme.colors.green};
  }

  &[data-selected='true'] {
    background-color: ${basicTheme.colors.blue};
  }

  &[data-inthismonth='false'] {
    color: ${basicTheme.colors.mediumGray};
  }

  &[data-havetodos='true']::after {
    content: '';

    position: absolute;
    right: ${basicTheme.spacing(4)};
    bottom: ${basicTheme.spacing(4)};

    width: ${basicTheme.spacing(4)};
    height: ${basicTheme.spacing(4)};

    background-color: ${basicTheme.colors.pink};
    border-radius: 50%;
  }
`;

export const DateCellText = styled.p`
  margin: none;
  ${basicTheme.typography.variant.h1};
`;

export const DateCellWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  justify-content: space-between;
`;
