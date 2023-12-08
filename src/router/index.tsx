import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DashboardLayout } from '../view/layouts/DashboardLayout';
import { Dashboard } from '../view/pages/dashboard';
import { Login } from '../view/pages/login';

import { Calls } from '../view/pages/secretary/calls';
import { Secretary } from '../view/pages/secretary/home';
import { Members } from '../view/pages/secretary/members';
import { Requirements } from '../view/pages/secretary/requirements';
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
            <Route path="/calls" element={<Calls />} />
            <Route path="/requirements" element={<Requirements />} />
            <Route path="/finance" element={<h1>oia</h1>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
