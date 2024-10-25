import { Heading, Skeleton, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);


  if (isLoading) {
    return (
      <>
        <Skeleton height="40px" />
        <Skeleton height="20px" mt="4" />
      </>
    );
  }
  
  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </>
  );
};

export default GameDetailPage;
