import { Users2 } from 'lucide-react';
import { HeaderPages } from '../../../components/HeaderPages';
import { Button } from '../../../components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';

export function Requirements() {
  return (
    <div className="w-full">
      <HeaderPages
        title="Requerimentos"
        subtitle="Faça o download dos arquivos base para criação de cartas e etc"
      />

      <div className="flex py-4 ">
        <Card>
          <CardHeader className="flex flex-row  items-center justify-between">
            <CardTitle className="text-sm bg-primary-foreground p-2 rounded font-normal uppercase ">
              Carta
            </CardTitle>
            <Users2 size={30} className="text-zinc-300" />
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-zinc-500 text-sm text-muted-foreground max-md:text-sm">
              Faça download do modelo padrão de carta.
            </p>
            <Button>Fazer download</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
