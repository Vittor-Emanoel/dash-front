import { getNameInitialLetters } from '@app/utils/getNameInitialLetters';
import { ArrowBigDown } from 'lucide-react';
import { useAuth } from '../../../app/hooks/useAuth';
import { Avatar, AvatarFallback } from './avatar';
import { Button } from './button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from './dropdown-menu';

export function UserNav() {
  const { signout, user } = useAuth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full flex">
          <Avatar className="h-10 w-10">
            <AvatarFallback>
              {getNameInitialLetters(user?.name ?? '')}
            </AvatarFallback>
          </Avatar>
          <ArrowBigDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-2">
            <p className="text-sm font-medium leading-tight">{user?.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user?.email}
            </p>
            <strong className="bg-secondary text-white p-2 rounded text-xs w-[100px] leading-none text-muted-foregroun block">
              {user?.role === 'ADMIN' ? 'Administrador' : user?.role}
            </strong>
          </div>
        </DropdownMenuLabel>
        {/* <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer">
            <Link to="/profile">
              Perfil
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer">
            Opções
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator /> */}
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={signout}
          className="cursor-pointer hover:bg-primary-foreground"
        >
          Sair
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
