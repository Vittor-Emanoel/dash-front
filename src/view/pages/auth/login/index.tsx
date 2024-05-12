import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { useForm } from 'react-hook-form';

import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

import logo from '../../../../assets/images/logo.png';

import { useAuth } from '@app/hooks/useAuth';
import { authService } from '@app/services/authService';
import { SigninParams } from '@app/services/authService/signin';
import { EyeIcon } from '@components/icons/EyeIcon';
import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { Label } from '@components/ui/label';
import { useState } from 'react';

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
  const [showPassword, setShowPassword] = useState(false);
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
            <Label
            className='text-sm'
            >Email</Label>
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
            <Label>Senha</Label>

            <div className="grid w-full max-w-sm items-center gap-1.5 relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                className="pr-10"
                {...register('password')}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex  text-gray-500 dark:text-gray-400"
                onClick={() => setShowPassword((state) => !state)}
              >
                <EyeIcon size={24} open={showPassword} />
              </button>
            </div>

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
            className="w-full h-[42px] disabled:cursor-not-allowed"
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
