import { forwardRef, InputHTMLAttributes } from "react";
import {Container, InputContainer, StyledInput, ErrorMessage} from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, error, ...rest }, ref) => (
    <Container>
      <InputContainer>
        {icon}
        <StyledInput ref={ref} {...rest} />
      </InputContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  )
);

Input.displayName = 'Input';

export default Input;