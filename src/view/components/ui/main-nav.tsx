import { Link, useNavigate } from 'react-router-dom';

import { NAV_ITENS } from '../../utils/NavLinks';
import { cn } from '../lib/lib';

import logo from '../../../assets/images/adm.svg';

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const navigate = useNavigate();

  return (
    <nav
      className={cn('flex  items-center space-x-4 lg:space-x-6 ', className)}
      {...props}
    >
      <div className="max-md:hidden">
        <h1
          className="font-bold text-indigo-500"
          onClick={() => navigate('/dashboard')}
        >
          <img className="w-12 h-12" src={logo} alt="" />
        </h1>
      </div>

      <div className="max-md:hidden space-x-4">
        {NAV_ITENS.map(({ href, label }) => (
          <Link
            to={href}
            key={label}
            className="text-sm font-normal p-4 rounded hover:bg-primary-foreground transition-colors"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
