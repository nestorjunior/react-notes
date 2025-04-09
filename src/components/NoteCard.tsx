// import { Link } from "react-router-dom";
import styled from "styled-components";

type TagProps = {
  name: string;
  color?: string;
};

type NoteCardProps = {
  title: string;
  tags?: TagProps[];
  onClick?: () => void;
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGray};
  border-radius: 10px;
  padding: 22px;
  cursor: pointer;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 24px;
`;

const TagsContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const TagItem = styled.span<{ color?: string }>`
  background-color: ${({ color, theme }) => color || theme.colors.orange};
  color: ${({ theme }) => theme.colors.background};
  font-size: 12px;
  font-weight: 500;
  padding: 5px 14px;
  border-radius: 5px;
`;

const Tag = ({ name, color }: TagProps) => (
  <TagItem color={color}>{name}</TagItem>
);

const NoteCard = ({ title, tags = [], onClick }: NoteCardProps) => {
  return (
    <Container onClick={onClick}>
      <Title>{title}</Title>
      
      {tags.length > 0 && (
        <TagsContainer>
          {tags.map((tag) => (
            <Tag key={tag.name} name={tag.name} color={tag.color} />
          ))}
        </TagsContainer>
      )}
    </Container>
  );
};

export default NoteCard;