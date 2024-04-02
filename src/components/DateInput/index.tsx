import React, { ChangeEvent } from 'react';

import { Container, DateInputField, InputLabel } from './styled';

interface DateInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => () => void;
}

export const DateInput = ({ value, onChange }: DateInputProps) => {
  console.log(1);

  return (
    <Container>
      <InputLabel htmlFor='DateInput'>
        <DateInputField
          id='DateInput'
          type='text'
          value={value}
          onChange={onChange}
          placeholder='Choose Date'
        />
      </InputLabel>
    </Container>
  );
};
