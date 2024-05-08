import { RadioGroup } from "@headlessui/react";
import { ModalComponent } from "components/dialog";
import { map } from "lodash-es";
import { useState } from "react";

const universalPrimer = [
  { primer: "EBV-RP", length: 20 },
  { primer: "ERP", length: 0 },
  { primer: "MVP-RP", length: 10 },
  { primer: "KAN2-FP", length: 14 },
  { primer: "EBV", length: 20 },
  { primer: "M13-FP", length: 12 },
];

const primers = [
  {
    value: "primer-universal",
    name: "Universal",
    description: "Macrogen’s in-house Universal primers",
  },
  {
    value: "primer-enclosed",
    name: "Enclosed",
    description: "sending your own primers enclosed in your sample package.",
  },
  {
    value: "primer-synthesis",
    name: "UnivSynthesisersal",
    description: "If you need us to synthesize your own primers.",
  },
  {
    value: "primer-stored",
    name: "Stored",
    description: "If you have used the same primer in previous orders.",
  },
];
type PrimerInputModalProps = {
  open: boolean;
  onToggle: () => void;
};
const PrimerInfosModal = ({ open, onToggle }: PrimerInputModalProps) => {
  return (
    <ModalComponent
      open={open}
      onClose={onToggle}
      title="Add Primer Condition"
      footer={
        <div className="flex gap-3">
          <button
            type="button"
            className="btn btn-dark flex items-center gap-2 "
            onClick={() => onToggle}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-primary flex items-center gap-2 "
          >
            Save
          </button>
        </div>
      }
    >
      <div className="grid grid-cols-2 gap-4">
        <input className="input" />
        <input className="input" />
        <input className="input" />
        <input className="input" type="number" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <RadioGroup
          // value={label}
          // onChange={setLabel}
          className="flex items-center gap-3"
        >
          <RadioGroup.Option value="primer-universal">
            {({ checked }) => (
              <span
                className={`${
                  checked
                    ? "border-primary-600 text-primary-600 "
                    : "border-gray-200  dark:border-gray-700"
                } inline-flex items-center justify-between max-w-xs w-full p-2 text-gray-500 bg-white border  rounded-lg cursor-pointer dark:hover:text-gray-300  hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700`}
              >
                Yes
              </span>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="primer-stored">
            {({ checked }) => (
              <span
                className={`${
                  checked
                    ? "border-primary-600 text-primary-600 "
                    : "border-gray-200  dark:border-gray-700"
                } inline-flex items-center justify-between max-w-xs w-full p-2 text-gray-500 bg-white border  rounded-lg cursor-pointer dark:hover:text-gray-300  hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700`}
              >
                No
              </span>
            )}
          </RadioGroup.Option>
        </RadioGroup>
        <RadioGroup
          // value={label}
          // onChange={setLabel}
          className="flex items-center gap-3"
        >
          <RadioGroup.Option value="primer-universal">
            {({ checked }) => (
              <span
                className={`${
                  checked
                    ? "border-primary-600 text-primary-600 "
                    : "border-gray-200  dark:border-gray-700"
                } inline-flex items-center justify-between max-w-xs w-full p-2 text-gray-500 bg-white border  rounded-lg cursor-pointer dark:hover:text-gray-300  hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700`}
              >
                Yes
              </span>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="primer-stored">
            {({ checked }) => (
              <span
                className={`${
                  checked
                    ? "border-primary-600 text-primary-600 "
                    : "border-gray-200  dark:border-gray-700"
                } inline-flex items-center justify-between max-w-xs w-full p-2 text-gray-500 bg-white border  rounded-lg cursor-pointer dark:hover:text-gray-300  hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700`}
              >
                No
              </span>
            )}
          </RadioGroup.Option>
        </RadioGroup>

        <RadioGroup
          // value={label}
          // onChange={setLabel}
          className="flex items-center flex-wrap gap-3 col-span-2 "
        >
          {map(primers, (primer) => (
            <RadioGroup.Option value={primer.value}>
              {({ checked }) => (
                <span
                  className={`${
                    checked
                      ? "border-primary-600 text-primary-600 "
                      : "border-gray-200  dark:border-gray-700"
                  } h-full flex flex-col text-left max-w-xs w-full p-2 text-gray-500 bg-white border  rounded-lg cursor-pointer dark:hover:text-gray-300  hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700`}
                >
                  <h5 className="text-lg font-medium">{primer.name}</h5>
                  <p className="font-light text-sm">{primer.description}</p>
                </span>
              )}
            </RadioGroup.Option>
          ))}
        </RadioGroup>
      </div>
    </ModalComponent>
  );
};

export { PrimerInfosModal };
