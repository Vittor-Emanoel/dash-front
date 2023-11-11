import { useAuth } from '../../../../app/hooks/useAuth';
import { Input } from '../../../components/Input';

import Avatar from './Avatar';

export function Header() {
  const { signout } = useAuth();

  return (
    <header className="flex items-center justify-between h-[60px] px-6 border-b ">
      <h1 className="font-bold text-xl">ADMSA</h1>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Início</NavigationMenuTrigger>
            <NavigationMenuContent className="grid w-[400px] gap-3 p-4 md:w-[500px]  lg:w-[300px]">
              <NavigationMenuLink className="w-full">
                <ul className="w-full p-4 text-secondary-foreground ">
                  <li className="py-2 px-2 rounded hover:bg-foreground hover:text-secondary transition-colors">
                    Como surgiu esse projeto?
                  </li>
                  <li className="py-2 px-2 rounded hover:bg-foreground hover:text-secondary transition-colors">
                    Quem é o desenvolvedor?
                  </li>
                  <li className="py-2 px-2 rounded hover:bg-foreground hover:text-secondary transition-colors">
                    Novas atualizações
                  </li>
                </ul>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Membros</NavigationMenuTrigger>
            <NavigationMenuContent className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[300px]">
              <NavigationMenuLink>
                <ul className="w-full p-4 text-secondary-foreground ">
                  <li className="py-2 px-2 rounded hover:bg-foreground hover:text-secondary transition-colors">
                    Criar um novo
                  </li>
                  <li className="py-2 px-2 rounded hover:bg-foreground hover:text-secondary transition-colors">
                    Listar todos
                  </li>
                  <li className="py-2 px-2 rounded hover:bg-foreground hover:text-secondary transition-colors">
                    Alterar cargo
                  </li>
                </ul>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Requerimentos</NavigationMenuTrigger>
            <NavigationMenuContent className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[300px]">
              <NavigationMenuLink>
                <ul className="w-full p-4 text-secondary-foreground ">
                  <li className="py-2 px-2 rounded hover:bg-foreground hover:text-secondary transition-colors">
                    Exemplo de Carta
                  </li>
                  <li className="py-2 px-2 rounded hover:bg-foreground hover:text-secondary transition-colors">
                    Exemplo de ATA
                  </li>
                  <li className="py-2 px-2 rounded hover:bg-foreground hover:text-secondary transition-colors">
                    Exclusão | Desligamento
                  </li>
                </ul>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Chamada</NavigationMenuTrigger>
            <NavigationMenuContent className="      w-[400px] gap-3 p-4 md:w-[500px] lg:w-[300px]">
              <NavigationMenuLink>
                <ul className="w-full p-4 text-secondary-foreground ">
                  <li className="py-2 px-2 rounded hover:bg-foreground hover:text-secondary transition-colors">
                    Criar chamada
                  </li>
                  <li className="py-2 px-2 rounded hover:bg-foreground hover:text-secondary transition-colors">
                    Listar Evento
                  </li>
                  <li className="py-2 px-2 rounded hover:bg-foreground hover:text-secondary transition-colors">
                    Exclusão | Desligamento
                  </li>
                </ul>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className=" flex gap-3 items-center border">
        <Input className="w-[230px]" placeholder=" Buscar na plataforma..." />
        <Avatar className="w-10 h-10" />
      </div>
    </header>
  );
}
