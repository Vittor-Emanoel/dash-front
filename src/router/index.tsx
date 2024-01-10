import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DashboardLayout } from '../view/layouts/DashboardLayout';
import { Dashboard } from '../view/pages/dashboard';
import { Login } from '../view/pages/login';

import { ForgotPassword } from '../view/pages/forgot-password';
import { Profile } from '../view/pages/profile';
import { Calls } from '../view/pages/secretary/Calls';
import { Secretary } from '../view/pages/secretary/Home';
import { Members } from '../view/pages/secretary/Members';
import { NewMember } from '../view/pages/secretary/Members/pages/newMember';
import { Requirements } from '../view/pages/secretary/requirements';
import { AuthGuard } from './authGuard';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route path="/" element={<Login />} />
          <Route path="/forget-password" element={<ForgotPassword />} />
        </Route>
      </Routes>

      <Routes>
        <Route element={<AuthGuard isPrivate={true} />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/secretary" element={<Secretary />} />
            <Route path="/members" element={<Members />} />
            <Route path="/members/new" element={<NewMember />} />
            <Route path="/calls" element={<Calls />} />
            <Route path="/requirements" element={<Requirements />} />
            <Route path="/finance" element={<h1>oia</h1>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
