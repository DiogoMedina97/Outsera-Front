import { Alert } from "react-bootstrap";

import { Loading, ReactTable } from "@shared/components";

import useFetchMaxMinWin from "../useFetchMaxMinWin";

// --------------------------------------------------

const TableMaxMinWin = () => {
  const { data, isLoading, error } = useFetchMaxMinWin();

  if (isLoading) return <Loading />;
  if (error) return <Alert variant="danger" className="m-0">{error.message}</Alert>;

  return (
    <>
      <h6 className="fw-normal">Maximum</h6>
      <ReactTable
        columns={[
          { header: "Producer", accessorKey: "producer" },
          { header: "Interval", accessorKey: "interval" },
          { header: "Previous Year", accessorKey: "previousWin" },
          { header: "Following Year", accessorKey: "followingWin" },
        ]}
        data={data?.max || []}
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
        data={data?.min || []}
      />
    </>
  );
};

// --------------------------------------------------

export default TableMaxMinWin;
