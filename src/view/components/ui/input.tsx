import { CrossCircledIcon } from '@radix-ui/react-icons';
import React, { Ref } from 'react';
import { cn } from '../lib/lib';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, id, type, error, ...props }, ref: Ref<HTMLInputElement>) => {
    return (
      <div className="">
        <input
          type={type}
          className={cn(
            'flex border w-full rounded-md  border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          ref={ref}
          {...props}
        />

        {error && (
          <div className="flex gap-2 mt-2 text-red-500">
            <CrossCircledIcon />
            <span className=" text-xs ">{error}</span>
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

export { Input };
