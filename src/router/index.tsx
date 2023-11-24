import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DashboardLayout } from '../view/layouts/DashboardLayout';
import { Dashboard } from '../view/pages/dashboard';
import { Login } from '../view/pages/login';
import { Members } from '../view/pages/members';
import { Secretary } from '../view/pages/secretary';
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
            <Route path="/secretary" element={<Secretary />} />
            <Route path="/members" element={<Members />} />
            <Route path="/finance" element={<h1>oia</h1>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
