"use client";
import { FilterIcon, SearchIcon } from "lucide-react";
import React, { useState } from "react";

const categories = ["All", "Brand", "Campaign", "Collaboration", "Deliverables"];

const DraftsFilterBar: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="flex justify-between items-center px-5 py-3 bg-gray-50 border-b border-gray-200">
      <div className="flex space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-2 py-1 text-sm ${
              activeCategory === category
                ? "font-bold text-gray-900 border-b-2 border-gray-900"
                : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-8 pr-4 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
          <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>
        <button className="flex items-center px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-100">
          {/* <Sort className="w-4 h-4 mr-1" /> */}
          Sort
        </button>
        <button className="flex items-center px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-100">
          <FilterIcon className="w-4 h-4 mr-1" />
          Filter
        </button>
      </div>
    </div>
  );
};

export default DraftsFilterBar;
