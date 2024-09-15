"use client";

import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { Dispatch, ReactNode, SetStateAction } from "react";

export type TModalOpenProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  children: ReactNode;
};

const MyModal = ({ isOpen, setIsOpen, title, children }: TModalOpenProps) => {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen  items-center justify-center p-4 bg-black bg-opacity-70">
          <DialogPanel className="max-w-lg space-y-4 border rounded-md bg-white p-6">
            <DialogTitle className="font-bold">{title}</DialogTitle>
            <hr />
            {children}
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default MyModal;
