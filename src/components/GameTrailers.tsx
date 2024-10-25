import useTrailers from "../hooks/useTrailers";
interface Props {
  gameId: number;
}
const GameTrailers = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);
  if (isLoading) return null;

  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <video poster={first.preview} controls src={first.data.max} />
  ) : null;
};

export default GameTrailers;
