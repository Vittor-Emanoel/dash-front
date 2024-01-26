import { createContext, useCallback, useEffect, useState } from 'react';

import { User } from '@app/entities/User';
import { userService } from '@app/services/userService';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { LaunchScreen } from '../../view/components/LaunchScreen';
import { localStorageKeys } from '../config/localStorageKeys';

interface IAuthContextValue {
  signedIn: boolean;
  user: User | undefined;
  signin(accessToken: string): void;
  signout(): void;
}

export const AuthContext = createContext({} as IAuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken = localStorage.getItem(
      localStorageKeys.ACCESS_TOKEN,
    );

    return !!storedAccessToken;
  });

  const { isError, isSuccess, remove, data } = useQuery({
    queryKey: ['users', 'me'],
    queryFn: () => userService.me(),
    enabled: signedIn,
    staleTime: Infinity,
  });

  const signin = useCallback((accessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);

    setSignedIn(true);
  }, []);

  const signout = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
    remove();

    setSignedIn(false);
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error('Sua sessão expirou!');
      signout();
    }
  }, [isError, signout]);


  return (
    <AuthContext.Provider
      value={{ signedIn: isSuccess && signedIn, user: data, signin, signout }}
    >
      {children}
      <LaunchScreen isLoading={false} />
    </AuthContext.Provider>
  );
}
