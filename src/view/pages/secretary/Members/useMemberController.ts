import { useMutation } from '@tanstack/react-query';
import { useChurchs } from '../../../../app/hooks/useChurchs';
import { useMembers } from '../../../../app/hooks/useMembers';
import { useOffices } from '../../../../app/hooks/useOffices';
import { membersService } from '../../../../app/services/memberService';

interface CreateMember {
  fullName: string;
  phone: string;
  street?: string | undefined;
  houseNumber: string;
  postalCode: string;
  churchId: string;
  officeId: string;
}

export function useMemberControler() {
  const { members, refetch, isFetching } = useMembers();
  const { church, isFetching: isLoadingChurchs } = useChurchs();
  const { office, isFetching: isLoadingOffices } = useOffices();

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data: CreateMember) => {
      return membersService.create(data);
    },
  });

  return {
    church,
    office,
    isLoadingOffices,
    isLoadingChurchs,
    members,
    isFetching,
    refetch,
    mutateAsync,
    isLoading,
  };
}
