import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import styled from "styled-components";
import Input from "../components/Input";
import Button from "../components/Button";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const FormSection = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};
  width: 100%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    width: 33.333%;
  }
`;

const FormContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.orange};
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 4px;
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: 14px;
  margin-bottom: 64px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const RegisterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.orange};
  text-align: center;
  margin-top: auto;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const BgImage = styled.div`
  /* display: none; */
  
  @media (min-width: 768px) {
    display: block;
    width: 66.666%;
    background-image: url('/assets/project-image.jpg');
    background-size: cover;
    background-position: center;
  }
`;

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui ficaria a lógica de login
    console.log({ email, password });
    window.location.href = "/dashboard";
  };

  return (
    <Container>
      <FormSection>
        <FormContainer>
          <Title>Rocket Notes</Title>
          <Subtitle>Suas notas em um lugar só</Subtitle>
          
          <Form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              icon={<Mail size={20} />}
            />
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              icon={<Lock size={20} />}
            />
            <Button 
              type="submit"
              fullWidth
            >
              Entrar
            </Button>
          </Form>
        </FormContainer>

        <RegisterLink to="/signup">
          Criar conta
        </RegisterLink>
      </FormSection>
      
      <BgImage />
    </Container>
  );
};

export default SignIn;