import { createContext, useCallback, useState } from 'react';

import { LaunchScreen } from '../../view/components/LaunchScreen';
import { localStorageKeys } from '../config/localStorageKeys';

interface IAuthContextValue {
  signedIn: boolean;
  // user: User | undefined;
  signin(accessToken: string): void;
  signout(): void;
}

export const AuthContext = createContext({} as IAuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [_, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken = localStorage.getItem(
      localStorageKeys.ACCESS_TOKEN,
    );

    return !!storedAccessToken;
  });

  const signin = useCallback((accessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);

    setSignedIn(true);
  }, []);

  const signout = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);

    setSignedIn(false);
  }, []);
  return (
    <AuthContext.Provider value={{ signedIn: false, signin, signout }}>
      {children}
      <LaunchScreen isLoading={false} />
    </AuthContext.Provider>
  );
}
