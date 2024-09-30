// components/DataTable.tsx
"use client"; // Make this a client component

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ChevronDown,
  CircleCheck,
  Eye,
  NotebookPen,
  Pencil,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import Link from "next/link";
import { formatRupiah } from "@/utils/currency";

type Course = {
  id: string;
  title: string;
  slug: string;
  thumbnail: string;
  price: number;
  modules: any[];
  published: boolean;
};

interface DataTableProps {
  data: Course[];
}

export default function DataTable({ data }: DataTableProps) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const columns: ColumnDef<Course>[] = [
    {
      accessorKey: "id",
      header: "No",
      cell: ({ row }) => row.index + 1,
    },
    {
      accessorKey: "thumbnail",
      header: "Image",
      cell: ({ row }) => (
        <Image
          src={row.getValue("thumbnail") ?? "/images/default.png"}
          alt={row.getValue("title")}
          width={50}
          height={50}
          className="aspect-square  rounded-md"
        />
      ),
    },
    {
      accessorKey: "title",
      header: "Title",
    },
    {
      accessorKey: "price",
      header: "Price",
      cell: ({ row }: any) => formatRupiah(row?.getValue("price")),
    },
    {
      accessorKey: "modules",
      header: "Total Modules",
      cell: ({ row }: any) => row?.getValue("modules")?.length,
    },
    {
      accessorKey: "published",
      header: "Status",
      cell: ({ row }) =>
        row.original.published ? (
          <div className="flex items-center text-green-600 gap-2">
            <CircleCheck className="w-5" />
            <small>Published</small>
          </div>
        ) : (
          <div className="flex items-center text-slate-500 gap-2">
            <NotebookPen className="w-5" />
            <small>Draft</small>
          </div>
        ),
    },
    {
      accessorKey: "aksi",
      header: "Aksi",
      cell: ({ row }) => (
        <>
          <Link
            href={"/courses"}
            className="text-sm inline-flex items-center  me-3 text-[#4955FD] gap-2 hover:underline"
          >
            <Pencil className="w-4" /> Edit
          </Link>

          <Link
            href={"/course/" + row.original.slug}
            className="text-sm inline-flex items-center  me-3 text-slate-500 gap-2 hover:underline"
          >
            <Eye className="w-4" /> View
          </Link>
        </>
      ),
    },
    // Add more columns as needed
  ];

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Search..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column: any) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column?.columnDef?.header}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredRowModel().rows.length} row(s) found.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
