import { Logo } from "components";
import { users } from "data";
import { isNil, map } from "lodash-es";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthService from "services/auth.service";

const steps = [
  {
    id: 1,
    name: "Personal Infos",
  },
  {
    id: 2,
    name: "Delivery Address",
  },
];
const RegisterPage = () => {
  const [step, setStep] = useState(1);

  const navigate = useNavigate();
  let location = useLocation();
  console.log({ location });

  const submit = () => {
    const query = Object.fromEntries(new URLSearchParams(location.search));
    AuthService.processLogin(users[0]);
    navigate(isNil(query.prev) ? "/" : query.prev);
  };

  const onNext = () => {
    setStep(step + 1);
  };

  const onCancel = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary">
      <div className=" w-6/12 grid grid-cols-2 bg-primary border border-gray-200 rounded-2xl overflow-hidden shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="bg-primary-600 bg-opacity-25 flex items-center justify-center gap-3 py-10">
          <Logo /> <span className="text-medium text-2xl">Lab</span>
        </div>
        <form className="space-y-6 text-primary sm:p-6" action="#">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Customer Registration
          </h5>

          <RegistrationStepper steps={steps} currentStep={step} />
          <div
            className={`flex flex-col gap-4 ${step !== 1 ? "hidden" : "block"}`}
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="input"
                placeholder="name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="input"
                placeholder="name@company.com"
                required
              />
            </div>
            <div className="flex gap-2">
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="input"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="input"
                  required
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 w-full">
              <button onClick={onCancel} className="btn btn-dark">
                Cancel
              </button>
              <button onClick={onNext} className="btn btn-primary">
                Next
              </button>
            </div>
          </div>

          <div
            className={`flex flex-col gap-4 ${step !== 2 ? "hidden" : "block"}`}
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Salutation
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="input"
                placeholder="name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="input"
                placeholder=""
                required
              />
            </div>

            <div className="flex gap-2">
              <div>
                <label
                  htmlFor="firstname"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="First Name"
                  className="input"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lastname"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Last Name"
                  className="input"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="universitycompany"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                University/Company
              </label>
              <input
                type="text"
                name="universitycompany"
                id="universitycompany"
                className="input"
                placeholder=""
                required
              />
            </div>
            <div>
              <label
                htmlFor="institute"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Institute
              </label>
              <input
                type="text"
                name="institute"
                id="institute"
                className="input"
                placeholder=""
                required
              />
            </div>
            <div>
              <label
                htmlFor="department"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Department
              </label>
              <input
                type="text"
                name="department"
                id="department"
                className="input"
                placeholder="name@company.com"
                required
              />
            </div>

            <div className="flex justify-end gap-2 w-full">
              <button onClick={onCancel} className="btn btn-dark">
                Cancel
              </button>
              <button onClick={submit} className="btn btn-primary">
                Register
              </button>
            </div>
          </div>

          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Already registered?{" "}
            <a
              href="#"
              className="text-primary-600 hover:underline dark:text-blue-500"
            >
              Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

interface StepItem {
  id: number;
  name: string;
}
interface StepProps {
  steps: StepItem[];
  currentStep: number;
}
const RegistrationStepper = ({ steps, currentStep }: StepProps) => {
  return (
    <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
      {map(steps, (step) => (
        <li className="flex  md:w-full items-center">
          <span
            className={`flex items-center flex-shrink-0 ${
              currentStep >= step.id ? "text-primary-600" : "text-primary"
            }`}
          >
            {currentStep <= step.id && (
              <span className="mr-2  w-5 h-5 flex items-center justify-center text-xs rounded-full ">
                {step.id}
              </span>
            )}
            {currentStep > step.id && (
              <svg
                className="w-5 h-5 mr-2 text-green-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
            )}

            {step.name}
          </span>
          {step.id !== steps.length && (
            <span className="flex relative w-full ">
              <span className="absolute left-2 right-2 border-b border-gray-200 dark:border-gray-600"></span>
            </span>
          )}
        </li>
      ))}
      {/* <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
        <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
          <span className="me-2">2</span>
          Account <span className="hidden sm:inline-flex sm:ms-2">Info</span>
        </span>
      </li>
      <li className="flex items-center">
        <span className="me-2">3</span>
        Confirmation
      </li> */}
    </ol>
  );
};

export default RegisterPage;
