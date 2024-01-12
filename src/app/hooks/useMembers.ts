import { useQuery } from '@tanstack/react-query';
import { membersService } from '../services/memberService';

export function useMembers() {
  const { data, isFetching, refetch } = useQuery({
    queryKey: ['members'],
    queryFn: membersService.getAll,
    staleTime: Infinity,
  });

  return {
    members: data ?? [],
    isFetching,
    refetch,
  };
}
