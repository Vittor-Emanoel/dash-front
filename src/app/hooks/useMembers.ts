import { useQuery } from '@tanstack/react-query';
import { membersService } from '../services/memberService';

export function useMembers() {
  const { data, isLoading, refetch, error, isFetching } = useQuery({
    queryKey: ['members'],
    queryFn: membersService.getAll,
    staleTime: Infinity,
  });

  return {
    members: data ?? [],
    isLoading,
    refetch,
    error,
    isFetching,
  };
}
