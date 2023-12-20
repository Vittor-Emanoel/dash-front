import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { useForm } from 'react-hook-form';

import { ArrowLeft } from 'lucide-react';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { authService } from '../../../app/services/authService';
import { SigninParams } from '../../../app/services/authService/signin';
import { Button } from '../../components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';

const schema = z.object({
  email: z
    .string()
    .nonempty('E-mail é obrigatório')
    .email('Informe um e-mail válido'),
  password: z
    .string()
    .nonempty('Senha é obrigatória')
    .min(8, 'Senha deve conter pelo menos 8 dígitos'),
});

type FormData = z.infer<typeof schema>;

export function ForgotPassword() {
  const navigate = useNavigate();

  const {
    formState,
    register,
    handleSubmit: hookFormSubmit,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync } = useMutation({
    mutationFn: async (data: SigninParams) => {
      return authService.signin(data);
    },
  });

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);
      toast.success('E-mail enviado! Verifique sua caixa de entrada');

      navigate('/');
    } catch {
      toast.error('Credenciais inválidas!');
    }
  });

  return (
    <div className="w-full h-screen flex">
      <Card className="w-full max-w-[380px] m-auto">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl flex items-center gap-2">
            <ArrowLeft size={20} onClick={() => navigate('/')} />
            Recuperar acesso
          </CardTitle>
          <CardDescription>
            Você receberá um e-mail para com uma <br /> confirmação de cadastro.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                {...register('email')}
                id="email"
                type="email"
                placeholder="m@example.com"
              />
              {formState.errors.email && (
                <span className="text-xs text-red-500">
                  {formState.errors.email.message}
                </span>
              )}
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            onClick={handleSubmit}
            isLoading={false}
            disabled={false}
          >
            Recuperar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
