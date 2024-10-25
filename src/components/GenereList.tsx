import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  SkeletonText,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenereList = () => {
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];

  const { data, isLoading, error } = useGenres();

  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

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
      <Heading fontSize="2xl" paddingBottom={3}>
        Genres
      </Heading>
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
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                textColor={genre.id === selectedGenreId ? "teal" : ""}
                onClick={() => setSelectedGenreId(genre.id)}
                fontSize="lg"
                variant="ghost"
                whiteSpace="normal"
                textAlign="left"
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
