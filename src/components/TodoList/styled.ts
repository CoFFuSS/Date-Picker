import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ isShown: boolean }>`
  ${({ theme, isShown }) => css`
    position: absolute;

    display: ${isShown ? 'block' : 'none'};

    width: ${theme.spacing(400)};
    margin-top: ${theme.spacing(8)};
    margin-left: ${theme.spacing(265)};
    padding: ${theme.spacing(10)};

    border: ${theme.spacing(1)} solid ${theme.colors.lightGray};
    border-radius: ${theme.spacing(8)};
  `}
`;

export const DateInfoBlock = styled.div`
  ${({ theme }) => css`
    ${theme.typography.variant.h1}
    color: ${theme.colors.secondary};
  `}
`;

export const InputLabel = styled.label`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    width: ${theme.spacing(250)};
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

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    height: ${theme.spacing(32)};

    color: ${theme.colors.secondary};
    ${theme.typography.variant.h1};
  `}
`;

export const TodoButton = styled.button`
  ${({ theme }) => css`
    cursor: pointer;

    height: ${theme.spacing(20)};

    background-color: ${theme.colors.primary};
    border: ${theme.spacing(1)} solid ${theme.colors.lightGray};
    border-radius: ${theme.spacing(8)};
    ${theme.typography.variant.h4}
  `}
`;

export const EmptyError = styled.p`
  ${({ theme }) => css`
    justify-content: center;
    text-align: center;
    ${theme.typography.variant.h1};
  `}
`;
