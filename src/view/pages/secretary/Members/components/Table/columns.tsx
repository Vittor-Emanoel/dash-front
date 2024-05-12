import { IChurch } from '@app/entities/Church';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, Edit } from 'lucide-react';
import { Member } from '../../../../../../app/entities/Member';
import { IOffice } from '../../../../../../app/entities/Office';
import { Button } from '../../../../../components/ui/button';

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
  {
    accessorKey: 'church',
    header: 'Igreja',
    cell: ({ row }) => {
      const church: IChurch = row.getValue('church');

      return <p className="font-medium capitalize">{church.name}</p>;
    },
  },
  {
    accessorKey: 'edit-member',
    header: 'Editar',
    cell: ({ row }) => {
      return  (
        <button className="hover:bg-primary/10 rounded-lg p-2 cursor-pointer">
        <Edit
          size={18}
        />
      </button>
      )
    },
  },
];
