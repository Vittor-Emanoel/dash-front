import toast from 'react-hot-toast';
import { Navigate, Outlet } from 'react-router-dom';

interface IRoleGuardProps {
  isPrivate: boolean;
}

export function RoleGuard({ isPrivate }: IRoleGuardProps) {
  if (isPrivate) {
    toast.error('Vocẽ não tem permissão para acessar esse departamento!');
    return <Navigate to="/dashboard" />;
  }

  return <Outlet />;
}
