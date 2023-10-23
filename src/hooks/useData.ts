import { AxiosRequestConfig, CanceledError } from 'axios';
import { useEffect, useState } from 'react'
import helper from '../config/helper';
// import { Games } from '../interface/Games';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useData = (endpoint: string, requestAxios?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState();
    const [loadingState, setloadingState] = useState(false);
    useEffect(() => {
        const controller = new AbortController()
        setloadingState(true);
        helper
            .get(endpoint, { signal: controller.signal, ...requestAxios })
            .then((x) => {
                console.log(x, "response check");
                setData(x.data.results);
                setloadingState(false);
                console.log(data, error, "check api response");
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setloadingState(false);
                setError(err.message);
            });
        return () => controller.abort();
    }, deps ? [...deps] : []);
    return { data, error, loadingState }
}

export default useData
