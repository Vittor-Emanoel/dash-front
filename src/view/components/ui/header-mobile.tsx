import { LogOut, MenuIcon } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NAV_ITENS } from "../../utils/NAV_ITENS";
import { Button } from './button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './sheet';

export function HeaderMobile() {
  const navigate = useNavigate();
  const [_, setIsSheetOpen] = useState(false);

  const handleItemClick = (href: string) => {
    navigate(`${href}`);
    setIsSheetOpen(false);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
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
            <SheetClose asChild key={label}>
              <Button
                key={label}
                variant="outline"
                onClick={() => handleItemClick(href)}
              >
                {label}
              </Button>
            </SheetClose>
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
