import React from "react";
import Image from "next/image";

const talents = [
  { name: "Natali craig", type: "Mega" },
  { name: "Phoenix Barker", type: "Macro" },
  { name: "Lana Steiner", type: "Nano" },
  { name: "Demi Wilkinson", type: "Mega" },
  { name: "Orlando Diggs", type: "Nano" },
  { name: "Andi Lane", type: "Micro" },
];

const TalentsList = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full">
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-xl font-semibold text-gray-900">Talents</h4>
        <button className="text-sm text-gray-500 hover:text-gray-700">
          See all
        </button>
      </div>
      <ul className="space-y-4">
        {talents.map((talent, index) => (
          <li key={index} className="flex items-center justify-between border-b border-gray-200 py-4">
            <div className="flex items-center">
              <Image
                src='/sidebarIcons/profileIcon.svg'
                // src={`/avatars/${talent.name
                //   .toLowerCase()
                //   .replace(" ", "-")}.jpg`}
                alt={talent.name}
                width={40}
                height={40}
                className="rounded-full mr-3"
              />
              <span className="text-sm font-medium text-gray-900">
                {talent.name}
              </span>
            </div>
            <span className="text-xs font-medium bg-gray-100 px-2 py-1 rounded-full text-gray-600">
              {talent.type}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TalentsList;
