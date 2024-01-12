import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'usehooks-ts';
import { HeaderPages } from '../../../../../components/HeaderPages';
import { Button } from '../../../../../components/ui/button';
import { Input } from '../../../../../components/ui/input';
import { SelectDropdown } from '../../components/Select';

import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';
import { useMemberControler } from '../../useMemberController';

const schema = z.object({
  fullName: z.string().nonempty('O nome é obrigatório!'),
  phone: z.string().nonempty('O telefone é obrigatório!'),
  street: z.string().optional(),
  houseNumber: z.string().nonempty('O número é obrigatório!'),
  postalCode: z.string().nonempty('O cep é obrigatório!'),
  churchId: z.string(),
  officeId: z.string(),
  shepherd_id: z.string(),
});

type FormData = z.infer<typeof schema>;

export function NewMember() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const navigate = useNavigate();

  const { church, office, shepherd, refetch, isLoadingShepherds, mutateAsync } =
    useMemberControler();

  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    control,
    reset,
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
      console.log(error);

      toast.error('Credenciais inválidas!');
    }
  });

  return (
    <div className="w-full flex">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[550px] md:px-14 items-center justify-center"
      >
        <div className="flex items-center gap-4 justify-center">
          <Link
            to="/members"
            className="hover:bg-muted transition-colors p-2 rounded"
          >
            <ArrowLeft />
          </Link>
          <HeaderPages
            title="Criar membro"
            subtitle="preencha as informações abaixo e crie o um novo membro"
          />
        </div>
        <div className=" space-y-4">
          <Input
            type="text"
            placeholder="Nome completo"
            error={errors.fullName?.message}
            {...register('fullName')}
          />
          <Input
            type="text"
            placeholder="Telefone"
            error={errors.phone?.message}
            {...register('phone')}
          />
          <Input type="text" placeholder="Endereço" {...register('street')} />

          <div className="flex gap-4">
            <Input
              type="text"
              placeholder="Número"
              error={errors.houseNumber?.message}
              {...register('houseNumber')}
            />
            <Input
              type="text"
              placeholder="Cep"
              error={errors.postalCode?.message}
              {...register('postalCode')}
            />
          </div>
          <div className="flex gap-4 justify-between">
            <Controller
              control={control}
              name="churchId"
              render={({ field: { onChange, value } }) => {
                return (
                  <SelectDropdown
                    isLoading={false}
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
                    isLoading={false}
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

            <Controller
              control={control}
              name="shepherd_id"
              render={({ field: { onChange, value } }) => {
                return (
                  <SelectDropdown
                    isLoading={isLoadingShepherds}
                    placeholder="Pastor"
                    label="Pastores"
                    onChange={onChange}
                    value={value}
                    options={shepherd.user}
                  />
                );
              }}
            />
          </div>
        </div>
        <Button className="w-full h-12 mt-4 font-medium">Cadastrar</Button>
      </form>

      {!isMobile && (
        <div className="py-8 w-[580px] max-md:none">
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-normal tracking-tight max-md:text-xl max-md:font-bold">
                "Ora, vocês são o corpo de Cristo, e cada um de vocês,
                individualmente, é membro desse corpo".
              </h2>
              <q className="text-zinc-500 text-base text-muted-foreground max-md:text-sm">
                <strong>A Biblia Sagrada </strong>- 1 Coríntios 12:27
              </q>
            </div>
            <div>
              <h2 className="text-2xl font-normal tracking-tight max-md:text-xl max-md:font-bold">
                "Assim como cada um de nós tem um corpo com muitos membros e
                esses membros não exercem todos a mesma função, assim também em
                Cristo nós, que somos muitos, formamos um corpo, e cada membro
                está ligado a todos os outros.".
              </h2>
              <q className="text-zinc-500 text-base text-muted-foreground max-md:text-sm">
                <strong>A Biblia Sagrada </strong>- Romanos 12:4-5
              </q>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
