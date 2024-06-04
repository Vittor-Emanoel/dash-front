import { GoogleIcon } from '@components/icons/Google';
import { cn } from '@components/lib/lib';
import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import { Label } from '@radix-ui/react-dropdown-menu';
import { CrossCircledIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router-dom';
import bg from '../../../../assets/bg.jpg';
import { Logo } from '../../../../assets/images/logo';
import { EyeIcon } from '../../../components/icons/EyeIcon';
import { useLoginController } from './useLoginController';

export function Login() {
  const {
    handleSubmit,
    errors,
    isLoading,
    register,
    showPassword,
    setShowPassword,
  } = useLoginController();

  return (
    <div className="w-full h-screen flex lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[600px]">
      <div className="w-full flex items-center justify-center p-6">
        <div className="mx-auto grid w-[350px] gap-6 ">
          <header className="items-center">
            <Logo />
            <h1 className="text-2xl font-semibold leading-none tracking-tight mt-4 light:text-zinc-800 text-zinc-800">
              Entrar
            </h1>
            <p className="text-sm text-muted-foreground mt-2">
              Entre com a sua conta.
            </p>
          </header>
          <form onSubmit={handleSubmit} className="grid gap-3">
            <div className="grid gap-1">
              <Label className="text-sm light:text-zinc-700 ">E-mail</Label>
              <Input
                id="email"
                type="email"
                placeholder="Seu email"
                className={cn(
                  'placeholder:text-sm',
                  errors.email && 'border-red-500 placeholder:text-red-500',
                )}
                {...register('email')}
              />
              {errors.email && (
                <span className="text-xs text-red-500 flex gap-2">
                  <CrossCircledIcon />
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="grid gap-1">
              <div className="flex items-center">
                <Label className="text-sm light:text-zinc-700">Senha</Label>
              </div>

              <div className="grid w-full max-w-sm items-center gap-1.5 relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  className={cn(
                    'pr-10 placeholder:text-sm',
                    errors.password &&
                      'border-red-500 placeholder:text-red-500',
                  )}
                  placeholder="Sua senha"
                  {...register('password')}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center  text-gray-500 dark:text-gray-400"
                  onClick={() => setShowPassword((state) => !state)}
                >
                  <EyeIcon size={18} open={showPassword} />
                </button>
              </div>
              {errors.password && (
                <span className="text-xs text-red-500 flex gap-2">
                  <CrossCircledIcon />
                  {errors.password.message}
                </span>
              )}
            </div>
            <Button
              type="submit"
              className="w-full mt-4"
              isLoading={isLoading}
              disabled={isLoading}
            >
              Entrar com o e-mail
            </Button>

            <div className="text-center text-zinc-700 text-sm">
              <p>ou</p>
            </div>
            <Button variant="outline" className="w-full flex gap-2">
              <GoogleIcon className="w-4 h-4" />
              Entrar com o Google
            </Button>
          </form>
          <div className="flex gap-1 items-center justify-center text-sm text-muted-foreground">
            <p>Não possui uma conta?</p>
            <Link
              to="/register"
              className="underline hover:text-primary transition-colors"
            >
              Cadastrar
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block h-full border">
        <img src={bg} alt="" className="h-full bg-cover" />
      </div>
    </div>
  );
}
