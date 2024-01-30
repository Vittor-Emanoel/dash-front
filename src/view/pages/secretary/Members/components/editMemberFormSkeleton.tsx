import { Skeleton } from '@components/ui/skeleton';

export function EditMemberSkeleton() {
  return (
    <div className="space-y-4">
      <div
        placeholder="Nome completo"
        className="flex border w-full rounded-md h-[52px] text-sm border-input bg-background px-3 py-2  ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Skeleton className="w-[500px] " />
      </div>

      <div
        placeholder="Nome completo"
        className="flex border w-full rounded-md h-[52px] text-sm border-input bg-background px-3 py-2  ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Skeleton className="w-[500px] " />
      </div>
      <div
        placeholder="Nome completo"
        className="flex border w-full rounded-md h-[52px] text-sm border-input bg-background px-3 py-2  ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Skeleton className="w-[500px] " />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div
          className="flex border w-full rounded-md h-[52px] text-sm border-input bg-background px-3 py-2  ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Nome completo"
        >
          <Skeleton className="w-[500px]" />
        </div>

        <div
          className="flex border w-full rounded-md h-[52px] text-sm border-input bg-background px-3 py-2  ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Nome completo"
        >
          <Skeleton className="w-[500px]" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div
          className="flex border w-full rounded-md h-[52px] text-sm border-input bg-background px-3 py-2  ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Nome completo"
        >
          <Skeleton className="w-[500px]" />
        </div>

        <div
          className="flex border w-full rounded-md h-[52px] text-sm border-input bg-background px-3 py-2  ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Nome completo"
        >
          <Skeleton className="w-[500px]" />
        </div>
      </div>
    </div>
  );
}
