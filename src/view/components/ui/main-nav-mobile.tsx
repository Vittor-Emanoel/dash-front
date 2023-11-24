import { LogOut, MenuIcon } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NAV_ITENS } from '../../utils/NavLinks';
import { Button } from './button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './sheet';

export function MainNavMobile() {
  const navigate = useNavigate();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleItemClick = (href: string) => {
    navigate(`${href}`);
    setIsSheetOpen(false);
  };

  return (
    <Sheet open={isSheetOpen}>
      <SheetTrigger asChild onClick={() => setIsSheetOpen(!isSheetOpen)}>
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>ADMSA</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col space-y-5 mt-10">
          {NAV_ITENS.map(({ href, label }) => (
            <Button
              key={label}
              variant="outline"
              className="justify-start rounded py-2 px-6 border"
              onClick={() => handleItemClick(href)}
            >
              {label}
            </Button>
          ))}
        </div>
        <div className="mt-10 border">
          <Button className="w-full  justify-start gap-3 rounded py-2 px-6 border">
            <LogOut size={16} />
            Sair
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
