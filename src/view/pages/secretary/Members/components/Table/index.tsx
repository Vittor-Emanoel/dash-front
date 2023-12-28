import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../../../../components/ui/table';

import { Ban } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Member } from '../../../../../../app/entities/Member';
import { Spinner } from '../../../../../components/Spinner';
import { Input } from '../../../../../components/ui/input';
import { useMembers } from '../../MembersContext/useMembers';
import { useMemberControler } from '../../useMemberController';

interface ITableMembersProps {
  data: Member[];
}

export function TableMembers({ data }: ITableMembersProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const { openEditMemberModal } = useMembers();
  const { isFetching } = useMemberControler();

  const filteredMembers = useMemo(
    () =>
      data.filter((member) =>
        member.fullName.toLowerCase().startsWith(searchTerm.toLowerCase()),
      ),
    [data, searchTerm],
  );

  function handleChangeSearchTerm(e: React.FormEvent<HTMLInputElement>) {
    setSearchTerm(e.currentTarget.value);
  }

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="max-w-[350px]">
        <Input
          value={searchTerm}
          onChange={handleChangeSearchTerm}
          placeholder="Buscar por..."
        />
      </div>
      <Table className="border">
        <TableHeader className="bg-primary-foreground rounded">
          <TableRow>
            <TableHead>Nome completo</TableHead>
            <TableHead>Telefone</TableHead>
            <TableHead>Cargo</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredMembers.map((member) => (
            <TableRow
              key={member.id}
              onClick={() => openEditMemberModal(member)}
            >
              <TableCell>{member.fullName}</TableCell>
              <TableCell>{member.phone}</TableCell>
              <TableCell>{member.office.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {data.length > 0 && filteredMembers.length < 1 && (
        <div className="w-full mt-10 gap-4  flex flex-col items-center p-6">
          <Ban size={42} />
          <span className="text-muted-foreground">
            Nenhum resultado foi encontrado
          </span>
        </div>
      )}

      {isFetching && (
        <div className="mt-10 gap-4  flex flex-col items-center p-6">
          <Spinner className="w-12 h-12" />
        </div>
      )}
    </div>
  );
}
