import { useChurchs } from '../../../../app/hooks/useChurchs';
import { useMembers } from '../../../../app/hooks/useMembers';
import { useOffices } from '../../../../app/hooks/useOffices';

export function useMemberControler() {
  const { members, isFetching } = useMembers();
  const { church, isFetching: isLoadingChurchs } = useChurchs();
  const { office, isFetching: isLoadingOffices } = useOffices();

  return {
    church,
    office,
    isLoadingOffices,
    isLoadingChurchs,
    members,
    isFetching,
  };
}
