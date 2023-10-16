import { StarIcon } from "@chakra-ui/icons";
import { List, ListItem, SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
const GameGrid = () => {
  const { games, error } = useGame();

  return (
    <div>
      {error && <Text>{error}</Text>}

      {games.length > 0 && !error && (
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
          padding={10}
          spacing={10}
        >
          {/* // <List spacing={3}> */}
          {games.map((games) => (
            <GameCard key={games.id} props={games}>
              {" "}
            </GameCard>
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
