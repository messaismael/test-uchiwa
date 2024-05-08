import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  footer?: ReactNode;
  title: string;
  description?: string;
}
const ModalComponent = ({
  open,
  onClose,
  children,
  title,
  description,
  footer,
}: DialogProps) => {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        onClose={onClose}
        className="relative z-50 bg-primary rounded-lg shadow dark:bg-gray-700"
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-60" />
        </Transition.Child>

        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <div className="flex py-3 items-center justify-center  text-center bg-primary rounded-lg shadow dark:bg-gray-700">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="flex flex-col  justify-between  dark:border-gray-600">
                <Dialog.Title className="flex justify-between text-xl text-left font-semibold text-primary border-b dark:border-gray-600 px-4 py-3">
                  <span>{title}</span>
                  <button
                    type="button"
                    onClick={onClose}
                    className="text-primary bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="static-modal"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </Dialog.Title>

                <div className="flex flex-col gap-4 px-6 py-5 border-b rounded-t dark:border-gray-600 w-[300px] max-w-xl">
                  {children}
                </div>
                <div className="flex justify-end gap-4 px-4 py-3">{footer}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export { ModalComponent };
