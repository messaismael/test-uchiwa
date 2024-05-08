import { Container } from "components";
import { map } from "lodash-es";

const resultList = [
  {
    id: "qwse#dsfds",
    sequency: "DNA",
    date: "02-12-2023",
    shippedIn: "Cameroon, Douala,  1054",
    shippedTracking: "France, paris",
    status: "Pending",
    action: true,
  },
  {
    id: "q@DFe#dsfds",
    sequency: "Standart Sequencing",
    date: "05-02-2024",
    shippedIn: "Cameroon, Yaounde, Mokolo",
    shippedTracking: "Cameroon, Yaounde, Mokolo",
    status: "Delivered",
    action: false,
  },
  {
    id: "qwse#dsfds",
    sequency: "1 Primer / 1 Plate",
    date: "15-03-2024",
    shippedIn: "Cameroon, Douala 1054",
    shippedTracking: "France, paris",
    status: "Pending",
    action: false,
  },
];

const Result: React.FC = () => {
  return (
    <Container className="max-w-5xl mx-auto">
      <div className="flex flex-col gap-3 shadow-md sm:rounded-lg mt-20 border p-4 text-primary dark:border-gray-500 overflow-hidden ">
        <div>
          <h3 className="text-xl font-semibold mb-2">Your Results</h3>
          <p className="text-sm font-light">
            {" "}
            Check-out our latest Oxford Nanopore based service, the
            BacterialSeq. Create the genome sequence including annotation from
            the raw sequencing reads. Fast, accurate, and budget-friendly.{" "}
          </p>
        </div>
        <div className="flex justify-end mt-4 mb-2">
          <div className="w-1/3">
            <input className="input" placeholder="Search..." />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {map(resultList, (data) => (
            <Card data={data} />
          ))}
        </div>
      </div>
    </Container>
  );
};

const Card = ({ data }: any) => {
  return (
    <a
      href="#"
      className="block col-span-1 py-2 px-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5 className="mb-2 mt-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
        {data.sequency}
      </h5>
      <div className="flex flex-col text-sm mb-3">
        <ul>
          <li className="flex justify-between">
            <span className="font-medium flex-shrink-0"> Date :</span>
            <span className="ml-2 "> {data.date}</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium flex-shrink-0"> Shipped In : </span>
            <span className="ml-2"> {data.shippedIn}</span>
          </li>
        </ul>
      </div>
      <div className="flex justify-end gap-1">
        <a href="#" className="btn btn-dark" title="View">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </span>
        </a>
        <a href="#" className="btn btn-primary" title="Download your results">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </span>
        </a>
      </div>
    </a>
  );
};

export default Result;
