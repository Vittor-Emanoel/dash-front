import { useQuery } from '@tanstack/react-query';
import { churchService } from '../services/churchService';

export function useChurchs() {
  const { data, isFetching } = useQuery({
    queryKey: ['churchs'],
    queryFn: churchService.getAll,
    staleTime: Infinity,
  });

  return {
    church: data ?? [],
    isFetching,
  };
}
