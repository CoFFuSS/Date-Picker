import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    user-select: none;

    display: flex;
    flex-direction: row;

    width: ${theme.spacing(230)};
    height: ${theme.spacing(32)};
  `}
`;

export const HeaderCell = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacing(10)};
    align-items: center;
    justify-content: center;

    width: ${theme.spacing(32)};
    height: ${theme.spacing(32)};
  `}
`;

export const HeaderCellText = styled.p`
  ${({ theme }) => css`
    margin: none;
    ${theme.typography.variant.h1};
  `}
`;
