import React from "react";

const Details = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-xl font-semibold">Details</h4>
        <span className="text-sm text-gray-500">Q1 2024</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-white">
        <div className="items-center justify-center border-r border-gray-200">
          <div className="relative w-32 h-32">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMinYMin meet"
              style={{ transform: "rotate(-90deg)" }}
            >
              <circle
                cx="50"
                cy="50"
                fill="none"
                stroke="#ddd"
                strokeWidth="10"
                r="35"
                style={{ strokeDasharray: "100 100" }}
              ></circle>
              <circle
                cx="50"
                cy="50"
                fill="none"
                stroke="#4CAF50"
                strokeWidth="10"
                r="35"
                style={{ strokeDasharray: "100 100", strokeDashoffset: "80" }}
              ></circle>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold">20%</span>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Target</p>
              <p className="font-semibold">GBP 500,000</p>
            </div>
            <div>
              <p className="text-gray-500">Total Signed</p>
              <p className="font-semibold">GBP 6,500</p>
            </div>
            <div>
              <p className="text-gray-500">Remaining</p>
              <p className="font-semibold">GBP 493,500</p>
            </div>
            <div>
              <p className="text-gray-500"># of paid collaborations</p>
              <p className="font-semibold">GBP 493,500</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Brands", value: 13 },
            { label: "Campaigns", value: 52 },
            { label: "Collaborations", value: 112 },
            { label: "Talents", value: 32 },
          ].map((item, index) => (
            <div key={index} className="text-center border-b border-gray-200">
              <p className="text-2xl font-bold">{item.value}</p>
              <p className="text-sm text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
