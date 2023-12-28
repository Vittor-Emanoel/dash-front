import { Controller } from 'react-hook-form';
import { Modal } from '../../../../../../components/Modal';
import { Button } from '../../../../../../components/ui/button';
import { Input } from '../../../../../../components/ui/input';

import { TrashIcon } from 'lucide-react';
import { useMembers } from '../../../MembersContext/useMembers';
import { useMemberControler } from '../../../useMemberController';
import { ConfirmDeleteModal } from '../../ConfirmDeleteModal';
import { SelectDropdown } from '../../Select';
import { useEditMemberModalController } from './useEditMemberController';

export function EditMemberModal() {
  const { isEditMemberModalOpen, closeEditMemberModal } = useMembers();

  const {
    memberBeingEdited,
    isDeleteModalOpen,
    closeDeleteModal,
    openDeleteModal,
  } = useMembers();
  const { isLoadingChurchs, isLoadingOffices, office, church } =
    useMemberControler();

  const { register, handleSubmit, errors, control } =
    useEditMemberModalController(memberBeingEdited);

  if (isDeleteModalOpen) {
    return (
      <ConfirmDeleteModal
        isLoading={false}
        onClose={closeDeleteModal}
        onConfirm={() => {}}
        title={`Tem certeza que deseja excluir o membro "${memberBeingEdited?.fullName}" ?`}
        description="Esta ação não poderá ser desfeita, ao confirmar você limpará o registro da base de dados"
      />
    );
  }

  return (
    <Modal
      title="Editar membro"
      open={isEditMemberModalOpen}
      onClose={closeEditMemberModal}
      rightAction={
        <button onClick={openDeleteModal}>
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
            name="churchId"
            defaultValue={memberBeingEdited?.church.id}
            render={({ field: { onChange, value } }) => (
              <SelectDropdown
                placeholder="Selecione uma igreja"
                isLoading={isLoadingChurchs}
                error={errors.churchId?.message}
                onChange={onChange}
                label="Igrejas"
                value={value}
                options={church}
              />
            )}
          />

          <Controller
            control={control}
            name="officeId"
            defaultValue={memberBeingEdited?.office.id}
            render={({ field: { onChange, value } }) => (
              <SelectDropdown
                label="Cargos"
                isLoading={isLoadingOffices}
                placeholder="Selecione um cargo"
                error={errors.officeId?.message}
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
