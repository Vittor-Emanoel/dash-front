import { createContext, useCallback, useState } from 'react';
import { Member } from '../../../../../app/entities/Member';

interface MembersContextValue {
  isNewMemberModalOpen: boolean;
  isEditMemberModalOpen: boolean;
  memberBeingEdited: null | Member;
  closeNewMemberModal(): void;
  openNewMemberModal(): void;
  openEditMemberModal(member: Member): void;
  closeEditMemberModal(): void;
}

export const MembersContext = createContext({} as MembersContextValue);

export function MembersProvider({ children }: { children: React.ReactNode }) {
  const [isNewMemberModalOpen, setIsNewMemberModalOpen] = useState(false);
  const [isEditMemberModalOpen, setIsEditMemberModalOpen] = useState(false);
  const [memberBeingEdited, setMemberBeingEdited] = useState<null | Member>(
    null,
  );

  const openNewMemberModal = useCallback(() => {
    return setIsNewMemberModalOpen(true);
  }, []);

  const closeNewMemberModal = useCallback(() => {
    return setIsNewMemberModalOpen(false);
  }, []);

  const openEditMemberModal = (member: Member) => {
    setMemberBeingEdited(member);
    setIsEditMemberModalOpen(true);
  };

  const closeEditMemberModal = useCallback(() => {
    return setIsEditMemberModalOpen(false);
  }, []);

  return (
    <MembersContext.Provider
      value={{
        memberBeingEdited,
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
