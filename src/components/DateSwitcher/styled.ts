import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    user-select: none;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    width: ${theme.spacing(230)};
    height: ${theme.spacing(29)};
  `}
`;

export const DateSelector = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    width: ${theme.spacing(16)};
    height: ${theme.spacing(16)};
  `}
`;

export const SwitcherDateLabel = styled.label`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${theme.spacing(19)};
  `}
`;

export const SwitcherDateButton = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.secondary};
    background-color: ${theme.colors.primary};
    border: none;
    ${theme.typography.variant.h1};
  `}
`;
