import { forwardRef, TextareaHTMLAttributes } from "react";
import styled from "styled-components";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledTextArea = styled.textarea`
  background-color: ${({ theme }) => theme.colors.inputBackground};
  color: ${({ theme }) => theme.colors.white};
  border: 0;
  resize: none;
  height: 150px;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.lightGray};
  }
  
  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.orange};
  }
`;

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.red};
  margin-top: 4px;
  font-size: 14px;
`;

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ error, ...rest }, ref) => (
    <Container>
      <StyledTextArea ref={ref} {...rest} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  )
);

TextArea.displayName = 'TextArea';

export default TextArea;