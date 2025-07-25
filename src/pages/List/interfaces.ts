export interface MovieInterface {
  readonly id: number;
  readonly year: number;
  readonly title: string;
  readonly studios: string[];
  readonly producers: string[];
  readonly winner: boolean;
}

export interface MoviesResponse {
  readonly content: MovieInterface[];

  readonly pageable: {
    readonly pageNumber: number;
    readonly pageSize: number;
    readonly sort: {
      readonly unsorted: boolean;
      readonly sorted: boolean;
      readonly empty: boolean;
    };
    readonly offset: number;
    readonly unpaged: boolean;
    readonly paged: boolean;
  };

  readonly totalPages: number;
  readonly totalElements: number;
  readonly last: boolean;
  readonly numberOfElements: number;
  readonly size: number;
  readonly number: number;

  readonly sort: {
    readonly unsorted: boolean;
    readonly sorted: boolean;
    readonly empty: boolean;
  };

  readonly first: boolean;
  readonly empty: boolean;
}
