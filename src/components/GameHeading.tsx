import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery | null;
}
const GameHeading = ({ gameQuery }: Props) => {

  const genre = useGenre(gameQuery?.genreId)

  const platform = usePlatform(gameQuery?.platformId)
   
  return (
   
    <Heading as="h1" paddingBottom={5} fontSize='5xl'>
      {(platform?.name || "") +
        "\t" +
        (genre?.name || "") +
        "\tGames"}
    </Heading>
    
  );
};

export default GameHeading;
