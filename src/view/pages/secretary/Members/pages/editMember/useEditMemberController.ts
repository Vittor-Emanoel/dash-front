//react
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

//libs
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { z } from 'zod';

//utils
import { useMemberById } from '@app/hooks/useMemberById';
import { membersService } from '@app/services/memberService';

const schema = z.object({
  fullName: z.string().nonempty('O nome é obrigatório!'),
  phone: z.string().nonempty('O telefone é obrigatório!'),
  street: z.string().nonempty('O endereço é obrigatório!'),
  houseNumber: z.string().nonempty('O número é obrigatório!'),
  postalCode: z.string().nonempty('O cep é obrigatório!'),
  churchId: z.string(),
  officeId: z.string(),
});

type FormData = z.infer<typeof schema>;

interface useEditMemberControllerProps {
  memberId: string;
}

export function useEditMemberController({
  memberId,
}: useEditMemberControllerProps) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const { isLoading: isLoadingDelete, mutateAsync: removeAccount } =
    useMutation(membersService.remove);
  const { isLoading, mutateAsync: updateMember } = useMutation(
    membersService.update,
  );
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    member,
    isError,
    isLoading: isLoadingMember,
  } = useMemberById(memberId!);

  useEffect(() => {
    if (isError) {
      toast.error('Membro não existe!');
      navigate('/members');
    }
  }, [isError]);

  function handleOpenDeleteModal() {
    setIsDeleteModalOpen(true);
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalOpen(false);
  }

  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    values: {
      fullName: member?.fullName,
      phone: member?.phone,
      street: member?.street,
      houseNumber: member?.houseNumber,
      postalCode: member?.postalCode,
      churchId: member?.churchId,
      officeId: member?.officeId,
    },
  });

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await await updateMember({
        id: memberId!,
        ...data,
      });

      toast.success('Membro atualizado com sucesso!');

      queryClient.invalidateQueries({ queryKey: ['members'] });
      navigate('/members');
    } catch (error) {
      toast.error('Erro ao Editar o membro!');
    }
  });

  async function handleDeleteMember() {
    try {
      await removeAccount(memberId!);

      queryClient.invalidateQueries({ queryKey: ['members'] });
      toast.success('A Membro deletado com sucesso!');
      handleCloseDeleteModal();
      navigate('/members');
    } catch {
      toast.error('Erro ao deletar o membro!');
    }
  }

  return {
    isLoadingMember,
    errors,
    control,
    isLoading,
    member,
    isDeleteModalOpen,
    isLoadingDelete,
    register,
    handleSubmit,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    handleDeleteMember,
  };
}
