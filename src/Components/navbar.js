import React, { useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, FilterIcon } from "@heroicons/react/outline";
import "../App.css";

export default function Navbar() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({
    year: "",
    month: "",
    day: "",
    complain: "",
    actSection: "",
    policeStation: ""
  });

  const handleFilterToggle = () => {
    setFilterOpen(!filterOpen);
  };

  const handleOptionChange = (event, fieldName) => {
    setSelectedOptions({
      ...selectedOptions,
      [fieldName]: event.target.value
    });
  };

  return (
    <Disclosure as="nav" className="bg-light-800 rounded-md mt-2 border border-gray-700">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center">
                {/* Filter Icon */}
                <button
                  onClick={handleFilterToggle}
                  type="button"
                  className="text-gray-400 focus:outline-none ml-4"
                >
                  <span className="sr-only">Open filter</span>
                  <FilterIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                {/* Filter Select */}
                {filterOpen && (
                  <div className="flex justify-between">
                    <div className="flex items-center mx-2">
                      <select
                        value={selectedOptions.year}
                        onChange={(e) => handleOptionChange(e, "year")}
                        className="text-gray-400 focus:outline-none border border-gray-400 px-4 py-2 rounded-md"
                      >
                        <option value="">Year</option>
                        {Array.from({ length: 75 }, (_, index) => {
                          const year = 2024 - index;
                          return (
                            <option key={year} value={year}>
                              {year}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    {console.log(selectedOptions)}
                    <div className="flex items-center mx-2">
                      <select
                        value={selectedOptions.day}
                        onChange={(e) => handleOptionChange(e, "day")}
                        className="text-gray-400 focus:outline-none border border-gray-400 px-4 py-2 rounded-md"
                      >
                        <option value="">Day</option>
                        {[...Array(31)].map((_, index) => (
                          <option key={index + 1} value={index + 1}>{index + 1}</option>
                        ))}
                      </select>
                    </div>

                    <div className="flex items-center mx-2">
                      <select
                        value={selectedOptions.month}
                        onChange={(e) => handleOptionChange(e, "month")}
                        className="text-gray-400 focus:outline-none border border-gray-400 px-4 py-2 rounded-md"
                      >
                        <option value="">Month</option>
                        {Array.from({ length: 12 }, (_, index) => {
                          const monthIndex = index + 1;
                          const monthName = new Date(2022, monthIndex - 1, 1).toLocaleString('default', { month: 'long' });
                          return (
                            <option key={monthIndex} value={monthIndex}>
                              {monthName}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <div className="flex items-center mx-2">
                      <select
                        value={selectedOptions.complain}
                        onChange={(e) => handleOptionChange(e, "complain")}
                        className="text-gray-400 focus:outline-none border border-gray-400 px-4 py-2 rounded-md"
                      >
                        <option value="">Complain Type</option>
                        <option value="Heinous">Heinous</option>
                        <option value="Non-Heinous">Non-Heinous</option>
                      </select>
                    </div>

                    <div className="flex items-center mx-2">
                      <select
                        value={selectedOptions.actSection}
                        onChange={(e) => handleOptionChange(e, "actSection")}
                        className="text-gray-400 focus:outline-none border border-gray-400 px-4 py-2 rounded-md"
                      >
                        <option value="">Act Section</option>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                        <option value="Option 4">Option 4</option>
                      </select>
                    </div>
                    <div className="flex items-center mx-2">
                      <select
                        value={selectedOptions.policeStation}
                        onChange={(e) => handleOptionChange(e, "policeStation")}
                        className="text-gray-400 focus:outline-none border border-gray-400 px-4 py-2 rounded-md"
                      >
                        <option value="">Police Station</option>
                        <option value="Option 1">Option 1</option>
                        <option value="Option 2">Option 2</option>
                        <option value="Option 3">Option 3</option>
                        <option value="Option 4">Option 4</option>
                      </select>
                    </div>

                    {/* Add other dropdowns similarly */}
                  </div>
                )}
              </div>
              {/* Notification Button and Profile dropdown */}
              <div className="flex items-center">
                {/* Notification Button */}
                <button
                  type="button"
                  className="ml-4 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as="div"
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700"
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700"
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700"
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          {/* Mobile Menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Navigation Links */}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

