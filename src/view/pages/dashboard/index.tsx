import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Box } from './components/Box';

const dateNow = new Date();

function formatDateToString(data: Date) {
  return format(data, 'dd MMM, yyyy', { locale: ptBR });
}
const date = formatDateToString(dateNow);

export function Dashboard() {
  return (
    <div className="w-full">
      <div className="px-16 py-6">
        <h1 className="text-2xl font-bold text-gray-800">A Paz do Senhor !</h1>
        <span className="text-base text-gray-600">{date}</span>
      </div>
      <div className="max-md:flex max-md:items-center justify-items-center gap-4 max-md:flex-col max-md:justify-between max-md:gap-6 grid grid-cols-3 grid-flow-col  w-full">
        <Box color="bg-red-500" title="Total de membros" number="50" />
        <Box color="bg-zinc-500" title="Total de obreiros" number="50" />
        <Box color="bg-orange-500" title="Total de congregado" number="50" />
      </div>
    </div>
  );
}
