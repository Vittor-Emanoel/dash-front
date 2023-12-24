import { useContext } from 'react';
import { MembersContext } from '.';

export function useMembers() {
  return useContext(MembersContext);
}
