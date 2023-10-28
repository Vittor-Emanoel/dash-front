import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from '../view/pages/Login';
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
          <Route path="/dashboard" element={<h1> Dash</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
