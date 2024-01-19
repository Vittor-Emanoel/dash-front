import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'usehooks-ts';
import { HeaderPages } from '../../../../../components/HeaderPages';
import { Button } from '../../../../../components/ui/button';
import { Input } from '../../../../../components/ui/input';
import { SelectDropdown } from '../../components/Select';

import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';
import { CustomInput } from '../../../../../components/Input';
import { useMemberControler } from '../../useMemberController';

const schema = z.object({
  fullName: z.string().nonempty('O nome é obrigatório!'),
  phone: z.string().nonempty('O telefone é obrigatório!'),
  street: z.string().nonempty('O endereço é obrigatório!'),
  houseNumber: z.string().nonempty('O número é obrigatório!'),
  postalCode: z.string().nonempty('O cep é obrigatório!'),
  churchId: z.string(),
  officeId: z.string(),
});

type FormData = z.infer<typeof schema>;

export function NewMember() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const navigate = useNavigate();

  const {
    church,
    office,
    refetch,
    isLoadingChurchs,
    isLoadingOffices,
    mutateAsync,
    isLoading,
  } = useMemberControler();

  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await mutateAsync(data);

      toast.success('Membro cadastrado com sucesso!');

      refetch();
      navigate('/members');
    } catch (error) {
      toast.error('Membro já cadastrado!');
    }
  });

  return (
    <div className="w-full flex justify-between ">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[550px] md:pr-14 items-center justify-center "
      >
        <HeaderPages
          title="Criar membro"
          subtitle="insira as informações abaixo e crie um novo membro."
          backPage={true}
        />

        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Nome completo"
            error={errors.fullName?.message}
            {...register('fullName')}
          />
          <CustomInput
            type="text"
            placeholder="Telefone"
            mask="+55 (99) 99999-9999"
            error={errors.phone?.message}
            {...register('phone')}
          />

          <Input
            type="text"
            placeholder="Endereço"
            error={errors.street?.message}
            {...register('street')}
          />

          <div className="flex gap-4">
            <CustomInput
              type="text"
              mask="99999-999"
              placeholder="Cep"
              error={errors.postalCode?.message}
              {...register('postalCode')}
            />
            <Input
              type="text"
              placeholder="Número"
              error={errors.houseNumber?.message}
              {...register('houseNumber')}
            />
          </div>

          <div className="flex gap-4 justify-between">
            <Controller
              control={control}
              name="churchId"
              render={({ field: { onChange, value } }) => {
                return (
                  <SelectDropdown
                    isLoading={isLoadingChurchs}
                    placeholder="Igreja"
                    label="Igrejas"
                    onChange={onChange}
                    value={value}
                    options={church}
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
                    isLoading={isLoadingOffices}
                    placeholder="Cargo"
                    error={'errors.churchId?.message'}
                    label="Cargos"
                    onChange={onChange}
                    value={value}
                    options={office}
                  />
                );
              }}
            />
          </div>
        </div>
        <Button
          className="w-full h-12 mt-4"
          isLoading={isLoading}
          disabled={isLoading}
        >
          Cadastrar
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
