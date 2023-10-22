import React from "react";
import { useGenre } from "../hooks/useGenre";
import {
  Box,
  Button,
  HStack,
  Image,
  List,
  ListItem,
  SkeletonCircle,
  // Skeleton,
  SkeletonText
  // Text
} from "@chakra-ui/react";
import { getCropImage } from "../config/helper";
// import { GenProps } from "./Main";
import { Genre } from "../interface/Genre";
export interface GeneMethod {
  selectedGenre: (genre: Genre) => void;
}
// {selectGenre}:GenProps

const GenreList = ({ selectedGenre }: GeneMethod) => {
  const { data, loadingState } = useGenre();
  return (
    <div>
      {loadingState && (
        <Box padding="6">
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        </Box>
      )}
      {data && (
        <List>
          {data.map((x: Genre) => (
            <ListItem key={x.id} padding={"5px"}>
              <HStack>
                <Image
                  boxSize={"30px"}
                  borderRadius={"20"}
                  src={getCropImage(x.image_background)}
                />
                <Button
                  fontSize={"large"}
                  variant={"link"}
                  onClick={() => {
                    selectedGenre(x);
                  }}
                >
                  {x.name}{" "}
                </Button>
              </HStack>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default GenreList;
