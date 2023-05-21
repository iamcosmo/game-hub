import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  SkeletonText,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenereList = ({ onSelectGenre }: Props) => {

  const skeletons = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return (<List>{skeletons.map((skeleton)=>(<ListItem key={skeleton}><SkeletonText/></ListItem>))}</List>);
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
                  variant="ghost"
                  whiteSpace='normal'
                  overflow='hidden'
                  textOverflow='ellipsis'
                  wordBreak='break-word'
                  width='100%'
                  height='100%'
                  paddingBlock='2'
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
