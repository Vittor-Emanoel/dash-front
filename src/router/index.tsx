import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DashboardLayout } from '../view/layouts/DashboardLayout';
import { Login } from '../view/pages/Login';
import { Dashboard } from '../view/pages/dashboard';
import { AuthGuard } from './authGuard';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route path="/" element={<Login />} />
        </Route>
      </Routes>

      <Routes>
        <Route element={<AuthGuard isPrivate={true} />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
