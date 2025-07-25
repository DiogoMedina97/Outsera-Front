import { Loading, ReactTable } from "@shared/components";
import useFetchMovies from "../useFetchMovies";

// --------------------------------------------------

const TableMovies = () => {
  const { data, isLoading } = useFetchMovies();

  if (isLoading) return <Loading />;

  return (
    <ReactTable
      columns={[
        { header: "ID", accessorKey: "id" },
        { header: "Year", accessorKey: "year" },
        { header: "Title", accessorKey: "title" },
        {
          header: "Winner?",
          accessorKey: "winner",
          accessorFn: ({ winner }) => winner ? "Yes" : "No",
        },
      ]}
      data={data || []}
    />
  );
};

// --------------------------------------------------

export default TableMovies;
