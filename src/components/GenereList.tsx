import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenereList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            
                <Button
                  onClick={() => onSelectGenre(genre)}
                  fontSize="lg"
                  variant="link"
                  whiteSpace='normal'
                  wordBreak='break-word'
                >
                  {genre.name}
                </Button>
              
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenereList;