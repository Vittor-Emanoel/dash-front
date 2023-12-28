import { memo } from 'react';
import { Controller } from 'react-hook-form';
import { Modal } from '../../../../../../components/Modal';
import { Button } from '../../../../../../components/ui/button';
import { Input } from '../../../../../../components/ui/input';
import { useMembers } from '../../../MembersContext/useMembers';
import { useMemberControler } from '../../../useMemberController';
import { SelectDropdown } from '../../Select';
import { useNewMemberModalController } from './useNewMemberModalController';

function NewMemberModalComponent() {
  const { register, handleSubmit, errors, control } =
    useNewMemberModalController();

  const { isNewMemberModalOpen, closeNewMemberModal } = useMembers();

  const { church, office, isLoadingChurchs, isLoadingOffices } =
    useMemberControler();

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
          {church && (
            <Controller
              control={control}
              name="churchId"
              render={({ field: { onChange, value } }) => (
                <SelectDropdown
                  isLoading={isLoadingChurchs}
                  placeholder="Selecione uma igreja"
                  error={errors.churchId?.message}
                  onChange={onChange}
                  label="Igrejas"
                  value={value}
                  options={church}
                />
              )}
            />
          )}

          <Controller
            control={control}
            name="officeId"
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

export const NewMemberModal = memo(NewMemberModalComponent);
