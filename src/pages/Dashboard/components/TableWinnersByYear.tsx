import { Loading, ReactTable } from "@shared/components";
import { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import useFetchWinnersByYear from "../useFetchWinnersByYear";

// --------------------------------------------------

const TableWinnersByYear = () => {
  const { data, isLoading, fetch } = useFetchWinnersByYear();
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
      {isLoading ? <Loading /> : (
        <ReactTable
          columns={[
            { header: "ID", accessorKey: "id" },
            { header: "Year", accessorKey: "year" },
            { header: "Title", accessorKey: "title" },
          ]}
          data={data || []}
        />
      )}
    </>
  );
};

// --------------------------------------------------

export default TableWinnersByYear;
