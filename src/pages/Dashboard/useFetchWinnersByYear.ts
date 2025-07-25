import { useQuery } from "@tanstack/react-query";

import { fetchWinnersByYear } from "./services";
import { useState } from "react";

// --------------------------------------------------

const useFetchWinnersByYear = () => {
  const [year, setYear] = useState<number | null>(null);

  const fetch = async (year: number) => {
    setYear(year);
  };

  return {
    ...useQuery({
      queryFn: () => year ? fetchWinnersByYear(year) : [],
      queryKey: ["winnersByYear", year],
      enabled: !!year,
    }),
    fetch,
  };
};

// --------------------------------------------------

export default useFetchWinnersByYear;
