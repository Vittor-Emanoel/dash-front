import { Outlet } from 'react-router-dom';
import { useMediaQuery } from 'usehooks-ts';

import { MainNav } from '@components/ui/main-nav';
import { MainNavMobile } from '@components/ui/main-nav-mobile';
import { UserNav } from '@components/ui/user-nav';

export function DashboardLayout() {
  // const { theme, setTheme } = useTheme();

  const isMobile = useMediaQuery('(max-width: 768px)');
  const isDesktop = useMediaQuery('(min-width: 768px )');

  return (
    <div className="container">
      <div className="w-full flex h-16 items-center mt-2 ">
        {isMobile && <MainNavMobile />}
        {isDesktop && <MainNav />}

        <div className="ml-auto flex items-center space-x-4">
          <UserNav />
        </div>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
}
