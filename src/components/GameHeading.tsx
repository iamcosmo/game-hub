import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery | null;
}
const GameHeading = ({ gameQuery }: Props) => {
  return (
    <Heading as="h1" paddingBottom={5} fontSize='5xl'>
      {(gameQuery?.platform?.name || "") +
        "\t" +
        (gameQuery?.genre?.name || "") +
        "\tGames"}
    </Heading>
  );
};

export default GameHeading;
