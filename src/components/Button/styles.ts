import styled from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  variant?: 'primary' | 'ghost';
  fullWidth?: boolean;
}

export const ButtonContainer = styled.button<ButtonProps>`
  background-color: ${({ theme, variant }) => 
    variant === 'ghost' ? 'transparent' : theme.colors.orange};
  color: ${({ theme, variant }) => 
    variant === 'ghost' ? theme.colors.orange : theme.colors.background};
  border: 0;
  border-radius: 10px;
  padding: 12px 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  
  &:disabled {
    opacity: 0.5;
  }
`;