import { Member } from '@app/entities/Member';
import { Dispatch, SetStateAction, createContext, useState } from 'react';

interface MembersContextValue {
  memberBeingEdited: null | Member;
  setMemberBeingEdited: Dispatch<SetStateAction<Member | null>>;
}

export const MembersContext = createContext({} as MembersContextValue);

export function MembersProvider({ children }: { children: React.ReactNode }) {
  const [memberBeingEdited, setMemberBeingEdited] = useState<null | Member>(
    null,
  );

  return (
    <MembersContext.Provider
      value={{ memberBeingEdited, setMemberBeingEdited }}
    >
      {children}
    </MembersContext.Provider>
  );
}
