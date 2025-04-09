import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Power } from "lucide-react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import NoteCard from "../components/NoteCard";
import Input from "../components/Input";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Content = styled.div`
  margin-left: 256px;
  flex: 1;
  padding: 40px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const SearchContainer = styled.div`
  flex: 1;
  max-width: 600px;
`;

const UserContainer = styled.button`
  margin-left: 32px;
  background: none;
  border: none;
`;

const UserAvatar = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const LogoutButton = styled.button`
  margin-left: 24px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.lightGray};
  
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.lightGray};
  margin-bottom: 24px;
`;

const NotesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const mockNotes = [
  {
    id: "1",
    title: "React Modal",
    tags: [{ name: "React" }]
  },
  {
    id: "2",
    title: "Exemplo de Middleware",
    tags: [{ name: "Express" }, { name: "Node" }]
  }
];

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  return (
    <Container>
      <Sidebar userName="Rodrigo Gonçalves" userAvatar="/lovable-uploads/27d3fea9-df2d-49e0-b816-8119f6bba024.png" />
      
      <Content>
        <Header>
          <SearchContainer>
            <Input 
              icon={<Search size={20} />}
              placeholder="Pesquisar pelo título"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchContainer>
          
          <UserContainer 
            onClick={() => navigate("/profile")}
          >
            <UserAvatar 
              src="/lovable-uploads/27d3fea9-df2d-49e0-b816-8119f6bba024.png" 
              alt="Rodrigo Gonçalves"
            />
          </UserContainer>
          
          <LogoutButton
            onClick={() => navigate("/")}
          >
            <Power size={24} />
          </LogoutButton>
        </Header>
        
        <section>
          <SectionTitle>Minhas notas</SectionTitle>
          
          <NotesGrid>
            {mockNotes.map((note) => (
              <NoteCard
                key={note.id}
                title={note.title}
                tags={note.tags}
                onClick={() => console.log(`Note clicked: ${note.id}`)}
              />
            ))}
          </NotesGrid>
        </section>
      </Content>
    </Container>
  );
};

export default Dashboard;