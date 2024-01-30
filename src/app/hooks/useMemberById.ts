import { useQuery } from '@tanstack/react-query';
import { membersService } from '../services/memberService';

export function useMemberById(id: string) {
  const { isSuccess, data, isFetching, isError, refetch, isLoading } = useQuery(
    {
      queryKey: ['member', id],
      queryFn: () => membersService.getById(id!),

      staleTime: Infinity,
    },
  );

  return {
    member: data ?? null,
    isFetching,
    refetch,
    isError,
    isSuccess,
    isLoading,
  };
}
