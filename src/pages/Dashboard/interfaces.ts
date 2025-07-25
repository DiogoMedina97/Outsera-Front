// List years with multiple winners
export interface MultipleWinnersInterface {
  readonly year: number;
  readonly winnerCount: number;
}

export interface MultipleWinnersResponse {
  readonly years: MultipleWinnersInterface[];
}

// Top 3 studios with winners
export interface TopStudiosInterface {
  readonly name: string;
  readonly winCount: number;
}

export interface TopStudiosResponse {
  readonly studios: TopStudiosInterface[];
}

// Producers with longest and shortest interval between wins
export interface MaxMinWinInterface {
  readonly producer: string;
  readonly interval: number;
  readonly previousWin: number;
  readonly followingWin: number;
}

export interface MaxMinWinResponse {
  readonly min: MaxMinWinInterface[];
  readonly max: MaxMinWinInterface[];
}

// List movie winners by year
export interface WinnersByYearInterface {
  readonly id: number;
  readonly year: number;
  readonly title: string;
  readonly studios: string[];
  readonly producers: string[];
  readonly winner: boolean;
}

export type WinnersByYearResponse = WinnersByYearInterface[];
