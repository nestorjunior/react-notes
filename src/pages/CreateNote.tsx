import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import styled from "styled-components";
import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Button from "../components/Button";

const Container = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 24px 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`;

const BackButton = styled(Link)`
  color: ${({ theme }) => theme.colors.lightGray};
  margin-right: 16px;
  
  &:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
`;

const HeaderTitle = styled.h1`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white};
`;

const Content = styled.div`
  padding: 36px 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: 18px;
  margin-bottom: 8px;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 16px;
`;

const Tag = styled.div`
  background-color: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.darkGray};
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
`;

// const DeleteButton = styled(Button)`
//   background-color: ${({ theme }) => theme.colors.red};
// `;

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [newTag, setNewTag] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const handleAddTag = () => {
    if (newTag.trim()) {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, description, tags });
    window.location.href = "/dashboard";
  };

  return (
    <Container>
      <Header>
        <BackButton to="/dashboard">
          <ArrowLeft size={24} />
        </BackButton>
        <HeaderTitle>Nova nota</HeaderTitle>
      </Header>

      <Content>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Título</Label>
            <Input
              placeholder="Título da nota"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Observações</Label>
            <TextArea
              placeholder="Observações"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={10}
            />
          </FormGroup>

          <FormGroup>
            <Label>Links úteis</Label>
            <Input
              placeholder="Adicionar tag"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <Button 
              type="button" 
              onClick={handleAddTag}
            >
              Adicionar tag
            </Button>

            <TagsContainer>
              {tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </TagsContainer>
          </FormGroup>

          <ButtonsContainer>
            <Button type="submit">
              Salvar
            </Button>
          </ButtonsContainer>
        </form>
      </Content>
    </Container>
  );
};

export default CreateNote;