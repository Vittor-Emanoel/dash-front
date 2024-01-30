import { Skeleton } from '../../../../../components/ui/skeleton';
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
} from '../../../../../components/ui/table';

export function MemberTableSkeleton() {
  return Array.from({ length: 5 }).map((_, i) => {
    return (
      <Table key={i} className="mt-4">
        <TableHeader>
          <TableRow>
            <TableHead>
              <Skeleton className="h-4 max-w-[450px]" />
            </TableHead>
            <TableHead>
              <Skeleton className="h-4 max-w-[100px]" />
            </TableHead>
            <TableHead>
              <Skeleton className="h-4 max-w-[100px]" />
            </TableHead>
            <TableHead>
              <Skeleton className="h-4 max-w-[100px]" />
            </TableHead>
          </TableRow>
        </TableHeader>
      </Table>
    );
  });
}
