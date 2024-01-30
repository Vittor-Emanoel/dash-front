import { sleep } from '@app/utils/sleep';
import { useQuery } from '@tanstack/react-query';
import { membersService } from '../services/memberService';

export function useMembers() {
  const { data, isLoading, refetch, error, isFetching } = useQuery({
    queryKey: ['members'],
    queryFn: membersService.getAll,
    staleTime: Infinity,
  });

  sleep(2000);

  return {
    members: data ?? [],
    isLoading,
    refetch,
    error,
    isFetching,
  };
}
