import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useMembers } from '../../../MembersContext/useMembers';

export function useNewMemberModalController() {
  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { isNewMemberModalOpen, closeNewMemberModal } = useMembers();

  return {
    handleSubmit,
    isNewMemberModalOpen,
    closeNewMemberModal,
    errors,
    control,
    reset,
    register,
  };
}
