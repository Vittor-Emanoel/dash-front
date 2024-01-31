import { Modal } from '@components/Modal';
import { Button } from '@components/ui/button';
import { TrashIcon } from 'lucide-react';

interface DeleteMemberAlertProps {
  onConfirm(): void;
  onClose(): void;
  onOpen: boolean;
  title: string;
  description?: string;
  isLoading: boolean;
}

export function DeleteMemberAlertModal({
  title,
  description,
  isLoading,
  onClose,
  onConfirm,
  onOpen,
}: DeleteMemberAlertProps) {
  return (
    <Modal open={onOpen} onClose={onClose} title={title}>
      <div className="flex flex-col items-center text-center gap-6">
        <div className="w-[52px] h-[52px] rounded-full bg-red-50 flex items-center justify-center">
          <TrashIcon className="w-6 h-6 text-red-900" />
        </div>
        <p className="max-w-[180px] text-primary font-bold tracking-[-0.5px]">
          {title}
        </p>
        {description && (
          <p className="tracking-[-0.5px] text-muted-foreground ">
            {description}
          </p>
        )}
      </div>

      <div className="mt-10 space-y-4">
        <Button
          className="w-full"
          variant="destructive"
          onClick={onConfirm}
          isLoading={isLoading}
        >
          Sim, desejo excluir
        </Button>
        <Button
          className="w-full"
          variant="outline"
          onClick={onClose}
          disabled={isLoading}
        >
          Cancelar
        </Button>
      </div>
    </Modal>
  );
}
