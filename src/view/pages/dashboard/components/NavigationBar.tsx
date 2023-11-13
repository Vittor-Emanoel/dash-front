import { ArrowRight, BookMarked, Home, Landmark } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../../../../app/utils/cn';

import logo from '../../../../assets/images/logo.png';
import Avatar from './Avatar';

const navLinks = [
  {
    name: 'Dashboard',
    icon: Home,
  },
  {
    name: 'Secretaria',
    icon: BookMarked,
  },
  {
    name: 'Financeiro',
    icon: Landmark,
  },
];

export function NavigationBar() {
  const [isExpended, setIsExpended] = useState(true);

  return (
    <div
      className={cn(
        'max-md:hidden pt-12 relative flex flex-col text-white w-48 h-screen bg-indigo-900',
        isExpended ? 'w-[192px] ' : 'w-[90px] px-4',
      )}
    >
      <div className="w-full flex flex-col gap-6 text-center items-center ">
        {isExpended && (
          <>
            <img
              src={logo}
              alt="logo com um simbolo de uma pomba"
              className="w-16 h-16 object-contain"
            />
            <div>
              <span className="block text-lg font-normal text-white">IEAD</span>
              <span className="block text-sm font-normal text-gray-300">
                Santo Amaro
              </span>
            </div>
          </>
        )}
        {!isExpended && (
          <img
            src={logo}
            alt="logo com um simbolo de uma pomba"
            className="w-16 h-16 object-contain"
          />
        )}
      </div>

      <div
        onClick={() => setIsExpended(!isExpended)}
        className="w-7 h-7 flex justify-center items-center cursor-pointer bg-indigo-950 rounded-full absolute -right-[10.5px] top-[62px]"
      >
        <ArrowRight size={17} />
      </div>

      <div className="mt-12 flex flex-col justify-between  h-screen rounded-lg text-gray-400">
        <ul className={isExpended ? 'space-y-4 px-4' : 'space-y-4 px-2'}>
          {navLinks.map((item, index) => (
            <li
              key={index}
              className={
                isExpended
                  ? 'flex space-x-3 p-2 item hover:bg-indigo-950 hover:text-white rounded-lg  transition-colors cursor-pointer'
                  : 'flex space-x-3 p-2 item hover:bg-indigo-950 text-white rounded-lg  transition-colors justify-center cursor-pointer'
              }
            >
              <item.icon className="text-gray-400 hover:text-white" />
              <span className={isExpended ? 'block' : 'hidden'}>
                {item.name}
              </span>
            </li>
          ))}
        </ul>

        <div
          className={
            isExpended
              ? 'border-t p-4 cursor-pointer border-gray-600 transition-colors hover:bg-indigo-950/10 justify-center flex items-center gap-4 h-[100px]'
              : 'border-t  cursor-pointer border-gray-600 transition-colors hover:bg-indigo-950/10 justify-center flex items-center gap-4 h-[100px]'
          }
        >
          <Avatar className="w-12 h-12" />
          {isExpended && (
            <div className="flex flex-col flex-1">
              <p className="text-base text-white">Vittor Emanoel</p>
              <p className="text-sm text-gray-500 ">Admin</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
