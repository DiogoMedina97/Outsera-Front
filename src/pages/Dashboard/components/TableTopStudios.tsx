import { Loading, ReactTable } from "@shared/components";

import useFetchTopStudios from "../useFetchTopStudios";

// --------------------------------------------------

const TableTopStudios = () => {
  const { data, isLoading } = useFetchTopStudios();

  if (isLoading) return <Loading />;

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
