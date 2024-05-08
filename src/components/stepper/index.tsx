import { map } from "lodash-es";

interface StepItem {
  id: number;
  name: string;
}
interface StepperProps {
  steps: StepItem[];
  currentStep: number;
}
const Stepper = ({ steps, currentStep }: StepperProps) => {
  return (
    <ul className="flex flex-col gap-3 text-gray-500  dark:border-gray-700 dark:text-gray-400">
      {map(steps, (step) => (
        <li className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span
              className={`flex items-center justify-center w-11 h-11 rounded-full -start-4   ${
                step.id < currentStep
                  ? "bg-green-500 text-white ring-0"
                  : step.id === currentStep
                  ? "bg-primary-600 text-white ring-0"
                  : "bg-primary ring-0"
              }  ring-gray-200 dark:ring-gray-900`}
            >
              {step.id < currentStep && (
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
              )}
              {step.id >= currentStep && <>{step.id}</>}
            </span>

            <div
              className={`${
                step.id === currentStep ? "text-xl text-primary-600" : ""
              }`}
            >
              <p className="text-sm">Step {step.id}</p>
              <h5 className="font-normal leading-tight">{step.name}</h5>
            </div>
          </div>
          {step.id < steps.length && (
            <div
              className={`h-14 w-1 ml-5 rounded-md ${
                step.id < currentStep
                  ? "bg-green-500"
                  : step.id === currentStep
                  ? "bg-primary-600"
                  : " bg-primary "
              }`}
            ></div>
          )}
        </li>
      ))}
    </ul>
  );
};

export { Stepper };
