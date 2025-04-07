import { Container } from './styles'
import { Button } from '../../components/Button';


export function Details() {
  return (
    <Container>
      <h3 className='teste'>Details</h3>
      <Button title='Entrar' loading />
      <Button title='Cadastrar' />
      <Button title='Voltar' />
    </Container>
  );
}
