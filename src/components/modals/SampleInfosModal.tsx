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

const storedPrimer = [
  { primer: "EBV-RPs", length: 20 },
  { primer: "ERPs", length: 0 },
  { primer: "MVP-RPs", length: 10 },
  { primer: "KAN2-FPs", length: 14 },
  { primer: "EBVs", length: 20 },
  { primer: "M13-FPs", length: 12 },
];
type PrimerInputModalProps = {
  open: boolean;
  onToggle: () => void;
};
const SampleInfosModal = ({ open, onToggle }: PrimerInputModalProps) => {
  const [label, setLabel] = useState("primer-universal");
  const [list, setList] = useState(universalPrimer);

  const onChangeList = (val: string) => {
    if (val === "primer-stored") {
      setList(storedPrimer);
    } else {
      setList(universalPrimer);
    }
    setLabel(val);
  };
  return (
    <ModalComponent
      open={open}
      onClose={onToggle}
      title="Enter Sample Information"
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
        <input className="input" type="number" />
        <input className="input" />
        <input className="input" />
        <input className="input" />
        <input className="input" />
      </div>

      <RadioGroup
        value={label}
        onChange={setLabel}
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
              Over 600bp
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
              Less 600bp
            </span>
          )}
        </RadioGroup.Option>
      </RadioGroup>
    </ModalComponent>
  );
};

export { SampleInfosModal };
