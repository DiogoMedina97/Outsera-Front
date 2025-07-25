import { ReactTable } from "@shared/components";

// --------------------------------------------------

const TableTopStudios = () => (
  <ReactTable
    columns={[
      { header: "Name", accessorKey: "name" },
      { header: "Win count", accessorKey: "winCount" },
    ]}
    data={[]}
  />
);

// --------------------------------------------------

export default TableTopStudios;
