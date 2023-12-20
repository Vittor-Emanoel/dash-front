import { Outlet } from 'react-router-dom';
import { useMediaQuery } from 'usehooks-ts';
import { MainNav } from '../components/ui/main-nav';
import { MainNavMobile } from '../components/ui/main-nav-mobile';
import { Search } from '../components/ui/search';
import { UserNav } from '../components/ui/user-nav';

export function DashboardLayout() {
  // const { theme, setTheme } = useTheme();

  const isMobile = useMediaQuery('(max-width: 768px)');
  const isDesktop = useMediaQuery('(min-width: 768px )');

  return (
    <div className="container ">
      <div className="w-full flex h-16 items-center  ">
        {isMobile && <MainNavMobile />}
        {isDesktop && <MainNav />}

        <div className="ml-auto flex items-center space-x-4">
          {isDesktop && <Search />}

          {/* <div className="border  p-2 rounded cursor-pointer">
            {theme === 'light' && (
              <div onClick={() => setTheme('dark')}>
                <Moon size={15} />
              </div>
            )}
            {theme === 'dark' && (
              <div onClick={() => setTheme('light')}>
                <Sun size={15} />
              </div>
            )}
          </div> */}
          <UserNav />
        </div>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
}
