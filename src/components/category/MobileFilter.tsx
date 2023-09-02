"use client";
import React, { useState } from "react";
import Button from "../ui/Button";
import { Filter, Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";
import IconButton from "../ui/icon-button";

const MobileFilter = () => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <Plus size={20} />
      </Button>

      <Dialog
        open={open}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={onClose}
      >
        {/* Background */}
        <div className="fixed inset-0 bg-black bg-opacity-25 " />
        {/* Dialog */}
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col oveflow-y-auto bg-white py-4 pb-6 shadow-xl">
            hi
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X />} />
            </div>
            <div className="p-4">
              <Filter />
              <Filter />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilter;
