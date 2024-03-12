import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { useForm } from 'react-hook-form';

import { Button } from '@components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@components/ui/card';
import { Input } from '@components/ui/input';
import { Label } from '@radix-ui/react-dropdown-menu';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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

  const { formState, register } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // const { mutateAsync } = useMutation({
  //   mutationFn: async (data: SigninParams) => {
  //     return authService.signin(data);
  //   },
  // });

  const handleSubmit = () => {
    console.log('ola');
  };

  return (
    <div className="w-full h-screen flex">
      <Card className="w-full max-w-[380px] m-auto">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl flex items-center gap-2">
            <ArrowLeft size={20} onClick={() => navigate('/')} />
            Recuperar acesso
          </CardTitle>
          <CardDescription>
            Você receberá um e-mail com uma <br /> confirmação de cadastro.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-2">
              <Label>Email</Label>
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
