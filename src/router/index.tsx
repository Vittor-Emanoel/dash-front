import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DashboardLayout } from '../view/layouts/DashboardLayout';
import { Dashboard } from '../view/pages/dashboard';
import { Login } from '../view/pages/login';

import { ForgotPassword } from '../view/pages/forgot-password';

import { Secretary } from '@pages/secretary/Home';
import { Members } from '../view/pages/secretary/Members';
import { NewMember } from '../view/pages/secretary/Members/pages/newMember';
import { AuthGuard } from './authGuard';
import { EditMember } from '../view/pages/secretary/Members/pages/editMember';
import { MembersProvider } from '../view/pages/secretary/Members/context/MembersContext';


export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard isPrivate={false} />}>
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>
      </Routes>

      <Routes>
        <Route element={<AuthGuard isPrivate={true} />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/secretary" element={<Secretary />} />
                <Route path="/members" element={<Members />} />
                <Route path="/members/new" element={<NewMember />} />
                <Route path="/members/edit/:id" element={<EditMember />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
