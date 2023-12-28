import { HeaderPages } from '../../../components/HeaderPages';
import { Button } from '../../../components/ui/button';
import { useMembers } from './MembersContext/useMembers';
import { EditMemberModal } from './components/Modals/EditMemberModal';
import { NewMemberModal } from './components/Modals/NewMemberModal';
import { TableMembers } from './components/Table';
import { useMemberControler } from './useMemberController';

export function Members() {
  const { openNewMemberModal } = useMembers();
  const { members } = useMemberControler();

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <HeaderPages
          title="Membros"
          subtitle="Gerencie os membros de sua congregação de forma rápida e fácil."
        />
        <Button className="w-[180px]" onClick={openNewMemberModal}>
          Criar novo
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        <TableMembers data={members} />
      </div>
      <NewMemberModal />
      <EditMemberModal />
    </div>
  );
}
