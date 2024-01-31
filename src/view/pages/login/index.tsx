import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { useForm } from 'react-hook-form';

import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../app/hooks/useAuth';
import { authService } from '../../../app/services/authService';
import { SigninParams } from '../../../app/services/authService/signin';
import { Button } from '../../components/ui/button';

import logo from '../../../assets/images/logo.png';

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

export function Login() {
  const {
    formState,
    register,
    handleSubmit: hookFormSubmit,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const { signin: signIn } = useAuth();

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data: SigninParams) => {
      return authService.signin(data);
    },
  });

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      const { accessToken } = await mutateAsync(data);

      signIn(accessToken);
    } catch {
      toast.error('Credenciais inválidas!');
    }
  });

  return (
    <div className="w-full h-screen flex ">
      <div className="w-full max-w-[380px] m-auto hover:bg-background space-y-6 p-4">
        <header className="space-y-1 flex flex-col items-center ">
          <img
            className="w-20 h-20 mb-2"
            src={logo}
            alt="Logo da assembleia de Deus em Santo amaro"
          />
          <h1 className="text-2xl font-semibold leading-none tracking-tight">
            Fazer Login
          </h1>
          <p className="text-sm text-muted-foreground">Entre com sua conta</p>
        </header>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 w-fil"
          autoComplete="off"
        >
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
          <div className="grid gap-2">
            <Label htmlFor="password">Senha</Label>
            <Input {...register('password')} id="password" type="password" />
            {formState.errors.password && (
              <span className="text-xs text-red-500">
                {formState.errors.password.message}
              </span>
            )}

            <Link
              to="/forgot-password"
              className="text-sm text-muted-foreground hover:text-white transition-colors"
            >
              Esqueceu sua senha?
            </Link>
          </div>
          <Button
            type="submit"
            className="w-full h-12"
            isLoading={isLoading}
            disabled={isLoading}
          >
            Entrar
          </Button>
        </form>
      </div>
    </div>
  );
}
