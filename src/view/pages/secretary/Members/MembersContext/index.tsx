import { createContext, useCallback, useState } from 'react';

interface MembersContextValue {
  isNewMemberModalOpen: boolean;
  closeNewMemberModal(): void;
  openNewMemberModal(): void;
}

export const MembersContext = createContext({} as MembersContextValue);

export function MembersProvider({ children }: { children: React.ReactNode }) {
  const [isNewMemberModalOpen, setIsNewMemberModalOpen] = useState(false);

  const openNewMemberModal = useCallback(() => {
    return setIsNewMemberModalOpen(true);
  }, []);

  const closeNewMemberModal = useCallback(() => {
    return setIsNewMemberModalOpen(false);
  }, []);

  console.log('olá');

  return (
    <MembersContext.Provider
      value={{ openNewMemberModal, closeNewMemberModal, isNewMemberModalOpen }}
    >
      {children}
    </MembersContext.Provider>
  );
}
