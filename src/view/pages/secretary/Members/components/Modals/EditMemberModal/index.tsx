import { Controller } from 'react-hook-form';
import { Modal } from '../../../../../../components/Modal';
import { Button } from '../../../../../../components/ui/button';
import { Input } from '../../../../../../components/ui/input';

import { TrashIcon } from 'lucide-react';
import { useMembers } from '../../../MembersContext/useMembers';
import { useMemberControler } from '../../../useMemberController';
import { SelectDropdown } from '../../Select';
import { useEditMemberModalController } from './useEditMemberController';

export function EditMemberModal() {
  const { isEditMemberModalOpen, closeEditMemberModal } = useMembers();

  const { memberBeingEdited } = useMembers();
  const { isLoadingChurchs, isLoadingOffices, office, church } =
    useMemberControler();

  const { register, handleSubmit, errors, control } =
    useEditMemberModalController(memberBeingEdited);

  return (
    <Modal
      title="Editar membro"
      open={isEditMemberModalOpen}
      onClose={closeEditMemberModal}
      rightAction={
        <button onClick={closeEditMemberModal}>
          <TrashIcon className="w-6 h-6 text-destructive" />
        </button>
      }
    >
      <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
        <p>Informações Gerais</p>
        <div className="flex w-full justify-between items-center gap-1">
          <Input
            type="text"
            placeholder="Nome Completo *"
            defaultValue={memberBeingEdited?.fullName}
            error={errors.fullName?.message}
            {...register('fullName')}
          />
          <Input
            type="text"
            placeholder="Telefone *"
            defaultValue={memberBeingEdited?.phone}
            error={errors.phone?.message}
            {...register('phone')}
          />
        </div>

        <div className="flex gap-1 ">
          <Input
            placeholder="Endereço"
            defaultValue={memberBeingEdited?.street}
            error={errors.street?.message}
            {...register('street')}
          />
          <Input
            type="text"
            placeholder="N*"
            defaultValue={memberBeingEdited?.houseNumber}
            error={errors.houseNumber?.message}
            {...register('houseNumber')}
          />
          <Input
            type="text"
            placeholder="CEP *"
            defaultValue={memberBeingEdited?.postalCode}
            error={errors.postalCode?.message}
            {...register('postalCode')}
          />
        </div>

        <p>Informações Ministerias</p>

        <div className="flex gap-4 w-full justify-between">
          <Controller
            control={control}
            name="church"
            defaultValue={memberBeingEdited?.church.name}
            render={({ field: { onChange, value } }) => (
              <SelectDropdown
                placeholder="Selecione uma igreja"
                isLoading={isLoadingChurchs}
                error={errors.church?.message}
                onChange={onChange}
                label="Igrejas"
                value={value}
                options={church}
              />
            )}
          />

          <Controller
            control={control}
            name="office"
            defaultValue={memberBeingEdited?.office.name}
            render={({ field: { onChange, value } }) => (
              <SelectDropdown
                label="Cargos"
                isLoading={isLoadingOffices}
                placeholder="Selecione um cargo"
                error={errors.office?.message}
                onChange={onChange}
                value={value}
                options={office}
              />
            )}
          />
        </div>

        <Button className="w-full">Salvar</Button>
      </form>
    </Modal>
  );
}
