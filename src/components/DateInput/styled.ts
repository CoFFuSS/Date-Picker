import styled from 'styled-components';

import { basicTheme } from '@/theme';

export const Container = styled.div`
  color: ${basicTheme.colors.secondary};
  display: flex;
  flex-direction: column;
  border: ${basicTheme.spacing(1)} solid ${basicTheme.colors.gray};
  border-radius: ${basicTheme.spacing(8)};
  width: ${basicTheme.spacing(250)};
  height: ${basicTheme.spacing(42)};
`;

export const InputLabel = styled.label`
  ${basicTheme.typography.variant.h3};
  font-weight: 600;
  color: ${basicTheme.colors.secondary};
  display: flex;
  flex-direction: column;
`;

export const DateInputField = styled.input`
  height: ${basicTheme.spacing(20)};
  width: ${basicTheme.spacing(196)};
  border: none;
  &:placeholder-shown {
    color: ${basicTheme.colors.gray};
  }
`;
