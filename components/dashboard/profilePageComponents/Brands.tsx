import React from "react";

const brands = [
  { name: "L'Oréal Paris", campaigns: 4 },
  { name: "Olay", campaigns: 4 },
  { name: "Oral-B", campaigns: 4 },
  { name: "Enfagrow", campaigns: 4 },
  { name: "Garnier", campaigns: 4 },
  { name: "Durex", campaigns: 4 },
];

const BrandsList = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full">
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-xl font-semibold text-gray-800">Brands</h4>
        <button className="text-sm text-gray-500 hover:text-gray-700 font-medium">
          See all
        </button>
      </div>
      <ul className="divide-y divide-gray-200">
        {brands.map((brand, index) => (
          <li key={index} className="py-5 first:pt-0 last:pb-0">
            <div className="flex items-center justify-between">
              <span className="text-gray-700 font-medium">{brand.name}</span>
              <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600">
                {brand.campaigns} campaigns
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrandsList;
