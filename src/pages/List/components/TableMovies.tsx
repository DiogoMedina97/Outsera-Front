import { ReactTable } from "@shared/components";

// --------------------------------------------------

const TableMovies = () => (
  <ReactTable
    columns={[
      { header: "ID", accessorKey: "id" },
      { header: "Year", accessorKey: "year" },
      { header: "Title", accessorKey: "title" },
      { header: "Winner?", accessorKey: "winner" },
    ]}
    data={[]}
  />
);

// --------------------------------------------------

export default TableMovies;
