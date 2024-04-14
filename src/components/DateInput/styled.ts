import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: ${theme.spacing(250)};
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;

    width: ${theme.spacing(250)};
    height: ${theme.spacing(42)};

    color: ${theme.colors.secondary};

    border: ${theme.spacing(1)} solid ${theme.colors.gray};
    border-radius: ${theme.spacing(8)};
  `}
`;

export const CalendarIconContainer = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    width: ${theme.spacing(16)};
    height: ${theme.spacing(16)};
    margin: ${theme.spacing(13, 8, 13, 16)};
  `}
`;

export const CloseCalendarContainer = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    width: ${theme.spacing(14)};
    height: ${theme.spacing(14)};
    margin: ${theme.spacing(14, 16, 14, 8)};
  `}
`;

export const InputLabel = styled.label`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    width: ${theme.spacing(172)};
    height: ${theme.spacing(20)};
    margin: ${theme.spacing(11)} 0;

    font-weight: 600;

    ${theme.typography.variant.h3};
  `}
`;

export const DateInputField = styled.input`
  ${({ theme }) => css`
    width: inherit;
    height: inherit;
    color: ${theme.colors.mediumDark};
    border: none;

    &:placeholder-shown {
      color: ${theme.colors.gray};
    }
  `}
`;

export const ErrorValidation = styled.div`
  ${({ theme }) => css`
    ${theme.typography.variant.h1}
    color: ${theme.colors.secondary};
  `}
`;
