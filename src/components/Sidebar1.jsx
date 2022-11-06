/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { AiFillHome, AiOutlineUserAdd } from "react-icons/ai";
import { GiStrong } from "react-icons/gi";
import { MdFoodBank, MdQueryStats } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="flex align-center md:flex-row flex-col ">
      <aside className=" w-64" aria-label="Sidebar">
        <div className="overflow-y-auto py-6 px-3 bg-gray-50 rounded dark:bg-gray-800">
          <ul className="space-y-10">
            <li>
              <span className="ml-3 text-orange-400 font-bold">Logo App</span>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal
             text-gray-900 rounded-lg hover:text-white hover:bg-orange-500"
              >
                <AiFillHome
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 "
                />
                <span className="flex-1 ml-3 whitespace-nowrap">Home</span>
                <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  Pro
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:text-white hover:bg-orange-500"
              >
                <AiOutlineUserAdd
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 "
                />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Add Athlete
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:text-white hover:bg-orange-500"
              >
                <GiStrong
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 "
                />
                <span className="flex-1 ml-3 whitespace-nowrap">Athletes</span>
                <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                  3
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:text-white hover:bg-orange-500"
              >
                <MdQueryStats
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 "
                />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Statistics
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:text-white hover:bg-orange-500"
              >
                <MdFoodBank
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 "
                />
                <span className="flex-1 ml-3 whitespace-nowrap">Calories</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:text-white hover:bg-orange-500"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
