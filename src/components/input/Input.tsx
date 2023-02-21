import React, { forwardRef } from 'react';
import { FieldError } from 'react-hook-form/dist/types';
import { InputContainer, InputField, Label } from './Input.styled';
import InputErrorMessage from './inputError/InputErrorMessage';

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { error?: FieldError | undefined; label: string };

type Ref = HTMLInputElement;

const Input = forwardRef<Ref, Props>(({ error, label, ...props }, ref) => {
  return (
    <InputContainer>
      <Label htmlFor={label}>{label}</Label>
      <InputField {...props} id={label} ref={ref} />
      {error?.message && <InputErrorMessage errorMessage={error.message} />}
    </InputContainer>
  );
});

export default Input;
