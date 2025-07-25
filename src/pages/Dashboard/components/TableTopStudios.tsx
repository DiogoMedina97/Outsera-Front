import { Alert } from "react-bootstrap";

import { Loading, ReactTable } from "@shared/components";

import useFetchTopStudios from "../useFetchTopStudios";

// --------------------------------------------------

const TableTopStudios = () => {
  const { data, isLoading, error } = useFetchTopStudios();

  if (isLoading) return <Loading />;
  if (error) return <Alert variant="danger" className="m-0">{error.message}</Alert>;

  return (
    <ReactTable
      columns={[
        { header: "Name", accessorKey: "name" },
        { header: "Win count", accessorKey: "winCount" },
      ]}
      data={data || []}
    />
  );
};

// --------------------------------------------------

export default TableTopStudios;
