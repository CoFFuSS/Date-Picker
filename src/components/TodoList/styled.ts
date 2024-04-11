import styled from 'styled-components';

import { basicTheme } from '@/theme';

export const Wrapper = styled.div<{ isShown: boolean }>`
  position: absolute;

  display: ${(props) => (props.isShown ? 'block' : 'none')};

  width: ${basicTheme.spacing(400)};
  margin-top: ${basicTheme.spacing(8)};
  margin-left: ${basicTheme.spacing(265)};
  padding: ${basicTheme.spacing(10)};

  border: ${basicTheme.spacing(1)} solid ${basicTheme.colors.lightGray};
  border-radius: ${basicTheme.spacing(8)};
`;

export const DateInfoBlock = styled.div`
  ${basicTheme.typography.variant.h1}
  color: ${basicTheme.colors.secondary};
`;

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;

  width: ${basicTheme.spacing(250)};
  height: ${basicTheme.spacing(20)};
  margin: ${basicTheme.spacing(11)} 0;

  font-weight: 600;

  ${basicTheme.typography.variant.h3};
`;

export const DateInputField = styled.input`
  width: inherit;
  height: inherit;
  color: ${basicTheme.colors.mediumDark};
  border: none;

  &:placeholder-shown {
    color: ${basicTheme.colors.gray};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: ${basicTheme.spacing(32)};

  color: ${basicTheme.colors.secondary};
  ${basicTheme.typography.variant.h1};
`;

export const TodoButton = styled.button`
  cursor: pointer;

  height: ${basicTheme.spacing(20)};

  background-color: ${basicTheme.colors.primary};
  border: ${basicTheme.spacing(1)} solid ${basicTheme.colors.lightGray};
  border-radius: ${basicTheme.spacing(8)};
  ${basicTheme.typography.variant.h4}
`;

export const EmptyError = styled.p`
  justify-content: center;
  text-align: center;
  ${basicTheme.typography.variant.h1};
`;
