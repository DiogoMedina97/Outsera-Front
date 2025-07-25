import { ReactTable } from "@shared/components";
import { Button, Form, FormControl } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

// --------------------------------------------------

const TableWinnersByYear = () => (
  <>
    <Form
      method="GET"
      className="mb-3 d-flex flex-nowrap flex-row"
    >
      <FormControl
        type="number"
        name="search"
        placeholder="Search by year"
        required
        className="me-1"
      />
      <Button type="submit">
        <FaSearch />
      </Button>
    </Form>
    <ReactTable
      columns={[
        { header: "ID", accessorKey: "id" },
        { header: "Year", accessorKey: "year" },
        { header: "Title", accessorKey: "title" },
      ]}
      data={[]}
    />
  </>
);

// --------------------------------------------------

export default TableWinnersByYear;
