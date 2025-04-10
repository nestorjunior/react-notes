import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
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

export const StyledInput = styled.input`
  background: transparent;
  border: 0;
  flex: 1;
  height: 100%;
  color: ${({ theme }) => theme.colors.white};

  &::placeholder {
    color: ${({ theme }) => theme.colors.lightGray};
  }
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.red};
  margin-top: 4px;
  font-size: 14px;
`;