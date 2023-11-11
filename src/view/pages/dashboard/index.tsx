import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { LogOutIcon } from 'lucide-react';

const dateNow = new Date();

function formatDateToString(data: Date) {
  return format(data, 'dd MMM, yyyy', { locale: ptBR });
}
const date = formatDateToString(dateNow);

export function Dashboard() {
  return (
    <div className=" w-full h-screen">
      <header className="flex justify-between p-6 bg-gray-300 border-b">
        <span className="text-base text-gray-700">Dashboard</span>
        <div className="flex gap-2 items-center cursor-pointer transition-colors hover:text-gray-700">
          <LogOutIcon size={20} />
          <p>Sair</p>
        </div>
      </header>
      <div className="px-12 py-12">
        <div className=" mb-4">
          <h1 className="text-2xl font-bold text-gray-800">
            Olá, Seja bem vindo !
          </h1>
          <span className="text-base text-gray-600">{date}</span>
        </div>
        <div className="grid grid-cols-3 grid-flow-col  w-full">
          <div className="bg-gray-200 flex max-w-[250px] h-[150px] transition-colors  rounded-lg hover:bg-gray-400 cursor-pointer">
            <div className="w-3 bg-green-700/60 overflow-hidden rounded-l-lg"></div>
            <div className="flex justify-center gap-3 flex-col p-4">
              <h2 className="font-bold text-xl text-gray-900">
                Total de Membros
              </h2>
              <span className="font-normal text-lg text-gray-900">50</span>
            </div>
          </div>
          <div className="bg-gray-200  flex max-w-[250px] h-[150px] transition-colors  rounded-lg hover:bg-gray-400 cursor-pointer">
            <div className="w-3 bg-blue-700/60 overflow-hidden rounded-l-lg"></div>
            <div className="flex justify-center gap-3  flex-col p-4">
              <h2 className="font-bold text-xl text-gray-900">
                Total de Obreiros
              </h2>
              <span className="font-normal text-lg text-gray-900">50</span>
            </div>
          </div>
          <div className="bg-gray-200  flex max-w-[250px] h-[150px] transition-colors  rounded-lg hover:bg-gray-400 cursor-pointer">
            <div className="w-3 bg-purple-700/60 overflow-hidden rounded-l-lg"></div>
            <div className="flex justify-center gap-3 flex-col p-4">
              <h2 className="font-bold text-xl text-gray-900">
                Total de Congregados
              </h2>
              <span className="font-normal text-lg text-gray-900">50</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
