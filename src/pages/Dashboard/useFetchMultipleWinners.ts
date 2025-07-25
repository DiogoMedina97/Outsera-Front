import { useQuery } from "@tanstack/react-query";

import { fetchMultipleWinners } from "./services";

// --------------------------------------------------

const useFetchMultipleWinners = () => useQuery({
  queryFn: fetchMultipleWinners,
  queryKey: ["multipleWinners"],
});

// --------------------------------------------------

export default useFetchMultipleWinners;
