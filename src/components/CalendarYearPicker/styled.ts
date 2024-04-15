import styled, { css } from 'styled-components';

export const YearCellWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0;
`;

export const YearCell = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    user-select: none;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    width: ${theme.spacing(57)};
    height: ${theme.spacing(57)};

    text-align: center;

    background-color: ${theme.colors.primary};
    border-radius: ${theme.spacing(8)};

    ${theme.typography.variant.h1};

    &:hover {
      background-color: ${theme.colors.cellHover};
    }
  `}
`;
