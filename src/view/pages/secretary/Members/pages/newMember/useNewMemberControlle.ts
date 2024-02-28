import { handleApiError } from '@app/errors/ApiError';
import { useMembers } from '@app/hooks/useMembers';
import { membersService } from '@app/services/memberService';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

const schema = z.object({
  fullName: z.string().min(1, 'O nome é obrigatório!'),
  phone: z.string().min(1, 'O telefone é obrigatório!'),
  street: z.string().min(1, 'O endereço é obrigatório!'),
  houseNumber: z.string().min(1, 'O número é obrigatório!'),
  postalCode: z.string().min(1, 'O cep é obrigatório!'),
  churchId: z.string({ required_error: 'Selecione uma igreja!' }),
  officeId: z.string({ required_error: 'Selecione um cargo!' }),
});

type FormData = z.infer<typeof schema>;

export function useNewMemberController() {
  const navigate = useNavigate();
  const { refetch } = useMembers();

  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { isLoading, mutateAsync } = useMutation(membersService.create);

  const handleSubmit = hookFormSubmit(async (data) => {
    const {
      fullName,
      phone,
      street,
      houseNumber,
      postalCode,
      churchId,
      officeId,
    } = data;

    try {
      await mutateAsync({
        fullName,
        phone,
        street,
        houseNumber,
        postalCode,
        churchId,
        officeId,
      });

      toast.success('Membro cadastrado com sucesso!');

      navigate('/members');
      refetch();
    } catch (error) {
      handleApiError(error as AxiosError);
    }
  });

  return {
    handleSubmit,
    register,
    errors,
    control,
    isLoading,
  };
}
