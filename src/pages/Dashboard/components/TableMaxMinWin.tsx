import { ReactTable } from "@shared/components";

// --------------------------------------------------

const TableMaxMinWin = () => (
  <>
    <h6 className="fw-normal">Maximum</h6>
    <ReactTable
      columns={[
        { header: "Producer", accessorKey: "producer" },
        { header: "Interval", accessorKey: "interval" },
        { header: "Previous Year", accessorKey: "previousWin" },
        { header: "Following Year", accessorKey: "followingWin" },
      ]}
      data={[]}
    />

    <hr className="border-0 my-2" />

    <h6 className="fw-normal">Minimum</h6>
    <ReactTable
      columns={[
        { header: "Producer", accessorKey: "producer" },
        { header: "Interval", accessorKey: "interval" },
        { header: "Previous Year", accessorKey: "previousWin" },
        { header: "Following Year", accessorKey: "followingWin" },
      ]}
      data={[]}
    />
  </>
);

// --------------------------------------------------

export default TableMaxMinWin;
