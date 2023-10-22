import { StarIcon } from "@chakra-ui/icons";
import { List, ListItem, SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";
import { GenProps } from "./Main";
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
          {data.map((games) => (
            <GameCard key={games.id} props={games}></GameCard>
            // <ListItem>
            //   <StarIcon boxSize={6} color={"teal.600"} />
            //   {/* <ListIcon as={MdCheckCircle} color="green.500" /> */}
            //   {games.name}
            // </ListItem>
            // <ListItem>
            //   <ListIcon as={MdCheckCircle} color='green.500' />
            //   Assumenda, quia temporibus eveniet a libero incidunt suscipit
            // </ListItem>
            // <ListItem>
            //   <ListIcon as={MdCheckCircle} color='green.500' />
            //   Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            // </ListItem>

            // <ListItem>
            //   <ListIcon as={MdSettings} color='green.500' />
            //   Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            // </ListItem>
          ))}
          {/* // </List> */}
        </SimpleGrid>
      )}
    </div>
  );
};

export default GameGrid;
