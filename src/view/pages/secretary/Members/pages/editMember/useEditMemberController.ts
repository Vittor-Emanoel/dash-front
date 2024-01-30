import { handleApiError } from '@app/errors/ApiError';
import { useMemberById } from '@app/hooks/useMemberById';
import { useMembers } from '@app/hooks/useMembers';
import { membersService } from '@app/services/memberService';
import { sleep } from '@app/utils/sleep';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { z } from 'zod';

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

export function useEditMemberController() {
  const navigate = useNavigate();
  const { refetch } = useMembers();
  const { id } = useParams();
  const { member, isError, isLoading: isLoadingMember } = useMemberById(id!);

  useEffect(() => {
    if (isError) {
      toast.error('Membro não existe!');
      navigate('/members');
    }
  }, [isError]);

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

  const { isLoading, mutateAsync: updateMember } = useMutation(
    membersService.update,
  );

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await await updateMember({ id: id!, ...data });

      toast.success('Membro atualizado com sucesso!');

      navigate('/members');
      refetch();
    } catch (error) {
      handleApiError(error as AxiosError);
    }
  });

  sleep(1000);

  return {
    handleSubmit,
    register,
    errors,
    control,
    isLoading,
    member,
    isLoadingMember,
  };
}
