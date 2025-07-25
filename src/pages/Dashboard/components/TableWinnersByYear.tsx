import { useState } from "react";
import { Alert, Button, Form, FormControl } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

import { Loading, ReactTable } from "@shared/components";

import useFetchWinnersByYear from "../useFetchWinnersByYear";

// --------------------------------------------------

const TableWinnersByYear = () => {
  const { data, isLoading, fetch, error } = useFetchWinnersByYear();
  const [year, setYear] = useState<number | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!year) return;

    fetch(year);
  };

  return (
    <>
      <Form
        method="GET"
        className="mb-3 d-flex flex-nowrap flex-row"
        onSubmit={onSubmit}
      >
        <FormControl
          type="number"
          name="search"
          placeholder="Search by year"
          required
          min={1900}
          max={new Date().getFullYear()}
          className="me-1"
          onChange={(e) => {
            try {
              setYear(parseInt(e.target.value));
            } catch {
              setYear(null);
            }
          }}
        />
        <Button type="submit">
          <FaSearch />
        </Button>
      </Form>
      {isLoading
        ? <Loading />
        : (error
          ? <Alert variant="danger" className="m-0">{error.message}</Alert>
          : (
            <ReactTable
              columns={[
                { header: "ID", accessorKey: "id" },
                { header: "Year", accessorKey: "year" },
                { header: "Title", accessorKey: "title" },
              ]}
              data={data || []}
            />
          )
        )
      }
    </>
  );
};

// --------------------------------------------------

export default TableWinnersByYear;
