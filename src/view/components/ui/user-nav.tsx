import { getFirstNameAndLastName } from '@app/utils/getFirstNameAndLastName';
import { getNameInitialLetters } from '@app/utils/getNameInitialLetters';
import { ChevronDown } from 'lucide-react';
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
        <Button
          variant="ghost"
          className="flex gap-3 p-2 rounded-full transition-colors "
        >
          <Avatar className="h-8 w-8 hover:bg-foreground">
            <AvatarFallback className="bg-foreground text-secondary">
              {getNameInitialLetters(user?.name ?? '')}
            </AvatarFallback>
          </Avatar>
          <p className="text-xs text-muted-foreground">
            {getFirstNameAndLastName(user?.name!)}
          </p>

          <ChevronDown size={15} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-2">
            <p className="text-sm font-medium leading-tight">{user?.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user?.email}
            </p>
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
