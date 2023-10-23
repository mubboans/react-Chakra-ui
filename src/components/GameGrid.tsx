// import { StarIcon } from "@chakra-ui/icons";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";
import { GenProps } from "./Main";
import { Games } from "../interface/Games";
const GameGrid = ({ selectGenre }: GenProps) => {
  const cardSke = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const { data, error, loadingState } = useGame(selectGenre);

  return (
    <div>
      {error && <Text>{error}</Text>}

      {loadingState && (
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
          padding={10}
          spacing={10}
        >
          {cardSke.map((x) => (
            <CardSkeleton key={x} />
          ))}
        </SimpleGrid>
      )}
      {data.length > 0 && !error && (
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
          padding={10}
          spacing={10}
        >
          {/* // <List spacing={3}> */}
          {data.map((games: Games) => (
            <GameCard key={games.id} props={games}></GameCard>
          ))}
        </SimpleGrid>
      )}
    </div>
  );
};

export default GameGrid;
