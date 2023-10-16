import { Grid, GridItem, Show, Text } from "@chakra-ui/react";
import NavBar from "./NavBar";
import ColorSwitch from "./ColorSwitch";
import GameGrid from "./GameGrid";
import Main from "./Main";
const Home = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"header header"
            "main main"
            "footer footer"`,
          lg: `"header header"
                  "nav main"
                  "nav footer"`
        }}
        // gridTemplateRows={"50px 1fr 30px"}
        // gridTemplateColumns={"150px 1fr"}
        h="200px"
        gap="6"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem pl="2" area={"header"}>
          <NavBar></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem pl="2" bg="pink.300" area={"nav"}>
            <Text>Asiddes</Text>
          </GridItem>
        </Show>
        <GridItem pl="2" bg="green.300" area={"main"}>
          <Text>Main</Text>
          <Main />
        </GridItem>
        <GridItem pl="2" bg="blue.300" area={"footer"}>
          <Text>Footer</Text>
        </GridItem>
      </Grid>
    </>
  );
};

export default Home;
