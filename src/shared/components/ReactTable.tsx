import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  type ColumnDef,
  type PaginationState,
  type Table,
} from "@tanstack/react-table";
import { useState } from "react";
import { Table as TableBS, Pagination as PaginationBS } from "react-bootstrap";

// --------------------------------------------------

interface TableProps<T> {
  readonly columns: ColumnDef<T>[],
  readonly data: T[];
  readonly pageSize?: number;
}

const ReactTable = <T,>({
  columns, data, pageSize,
}: TableProps<T>) => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0, pageSize: pageSize || Number.MAX_SAFE_INTEGER,
  });

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),

    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,

    state: { pagination },
  });

  return (
    <>
      <TableBS className="m-0" hover responsive striped bordered>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder ? null : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}    
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(
                    cell.column.columnDef.cell,
                    cell.getContext(),
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {table.getPageCount() > 1 ? (
          <tfoot>
            <tr>
              <td colSpan={table.getVisibleFlatColumns().length}>
                <Pagination table={table} />
              </td>
            </tr>
          </tfoot>
        ) : null}
      </TableBS>
      {table.getRowModel().rows.length <= 0
        ? <div className="text-center p-1">Nenhuma linha encontrada</div>
        : null
      }
    </>
  );
};

// --------------------------------------------------

interface PaginationProps<T> {
  readonly table: Table<T>;
}

const Pagination = <T,>({ table }: PaginationProps<T>) => {
  const current = table.getState().pagination.pageIndex + 1;
  const count = table.getPageCount();

  if (count <= 1) return null;

  const prev = Array.from({ length: 2 })
    .map((_, index) => current - index - 1)
    .filter((v) => v >= 1)
    .reverse();

  const next = Array.from({ length: 2 })
    .map((_, index) => current + index + 1)
    .filter((v) => v <= count);

  return (
    <div className="d-flex justify-content-center">
      <PaginationBS className="m-0">
        <PaginationBS.First
          onClick={() => table.firstPage()}
          disabled={!table.getCanPreviousPage()}
        />
        <PaginationBS.Prev
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        />

        {prev.map((page) => (
          <PaginationBS.Item
            key={page}
            onClick={() => table.setPageIndex(page - 1)}
          >
            {page}
          </PaginationBS.Item>
        ))}

        <PaginationBS.Item active>{current}</PaginationBS.Item>

        {next.map((page) => (
          <PaginationBS.Item
            key={page}
            onClick={() => table.setPageIndex(page - 1)}
          >
            {page}
          </PaginationBS.Item>
        ))}

        <PaginationBS.Next
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        />
        <PaginationBS.Last
          onClick={() => table.lastPage()}
          disabled={!table.getCanNextPage()}
        />
      </PaginationBS>
    </div>
  );
};

// --------------------------------------------------

export default ReactTable;
