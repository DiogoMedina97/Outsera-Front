import api from "@shared/api";

import type { MaxMinWinResponse, MultipleWinnersResponse, TopStudiosResponse, WinnersByYearResponse } from "./interfaces";

// --------------------------------------------------

export const fetchMultipleWinners = async () => {
  const { data } = await api.get<MultipleWinnersResponse>("yearsWithMultipleWinners");

  return data.years;
};

// --------------------------------------------------

export const fetchTopStudios = async () => {
  const { data } = await api.get<TopStudiosResponse>("studiosWithWinCount");
  const { studios } = data;

  return (
    studios
      .sort((a, b) => a.name.localeCompare(b.name))
      .sort((a, b) => b.winCount - a.winCount)
      .slice(0, 3)
  );
};

// --------------------------------------------------

export const fetchMaxMinWin = async () => {
  const { data } = await api.get<MaxMinWinResponse>("maxMinWinIntervalForProducers");

  return data;
};

// --------------------------------------------------

export const fetchWinnersByYear = async (year: number) => {
  const { data } = await api.get<WinnersByYearResponse>("winnersByYear", {
    params: { year },
  });

  return data;
};
