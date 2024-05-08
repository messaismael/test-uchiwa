import { RadioGroup } from "@headlessui/react";
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

interface BillingInfosProps {
  onChange: (number) => void;
}

const BillingInfos = ({ onChange }: BillingInfosProps) => {
  const navigate = useNavigate();

  const onCancel = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col">
      <div className="grow overflow-y-auto text-primary">
        <h3 className="text-3xl mb-4">Billing Infos</h3>
        <form className="flex flex-col gap-4 grow min-h-full">
          <div>
            <RadioGroup className="flex flex-col gap-3">
              <RadioGroup.Label className="font-medium">
                Blast Service
              </RadioGroup.Label>
              <div className="flex gap-3">
                <RadioGroup.Option value="primer-universal">
                  {({ checked }) => (
                    <span
                      className={`${
                        checked
                          ? "border-primary-600 text-primary-600 "
                          : "border-gray-200  dark:border-gray-700"
                      } inline-flex items-center justify-between max-w-xs w-full px-4 py-3 text-gray-500 bg-white border  rounded-lg cursor-pointer dark:hover:text-gray-300  hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700`}
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
                      } inline-flex items-center justify-between max-w-xs w-full px-4 py-3 text-gray-500 bg-white border  rounded-lg cursor-pointer dark:hover:text-gray-300  hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700`}
                    >
                      No
                    </span>
                  )}
                </RadioGroup.Option>
              </div>
              <RadioGroup.Description>
                <div
                  className="flex items-center gap-3 p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
                  role="alert"
                >
                  <svg
                    className="flex-shrink-0 inline w-4 h-4 me-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span className="sr-only">Info</span>
                  <div>
                    This is a service that a that is highly similar to the
                    sequence of DNA obtained in the Local Alignment Search Tool
                    and NCBI database We will provide you with data files
                    retrieved from NCBI and no analysis services will be
                    provided.
                  </div>
                </div>
              </RadioGroup.Description>
            </RadioGroup>

            <RadioGroup className="flex flex-col gap-3">
              <RadioGroup.Label className="font-medium">
                Blast Service
              </RadioGroup.Label>
              <div className="flex gap-3">
                <RadioGroup.Option value="now">
                  {({ checked }) => (
                    <span
                      className={`${
                        checked
                          ? "border-primary-600 text-primary-600 "
                          : "border-gray-200  dark:border-gray-700"
                      } inline-flex items-center justify-between max-w-xs w-full px-4 py-3 text-gray-500 bg-white border  rounded-lg cursor-pointer dark:hover:text-gray-300  hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700`}
                    >
                      Immediate Disposal
                    </span>
                  )}
                </RadioGroup.Option>
                <RadioGroup.Option value="1-month">
                  {({ checked }) => (
                    <span
                      className={`${
                        checked
                          ? "border-primary-600 text-primary-600 "
                          : "border-gray-200  dark:border-gray-700"
                      } inline-flex items-center justify-between max-w-xs w-full px-4 py-3 text-gray-500 bg-white border  rounded-lg cursor-pointer dark:hover:text-gray-300  hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700`}
                    >
                      1 Month
                    </span>
                  )}
                </RadioGroup.Option>
                <RadioGroup.Option value="3-months">
                  {({ checked }) => (
                    <span
                      className={`${
                        checked
                          ? "border-primary-600 text-primary-600 "
                          : "border-gray-200  dark:border-gray-700"
                      } inline-flex items-center justify-between max-w-xs w-full px-4 py-3 text-gray-500 bg-white border  rounded-lg cursor-pointer dark:hover:text-gray-300  hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700`}
                    >
                      3 Months
                    </span>
                  )}
                </RadioGroup.Option>
              </div>
              <RadioGroup.Description>
                <div
                  className="flex items-center gap-3 p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
                  role="alert"
                >
                  <svg
                    className="flex-shrink-0 inline w-4 h-4 me-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span className="sr-only">Info</span>
                  <div>
                    If immediate disposal is selected, additional orders and
                    re-sequencing cannot be ordered as the sample is immediately
                    discarded after the primary experiment
                  </div>
                </div>
              </RadioGroup.Description>
            </RadioGroup>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Orderred By
              </label>
              <input id="countries" className="input" />
            </div>
            <div>
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Actual Orderer Condact
              </label>
              <input id="countries" className="input" />
            </div>

            <div className="">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Primary E-mail
              </label>
              <input id="countries" className="input" />
            </div>
            <div>
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Additional E-mail for Result
              </label>
              <input id="countries" className="input" />
            </div>

            <div className="">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Comment
              </label>
              <input id="countries" className="input" />
            </div>
            <div>
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Institution for Billing
              </label>
              <div className="flex items-center gap-2 ">
                <input id="countries" className="input" />
                <button className="btn btn-primary flex items-center gap-2 w-16 ">
                  Find
                </button>
              </div>
            </div>

            <div className="">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Mobile Number
              </label>
              <input id="countries" className="input" />
            </div>
            <div>
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Country
              </label>
              <input id="countries" className="input" />
            </div>

            <div className="">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Billing Address
              </label>
              <input id="countries" className="input" />
            </div>
            <div>
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                PO Number
              </label>
              <input id="countries" className="input" />
            </div>

            <div className="">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                ATTN
              </label>
              <input id="countries" className="input" />
            </div>
            <div>
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Coupon
              </label>
              <div className="flex items-center gap-2 ">
                <input id="countries" className="input" />
                <button className="btn btn-primary flex items-center gap-2 w-16 ">
                  Find
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="flex justify-between mt-14">
        <div className="flex gap-3">
          <button
            type="button"
            className="btn btn-dark flex items-center gap-2 "
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-light flex items-center gap-2 "
            onClick={() => onChange(1)}
          >
            Back
          </button>
        </div>

        <button
          type="button"
          className="btn btn-primary flex items-center gap-2 "
          onClick={() => onChange(3)}
        >
          Next
          <ArrowRight className="w-4 h-4 " />
        </button>
      </div>
    </div>
  );
};

export default BillingInfos;
