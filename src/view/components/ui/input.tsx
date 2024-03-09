import { cn } from '@components/lib/lib';
import { CrossCircledIcon } from '@radix-ui/react-icons';
import { ComponentProps, ReactNode, Ref, forwardRef } from 'react';

export interface InputProps extends ComponentProps<'input'> {
  error?: string;
  className?: string;
}

interface InputRootProps {
  children: ReactNode;
  className?: string;
}

const InputRoot = ({ className, children }: InputRootProps) => {
  return <div className={cn('flex flex-col', className)}>{children}</div>;
};

interface InputErrorProps {
  errorMessage: string | undefined;
}

const InputError = ({ errorMessage }: InputErrorProps) => {
  if (!errorMessage) return;

  return (
    <div className="flex gap-2 mt-2 text-red-500">
      <CrossCircledIcon />
      <span className="text-xs">{errorMessage}</span>
    </div>
  );
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, id, type, error, children, ...props },
    ref: Ref<HTMLInputElement>,
  ) => {
    return (
      <input
        type={type}
        className={cn(
          'flex border w-full rounded-md h-[52px] text-sm border-input bg-background px-3 py-2  ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className,
          error && 'border-red-500 placeholder:red-500',
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';

export { Input, InputError, InputRoot };
