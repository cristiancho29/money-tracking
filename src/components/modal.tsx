import {
  Dialog,
  DialogPanel,
  DialogTitle,
  CloseButton,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50" unmount>
      <div className="fixed inset-0 flex  w-screen justify-center bg-white bg-opacity-30 items-end ">
        <DialogPanel className="bg-green-200 h-fit w-screen p-8 rounded-t-lg">
          <DialogTitle className="pb-4 font-bold text-xl flex justify-between">
            {title}
            <CloseButton>
              <XMarkIcon className="fill-slate-400 w-6 h-6" />
            </CloseButton>
          </DialogTitle>
          {children}
        </DialogPanel>
      </div>
    </Dialog>
  );
}
