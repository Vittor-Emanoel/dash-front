import { Input } from './input';

export function Search() {
  return (
    <div>
      <Input
        type="search"
        placeholder="Buscar na plataforma..."
        className="md:w-[250px] lg:w-[300px]"
      />
    </div>
  );
}
