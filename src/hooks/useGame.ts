import React, { useEffect, useState } from 'react'

import { CanceledError } from 'axios';
import helper from '../config/helper';

const useGame = () => {
    const [games, setGame] = useState<Games[]>([]);
    const [error, setError] = useState();
    useEffect(() => {
        const controller = new AbortController()
        helper
            .get("games", { signal: controller.signal })
            .then((x) => {
                console.log(x, "response check");
                setGame(x.data.results);
                console.log(games, error, "check api response");
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
            });
        return () => controller.abort();
    }, []);
    return { games, error }
}

export default useGame