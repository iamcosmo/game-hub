import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery | null;
}
const GameHeading = ({ gameQuery }: Props) => {
    //Other Way...

    //const heading = `${gameQuery?.platform?.name|| ''} ${gameQuery?.genre?.name|| ''} Games`;
  return (
    //Other Way.....

    /*<Heading as="h1" paddingBottom={5} fontSize='5xl'>
            {heading}
      </Heading>*/


      //My Way
    <Heading as="h1" paddingBottom={5} fontSize='5xl'>
      {(gameQuery?.platform?.name || "") +
        "\t" +
        (gameQuery?.genre?.name || "") +
        "\tGames"}
    </Heading>
    //My Way
  );
};

export default GameHeading;
