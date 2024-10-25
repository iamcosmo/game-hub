import { Heading, Skeleton } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);


  if (isLoading) {
    return (
      <>
        <Skeleton height="60px" />
        <Skeleton height="30px" mt="4" />
        <Skeleton height="30px" mt="4" />
        <Skeleton height="30px" mt="4" />
      </>
    );
  }
  
  if (error || !game) throw error;

  return (
    <>
      <Heading size='2xl' marginBottom={4}>{game.name}</Heading>
      <ExpandableText >{game.description_raw}</ExpandableText>
    </>
  );
};

export default GameDetailPage;
