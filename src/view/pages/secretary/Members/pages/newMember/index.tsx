import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'usehooks-ts';
import { HeaderPages } from '../../../../../components/HeaderPages';
import { Button } from '../../../../../components/ui/button';
import { Input } from '../../../../../components/ui/input';
import { SelectDropdown } from '../../components/Select';

export function NewMember() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <div className="w-full flex">
      <form className="w-full max-w-[550px] md:px-14 items-center justify-center">
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
        <div className="space-y-4">
          <Input placeholder="Nome completo" />
          <Input placeholder="Telefone" />
          <Input placeholder="Endereço" />

          <div className="flex gap-4">
            <Input placeholder="Número" />
            <Input placeholder="Cep" />
          </div>
          <div className="flex gap-4">
            <SelectDropdown
              isLoading={false}
              placeholder="Selecione uma igreja"
              error={'errors.churchId?.message'}
              onChange={() => {}}
              label="Igrejas"
              value={'value'}
              options={[]}
            />
            <SelectDropdown
              isLoading={false}
              placeholder="Selecione uma igreja"
              error={'errors.churchId?.message'}
              onChange={() => {}}
              label="Igrejas"
              value={'value'}
              options={[]}
            />
          </div>
        </div>
        <Button className="w-full h-[54px] mt-10 text-lg">Cadastrar</Button>
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
