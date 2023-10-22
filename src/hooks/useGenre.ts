import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import helper from "../config/helper";

import { Genre } from "../interface/Genre";
import useData from "./useData";

export const useGenre = () => {
    const { data, error, loadingState } = useData('genres')
    return { data, error, loadingState }
}