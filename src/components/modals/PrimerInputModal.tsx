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
const PrimerInputModal = ({ open, onToggle }: PrimerInputModalProps) => {
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
      title="Primer Input"
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
      <input className="input" />

      <RadioGroup
        value={label}
        // onChange={onChangeList}
        className="flex items-center gap-3"
      >
        <RadioGroup.Option
          value="primer-universal"
          onClick={() => onChangeList("primer-universal")}
        >
          {({ checked }) => (
            <span
              className={`${
                checked ? "border-primary-600 text-primary-600 " : ""
              } inline-flex items-center justify-between max-w-xs w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700  hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700`}
            >
              Universal Primer
            </span>
          )}
        </RadioGroup.Option>
        <RadioGroup.Option
          value="primer-stored"
          onClick={() => onChangeList("primer-stored")}
        >
          {({ checked }) => (
            <span
              className={`${
                checked ? "border-primary-600 text-primary-600 " : ""
              } inline-flex items-center justify-between max-w-xs w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700  hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700`}
            >
              Primer Stored
            </span>
          )}
        </RadioGroup.Option>
      </RadioGroup>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Primer
              </th>
              <th scope="col" className="px-6 py-3">
                Length
              </th>
            </tr>
          </thead>
          <tbody>
            {map(list, (e) => (
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {e.primer}
                </th>
                <td className="px-6 py-4">{e.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ModalComponent>
  );
};

export { PrimerInputModal };
