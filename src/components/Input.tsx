import { forwardRef, InputHTMLAttributes } from "react";
import styled from "styled-components";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  error?: string;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.inputBackground};
  border-radius: 10px;
  padding: 0 16px;
  width: 100%;
  display: flex;
  align-items: center;
  height: 56px;
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  
  &:focus-within {
    border: 1px solid ${({ theme }) => theme.colors.orange};
  }

  > svg {
    margin-right: 16px;
    color: ${({ theme }) => theme.colors.lightGray};
  }
`;

const StyledInput = styled.input`
  background: transparent;
  border: 0;
  flex: 1;
  height: 100%;
  color: ${({ theme }) => theme.colors.white};

  &::placeholder {
    color: ${({ theme }) => theme.colors.lightGray};
  }
`;

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.red};
  margin-top: 4px;
  font-size: 14px;
`;

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