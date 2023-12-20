import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@radix-ui/react-select';
import { useState } from 'react';
import { HeaderPages } from '../../../components/HeaderPages';
import { Modal } from '../../../components/Modal';
import { Button } from '../../../components/ui/button';
import { DataTable } from '../../../components/ui/dataTable';
import { Input } from '../../../components/ui/input';

const CHURCH_MOCK = [
  {
    name: 'SEDE',
  },
  {
    name: 'JD VAZ DE LIMA',
  },
  {
    name: 'JD LILAH',
  },
];

const OFFICE_MOCK = [
  {
    name: 'COOPERADOR',
  },
  {
    name: 'DIACONO',
  },
  {
    name: 'PRESBITERO',
  },
];

export function Members() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedChurch, setSelectedChurch] = useState<string | undefined>(
    undefined,
  );

  return (
    <div className="w-full ">
      <div className="flex justify-between items-center">
        <HeaderPages
          title="Membros"
          subtitle="Gerencie os membros de sua congregação de forma rápida e fácil."
        />
        <Button
          className="w-[180px]"
          onClick={() => setIsModalOpen(!isModalOpen)}
        >
          Criar novo
        </Button>
      </div>

      <div className="flex flex-col gap-4">
        <Modal
          title="Novo membro"
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col gap-4">
              <p>Informações Gerais</p>
              <Input type="text" placeholder="Nome Completo *" />
              <Input type="text" placeholder="Telefone *" />
            </div>

            <div className="flex flex-col gap-4">
              <p>Endereço</p>
              <Input placeholder="Endereço" />
              <div className="flex gap-4">
                <Input type="text" placeholder="N*" />
                <Input type="text" placeholder="CEP" />
              </div>
            </div>

            <p>Informações Ministerias</p>
            <div className="flex gap-4 ">
              <Select defaultValue={selectedChurch}>
                <SelectTrigger className="w-[180px] text-left py-2 px-4 border text-muted-foreground  rounded">
                  <SelectValue placeholder="IGREJA" />
                </SelectTrigger>
                <SelectContent className="bg-background p-2 w-[180px] border rounded gap-2">
                  <SelectGroup>
                    {CHURCH_MOCK.map(({ name }) => (
                      <SelectItem
                        className="hover:bg-foreground hover:text-background cursor-pointer transition-colors p-2"
                        key={name}
                        value={name}
                      >
                        {name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button className="w-full">Salvar</Button>
        </Modal>

        <DataTable />
      </div>
    </div>
  );
}
