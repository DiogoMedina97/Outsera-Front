import type { AxiosResponse } from "axios";

import api from "@shared/api";

import type { MoviesResponse, MovieInterface } from "./interfaces";

// --------------------------------------------------

export const fetchMovies = async () => {
  const data: MovieInterface[] = [];
  const size = 15;

  const { data: firstData } = await api.get<MoviesResponse>("", {
    params: { page: 0, size },
  });

  data.push(...firstData.content);

  const { totalPages } = firstData;

  const promises: Promise<AxiosResponse<MoviesResponse>>[] = [];
  for (let page = 1; page < totalPages; page++) {
    promises.push(api.get<MoviesResponse>("", {
      params: { page, size },
    }));
  }

  const promisesResolve = await Promise.all(promises);
  for (const result of promisesResolve) {
    data.push(...result.data.content);
  }

  return data.sort((a, b) => a.id - b.id);
};
