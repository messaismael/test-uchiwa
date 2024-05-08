import React, { Fragment, useEffect, useState } from "react";

import { Logo } from "components";
import { useLocation, useParams } from "react-router-dom";
import { includes, map } from "lodash-es";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import AuthService from "services/auth.service";

const navs = [
  {
    id: "/sequency",
    name: "Sequencing",
    connected: false,
  },
  {
    id: "/order",
    name: "Order History",
    connected: true,
  },
  {
    id: "/bill",
    name: "Billing",
    connected: true,
  },
  {
    id: "#",
    name: "About Us",
    connected: false,
  },
];

export const Header: React.FC = () => {
  let location = useLocation();
  const [user, setUser] = useState(null);
  const [isAuthenticate, setIsAuthenticate] = useState(false);

  const onResult = () => {
    AuthService.processLogout();
  };

  const onLogout = () => {
    AuthService.processLogout();
    setIsAuthenticate(false);
  };
  useEffect(() => {
    setUser(AuthService.getUserInfos());
    setIsAuthenticate(AuthService.isLoggedIn);
  }, []);

  return (
    <nav className="bg-secondary w-full z-20 top-0 start-0 border-b sticky border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Logo />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-primary">
            Lab
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 gap-2 md:space-x-0 rtl:space-x-reverse">
          {!isAuthenticate && (
            <div className="flex gap-3">
              <a href="/auth/register" className="btn btn-light">
                Register
              </a>
              <a href="/auth/login" className="btn btn-primary">
                Login
              </a>
            </div>
          )}

          {isAuthenticate && (
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center items-center gap-2 rounded-full text-primary px-2 py-2 border  ">
                  <span className="w-4 h-4 bg-primary-600 bg-opacity-40 rounded-full"></span>
                  {user.email}
                  <ChevronDownIcon
                    className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-primary shadow-lg ring-1 ring-black/5 focus:outline-none">
                  <div className="px-1 py-1 divide-y dark:divide-orange-400">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/result"
                          className={`${
                            active ? "text-primary-600" : "text-primary"
                          } group flex w-full items-center  px-2 py-2 text-sm`}
                        >
                          Your Results
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={onLogout}
                          className={`${
                            active ? "text-primary-600" : "text-primary"
                          } group flex w-full items-center  px-2 py-2 text-sm`}
                        >
                          Logout
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          )}

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:border-gray-700">
            {map(navs, (nav) => (
              <>
                {((nav.connected && isAuthenticate) || !nav.connected) && (
                  <li>
                    <a
                      href={`${nav.id}`}
                      className={`"block py-2 px-3   ${
                        includes(location.pathname, nav.id)
                          ? "text-primary-600 dark:text-blue-500 "
                          : "text-primary"
                      }`}
                      aria-current="page"
                    >
                      {nav.name}
                    </a>
                  </li>
                )}
              </>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
