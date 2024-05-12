import {
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
} from '../../../../../components/ui/table';

import { useState } from 'react';
import { Member } from '../../../../../../app/entities/Member';
import { Button } from '../../../../../components/ui/button';
import { Input } from '../../../../../components/ui/input';

import { phoneNumberWithoutMask } from '@app/utils/phoneWithoutMask';
import { Modal } from '@components/Modal';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@components/ui/card';
import { PenLine, Phone } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { columns } from './columns';

interface ITableMembersProps {
  data: Member[];
}

export function TableMembers({ data }: ITableMembersProps) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [currentViewedMember, setCurrentViewedMember] =
    useState<Member | null>();

  const navigate = useNavigate();

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

  function handleEditMember(member: Member) {
    navigate(`/edit-member/${member.id}`);
  }

  function handleViewMember(member: Member) {
    setCurrentViewedMember(member);
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      {currentViewedMember && (
        <Modal
          open={isModalOpen}
          title="Informações do membro"
          onClose={handleCloseModal}
        >
          <Card>
            <CardHeader>
              <CardTitle>{currentViewedMember?.fullName}</CardTitle>
              <CardDescription>
                {currentViewedMember?.office?.name}
              </CardDescription>
              <CardDescription>
                Congrega na igreja {currentViewedMember?.church.name}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2 ">
                <div className="lg:flex lg:justify-between max-sm:flex-col">
                  <div className="font-medium">Endereço</div>
                  <div>
                    {currentViewedMember?.street},{' '}
                    {currentViewedMember?.houseNumber} -{' '}
                    {currentViewedMember?.postalCode}
                  </div>
                </div>

                <div className="lg:flex lg:justify-between max-sm:flex-col ">
                  <div className="font-medium">Telefone</div>
                  <div className="">{currentViewedMember?.phone}</div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between gap-4 max-sm:flex-col max-sm:gap-4">
              <Button
                className="max-w-full w-full flex gap-2"
                variant="outline"
                onClick={() => handleEditMember(currentViewedMember!)}
              >
                <PenLine size={18} />
                Editar membro
              </Button>

              <Link
                to={`https://wa.me/${phoneNumberWithoutMask(
                  currentViewedMember?.phone!,
                )}`}
                className="max-w-full w-full"
              >
                <Button className="max-w-full w-full flex gap-2">
                  <Phone size={18} />
                  Entrar em contato
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </Modal>
      )}

      <div className="w-full space-y-4">
        <Input
          placeholder="Buscar por nome..."
          value={
            (table.getColumn('fullName')?.getFilterValue() as string) ?? ''
          }
          onChange={(event) =>
            table.getColumn('fullName')?.setFilterValue(event.target.value)
          }
          className="max-w-[400px]"
        />

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
                    onClick={() => handleViewMember(row.original)}

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
                    Membro não encontrado!
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
    </>
  );
}
