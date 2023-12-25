import { HeaderPages } from '../../../components/HeaderPages';
import { Button } from '../../../components/ui/button';
import { NewMemberModal } from './components/modals/NewMemberModal';
import { TableMembers } from './components/table';
import { useMembers } from './context/useMembers';

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
        <TableMembers
          data={[
            {
              id: '323231',
              fullName: 'Vittor Emanoel Ramos Silva',
              phone: '32321321321',
              office: {
                id: '3213213123',
                name: 'Cooperador',
              },
              address: 'Rua Eduardo fellone',
              houseNumber: '55A',
              church: {
                id: '123213213',
                name: 'Sede',
              },
              cep: '98989898',
            },
            {
              id: '323231',
              fullName: 'Zézin Ramos Silva',
              phone: '32321321321',
              office: {
                id: '3213213123',
                name: 'Cooperador',
              },
              address: 'Rua Eduardo fellone',
              houseNumber: '55A',
              church: {
                id: '123213213',
                name: 'Sede',
              },
              cep: '98989898',
            },
            {
              id: '323231',
              fullName: 'Beatriz Bicuda do santo lima',
              phone: '32321321321',
              office: {
                id: '3213213123',
                name: 'Cooperador',
              },
              address: 'Rua Eduardo fellone',
              houseNumber: '55A',
              church: {
                id: '123213213',
                name: 'Sede',
              },
              cep: '98989898',
            },
            {
              id: '323231',
              fullName: 'Anthony',
              phone: '32321321321',
              office: {
                id: '3213213123',
                name: 'Cooperador',
              },
              address: 'Rua Eduardo fellone',
              houseNumber: '55A',
              church: {
                id: '123213213',
                name: 'Sede',
              },
              cep: '98989898',
            },
          ]}
        />
      </div>
    </div>
  );
}
