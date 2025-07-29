import { useQuery } from "@tanstack/react-query";

import { fetchMovies, type FetchMoviesProps } from "./services";

// --------------------------------------------------

const useFetchMovies = (props: FetchMoviesProps) => useQuery({
  queryFn: () => fetchMovies(props),
  queryKey: ["movies", props],
});

// --------------------------------------------------

export default useFetchMovies;
