import { cn } from '../../../../app/utils/cn';

interface IBoxProps {
  title: string;
  number: string;
  color?: string;
}

export function Box({ title, number, color }: IBoxProps) {
  return (
    <div
      className={cn(
        'bg-gray-200 flex w-[250px] h-[150px] transition-colors  rounded-lg hover:bg-gray-400 cursor-pointer',
      )}
    >
      <div
        className={cn(
          'w-3 bg-green-700/60 overflow-hidden rounded-l-lg',
          color,
        )}
      ></div>
      <div className="flex justify-center gap-3 flex-col p-4">
        <h2 className="font-bold text-xl text-gray-900">{title}</h2>
        <span className="font-normal text-lg text-gray-900">{number}</span>
      </div>
    </div>
  );
}
