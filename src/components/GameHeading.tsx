import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from './../hooks/usePlatforms';

interface Props {
  gameQuery: GameQuery | null;
}
const GameHeading = ({ gameQuery }: Props) => {

  const {data:genres} = useGenres();
  const genre = genres?.results.find(g=>g.id===gameQuery?.genreId)

  const { data:Platforms} = usePlatforms();
  const platform = Platforms?.results.find(p=>p.id===gameQuery?.platformId)
   
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
