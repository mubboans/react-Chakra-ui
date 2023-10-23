import useData from "./useData";

export const useGenre = () => {
    const { data, error, loadingState } = useData('genres')
    return { data, error, loadingState }
}