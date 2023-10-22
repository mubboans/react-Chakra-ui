import { Genre } from "../interface/Genre";
import useData from "./useData"


const useGame = (selectedGenre: Genre | null) => {
    // const [games, setGame] = useState<Games[]>([]);
    // const [error, setError] = useState();
    // const [loadingState, setloadingState] = useState(false);
    // useEffect(() => {
    //     const controller = new AbortController()
    //     setloadingState(true);
    //     helper
    //         .get("games", { signal: controller.signal })
    //         .then((x) => {
    //             console.log(x, "response check");
    //             setGame(x.data.results);
    //             setloadingState(false);
    //             console.log(games, error, "check api response");
    //         })
    //         .catch((err) => {
    //             if (err instanceof CanceledError) return;
    //             setloadingState(false);
    //             setError(err.message);
    //         });
    //     return () => controller.abort();
    // }, []);
    // return { games, error, loadingState }
    const { data, error, loadingState } = useData('games', { params: { genres: selectedGenre?.id } }, [selectedGenre?.id]);
    return { data, error, loadingState }
}

export default useGame