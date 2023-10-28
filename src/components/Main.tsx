import React from "react";
import GameGrid from "./GameGrid";
import { Genre } from "../interface/Genre";
import { Platform } from "../interface/Platform";
export interface GenProps {
  selectGenre: Genre | null;
  platform: Platform | null;
}
const Main = ({ selectGenre, platform }: GenProps) => {
  return <GameGrid platform={platform} selectGenre={selectGenre} />;
};

export default Main;
