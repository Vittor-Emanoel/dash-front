import { CalendarDays, Church, PhoneCall, Users2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';

export function Secretary() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="pb-4">
          <h2 className="text-2xl tracking-tight max-md:text-xl max-md:font-bold">
            Secretaria
          </h2>
          <p className="text-base text-muted-foreground max-md:text-sm">
            Aqui estão as principais informações sobre a secretaria da Igreja.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card onClick={() => navigate('/members')}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Membros</CardTitle>
              <Users2 size={20} className="text-zinc-300" />
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                Clique aqui para realizar cadastro, busca, edição e deleção de
                membros.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Chamada</CardTitle>
              <PhoneCall size={20} className="text-zinc-300" />
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                Clique aqui para criar uma nova chamada ou buscar por uma.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Requerimentos
              </CardTitle>
              <Church size={20} className="text-zinc-300" />
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                Faça o download dos arquivos modelo.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">?</CardTitle>
              <CalendarDays size={20} className="text-zinc-300" />
            </CardHeader>
            <CardContent>
              {/* <p className="text-xs text-muted-foreground">

              </p> */}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
