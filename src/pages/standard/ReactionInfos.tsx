import {
  ArrowRight,
  EmptySlash,
  FileDownload,
  FileUpload,
} from "components/icons";
import { PrimerInputModal } from "components/modals/PrimerInputModal";
import { map } from "lodash-es";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router";

interface BasicInfosProps {
  onChange: (number) => void;
}

const ReactionInfos = ({ onChange }: BasicInfosProps) => {
  const [isFile, setIsFile] = useState(true);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const onCancel = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col">
      <div className="grow overflow-y-auto text-primary">
        <h3 className="text-3xl mb-4">Reaction Infos</h3>
        <div className="flex flex-col gap-2">
          <div className="">
            <span
              className="h-6 bg-gray-300 flex items-center rounded-full px-1 py-5 w-fit"
              style={{ width: "fit-content" }}
            >
              <span
                onClick={() => setIsFile(true)}
                aria-hidden="true"
                className={`text-xs rounded-full text-white px-3 py-2 cursor-pointer ${
                  isFile ? "bg-blue-600" : "bg-transparent"
                }`}
              >
                File Upload
              </span>
              <span
                onClick={() => setIsFile(false)}
                aria-hidden="true"
                className={`text-xs rounded-full text-white px-3 py-2 cursor-pointer ${
                  !isFile ? "bg-blue-600" : "bg-transparent"
                }`}
              >
                Manula Input
              </span>
            </span>
          </div>
          <div className="bg-secondary rounded-lg">
            {isFile && (
              <>
                <div className="flex items-center justify-between p-4 ">
                  <h5> Excel File Upload</h5>
                  <button
                    type="button"
                    className="btn btn-primary flex items-center gap-2 "
                    onClick={() => onChange(1)}
                  >
                    <FileDownload className="w-5 h-5" />
                    Excel Upload Template
                  </button>
                </div>
                <div className="bg-primary m-4 p-4 rounded-lg">
                  <label className="flex flex-col justify-center items-center cursor-pointer gap-2 overflow-clip rounded-md p-8">
                    <FileUpload className="w-10 h-10" />
                    <span className="tracking-wider text-xs font-light text-center line-clamp-2">
                      Click here to upload an excel file
                    </span>
                    <input className="hidden" accept=".xlsx" type="file" />
                  </label>
                </div>
              </>
            )}

            {!isFile && (
              <div
                className="bg-primary m-4 p-4 rounded-lg cursor-pointer"
                onClick={() => setOpen(true)}
              >
                <div className="text-center py-10">
                  <EmptySlash className="w-10 h-10 m-auto mb-3" />
                  <h4 className="text-2xl">There is no primer</h4>
                  <p className="text-xs font-extralight mt-3">
                    Click here to add primer
                  </p>
                </div>
              </div>
            )}
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
      <PrimerInputModal open={open} onToggle={() => setOpen(!open)} />
    </div>
  );
};

export default ReactionInfos;
