import React from "react";
import Image from "next/image";

const CollaborationsSection = () => {
  const talents = [
    { name: "Natali craig", image: "/findtalentIcons/talent1.png", selected: true },
    { name: "Bessie Cooper", image: "/findtalentIcons/talent2.png", selected: false },
    { name: "Theresa Webb", image: "/findtalentIcons/talent1.png", selected: false },
    { name: "Savannah Nguyen", image: "/findtalentIcons/talent3.png", selected: false },
  ];

  return (
    <div className="mb-6 lg:mb-0">
      <h2 className="font-bold mb-4 text-lg">Collaborations</h2>
      <h3 className="font-semibold mb-2 text-sm">Talents</h3>
      <ul className="space-y-2">
        {talents.map((talent) => (
          <li key={talent.name} className="flex items-center">
            <input type="radio" checked={talent.selected} className="mr-2 h-4 w-4" readOnly />
            <Image
              src={talent.image}
              alt={talent.name}
              width={24}
              height={24}
              className="rounded-full mr-2 w-6 h-6 object-cover"
            />
            <span className="text-sm">{talent.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollaborationsSection;
