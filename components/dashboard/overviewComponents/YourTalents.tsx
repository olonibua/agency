import Image from "next/image";
import React from "react";

// Define a type for the talent data
type Talent = {
  name: string;
  level: string;
  avatar: string;
};

const YourTalents: React.FC = () => {
  // Mock data for talents
  const talents: Talent[] = [
    { name: "Natali craig", level: "Mega", avatar: "/overview/Avatar-1.png" },
    {
      name: "Phoenix Barker",
      level: "Macro",
      avatar: "/overview/Avatar.png",
    },
    { name: "Lana Steiner", level: "Nano", avatar: "/overview/Avatar-1.png" },
    {
      name: "Demi Wilkinson",
      level: "Mega",
      avatar: "/overview/Avatar.png",
    },
  ];

  return (
    <div className="bg-[#FBFBFB] p-4 rounded-lg ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Your talents</h2>
        <a href="#" className="text-sm text-gray-500 hover:underline">
          See all
        </a>
      </div>
      <ul className="space-y-3">
        {talents.map((talent, index) => (
          <li key={index} className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src={talent.avatar}
                alt={talent.name}
                className="w-8 h-8 rounded-full mr-3"
              />
              <span>{talent.name}</span>
            </div>
            <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
              {talent.level}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YourTalents;
