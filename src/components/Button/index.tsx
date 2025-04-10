import {ButtonContainer} from './styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  variant?: 'primary' | 'ghost';
  fullWidth?: boolean;
}

const Button = ({ children, loading, ...rest }: ButtonProps) => {
  return (
    <ButtonContainer 
      type="button" 
      disabled={loading} 
      {...rest}
    >
      {loading ? 'Carregando...' : children}
    </ButtonContainer>
  );
};

export default Button;