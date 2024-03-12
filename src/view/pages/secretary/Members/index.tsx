//utils

import { useNavigate } from 'react-router-dom';

//components

import { useMembers } from '@app/hooks/useMembers';

import {
  HeaderPageRoot,
  HeaderPageSubtitle,
  HeaderPageTitle,
} from '@components/HeaderPages';
import BreadCrumb from '@components/breadcrumb';
import { cn } from '@components/lib/lib';
import { Button } from '@components/ui/button';
import { PlusCircle } from 'lucide-react';
import { useMediaQuery } from 'usehooks-ts';
import { TableMembers } from './components/Table';
import { MemberTableSkeleton } from './components/Table/tableSkeleton';

export function Members() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { members, isFetching } = useMembers();

  return (
    <div className="w-full">
      <div
        className={cn(
          'flex  justify-between items-center',
          isMobile && 'flex-col pb-4 items-start',
        )}
      >
        <HeaderPageRoot className="py-6">
          <BreadCrumb
            items={[
              {
                title: 'Membros',
                link: '/members',
              },
            ]}
          />
          <HeaderPageTitle>Membros</HeaderPageTitle>
          <HeaderPageSubtitle>
            Gerencie os membros de sua congregação.
          </HeaderPageSubtitle>
        </HeaderPageRoot>

        <Button
          className={cn(' flex items-center gap-4 h-12 ', isMobile && 'w-full')}
          onClick={() => navigate('/new-member')}
        >
          <PlusCircle size={18} />
          Criar novo
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        {isFetching && <MemberTableSkeleton />}

        {!isFetching && <TableMembers data={members} />}
      </div>
    </div>
  );
}
