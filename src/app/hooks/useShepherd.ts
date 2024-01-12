import { useQuery } from '@tanstack/react-query';
import { shepherdService } from '../services/shepherdService';

export function useShepherd() {
  const { data, isFetching } = useQuery({
    queryKey: ['shepherd'],
    queryFn: shepherdService.getAll,
    staleTime: Infinity,
  });

  return {
    shepherd: data ?? [],
    isFetching,
  };
}
