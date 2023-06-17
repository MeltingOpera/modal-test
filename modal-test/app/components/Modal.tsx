"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: any }) {
  const router = useRouter();

  const handleOnOpenChange = (open: boolean) => {
    if (!open) {
      router.back();
    }
  };

  return (
    <Dialog.Root open onOpenChange={handleOnOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed flex justify-center align-middle inset-0 bg-black/70 overflow-y-auto">
          <Dialog.Content className="max-w-xs">{children}</Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
