import { ArrowLeft } from 'lucide-react';
import { ReactNode } from 'react';

interface HeaderPagesProps {
  title: string;
  subtitle: string;
  leftAction?(): void;
  children?: ReactNode;
}

export function HeaderPages({
  title,
  subtitle,
  leftAction,
  children,
}: HeaderPagesProps) {
  return (
    <div className="py-8">
      <div className=" flex flex-col">
        <div className="flex gap-2 items-center">
          <a
            onClick={leftAction}
            className="hover:bg-muted transition-colors p-2 rounded cursor-pointer"
          >
            <ArrowLeft />
          </a>

          <h2 className="text-3xl font-bold  max-md:text-xl max-md:font-bold">
            {title}
          </h2>
        </div>
        <div className="flex gap-4">
          <p className="text-zinc-500 text-base text-muted-foreground max-md:text-sm leading-relaxed">
            {subtitle}
          </p>
          {children}
        </div>
      </div>
    </div>
  );
}
