import Image from "next/image";
import React from "react";

const TalentsList: React.FC = () => {
  // Mock data array with more entries
  const talents = [
    {
      img: "/findtalentIcons/talent3.png",
      name: "Jamilla Strand",
      email: "Jamilla@digitalicona...",
      level: "Macro",
      agents: ["/findtalentIcons/talent1.png", "/findtalentIcons/talent2.png"],
      based: "UK",
      address: "6391 Elgin St. Celina, Delawar...",
      phone: "(205) 555-0100",
      birthday: "October 30, 2017",
    },
    {
      img: "/findtalentIcons/talent1.png",
      name: "Dianne Russell",
      email: "debra.holt@example.c...",
      level: "Nano",
      agents: ["/findtalentIcons/talent2.png", "/findtalentIcons/talent3.png"],
      based: "Saint Vince...",
      address: "4140 Parker Rd. Allentown, N...",
      phone: "(316) 555-0116",
      birthday: "October 24, 2018",
    },
    {
      img: "/findtalentIcons/talent2.png",
      name: "Courtney Henry",
      email: "michelle.rivera@exam...",
      level: "Micro",
      agents: ["/findtalentIcons/talent1.png", "/findtalentIcons/talent4.png"],
      based: "Guinea",
      address: "2464 Royal Ln. Mesa, New Je...",
      phone: "(270) 555-0117",
      birthday: "May 6, 2012",
    },
    {
      img: "/findtalentIcons/talent4.png",
      name: "Savannah Nguyen",
      email: "deanna.curtis@exam...",
      level: "Mega",
      agents: ["/findtalentIcons/talent4.png", "/findtalentIcons/talent2.png"],
      based: "Sao Tome a...",
      address: "8502 Preston Rd. Inglewood,...",
      phone: "(201) 555-0124",
      birthday: "March 23, 2013",
    },
    {
      img: "/findtalentIcons/talent1.png",
      name: "Annette Black",
      email: "nathan.roberts@exam...",
      level: "Macro",
      agents: ["/findtalentIcons/talent4.png", "/findtalentIcons/talent2.png"],
      based: "Bahrain",
      address: "2715 Ash Dr. San Jose, South...",
      phone: "(808) 555-0111",
      birthday: "May 29, 2017",
    },
    {
      img: "/findtalentIcons/talent3.png",
      name: "Marvin McKinney",
      email: "nevaeh.simmons@exa...",
      level: "Nano",
      agents: ["/findtalentIcons/talent2.png", "/findtalentIcons/talent4.png"],
      based: "Algeria",
      address: "2972 Westheimer Rd. Santa A...",
      phone: "(907) 555-0101",
      birthday: "February 9, 2015",
    },
    {
      img: "/findtalentIcons/talent2.png",
      name: "Darlene Robertson",
      email: "georgia.young@exam...",
      level: "Macro",
      agents: ["/findtalentIcons/talent4.png", "/findtalentIcons/talent2.png"],
      based: "Iceland",
      address: "2972 Westheimer Rd. Santa A...",
      phone: "(405) 555-0128",
      birthday: "July 14, 2015",
    },
    {
      img: "/findtalentIcons/talent3.png",
      name: "Jacob Jones",
      email: "tanya.hill@example.co...",
      level: "Nano",
      agents: ["/findtalentIcons/talent3.png", "/findtalentIcons/talent2.png"],
      based: "Iran (Islami...",
      address: "3891 Ranchview Dr. Richards...",
      phone: "(217) 555-0113",
      birthday: "November 7, 20...",
    },
  ];

  return (
    <div className="talents-list bg-white rounded-lg shadow-md overflow-hidden">
      {/* Table for larger screens */}
      <div className="hidden md:block">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500 border-b">
              <th className="py-4 px-6">Name</th>
              <th className="py-4 px-6">Level</th>
              <th className="py-4 px-6">Agents</th>
              <th className="py-4 px-6">Based</th>
              <th className="py-4 px-6">Address</th>
              <th className="py-4 px-6">Phone number</th>
              <th className="py-4 px-6">Birthday</th>
            </tr>
          </thead>
          <tbody>
            {talents.map((talent, index) => (
              <tr
                key={index}
                className="border-b last:border-b-0 hover:bg-gray-50"
              >
                <td className="py-4 px-6">
                  <div className="flex items-center">
                    <Image
                      width={100}
                      height={100}
                      src={talent.img}
                      alt={talent.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <div className="font-semibold">{talent.name}</div>
                      <div className="text-sm text-gray-500">
                        {talent.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${getLevelColor(
                      talent.level
                    )}`}
                  >
                    {talent.level}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex -space-x-2">
                    {talent.agents.map((agent, i) => (
                      <Image
                        key={i}
                        src={agent}
                        alt={`Agent ${i + 1}`}
                        className="w-8 h-8 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                </td>
                <td className="py-4 px-6">{talent.based}</td>
                <td className="py-4 px-6">{talent.address}</td>
                <td className="py-4 px-6">{talent.phone}</td>
                <td className="py-4 px-6">{talent.birthday}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card layout for mobile screens */}
      <div className="md:hidden">
        {talents.map((talent, index) => (
          <div key={index} className="border-b last:border-b-0 p-4">
            <div className="flex items-center mb-2">
              <Image
                src={`/path/to/${talent.name
                  .toLowerCase()
                  .replace(" ", "_")}.jpg`}
                alt={talent.name}
                className="w-12 h-12 rounded-full mr-3"
              />
              <div>
                <div className="font-semibold">{talent.name}</div>
                <div className="text-sm text-gray-500">{talent.email}</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="font-semibold">Level:</span>
                <span
                  className={`ml-1 px-2 py-1 rounded-full text-xs ${getLevelColor(
                    talent.level
                  )}`}
                >
                  {talent.level}
                </span>
              </div>
              <div>
                <span className="font-semibold">Based:</span> {talent.based}
              </div>
              <div className="col-span-2">
                <span className="font-semibold">Agents:</span>
                <div className="flex -space-x-2 mt-1">
                  {talent.agents.map((agent, i) => (
                    <Image
                      key={i}
                      src={agent}
                      alt={`Agent ${i + 1}`}
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
              </div>
              <div className="col-span-2">
                <span className="font-semibold">Address:</span> {talent.address}
              </div>
              <div className="col-span-2">
                <span className="font-semibold">Phone:</span> {talent.phone}
              </div>
              <div className="col-span-2">
                <span className="font-semibold">Birthday:</span>{" "}
                {talent.birthday}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination flex flex-col sm:flex-row justify-between items-center px-4 py-4 border-t">
        <div className="text-sm text-gray-500 mb-2 sm:mb-0">
          Showing 1 to 8 of 100 entries
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 rounded border text-sm text-gray-600 hover:bg-gray-100">
            Prev
          </button>
          <button className="px-3 py-1 rounded border bg-blue-500 text-white text-sm">
            1
          </button>
          <button className="px-3 py-1 rounded border text-sm text-gray-600 hover:bg-gray-100">
            2
          </button>
          <button className="px-3 py-1 rounded border text-sm text-gray-600 hover:bg-gray-100">
            3
          </button>
          <button className="px-3 py-1 rounded border text-sm text-gray-600 hover:bg-gray-100">
            4
          </button>
          <button className="px-3 py-1 rounded border text-sm text-gray-600 hover:bg-gray-100">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

// Helper function to get the appropriate color for each level
const getLevelColor = (level: string) => {
  switch (level.toLowerCase()) {
    case 'macro':
      return 'bg-purple-100 text-purple-800';
    case 'nano':
      return 'bg-blue-100 text-blue-800';
    case 'micro':
      return 'bg-green-100 text-green-800';
    case 'mega':
      return 'bg-pink-100 text-pink-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default TalentsList;