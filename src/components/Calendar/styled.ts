import styled, { css } from 'styled-components';

export const CalendarContainer = styled.div<{ isShown: boolean }>`
  ${({ theme, isShown }) => css`
    position: absolute;

    display: ${isShown ? 'block' : 'none'};

    width: ${theme.spacing(230)};
    margin-top: ${theme.spacing(8)};
    padding: ${theme.spacing(10)};

    background-color: ${theme.colors.primary};
    border: ${theme.spacing(1)} solid ${theme.colors.lightGray};
    border-radius: ${theme.spacing(8)};
  `}
`;
