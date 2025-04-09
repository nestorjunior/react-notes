import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, User, Mail, Lock, Camera } from "lucide-react";
import styled from "styled-components";
import Input from "../components/Input";
import Button from "../components/Button";

const Container = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 32px;
`;

const Header = styled.header`
  width: 100%;
  max-width: 400px;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  padding: 0 16px;
`;

const BackButton = styled(Link)`
  color: ${({ theme }) => theme.colors.lightGray};
  
  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

const AvatarContainer = styled.div`
  position: relative;
  margin-bottom: 40px;
`;

const Avatar = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  object-fit: cover;
`;

const CameraButton = styled.button`
  position: absolute;
  bottom: 4px;
  right: 4px;
  background-color: ${({ theme }) => theme.colors.orange};
  border: none;
  border-radius: 50%;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.background};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.orange};
    filter: brightness(0.9);
  }
`;

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Profile = () => {
  const [name, setName] = useState("Rodrigo Gonçalves");
  const [email, setEmail] = useState("rodrigo@gmail.com");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui ficaria a lógica para salvar alterações
    console.log({ name, email, currentPassword, newPassword });
    window.location.href = "/dashboard";
  };

  return (
    <Container>
      <Header>
        <BackButton to="/dashboard">
          <ArrowLeft size={24} />
        </BackButton>
      </Header>

      <AvatarContainer>
        <Avatar 
          src="/lovable-uploads/27d3fea9-df2d-49e0-b816-8119f6bba024.png" 
          alt="Foto de Perfil"
        />
        
        <CameraButton>
          <Camera size={20} />
        </CameraButton>
      </AvatarContainer>
      
      <Form onSubmit={handleSave}>
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          icon={<User size={20} />}
        />

        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={<Mail size={20} />}
        />

        <Input
          type="password"
          placeholder="Senha atual"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          icon={<Lock size={20} />}
        />

        <Input
          type="password"
          placeholder="Nova senha"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          icon={<Lock size={20} />}
        />

        <Button 
          type="submit"
          fullWidth
        >
          Salvar
        </Button>
      </Form>
    </Container>
  );
};

export default Profile;
