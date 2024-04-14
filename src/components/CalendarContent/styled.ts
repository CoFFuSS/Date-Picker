import styled, { css } from 'styled-components';

export const DateCell = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    user-select: none;

    position: relative;

    display: flex;
    gap: ${theme.spacing(10)};
    align-items: center;
    justify-content: center;

    width: ${theme.spacing(32)};
    height: ${theme.spacing(32)};

    background-color: ${theme.colors.primary};
    border-radius: ${theme.spacing(8)};

    &[data-isweekend='true'] {
      background-color: ${theme.colors.lightPeachy};
    }

    &[data-isholiday='true'] {
      background-color: ${theme.colors.green};
    }

    &[data-selected='false']:hover {
      background-color: ${theme.colors.cellHover};
    }

    &[data-selected='true'] {
      background-color: ${theme.colors.blue};
    }

    &[data-inthismonth='false'] {
      color: ${theme.colors.mediumGray};
    }

    &[data-havetodos='true']::after {
      content: '';

      position: absolute;
      right: ${theme.spacing(4)};
      bottom: ${theme.spacing(4)};

      width: ${theme.spacing(4)};
      height: ${theme.spacing(4)};

      background-color: ${theme.colors.pink};
      border-radius: 50%;
    }

    &[data-isinrange='true'] {
      background-color: ${theme.colors.inRange};
      border-radius: 0;
    }

    &[data-startdate='true'] {
      color: ${theme.colors.primary};
      background-color: ${theme.colors.startDate};
      border-radius: ${theme.spacing(8, 0, 0, 8)};
    }

    &[data-enddate='true'] {
      color: ${theme.colors.primary};
      background-color: ${theme.colors.blue};
      border-radius: ${theme.spacing(0, 8, 8, 0)};
    }
  `}
`;

export const DateCellText = styled.p`
  ${({ theme }) => css`
    margin: none;
    ${theme.typography.variant.h1};
  `}
`;

export const DateCellWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0;
`;
