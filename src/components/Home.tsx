import { Grid, GridItem, Show, Text } from "@chakra-ui/react";
import NavBar from "./NavBar";

import Main from "./Main";
import GenreList from "./GenreList";
import { useState } from "react";
import PlatFormSelect from "./PlatFormSelect";
import { Genre } from "../interface/Genre";
import { Platform } from "../interface/Platform";
const Home = () => {
  const [genre, setGenre] = useState<Genre | null>(null);
  const [platform, setPlatform] = useState<Platform | null>(null);
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
            <GenreList
              genre={genre}
              selectedGenre={(x) => {
                setGenre(x);
              }}
            />
          </GridItem>
        </Show>
        <GridItem pl="2" bg="green.300" area={"main"}>
          <Text>Main</Text>
          <PlatFormSelect
            platformSelected={platform}
            onSelectPlatform={(x) => {
              setPlatform(x);
            }}
          />
          <Main platform={platform} selectGenre={genre} />
        </GridItem>
        <GridItem pl="2" bg="blue.300" area={"footer"}>
          <Text>Footer</Text>
        </GridItem>
      </Grid>
    </>
  );
};

export default Home;
