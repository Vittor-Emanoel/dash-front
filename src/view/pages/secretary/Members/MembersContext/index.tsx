import { createContext, useCallback, useState } from 'react';
import { Member } from '../../../../../app/entities/Member';

interface MembersContextValue {
  isNewMemberModalOpen: boolean;
  isEditMemberModalOpen: boolean;
  isDeleteModalOpen: boolean;
  memberBeingEdited: null | Member;
  closeNewMemberModal(): void;
  openDeleteModal(): void;
  openNewMemberModal(): void;
  closeDeleteModal(): void;
  openEditMemberModal(member: Member): void;
  closeEditMemberModal(): void;
}

export const MembersContext = createContext({} as MembersContextValue);

export function MembersProvider({ children }: { children: React.ReactNode }) {
  const [isNewMemberModalOpen, setIsNewMemberModalOpen] = useState(false);
  const [isEditMemberModalOpen, setIsEditMemberModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [memberBeingEdited, setMemberBeingEdited] = useState<null | Member>(
    null,
  );
  isDeleteModalOpen;
  const openNewMemberModal = useCallback(() => {
    return setIsNewMemberModalOpen(true);
  }, []);

  const closeNewMemberModal = useCallback(() => {
    return setIsNewMemberModalOpen(false);
  }, []);

  const openDeleteModal = useCallback(() => {
    return setIsDeleteModalOpen(true);
  }, []);

  const closeDeleteModal = useCallback(() => {
    return setIsDeleteModalOpen(false);
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
        isDeleteModalOpen,
        openDeleteModal,
        closeDeleteModal,
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
