import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeaderPagesProps {
  title: string;
  subtitle: string;
  backPage?: boolean;
}

export function HeaderPages({ title, subtitle, backPage }: HeaderPagesProps) {
  const navigate = useNavigate();

  return (
    <div className="py-8">
      <div className=" flex flex-col">
        <div className="flex gap-2 items-center">
          {backPage && (
            <a
              onClick={() => navigate(-1)}
              className="hover:bg-muted transition-colors p-2 rounded cursor-pointer"
            >
              <ArrowLeft />
            </a>
          )}
          <h2 className="text-3xl font-bold tracking-tight max-md:text-xl max-md:font-bold">
            {title}
          </h2>
        </div>
        <div>
          <p className="text-zinc-500 text-base text-muted-foreground max-md:text-sm">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
