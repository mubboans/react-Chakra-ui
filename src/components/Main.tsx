import React from "react";
import GameGrid from "./GameGrid";
import { Genre } from "../interface/Genre";
export interface GenProps {
  selectGenre: Genre | null;
}
const Main = ({ selectGenre }: GenProps) => {
  return <GameGrid selectGenre={selectGenre} />;
};

export default Main;
