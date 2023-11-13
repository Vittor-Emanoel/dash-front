import { LogOutIcon } from 'lucide-react';
import { useAuth } from '../../app/hooks/useAuth';

export function Header() {
  const { signout } = useAuth();

  return (
    <header className="flex justify-end p-6 bg-gray-300 border-b">
      <div
        onClick={signout}
        className="flex gap-2 items-center cursor-pointer transition-colors hover:text-gray-700"
      >
        <LogOutIcon size={20} />
        <p>Sair</p>
      </div>
    </header>
  );
}
