import { Alert, Form, Pagination } from "react-bootstrap";

import { Loading, ReactTable } from "@shared/components";

import useFetchMovies from "../useFetchMovies";
import { useCallback, useState, type Dispatch, type SetStateAction } from "react";
import type { FetchMoviesProps } from "../services";
import type { MoviesResponse } from "../interfaces";

// --------------------------------------------------

const TableMovies = () => {
  const [moviesProps, setMoviesProps] = useState<FetchMoviesProps>({
    page: 0,
  });
  const { data, isLoading, error } = useFetchMovies(moviesProps);

  if (error) return <Alert variant="danger" className="m-0">{error.message}</Alert>;

  // Usa debounce para evitar chamadas de API desnecessárias
  let changeYearTimeout: NodeJS.Timeout | null = null;
  const onChangeYear = (value: number) => {
    // Filtra anos inválidos
    if (value && (value < 1800 || value > new Date().getFullYear())) return;

    if (changeYearTimeout) clearTimeout(changeYearTimeout);
    changeYearTimeout = setTimeout(() => {
      setMoviesProps((s) => ({ ...s, page: 0, year: value || undefined }));
    }, 500);
  };

  const onChangeWinner = (value: string) => {
    setMoviesProps((s) => ({
      ...s,
      page: 0,
      winner: value ? (value === "true") : undefined,
    }))
  };

  return (
    <>
      <ReactTable
        columns={[
          { header: "ID", accessorKey: "id" },
          {
            header: useCallback(() => (
              <>
                Year
                <Form.Control
                  name="year"
                  type="number"
                  step="1"
                  min={1800}
                  max={new Date().getFullYear()}
                  onChange={(e) => onChangeYear(Number(e.target.value))}
                />
              </>
            ), []),
            accessorKey: "year",
          },
          { header: "Title", accessorKey: "title" },
          {
            header: useCallback(() => (
              <>
                Winner?
                <Form.Select
                  name="winner"
                  onChange={(e) => onChangeWinner(e.target.value)}
                >
                  <option value="">Yes/No</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </Form.Select>
              </>
            ), []),
            accessorKey: "winner",
            accessorFn: ({ winner }) => winner ? "Yes" : "No",
          },
        ]}
        data={data?.content || []}
        pageSize={15}
      />
      {isLoading ? <Loading /> : null}
      {data ? (
        <PaginationMovies
          moviesProps={moviesProps}
          setMoviesProps={setMoviesProps}
          moviesResponse={data}
        />
      ) : null}
    </>
  );
};

// --------------------------------------------------

interface PaginationMoviesProps {
  readonly moviesProps: FetchMoviesProps;
  readonly setMoviesProps: Dispatch<SetStateAction<FetchMoviesProps>>;
  readonly moviesResponse: MoviesResponse;
}

const PaginationMovies = ({
  moviesProps, setMoviesProps, moviesResponse,
}: PaginationMoviesProps) => {
  const current = moviesProps.page;
  const totalPages = moviesResponse.totalPages - 1;

  if (totalPages <= 0) return null;

  const canGoToPrevPage = current > 0;
  const canGoToNextPage = current < totalPages;

  const prev = Array.from({ length: 2 })
    .map((_, index) => current - index - 1)
    .filter((v) => v >= 0)
    .reverse();

  const next = Array.from({ length: 2 })
    .map((_, index) => current + index + 1)
    .filter((v) => v <= totalPages);

  const goToPage = (page: number) => {
    if (!canGoToPrevPage && !canGoToNextPage) return;
    setMoviesProps((s) => ({ ...s, page }));
  };

  return (
    <div className="mt-3 d-flex justify-content-center">
      <Pagination className="m-0">
        <Pagination.First
          onClick={() => goToPage(0)}
          disabled={!canGoToPrevPage}
        />
        <Pagination.Prev
          onClick={() => goToPage(current - 1)}
          disabled={!canGoToPrevPage}
        />

        {prev.map((page) => (
          <Pagination.Item
            key={page}
            onClick={() => goToPage(page)}
          >
            {page + 1}
          </Pagination.Item>
        ))}

        <Pagination.Item active>{current + 1}</Pagination.Item>

        {next.map((page) => (
          <Pagination.Item
            key={page}
            onClick={() => goToPage(page)}
          >
            {page + 1}
          </Pagination.Item>
        ))}

        <Pagination.Next
          onClick={() => goToPage(current + 1)}
          disabled={!canGoToNextPage}
        />
        <Pagination.Last
          onClick={() => goToPage(totalPages)}
          disabled={!canGoToNextPage}
        />
      </Pagination>
    </div>
  );
};

// --------------------------------------------------

export default TableMovies;
