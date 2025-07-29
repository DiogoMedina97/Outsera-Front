import api from "@shared/api";

import type { MoviesResponse } from "./interfaces";

// --------------------------------------------------

export interface FetchMoviesProps {
  readonly page: number;
  readonly winner?: boolean;
  readonly year?: number;
}

export const fetchMovies = async ({
  page, winner, year,
}: FetchMoviesProps) => {
  const { data } = await api.get<MoviesResponse>("", {
    params: { page, size: 15, winner, year },
  });

  return data;
};
