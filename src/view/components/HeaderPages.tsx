import { ReactNode } from 'react';
import { cn } from './lib/lib';

interface HeaderPageRootProps {
  children: ReactNode;
  className?: string;
}

const HeaderPageRoot = ({ children, className }: HeaderPageRootProps) => {
  return <div className={cn('flex flex-col', className)}>{children}</div>;
};

interface HeaderPageTitleProps {
  children: ReactNode;
  className?: string;
}

const HeaderPageTitle = ({ children, className }: HeaderPageTitleProps) => {
  return (
    <h1
      className={cn(
        'text-3xl font-bold  max-md:text-xl max-md:font-bold',
        className,
      )}
    >
      {children}
    </h1>
  );
};

interface HeaderPageSubtitleProps {
  children: ReactNode;
  className?: string;
}

const HeaderPageSubtitle = ({
  children,
  className,
}: HeaderPageSubtitleProps) => {
  return (
    <p
      className={cn(
        'text-zinc-500 text-base text-muted-foreground max-md:text-sm leading-relaxed',
        className,
      )}
    >
      {children}
    </p>
  );
};

export { HeaderPageRoot, HeaderPageSubtitle, HeaderPageTitle };
