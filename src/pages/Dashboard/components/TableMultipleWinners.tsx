import { Alert } from "react-bootstrap";

import { Loading, ReactTable } from "@shared/components";

import useFetchMultipleWinners from "../useFetchMultipleWinners";

// --------------------------------------------------

const TableMultipleWinners = () => {
  const { data, isLoading, error } = useFetchMultipleWinners();

  if (isLoading) return <Loading />;
  if (error) return <Alert variant="danger" className="m-0">{error.message}</Alert>;

  return (
    <ReactTable
      columns={[
        { header: "Year", accessorKey: "year" },
        { header: "Win count", accessorKey: "winnerCount" },
      ]}
      data={data || []}
    />
  );
};

// --------------------------------------------------

export default TableMultipleWinners;
