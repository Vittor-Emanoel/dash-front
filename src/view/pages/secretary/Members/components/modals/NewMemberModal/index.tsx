import { Controller } from 'react-hook-form';
import { Modal } from '../../../../../../components/Modal';
import { Button } from '../../../../../../components/ui/button';
import { Input } from '../../../../../../components/ui/input';

import { SelectDropdown } from '../../Select';
import { useNewMemberModalController } from './useNewMemberModalController';

export function NewMemberModal() {
  const {
    register,
    handleSubmit,
    errors,
    closeNewMemberModal,
    control,
    isNewMemberModalOpen,
  } = useNewMemberModalController();

  return (
    <Modal
      title="Novo membro"
      open={isNewMemberModalOpen}
      onClose={closeNewMemberModal}
    >
      <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
        <p>Informações Gerais</p>
        <div className="flex w-full justify-between items-center gap-1">
          <Input
            type="text"
            placeholder="Nome Completo *"
            error={errors.fullName?.message}
            {...register('fullName')}
          />
          <Input
            type="text"
            placeholder="Telefone *"
            error={errors.phone?.message}
            {...register('phone')}
          />
        </div>

        <div className="flex gap-1 ">
          <Input
            placeholder="Endereço"
            error={errors.address?.message}
            {...register('address')}
          />
          <Input
            type="text"
            placeholder="N*"
            error={errors.houseNumber?.message}
            {...register('houseNumber')}
          />
          <Input
            type="text"
            placeholder="CEP *"
            error={errors.cep?.message}
            {...register('cep')}
          />
        </div>

        <p>Informações Ministerias</p>

        <div className="flex gap-4 w-full justify-between">
          <Controller
            control={control}
            name="churchId"
            render={({ field: { onChange, value } }) => (
              <SelectDropdown
                placeholder="Selecione uma igreja"
                error={errors.churchId?.message}
                onChange={onChange}
                label="Igrejas"
                value={value}
                options={[
                  {
                    id: '1',
                    name: 'Sede',
                  },
                  {
                    id: '2',
                    name: 'Vaz de Lima',
                  },
                  {
                    id: '3',
                    name: 'JD Lilah',
                  },
                ]}
              />
            )}
          />

          <Controller
            control={control}
            name="officeId"
            render={({ field: { onChange, value } }) => (
              <SelectDropdown
                label="Cargos"
                placeholder="Selecione um cargo"
                error={errors.officeId?.message}
                onChange={onChange}
                value={value}
                options={[
                  {
                    id: '1',
                    name: 'Cooperador',
                  },
                ]}
              />
            )}
          />
        </div>

        <Button className="w-full">Salvar</Button>
      </form>
    </Modal>
  );
}
