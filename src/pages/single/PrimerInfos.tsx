import { ArrowRight, EmptySlash } from "components/icons";
import { PrimerInfosModal } from "components/modals/PrimerInfosModal";
import { map } from "lodash-es";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router";

interface PrimerInfosProps {
  onChange: (number) => void;
}

const PrimerInfos = ({ onChange }: PrimerInfosProps) => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const onCancel = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col">
      <div className="grow overflow-y-auto text-primary">
        <h3 className="text-3xl mb-4 ">Primer Condition</h3>
        <div className="bg-secondary rounded-md">
          <div
            className="text-center py-10 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <EmptySlash className="w-10 h-10 m-auto mb-3" />
            <h4 className="text-2xl">There is no Primer Condition</h4>
            <p className="text-xs font-extralight mt-3">
              Click here to add a Primer Condition
            </p>
          </div>
        </div>
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
            onClick={() => onChange(2)}
          >
            Back
          </button>
        </div>

        <button
          type="button"
          className="btn btn-primary flex items-center gap-2 "
          onClick={() => onChange(5)}
        >
          Next
          <ArrowRight className="w-4 h-4 " />
        </button>
      </div>
      <PrimerInfosModal open={open} onToggle={() => setOpen(!open)} />
    </div>
  );
};

export default PrimerInfos;
