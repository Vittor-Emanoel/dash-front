import { useAuth } from '@app/hooks/useAuth';
import { useMembers } from '@app/hooks/useMembers';
import { getFirstNameAndLastName } from '@app/utils/getFirstNameAndLastName';
import { getPeriodOfDay } from '@app/utils/getPeriodOfDay';
import {
  HeaderPageRoot,
  HeaderPageSubtitle,
  HeaderPageTitle,
} from '@components/HeaderPages';
import { cn } from '@components/lib/lib';
import { CalendarDays, Church, Layers3, Users2 } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';

export function Dashboard() {
  const { user } = useAuth();
  const periodOfDay = getPeriodOfDay();
  const { members, isFetching } = useMembers();

  const totalMembers = members.length;

  return (
    <>
      <HeaderPageRoot className="py-8">
        <HeaderPageTitle>
          {`Olá, ${getFirstNameAndLastName(user?.name!)}`}
        </HeaderPageTitle>
        <HeaderPageSubtitle>{`Seja bem vindo, ${periodOfDay}!`}</HeaderPageSubtitle>
      </HeaderPageRoot>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 py-4">
        <Card>
          <CardHeader className="flex flex-row  items-center justify-between">
            <CardTitle className="text-sm bg-primary-foreground p-2 rounded font-normal uppercase ">
              Membros
            </CardTitle>
            <Users2 size={30} className="text-zinc-300" />
          </CardHeader>
          <CardContent className="space-y-2">
            <div
              className={cn(
                'text-3xl font-bold ',
                isFetching && 'blur transitio',
              )}
            >
              {totalMembers}
            </div>
            <p className="text-zinc-500 text-sm text-muted-foreground max-md:text-sm">
              Número total de membros.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between ">
            <CardTitle className="text-sm bg-primary-foreground p-2 rounded font-normal uppercase ">
              Obreiros
            </CardTitle>
            <Layers3 size={30} className="text-zinc-300" />
          </CardHeader>
          <CardContent className="space-y-2">
            <div className={cn('text-3xl font-bold ', isFetching && '')}>
              {totalMembers}
            </div>
            <p className="text-zinc-500 text-sm text-muted-foreground max-md:text-sm">
              Número total de obreiros.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between ">
            <CardTitle className="text-sm bg-primary-foreground p-2 rounded font-normal uppercase ">
              congregados
            </CardTitle>
            <Church size={30} className="text-zinc-300" />
          </CardHeader>
          <CardContent className="space-y-2">
            <div
              className={cn(
                'text-3xl font-bold ',
                isFetching && 'blur transitio',
              )}
            >
              {totalMembers ?? 0}
            </div>
            <p className="text-zinc-500 text-sm text-muted-foreground max-md:text-sm">
              Número total de congregados.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between ">
            <CardTitle className="text-sm bg-primary-foreground p-2 rounded font-normal uppercase ">
              Próx Evento
            </CardTitle>
            <CalendarDays size={30} className="text-zinc-300" />
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-3xl font-bold">Santa Ceia</div>
            <p className="text-zinc-500 text-sm text-muted-foreground max-md:text-sm">
              Dia 24/01 ás 19:30.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
