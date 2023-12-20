interface HeaderPagesProps {
  title: string;
  subtitle: string;
}

export function HeaderPages({ title, subtitle }: HeaderPagesProps) {
  return (
    <div className="py-8">
      <div className="space-y-1">
        <h2 className="text-3xl font-bold tracking-tight max-md:text-xl max-md:font-bold">
          {title}
        </h2>
        <p className="text-zinc-500 text-base text-muted-foreground max-md:text-sm">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
