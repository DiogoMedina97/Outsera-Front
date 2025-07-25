import { useQuery } from "@tanstack/react-query";

import { fetchMaxMinWin } from "./services";

// --------------------------------------------------

const useFetchMaxMinWin = () => useQuery({
  queryFn: fetchMaxMinWin,
  queryKey: ["maxMinWin"],
});

// --------------------------------------------------

export default useFetchMaxMinWin;
