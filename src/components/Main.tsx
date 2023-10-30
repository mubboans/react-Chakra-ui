import React from "react";
import GameGrid from "./GameGrid";
// import { Genre } from "../interface/Genre";
// import { Platform } from "../interface/Platform";
import { GameQuery } from "./Home";
export interface GenProps {
  gameQuery: GameQuery;
  // selectGenre: Genre | null;
  // platform: Platform | null;
}
const Main = ({ gameQuery }: GenProps) => {
  return <GameGrid gameQuery={gameQuery} />;
};

export default Main;
