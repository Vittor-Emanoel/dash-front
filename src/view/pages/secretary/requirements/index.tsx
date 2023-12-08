import { Separator } from '@radix-ui/react-dropdown-menu';
import { Download } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Card, CardContent, CardHeader } from '../../../components/ui/card';

export function Requirements() {
  return (
    <div className="w-full ">
      <div className="flex px-8 py-10 justify-between items-center ">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold tracking-tight">Requerimentos</h2>
          <p className="text-zinc-500">
            Faça o download dos arquivos base para criação de cartas e etc
          </p>
        </div>
      </div>
      <Separator />

      <div className="w-full overflow-x-auto px-7">
        <div className="flex gap-4 flex-nowrap overflow-x-auto py-4 ">
          <Card className="flex-shrink-0 w-full p-2">
            <CardHeader className="mb-2 py-4 ">
              <h2 className="text-2xl font-semibold">Cartas</h2>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-500">
                Faça o download dos arquivos base para criação de cartas e etc
              </p>
              <Button variant="default" className="mt-6 w-full">
                <div className="flex items-center gap-2 ">
                  <p className="text-base">Fazer download</p>
                  <Download size={19} />
                </div>
              </Button>
            </CardContent>
          </Card>
          <Card className="flex-shrink-0 w-full p-2">
            <CardHeader className="mb-2 py-4 ">
              <h2 className="text-2xl font-semibold">Cartas</h2>
            </CardHeader>
            <CardContent>
              <p className="text-zinc-500">
                Faça o download dos arquivos base para criação de cartas e etc
              </p>
              <Button variant="default" className="mt-6 w-full">
                <div className="flex items-center gap-2 ">
                  <p className="text-base">Fazer download</p>
                  <Download size={19} />
                </div>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
