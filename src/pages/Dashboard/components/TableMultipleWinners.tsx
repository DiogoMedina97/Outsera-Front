import { Loading, ReactTable } from "@shared/components";
import useFetchMultipleWinners from "../useFetchMultipleWinners";

// --------------------------------------------------

const TableMultipleWinners = () => {
  const { data, isLoading } = useFetchMultipleWinners();

  if (isLoading) return <Loading />;

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
