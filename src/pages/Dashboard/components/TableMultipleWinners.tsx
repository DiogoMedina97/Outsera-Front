import { ReactTable } from "@shared/components";

// --------------------------------------------------

const TableMultipleWinners = () => (
  <ReactTable
    columns={[
      { header: "Year", accessorKey: "year" },
      { header: "Win count", accessorKey: "winCount" },
    ]}
    data={[]}
  />
);

// --------------------------------------------------

export default TableMultipleWinners;
