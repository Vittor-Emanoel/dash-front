import { HeaderPages } from '../../../components/HeaderPages';
import { Button } from '../../../components/ui/button';
import { DataTable } from '../../../components/ui/dataTable';
import { useMembers } from './MembersContext/useMembers';
import { NewMemberModal } from './components/modals/NewMemberModal';

export function Members() {
  const { openNewMemberModal } = useMembers();

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <HeaderPages
          title="Membros"
          subtitle="Gerencie os membros de sua congregação de forma rápida e fácil."
        />
        <Button className="w-[180px]" onClick={() => openNewMemberModal()}>
          Criar novo
        </Button>
      </div>

      <NewMemberModal />

      <div className="flex flex-col gap-4">
        <DataTable />
      </div>
    </div>
  );
}
