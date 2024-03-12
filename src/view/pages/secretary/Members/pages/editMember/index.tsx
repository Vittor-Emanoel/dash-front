import { useChurchs } from '@app/hooks/useChurchs';
import { useOffices } from '@app/hooks/useOffices';
import { Controller } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'usehooks-ts';

import {
  HeaderPageRoot,
  HeaderPageSubtitle,
  HeaderPageTitle,
} from '@components/HeaderPages';
import BreadCrumb from '@components/breadcrumb';
import { Trash } from 'lucide-react';
import { InputMask } from '../../../../../components/InputMask';
import { Button } from '../../../../../components/ui/button';
import { Input } from '../../../../../components/ui/input';
import { DeleteMemberAlertModal } from '../../components/DeleteMemberAlert';
import { SelectDropdown } from '../../components/Select';
import { EditMemberSkeleton } from '../../components/editMemberFormSkeleton';
import { useEditMemberController } from './useEditMemberController';

export function EditMember() {
  const { id } = useParams();

  const isMobile = useMediaQuery('(max-width: 768px)');
  const {
    register,
    member,
    control,
    errors,
    isLoading,
    isLoadingMember,
    isDeleteModalOpen,
    isLoadingDelete,
    handleDeleteMember,
    handleSubmit,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
  } = useEditMemberController({ memberId: id! });

  const { church, isLoading: loadingChurchs } = useChurchs();
  const { office, isLoading: loadingOffices } = useOffices();

  return (
    <div className="w-full flex justify-between">
      <DeleteMemberAlertModal
        title="Excluir membro"
        isLoading={isLoadingDelete}
        onOpen={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={handleDeleteMember}
        description={`Tem certeza que deseja excluir o membro "${member?.fullName}"`}
      />
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[550px] md:pr-14 items-center justify-center  "
      >
        <HeaderPageRoot className="py-6">
          <BreadCrumb
            items={[
              {
                title: 'Secretaria',
                link: '/secretary',
              },
              {
                title: 'Editar membro',
                link: '/edit-member',
              },
            ]}
          />
          <HeaderPageTitle className="flex justify-between ">
            Editar Membro
            <Button
              type="button"
              className="cursor-pointer rounded p-2  hover:bg-muted-foreground/10 hover:text-red-700 transition-colors"
              variant="link"
              onClick={handleOpenDeleteModal}
            >
              <Trash size={24} />
            </Button>
          </HeaderPageTitle>
          <HeaderPageSubtitle className="mt-2">
            Insira as informações abaixo e edite as informações do membro.
          </HeaderPageSubtitle>
        </HeaderPageRoot>

        <div className="space-y-4 ">
          {!isLoadingMember && (
            <>
              <Input
                type="text"
                placeholder="Nome completo"
                error={errors.fullName?.message}
                {...register('fullName')}
              />

              <Controller
                control={control}
                name="phone"
                render={({ field: { value } }) => {
                  return (
                    <InputMask
                      type="text"
                      value={value}
                      placeholder="Telefone"
                      mask="+55 (99) 99999-9999"
                      error={errors.phone?.message}
                      {...register('phone')}
                    />
                  );
                }}
              />

              <Input
                type="text"
                placeholder="Endereço"
                error={errors.street?.message}
                {...register('street')}
              />

              <div className="grid grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Número"
                  error={errors.houseNumber?.message}
                  {...register('houseNumber')}
                />

                <Controller
                  control={control}
                  name="postalCode"
                  render={({ field: { value } }) => {
                    return (
                      <InputMask
                        type="text"
                        value={value}
                        mask="99999-999"
                        placeholder="Cep"
                        error={errors.postalCode?.message}
                        {...register('postalCode')}
                      />
                    );
                  }}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Controller
                  control={control}
                  name="churchId"
                  render={({ field: { onChange, value } }) => {
                    return (
                      <SelectDropdown
                        isLoading={loadingChurchs}
                        placeholder={member?.church?.name ?? 'Igreja'}
                        label="Igrejas"
                        onChange={onChange}
                        value={member?.church?.id ?? value}
                        options={church}
                        error={errors.churchId?.message}
                      />
                    );
                  }}
                />

                <Controller
                  control={control}
                  name="officeId"
                  render={({ field: { onChange, value } }) => {
                    return (
                      <SelectDropdown
                        isLoading={loadingOffices}
                        placeholder={member?.office?.name ?? 'Cargo'}
                        error={errors.officeId?.message}
                        label="Cargos"
                        onChange={onChange}
                        value={member?.office?.id ?? value}
                        options={office}
                      />
                    );
                  }}
                />
              </div>
            </>
          )}
          {isLoadingMember && <EditMemberSkeleton />}
        </div>

        <Button
          type="submit"
          className="w-full h-12 mt-4"
          isLoading={isLoading}
          disabled={isLoading}
        >
          Confirmar
        </Button>
      </form>

      {!isMobile && (
        <div className="py-12 w-full  max-md:none ">
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-lg font-normal text-zinc-100 tracking-tight max-md:text-xl max-md:font-bold">
                "Ora, vocês são o corpo de Cristo, e cada um de vocês,
                individualmente, é membro desse corpo".
              </h2>
              <q className="text-zinc-500 text-base text-muted-foreground max-md:text-sm">
                <strong>A Biblia Sagrada </strong>- 1 Coríntios 12:27
              </q>
            </div>
            <div>
              <h2 className="text-lg font-normal tracking-tight max-md:text-xl max-md:font-bold">
                "Assim como cada um de nós tem um corpo com muitos membros e
                esses membros não exercem todos a mesma função, assim também em
                Cristo nós, que somos muitos, formamos um corpo, e cada membro
                está ligado a todos os outros.".
              </h2>
              <q className="text-zinc-500 text-base text-muted-foreground max-md:text-sm">
                <strong>A Biblia Sagrada </strong>- Romanos 12:4-5
              </q>
            </div>
            <div>
              <h2 className="text-lg font-normal tracking-tight max-md:text-xl max-md:font-bold">
                "Que a paz de Cristo seja o juiz em seu coração, visto que vocês
                foram chamados para viver em paz, como membros de um só corpo. E
                sejam agradecidos.".
              </h2>
              <q className="text-zinc-500 text-base text-muted-foreground max-md:text-sm">
                <strong>A Biblia Sagrada </strong>- Colossenses 3:15
              </q>
            </div>
            <div>
              <h2 className="text-lg font-normal tracking-tight max-md:text-xl max-md:font-bold">
                "Dele todo o corpo, ajustado e unido pelo auxílio de todas as
                juntas, cresce e edifica-se a si mesmo em amor, na medida em que
                cada parte realiza a sua função.".
              </h2>
              <q className="text-zinc-500 text-base text-muted-foreground max-md:text-sm">
                <strong>A Biblia Sagrada </strong>- Efésios 4:16
              </q>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
