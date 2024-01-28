import { Transition } from '@headlessui/react';
import logo from '../../assets/images/logo.png';
import { Spinner } from './Spinner';

interface LaunchScreenProps {
  isLoading: boolean;
}

export function LaunchScreen({ isLoading }: LaunchScreenProps) {
  return (
    <Transition
      show={isLoading}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="bg-secondary fixed top-0 left-0 w-full h-full grid place-items-center z-50 ">
        <div className="flex flex-col items-center gap-4">
          <img src={logo} alt="" className="w-20 h-20" loading="lazy" />
          <Spinner className="text-primary-foreground fill-white" />
        </div>
      </div>
    </Transition>
  );
}
