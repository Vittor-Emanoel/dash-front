import { Separator } from '@radix-ui/react-dropdown-menu';

export function Calls() {
  return (
    <div className="w-full ">
      <div className="flex px-8 py-10 justify-between items-center ">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold tracking-tight">Chamadas</h2>
          <p className="text-zinc-500">Liste e crie novas chamadas.</p>
        </div>
      </div>
      <Separator />

      <div className="container mt-10 flex flex-col gap-4">
        <p className="text-zinc-500">aqui ficará as chamadas....</p>
      </div>
    </div>
  );
}
