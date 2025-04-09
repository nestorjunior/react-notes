import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Mail, Lock, ArrowLeft } from "lucide-react";
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

const BackLink = styled(Link)`
  color: ${({ theme }) => theme.colors.orange};
  text-align: center;
  margin-top: auto;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  &:hover {
    text-decoration: underline;
  }
`;

const BgImage = styled.div`
  /* display: none; */
  
  @media (min-width: 768px) {
    display: block;
    width: 66.666%;
    background-image: url('/lovable-uploads/1493cc19-1ac3-430c-b36b-02272fde2f6b.png');
    background-size: cover;
    background-position: center;
  }
`;

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, password });
    window.location.href = "/";
  };

  return (
    <Container>
      <FormSection>
        <FormContainer>
          <Title>Rocket Notes</Title>
          <Subtitle>Crie sua conta</Subtitle>
          
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              icon={<User size={20} />}
            />
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
              Cadastrar
            </Button>
          </Form>
        </FormContainer>

        <BackLink to="/">
          <ArrowLeft size={16} />
          Voltar para o login
        </BackLink>
      </FormSection>
      
      <BgImage />
    </Container>
  );
};

export default SignUp;
