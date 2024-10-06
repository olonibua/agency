import { SearchIcon } from "lucide-react";
import React from "react";

const TalentsHeader: React.FC = () => {
  return (
    <div className="talents-header flex justify-between items-center p-4 bg-white shadow-sm">
      <div className="talents-categories flex space-x-4">
        <button className="px-3 py-2 rounded-full bg-gray-100 text-gray-800 font-medium">All</button>
        <button className="px-3 py-2 rounded-full text-gray-500 hover:bg-gray-100">Nano</button>
        <button className="px-3 py-2 rounded-full text-gray-500 hover:bg-gray-100">Micro</button>
        <button className="px-3 py-2 rounded-full text-gray-500 hover:bg-gray-100">Macro</button>
        <button className="px-3 py-2 rounded-full text-gray-500 hover:bg-gray-100">Mega</button>
      </div>
      <div className="search-sort-filter flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
        <button className="px-4 py-2 border border-gray-300 rounded-full text-gray-700 flex items-center">
          <span>Sort</span>
          <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-full text-gray-700 flex items-center">
          <span>Filter</span>
          <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TalentsHeader;
