import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  type Column,
  type ColumnDef,
  type PaginationState,
  type Table,
} from "@tanstack/react-table";
import { useState } from "react";
import { Table as TableBS, Pagination as PaginationBS, FormSelect, FormControl } from "react-bootstrap";

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

    getFilteredRowModel: getFilteredRowModel(),

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
                <th key={header.id} colSpan={header.colSpan} className="text-center align-middle">
                  {header.isPlaceholder ? null : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                  {header.column.getCanFilter() ? <Filter column={header.column} /> : null}
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
        ? <div className="text-center p-1">No rows found</div>
        : null
      }
    </>
  );
};

// --------------------------------------------------

interface FilterProps<T> {
  readonly column: Column<T, unknown>;
}

const Filter = <T,>({ column }: FilterProps<T>) => {
  const columnFilterValue = column.getFilterValue();
  const { filterVariant } = column.columnDef.meta ?? {};

  if (filterVariant === "number") {
    return (
      <FormControl
        type="number"
        onChange={(e) => column.setFilterValue(e.target.value)}
        value={columnFilterValue?.toString()}
        placeholder={`Filter by ${column.columnDef.header?.toString().toLocaleLowerCase()}`}
      />
    );
  }

  if (filterVariant === "select") {
    const options = Array.from(
      new Set(column.getFacetedRowModel().rows.map((row) => row.getValue(column.id)))
    ).filter((v) => v !== null);

    return (
      <FormSelect
        onChange={(e) => column.setFilterValue(e.target.value)}
        value={columnFilterValue?.toString()}
      >
        <option value="">All</option>
        {options.map((option, index) => {
          const value = option?.toString();

          return <option key={index} value={value}>{value}</option>
        })}
      </FormSelect>
    );
  };

  return null;
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
