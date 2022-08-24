import axios from "axios";
import { useEffect, useReducer, useRef } from "react";

interface State<T> {
  data?: T;
  error?: Error;
}
type Cache<T> = { [url: string]: T };

type Action<T> =
  | { type: "loading" }
  | { type: "fetched"; payload: T }
  | { type: "error"; payload: Error };

const useFetch = <T = unknown>(url?: string): State<T> => {
  //jika component rerender tidak akan fetching ulang
  const cache = useRef<Cache<T>>({});

  //untuk mencegah state update jika component unmounted
  const cancelRequest = useRef<boolean>(false);

  const initialState: State<T> = {
    error: undefined,
    data: undefined,
  };

  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case "loading":
        return { ...initialState };
      case "fetched":
        return { ...initialState, data: action.payload };
      case "error":
        return { ...initialState, error: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    if (!url) return;

    cancelRequest.current = false;

    const fetchData = async () => {
      dispatch({ type: "loading" });

      //jika cache url ada maka tampilkan
      if (cache.current[url]) {
        dispatch({ type: "fetched", payload: cache.current[url] });

        return;
      }

      try {
        const { data } = await axios.get<T>(url);

        //jika component unmount, stop
        if (cancelRequest.current) return;

        dispatch({ type: "fetched", payload: data });
      } catch (error) {
        if (cancelRequest.current) return;

        if (axios.isAxiosError(error)) {
          dispatch({ type: "error", payload: error });
        }
      }
    };

    void fetchData();

    return () => {
      cancelRequest.current = true;
    };
  }, [url]);

  return state;
};

export default useFetch;
