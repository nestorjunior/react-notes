import {Container, Title, TagsContainer, TagItem} from './styles'

type TagProps = {
  name: string;
  color?: string;
};

type NoteCardProps = {
  title: string;
  tags?: TagProps[];
  onClick?: () => void;
};

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