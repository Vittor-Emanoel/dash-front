import toast from 'react-hot-toast';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../app/hooks/useAuth';

interface IRoleGuardProps {
  isPrivate: boolean;
}

export function RoleGuard({ isPrivate }: IRoleGuardProps) {
  const { user } = useAuth();

  const ADMIN = user?.role === 'ADMIN';
  const SECRETARY = user?.role === 'SECRETARY';

  if (!ADMIN && !SECRETARY && isPrivate) {
    toast.error('Vocẽ não tem permissão para acessar esse departamento!');
    return <Navigate to="/dashboard" />;
  }

  return <Outlet />;
}
