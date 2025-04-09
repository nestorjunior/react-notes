import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 24px;
`;

const Title = styled.h1`
  font-size: 64px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.orange};
  margin-bottom: 16px;
`;

const Message = styled.p`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 40px;
  text-align: center;
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.orange};
  font-size: 18px;
  text-decoration: none;
  display: flex;
  align-items: center;
  
  &:hover {
    text-decoration: underline;
  }
`;

const NotFound = () => {
  return (
    <Container>
      <Title>404</Title>
      <Message>Página não encontrada</Message>
      <StyledLink to="/">
        Voltar para o início
      </StyledLink>
    </Container>
  );
};

export default NotFound;