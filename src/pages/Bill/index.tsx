import { Container } from "components";
import { map } from "lodash-es";

const orderList = [
  {
    id: "qwse#dsfds",
    sequency: "DNA",
    date: "02-12-2023",
    price: "$399",
    status: "Unpaid",
    action: true,
  },
  {
    id: "q@DFe#dsfds",
    sequency: "Standart Sequencing",
    date: "05-02-2024",
    price: "$399",
    status: "Paid",
    action: false,
  },
  {
    id: "qwse#dsfds",
    sequency: "1 Primer / 1 Plate",
    date: "15-03-2024",
    price: "$499",
    status: "Unpaid",
    action: true,
  },
];
const Bills: React.FC = () => {
  return (
    <Container className="max-w-6xl mx-auto min-w-max">
      <div className="relative  overflow-x-auto shadow-md sm:rounded-lg mt-20 p-4  border dark:border-gray-500 overflow-hidden  w-full">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <caption className="p-5 text-xl font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            <div className="flex justify-between">
              <div>
                Billing
                <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                  Browse your bills
                </p>
              </div>
              <div className="w-1/3">
                <input className="input" placeholder="Search..." />
              </div>
            </div>
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Order Id
              </th>
              <th scope="col" className="px-6 py-3">
                Sequency
              </th>
              <th scope="col" className="px-6 py-3">
                Order Date
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {map(orderList, (order) => (
              <tr className="bg-primary text-primary border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap"
                >
                  {order.id}
                </th>
                <td className="px-6 py-4">{order.sequency}</td>
                <td className="px-6 py-4">{order.date}</td>
                <td className="px-6 py-4">{order.price}</td>
                <td className="px-6 py-4">
                  {order.status === "Unpaid" && (
                    <span className="badge badge-danger">{order.status}</span>
                  )}

                  {order.status === "Paid" && (
                    <span className="badge badge-success">{order.status}</span>
                  )}
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center gap-2">
                    <a href="#" className={`btn btn-light`}>
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
                    </a>
                    <a
                      href="#"
                      className="btn btn-light"
                      title="Download your results"
                    >
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
                    {order.action && (
                      <a
                        href="#"
                        className={`btn btn-primary ${
                          order.action ? "" : "cursor-not-allowed"
                        }`}
                      >
                        Paid
                      </a>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default Bills;
