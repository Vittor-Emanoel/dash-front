import { useQuery } from '@tanstack/react-query';
import { officeService } from '../services/officeService';

export function useOffices() {
  const { data, isFetching } = useQuery({
    queryKey: ['offices'],
    queryFn: officeService.getAll,
    staleTime: Infinity,
  });

  return {
    office: data ?? [],
    isFetching,
  };
}
