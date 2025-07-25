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
        {
          header: "Year",
          accessorKey: "year",
          meta: { filterVariant: "number" },
          filterFn: "includesString"
        },
        { header: "Title", accessorKey: "title" },
        {
          header: "Winner?",
          accessorKey: "winner",
          accessorFn: ({ winner }) => winner ? "Yes" : "No",
          meta: { filterVariant: "select" },
        },
      ]}
      data={data || []}
      pageSize={15}
    />
  );
};

// --------------------------------------------------

export default TableMovies;
