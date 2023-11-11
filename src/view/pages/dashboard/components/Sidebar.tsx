import {
  GitPullRequest,
  HouseSimple,
  PhonePlus,
  Users,
} from '@phosphor-icons/react';

import { Link } from 'react-router-dom';
import logo from '../../../../assets/images/logo.png';

export function Sidebar() {
  return (
    <aside className="sidebar bg-indigo-900 flex flex-col items-center p-4 gap-12">
      <div className="p-6 flex items-center justify-center w-full">
        <img src={logo} className="w-40" alt="" />
      </div>

      <ul className="w-full space-y-3 text-white font-bold">
        <li className="p-3 flex items-center gap-3 rounded-lg font-bold hover:bg-indigo-950 hover:text-white transition-colors ">
          <HouseSimple className="w-6 h-6" />
          <Link to="/dashboard">Inicio</Link>
        </li>

        <li className="p-3 flex items-center gap-3 rounded-lg font-bold hover:bg-indigo-950 hover:text-white transition-colors  ">
          <Users className="w-6 h-6" />
          <Link to="/members">Membros</Link>
        </li>
        <li className="p-3 flex items-center gap-3 rounded-lg font-bold hover:bg-indigo-950 hover:text-white transition-colors ">
          <GitPullRequest className="w-6 h-6" />
          <Link to="/not-found">Requerimentos</Link>
        </li>

        <li className="p-3 flex items-center gap-3 rounded-lg font-bold hover:bg-indigo-950 hover:text-white transition-colors ">
          <PhonePlus className="w-6 h-6" />
          <Link to="/call">Chamada</Link>
        </li>
      </ul>
    </aside>
  );
}
