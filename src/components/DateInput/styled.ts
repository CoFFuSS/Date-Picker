import styled from 'styled-components';

import { basicTheme } from '@/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${basicTheme.spacing(250)};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  width: ${basicTheme.spacing(250)};
  height: ${basicTheme.spacing(42)};

  color: ${basicTheme.colors.secondary};

  border: ${basicTheme.spacing(1)} solid ${basicTheme.colors.gray};
  border-radius: ${basicTheme.spacing(8)};
`;

export const CalendarIconContainer = styled.div`
  cursor: pointer;
  width: ${basicTheme.spacing(16)};
  height: ${basicTheme.spacing(16)};
  margin: ${basicTheme.spacing(13, 8, 13, 16)};
`;

export const CloseCalendarContainer = styled.div`
  cursor: pointer;
  width: ${basicTheme.spacing(14)};
  height: ${basicTheme.spacing(14)};
  margin: ${basicTheme.spacing(14, 16, 14, 8)};
`;

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;

  width: ${basicTheme.spacing(172)};
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

export const ErrorValidation = styled.div`
  ${basicTheme.typography.variant.h1}
  color: ${basicTheme.colors.secondary};
`;
