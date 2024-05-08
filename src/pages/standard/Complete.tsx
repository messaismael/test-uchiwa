import { ArrowRight, EmptySlash } from "components/icons";
import { PrimerInfosModal } from "components/modals/PrimerInfosModal";
import { map } from "lodash-es";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router";

const Complete = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const onCancel = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col justify-center  h-full">
      <div className="">
        <div className="text-center py-10 text-primary">
          <div
            className={`flex items-center mx-auto mb-8 w-12 h-12 rounded-full -start-4 bg-green-500 text-white ring-0  ring-gray-200 dark:ring-gray-900`}
          >
            <svg
              className="w-7 h-7 m-auto "
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
          </div>
          <h4 className="text-xl">
            {" "}
            Your order has been placed{" "}
            <span className="text-green-600">successfully</span>{" "}
          </h4>
          <p className="text-sm font-extralight mt-3">
            Order Number : <strong> Rcqfnnja</strong>
          </p>
        </div>
      </div>
      <div className="py-11 w-full bg-secondary rounded-xl text-center text-primary">
        <h5>Print your order barcode to send to Amsterdam laboratory </h5>
        <div className="flex justify-center gap-3 mt-4">
          <button
            type="button"
            className="btn btn-light flex items-center gap-2 "
          >
            DHL
          </button>
          <button
            type="button"
            className="btn btn-light flex items-center gap-2 "
          >
            Fedex
          </button>
          <button
            type="button"
            className="btn btn-light flex items-center gap-2 "
          >
            UPs
          </button>

          <button
            type="button"
            className="btn btn-primary flex items-center gap-2 "
          >
            Print Order Barcode
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-14">
        <button
          type="button"
          className="btn btn-dark flex items-center gap-2 "
          onClick={onCancel}
        >
          Go to Home
        </button>
      </div>
      <PrimerInfosModal open={open} onToggle={() => setOpen(!open)} />
    </div>
  );
};

export default Complete;
