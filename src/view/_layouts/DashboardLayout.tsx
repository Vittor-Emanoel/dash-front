import { Outlet } from 'react-router-dom';
import { useMediaQuery } from 'usehooks-ts';

import { Header } from '@components/ui/header';
import { HeaderMobile } from '@components/ui/header-mobile';
import { UserNav } from '@components/ui/user-nav';

export function DashboardLayout() {
  // const { theme, setTheme } = useTheme();

  const isMobile = useMediaQuery('(max-width: 768px)');
  const isDesktop = useMediaQuery('(min-width: 768px )');

  return (
    <div className="container ">
      <div className="w-full flex h-16 items-center mt-4 ">
        {isMobile && <HeaderMobile />}
        {isDesktop && <Header />}

        <div className="ml-auto flex items-center space-x-4">
          {/* <ModeToggle /> */}
          <UserNav />
        </div>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
}
