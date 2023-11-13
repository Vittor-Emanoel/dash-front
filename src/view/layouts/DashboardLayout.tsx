import { Outlet } from 'react-router-dom';
import { useAuth } from '../../app/hooks/useAuth';
import { Header } from '../components/Header';
import { NavigationBar } from '../pages/dashboard/components/NavigationBar';

export function DashboardLayout() {
  const { signout } = useAuth();
  return (
    <div className="w-full flex h-screen">
      {/* navigationBar */}
      <NavigationBar />
      {/* contennt */}
      <main className="flex flex-col grow">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}
