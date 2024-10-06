import React from "react";

const TalentsFilter: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 p-5 bg-white rounded-lg border-t border-b">
      <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-end">
        {/* Major audience */}
        <div className="flex flex-col w-full sm:w-auto">
          <label className="font-bold text-sm mb-1">Major audience in</label>
          <input
            type="text"
            placeholder="Enter location"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Female audience */}
        <div className="flex flex-col w-full sm:w-auto">
          <label className="font-bold text-sm mb-1">Female audience</label>
          <div className="flex gap-2">
            <select className="w-24 px-2 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="above">above</option>
              <option value="below">below</option>
            </select>
            <input
              type="text"
              placeholder="Enter %"
              className="flex-grow px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Dominant audience age */}
        <div className="flex flex-col w-full sm:w-auto">
          <label className="font-bold text-sm mb-1">
            Dominant audience age between
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Min"
              className="w-20 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span>-</span>
            <input
              type="text"
              placeholder="Max"
              className="w-20 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-end">
        {/* Audience language */}
        <div className="flex flex-col w-full sm:w-auto">
          <label className="font-bold text-sm mb-1">Audience language</label>
          <input
            type="text"
            placeholder="Enter language"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Apply filter button */}
        <button className="w-full sm:w-auto px-4 py-2 mt-3 sm:mt-0 bg-black-500 text-white rounded-md text-sm font-medium hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
          Apply filter
        </button>
      </div>
    </div>
  );
};

export default TalentsFilter;
