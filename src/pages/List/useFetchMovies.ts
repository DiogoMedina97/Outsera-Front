import { useQuery } from "@tanstack/react-query";

import { fetchMovies } from "./services";

// --------------------------------------------------

const useFetchMovies = () => useQuery({
  queryFn: fetchMovies,
  queryKey: ["movies"],
});

// --------------------------------------------------

export default useFetchMovies;
