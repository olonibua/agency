import React from "react";
import { FaRegBell } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";

const Header = ({ currentView, onMenuClick }: { currentView: string; onMenuClick: () => void }) => {
  const capitalizedView =
    currentView.charAt(0).toUpperCase() + currentView.slice(1);

  return (
    <header className="bg-white shadow-sm p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">
          {capitalizedView}
        </h2>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-600 text-xl"
          onClick={onMenuClick}
        >
          <HiMenu />
        </button>

        {/* Desktop view */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <input
              type="search"
              placeholder="Search"
              className="border rounded-full px-4 py-2 pl-10 text-sm bg-gray-100"
            />
            <svg
              className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <IoSettingsOutline className="text-gray-600 text-xl" />
          <FaRegBell className="text-gray-600 text-xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;
