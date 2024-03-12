import {
  HeaderPageRoot,
  HeaderPageSubtitle,
  HeaderPageTitle,
} from '@components/HeaderPages';
import BreadCrumb from '@components/breadcrumb';
import { Users2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';

export function Secretary() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex-1 ">
        <HeaderPageRoot className="py-6">
          <BreadCrumb
            items={[
              {
                title: 'Secretaria',
                link: '/secretary',
              },
            ]}
          />
          <HeaderPageTitle>Secretaria</HeaderPageTitle>
          <HeaderPageSubtitle>
            Aqui estão as principais informações sobre a secretaria da Igreja.
          </HeaderPageSubtitle>
        </HeaderPageRoot>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card onClick={() => navigate('/members')}>
          <CardHeader className="flex flex-row  items-center justify-between">
            <CardTitle className="text-sm bg-primary-foreground p-2 rounded font-normal uppercase ">
              Membros
            </CardTitle>
            <Users2 size={30} className="text-zinc-300" />
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-zinc-500 text-sm text-muted-foreground max-md:text-sm">
              Clique aqui para realizar cadastro, busca, edição e deleção de
              membros.
            </p>
          </CardContent>
        </Card>
        {/* <Card>
          <CardHeader className="flex flex-row  items-center justify-between">
            <CardTitle className="text-sm bg-primary-foreground p-2 rounded font-normal uppercase ">
              Chamada
            </CardTitle>
            <PhoneCall size={30} className="text-zinc-300" />
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-zinc-500 text-sm text-muted-foreground max-md:text-sm">
              Clique aqui para criar uma nova chamada ou buscar por uma.
            </p>
          </CardContent>
        </Card>

        <Card onClick={() => navigate('/requirements')}>
          <CardHeader className="flex flex-row  items-center justify-between">
            <CardTitle className="text-sm bg-primary-foreground p-2 rounded font-normal uppercase ">
              Requerimentos
            </CardTitle>
            <HeartHandshake size={30} className="text-zinc-300" />
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-zinc-500 text-sm text-muted-foreground max-md:text-sm">
              Faça o download dos arquivos modelo.
            </p>
          </CardContent>
        </Card>

        <Card onClick={() => navigate('/requirements')}>
          <CardHeader className="flex flex-row  items-center justify-between">
            <CardTitle className="text-sm bg-primary-foreground p-2 rounded font-normal uppercase ">
              Eventos
            </CardTitle>
            <CalendarRangeIcon size={30} className="text-zinc-300" />
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-zinc-500 text-sm text-muted-foreground max-md:text-sm">
              Clique aqui para criar um Evento ou buscar por um.
            </p>
          </CardContent>
        </Card>
        <Card className="cursor-not-allowed">
          <CardHeader className="flex flex-row  items-center justify-between">
            <CardTitle className="text-sm bg-primary-foreground p-2 rounded font-normal uppercase ">
              Atas
            </CardTitle>
            <Book size={30} className="text-zinc-300" />
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-zinc-500 text-sm text-muted-foreground max-md:text-sm">
              Em desenvolvimento...
            </p>
          </CardContent>
        </Card>
        <Card className="cursor-not-allowed">
          <CardHeader className="flex flex-row  items-center justify-between">
            <CardTitle className="text-sm bg-primary-foreground p-2 rounded font-normal uppercase ">
              Comunicar os dirigentes
            </CardTitle>
            <Speech size={30} className="text-zinc-300" />
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-zinc-500 text-sm text-muted-foreground max-md:text-sm">
              Em desenvolvimento...
            </p>
          </CardContent>
        </Card> */}
      </div>
    </>
  );
}
