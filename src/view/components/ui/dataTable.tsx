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
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './table';

import { ArrowUpDown } from 'lucide-react';
import { useState } from 'react';
import { Button } from './button';

import { Member } from '../../../app/entities/Member';
import { IOffice } from '../../../app/entities/Office';
import { Input } from './input';

const data: Member[] = [
  {
    id: 'm5gr84i9',
    fullName: 'Vittor Emanoel Ramos',
    phone: '(11)99999-9999',
    address: 'Rua asidkjadkjasdk',
    cep: '09898909i',
    houseNumber: '323',
    church: {
      id: 'dkawdnkawndnawkd',
      name: 'Sede',
    },
    office: {
      id: 'adnmadnwjdnawjdnaw',
      name: 'Cooperador',
    },
  },
  {
    id: 'm5gr84i9',
    fullName: 'Vittor Emanoel Ramos',
    phone: '(11)99999-9999',
    address: 'Rua asidkjadkjasdk',
    cep: '09898909i',
    houseNumber: '323',
    church: {
      id: 'dkawdnkawndnawkd',
      name: 'Sede',
    },
    office: {
      id: 'adnmadnwjdnawjdnaw',
      name: 'Cooperador',
    },
  },
  {
    id: 'm5gr84i9',
    fullName: 'Vittor Emanoel Ramos',
    phone: '(11)99999-9999',
    address: 'Rua asidkjadkjasdk',
    cep: '09898909i',
    houseNumber: '323',
    church: {
      id: 'dkawdnkawndnawkd',
      name: 'Sede',
    },
    office: {
      id: 'adnmadnwjdnawjdnaw',
      name: 'Cooperador',
    },
  },
  {
    id: 'm5gr84i9',
    fullName: 'Vittor Emanoel Ramos',
    phone: '(11)99999-9999',
    address: 'Rua asidkjadkjasdk',
    cep: '09898909i',
    houseNumber: '323',
    church: {
      id: 'dkawdnkawndnawkd',
      name: 'Sede',
    },
    office: {
      id: 'adnmadnwjdnawjdnaw',
      name: 'Cooperador',
    },
  },
];

export const columns: ColumnDef<Member>[] = [
  {
    accessorKey: 'fullName',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Nome completo
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="pl-4 capitalize">{row.getValue('fullName')}</div>
    ),
  },
  {
    accessorKey: 'phone',
    header: 'Telefone',
    cell: ({ row }) => <div>{row.getValue('phone')}</div>,
  },
  {
    accessorKey: 'office',
    header: 'Cargo',
    cell: ({ row }) => {
      const office: IOffice = row.getValue('office');

      return <p className="font-medium capitalize">{office.name}</p>;
    },
  },
];

export function DataTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

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
    <div className="w-full ">
      <div className="flex items-center py-4">
        <Input
          placeholder="Buscar por nome..."
          value={
            (table.getColumn('fullName')?.getFilterValue() as string) ?? ''
          }
          onChange={(event) =>
            table.getColumn('fullName')?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  onClick={() => console.log('oi')}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
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
                  Membro não existe!
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Voltar
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Próxima
          </Button>
        </div>
      </div>
    </div>
  );
}
