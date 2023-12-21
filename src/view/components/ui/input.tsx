import React, { Ref, RefObject } from 'react';
import {
  default as MaskedInputProps,
  default as TextMask,
} from 'react-input-mask';
import { cn } from '../lib/lib';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  mask?: (string | RegExp)[]; // Tipo da máscara aceita
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type = 'text', mask, ...props },
    ref: Ref<HTMLInputElement>,
  ) => {
    if (mask) {
      return (
        <TextMask
          mask={mask}
          {...(props as MaskedInputProps)}
          render={(ref: RefObject<HTMLInputElement>, maskProps: any) => (
            <input
              {...maskProps}
              className={cn(
                'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
                className,
              )}
              ref={ref}
              type={type}
            />
          )}
        />
      );
    }

    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';

export { Input };
