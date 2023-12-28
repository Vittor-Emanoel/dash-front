import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Member } from '../../../../../../../app/entities/Member';

const schema = z.object({
  fullName: z.string().nonempty('O nome é obrigatório!'),
  phone: z.string().nonempty('O telefone é obrigatório!'),
  street: z.string().optional(),
  houseNumber: z.string().nonempty('O número é obrigatório!'),
  postalCode: z.string().nonempty('O cep é obrigatório!'),
  churchId: z.string(),
  officeId: z.string(),
});

type FormData = z.infer<typeof schema>;

export function useEditMemberModalController(member: Member | null) {
  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    control,
    reset,
    getValues,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: member?.fullName,
      phone: member?.phone,
      street: member?.street,
      houseNumber: member?.houseNumber,
      postalCode: member?.postalCode,
      churchId: member?.church.id,
      officeId: member?.office.id,
    },
  });

  const handleSubmit = hookFormSubmit((data) => {
    console.log(data);
  });

  return {
    handleSubmit,
    errors,
    control,
    reset,
    register,
    getValues,
  };
}
