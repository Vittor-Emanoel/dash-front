import { Outlet } from 'react-router-dom';
import { NavigationBar } from '../pages/dashboard/components/NavigationBar';

export function DashboardLayout() {
  return (
    <div className="w-full flex h-screen">
      {/* navigationBar */}
      <NavigationBar />
      {/* contennt */}
      <main className="flex flex-col grow">
        <Outlet />
      </main>
    </div>
  );
}
