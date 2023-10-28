import useData from "./useData";

export const usePlatform = () => {
    const { data, error, loadingState } = useData('platforms/lists/parents')
    return { data, error, loadingState }
}