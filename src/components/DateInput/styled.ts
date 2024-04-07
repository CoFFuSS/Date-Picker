import styled from 'styled-components';

import { basicTheme } from '@/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${basicTheme.spacing(250)};
`;

export const Container = styled.div`
  color: ${basicTheme.colors.secondary};
  display: flex;
  flex-direction: row;
  border: ${basicTheme.spacing(1)} solid ${basicTheme.colors.gray};
  border-radius: ${basicTheme.spacing(8)};
  width: ${basicTheme.spacing(250)};
  height: ${basicTheme.spacing(42)};
`;

export const CalendarIconContainer = styled.div`
  cursor: pointer;
  height: ${basicTheme.spacing(16)};
  width: ${basicTheme.spacing(16)};
  margin: ${basicTheme.spacing(13, 8, 13, 16)};
`;

export const CloseCalendarContainer = styled.div`
  cursor: pointer;
  height: ${basicTheme.spacing(14)};
  width: ${basicTheme.spacing(14)};
  margin: ${basicTheme.spacing(14, 16, 14, 8)};
`;

export const InputLabel = styled.label`
  ${basicTheme.typography.variant.h3};
  height: ${basicTheme.spacing(20)};
  width: ${basicTheme.spacing(172)};
  font-weight: 600;
  display: flex;
  flex-direction: column;
  margin: ${basicTheme.spacing(11)} 0;
`;

export const DateInputField = styled.input`
  color: ${basicTheme.colors.mediumDark};

  height: inherit;
  width: inherit;
  border: none;
  &:placeholder-shown {
    color: ${basicTheme.colors.gray};
  }
`;

export const ErrorValidation = styled.div`
  ${basicTheme.typography.variant.h1}
  color: ${basicTheme.colors.secondary};
`;
