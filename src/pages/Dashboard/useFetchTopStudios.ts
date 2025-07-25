import { useQuery } from "@tanstack/react-query";

import { fetchTopStudios } from "./services";

// --------------------------------------------------

const useFetchTopStudios = () => useQuery({
  queryFn: fetchTopStudios,
  queryKey: ["topStudios"],
});

// --------------------------------------------------

export default useFetchTopStudios;
