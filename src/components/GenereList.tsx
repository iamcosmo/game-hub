import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  SkeletonText,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenereList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];

  const {data,isLoading,error} = useGenres();
 // const { data, isLoading, error } = useGenres();

  //This two ifs currently donot work as we are fetcghing static data from ../data/genre
  //But in the future if we decide to fetch data again from the server then it may help
  if (error) return null;
  if (isLoading)
    return (
      <>
        <Heading>
          <SkeletonText />
        </Heading>
        <List>
          {skeletons.map((skeleton) => (
            <ListItem key={skeleton}>
              <SkeletonText />
            </ListItem>
          ))}
        </List>
      </>
    );
  return (
    <>
      <Heading fontSize='2xl' paddingBottom={3}>Genres</Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                objectFit="cover"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />

              <Button
                fontWeight={genre.id === selectedGenreId? "bold" : "normal"}
                textColor={genre.id === selectedGenreId? "teal" : ""}
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant="ghost"
                whiteSpace="normal"
                textAlign="left"
                //overflow="hidden"
                //textOverflow="ellipsis"
                //wordBreak="break-word"
                width="100%"
                height="100%"
                paddingBlock="2"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenereList;
