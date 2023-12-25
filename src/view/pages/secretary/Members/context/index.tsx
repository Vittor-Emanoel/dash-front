import { createContext, useCallback, useState } from 'react';

interface MembersContextValue {
  isNewMemberModalOpen: boolean;
  isEditMemberModalOpen: boolean;
  closeNewMemberModal(): void;
  openNewMemberModal(): void;
  openEditMemberModal(): void;
  closeEditMemberModal(): void;
}

export const MembersContext = createContext({} as MembersContextValue);

export function MembersProvider({ children }: { children: React.ReactNode }) {
  const [isNewMemberModalOpen, setIsNewMemberModalOpen] = useState(false);
  const [isEditMemberModalOpen, setIsEditMemberModalOpen] = useState(false);

  const openNewMemberModal = useCallback(() => {
    return setIsNewMemberModalOpen(true);
  }, []);

  const closeNewMemberModal = useCallback(() => {
    return setIsNewMemberModalOpen(false);
  }, []);

  const openEditMemberModal = useCallback(() => {
    return setIsEditMemberModalOpen(true);
  }, []);

  const closeEditMemberModal = useCallback(() => {
    return setIsEditMemberModalOpen(false);
  }, []);

  return (
    <MembersContext.Provider
      value={{
        openNewMemberModal,
        closeNewMemberModal,
        isNewMemberModalOpen,
        openEditMemberModal,
        isEditMemberModalOpen,
        closeEditMemberModal,
      }}
    >
      {children}
    </MembersContext.Provider>
  );
}
