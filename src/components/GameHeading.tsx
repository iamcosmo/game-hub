import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import useGenres from "../hooks/useGenres";

interface Props {
  gameQuery: GameQuery | null;
}
const GameHeading = ({ gameQuery }: Props) => {

  const {data:genres} = useGenres();
  const genre = genres?.results.find(g=>g.id===gameQuery?.genreId)
   
  return (
   
    <Heading as="h1" paddingBottom={5} fontSize='5xl'>
      {(gameQuery?.platform?.name || "") +
        "\t" +
        (genre?.name || "") +
        "\tGames"}
    </Heading>
    
  );
};

export default GameHeading;
