import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { membersService } from '@app/services/memberService';
import { useMembers } from '@app/hooks/useMembers';

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

  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { isLoading, mutateAsync: updateTransaction } = useMutation(
    membersService.update,
  );

  // const handleSubmit = hookFormSubmit(async (data) => {
  //   try {
  //     await updateTransaction({
  //       id: par
  //     });

  //     toast.success('Membro cadastrado com sucesso!');

  //     navigate('/members');
  //     refetch()
  //   } catch (error) {
  //     toast.error('Membro já cadastrado!');
  //   }
  // });

  return {
    handleSubmit,
    register,
    errors,
    control,
    isLoading,
  };
}
