import { ArrowRight } from "components/icons";
import { map } from "lodash-es";
import { Navigate, useNavigate } from "react-router";

const productSize = [
  { name: "productSize", value: "over-600", label: "Over 600bp" },
  { name: "productSize", value: "less-600", label: "Less 600bp" },
];

const tubeType = [
  { name: "tubeType", value: "tube", label: "Tube" },
  { name: "tubeType", value: "tub-600", label: "96- Well plate" },
];

const runType = [
  {
    name: "runType",
    value: "express",
    label: "Express",
    description: "24 hours",
  },
  {
    name: "runType",
    value: "regualar",
    label: "Regular",
    description: "3-5 business day",
  },
];

interface BasicInfosProps {
  onChange: (number) => void;
}

const BasicInfos = ({ onChange }: BasicInfosProps) => {
  const navigate = useNavigate();

  const onCancel = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col">
      <div className="grow overflow-y-auto text-primary">
        <h3 className="text-3xl mb-4">Basic Infos</h3>
        <form className="flex flex-col gap-4 grow min-h-full">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-6">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select an option
              </label>
              <select id="countries" className="input">
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>

            <div className="col-span-6">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Additionally Required Service
              </label>
              <input id="countries" className="input" />
            </div>
          </div>
          <div className="grid grid-cols-12">
            <ul className="col-span-6 grid gap-x-3 gap-y-1  grid-cols-4">
              <h4 className="col-span-4">Product Sixe(bg)</h4>
              {map(productSize, (psize) => (
                <li className="">
                  <input
                    type="radio"
                    id={psize.value}
                    name={psize.name}
                    value={psize.value}
                    className="hidden peer"
                    required
                  />
                  <label
                    htmlFor={psize.value}
                    className="inline-flex items-center justify-between max-w-xs w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="w-full">{psize.label}</div>
                  </label>
                </li>
              ))}
            </ul>

            <ul className="col-span-6 grid gap-x-3 gap-y-1  grid-cols-4">
              <h4 className="col-span-4">Product Sixe(bg)</h4>
              {map(tubeType, (psize) => (
                <li className="">
                  <input
                    type="radio"
                    id={psize.value}
                    name={psize.name}
                    value={psize.value}
                    className="hidden peer"
                    required
                  />
                  <label
                    htmlFor={psize.value}
                    className="inline-flex items-center justify-between max-w-xs w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="w-full">{psize.label}</div>
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-12">
            <ul className="col-span-6 grid gap-x-3 gap-y-1  grid-cols-4">
              <h4 className="col-span-4">Product Sixe(bg)</h4>
              {map(runType, (psize) => (
                <li className="">
                  <input
                    type="radio"
                    id={psize.value}
                    name={psize.name}
                    value={psize.value}
                    className="hidden peer"
                    required
                  />
                  <label
                    htmlFor={psize.value}
                    className="inline-flex items-center justify-between max-w-xs w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div>
                      <h5 className="w-full">{psize.label}</h5>
                      <p className="font-light text-sm">{psize.description}</p>
                    </div>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </form>
      </div>
      <div className="flex justify-between mt-14">
        <button
          type="button"
          className="btn btn-secondary flex items-center gap-2 "
          onClick={onCancel}
        >
          Cancel
        </button>

        <button
          type="button"
          className="btn btn-primary flex items-center gap-2 "
          onClick={() => onChange(2)}
        >
          Next
          <ArrowRight className="w-4 h-4 " />
        </button>
      </div>
    </div>
  );
};

export default BasicInfos;
