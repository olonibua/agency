"use client"
import React, { useState } from "react";
import Image from "next/image";
import FindTalentModal from "./FindTalentModal";


const dummyData = [
  {
    id: 1,
    talent: "Serenity",
    avatar: "/overview/Avatar-1.png",
    brand: "Bershka",
    status: "Ongoing",
    revenue: 2000.0,
    cost: 1500.0,
    diaCut: 500.0,
    dateSigned: "22 Oct, 2020",
    agents: [
      { name: "Agent 1", avatar: "/overview/agent1.png" },
      
    ],
  },
  {
    id: 2,
    talent: "Bessie",
    avatar: "/overview/Avatar.png",
    brand: "Renuar",
    status: "Completed",
    revenue: 2000.0,
    cost: 1500.0,
    diaCut: 500.0,
    dateSigned: "8 Sep, 2020",
    agents: [
      { name: "Agent 2", avatar: "/overview/agent2.png" },
    ],
  },
  {
    id: 3,
    talent: "Jane",
    avatar: "/overview/Avatar-1.png",
    brand: "Tiffany",
    status: "Ongoing",
    revenue: 2000.0,
    cost: 1500.0,
    diaCut: 500.0,
    dateSigned: "21 Sep, 2020",
    agents: [
      { name: "Agent 4", avatar: "/overview/agent1.png" },
    ],
  },
  {
    id: 4,
    talent: "Bessie",
    avatar: "/overview/Avatar.png",
    brand: "Zara",
    status: "Completed",
    revenue: 2000.0,
    cost: 1500.0,
    diaCut: 500.0,
    dateSigned: "24 May, 2020",
    agents: [
      { name: "Agent 2", avatar: "/overview/agent2.png" },
    ],
  },
  {
    id: 5,
    talent: "Darrell",
    avatar: "/overview/Avatar-1.png",
    brand: "H&M",
    status: "Ongoing",
    revenue: 2000.0,
    cost: 1500.0,
    diaCut: 500.0,
    dateSigned: "1 Feb, 2020",
    agents: [
      { name: "Agent 4", avatar: "/overview/agent1.png" },
    ],
  },
  {
    id: 6,
    talent: "Bessie",
    avatar: "/overview/Avatar.png",
    brand: "Renuar",
    status: "Completed",
    revenue: 2000.0,
    cost: 1500.0,
    diaCut: 500.0,
    dateSigned: "8 Sep, 2020",
    agents: [
      { name: "Agent 2", avatar: "/overview/agent2.png" },
    ],
  },
  {
    id: 7,
    talent: "Jane",
    avatar: "/overview/Avatar-1.png",
    brand: "Tiffany",
    status: "Ongoing",
    revenue: 2000.0,
    cost: 1500.0,
    diaCut: 500.0,
    dateSigned: "21 Sep, 2020",
    agents: [
      { name: "Agent 4", avatar: "/overview/agent1.png" },
    ],
  },
  {
    id: 8,
    talent: "Bessie",
    avatar: "/overview/Avatar.png",
    brand: "Zara",
    status: "Completed",
    revenue: 2000.0,
    cost: 1500.0,
    diaCut: 500.0,
    dateSigned: "24 May, 2020",
    agents: [
      { name: "Agent 2", avatar: "/overview/agent2.png" },
    ],
  },
  {
    id: 9,
    talent: "Darrell",
    avatar: "/overview/Avatar-1.png",
    brand: "H&M",
    status: "Ongoing",
    revenue: 2000.0,
    cost: 1500.0,
    diaCut: 500.0,
    dateSigned: "1 Feb, 2020",
    agents: [
      { name: "Agent 4", avatar: "/overview/agent1.png" },
    ],
  },
];

const ITEMS_PER_PAGE = 8;



const CollaborationsOverview: React.FC<{ onShowFindTalents: () => void }> = ({ onShowFindTalents }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(dummyData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentData = dummyData.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="mt-0 ">
      <h2 className="text-lg sm:text-xl font-bold mb-4">Collaborations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-[#FBFBFB] p-6 rounded-lg flex items-start">
          <div className="flex-grow">
            <h3 className="font-semibold mb-2 text-base">Find talent</h3>
            <p className="text-sm text-gray-600 mb-4 max-w-[200px]">
              Search, bookmark and add talents to campaigns
            </p>
            <FindTalentModal onSearchClick={onShowFindTalents} />
          </div>
          <div className="flex -space-x-2">
            <Image
              src="/overview/findtalent.png"
              alt="Profile 3"
              width={100}
              height={100}
              className="rounded-full border-2 border-white"
            />
          </div>
        </div>
        <div className="bg-[#FBFBFB] p-6 rounded-lg flex items-start">
          <div className="flex-grow">
            <h3 className="font-semibold mb-2 text-base">
              View and create campaigns
            </h3>
            <p className="text-sm text-gray-600 mb-4 max-w-[200px]">
              Create and manage campaigns for brands
            </p>
          </div>
          <Image
            src="/overview/metrics.png"
            alt="Profile 3"
            width={100}
            height={100}
            className="rounded-full border-2 border-white"
          />
        </div>
      </div>
      <div className="bg-[#FBFBFB] p-4 sm:p-6 rounded-lg ">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
          <h2 className="text-base sm:text-lg font-semibold mb-2 sm:mb-0">
            Collaborations
          </h2>
          <a
            href="#"
            className="text-xs sm:text-sm text-blue-600 hover:underline"
          >
            See all
          </a>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4">
          <div className="relative flex-grow w-full sm:w-auto mb-2 sm:mb-0 sm:mr-2">
            <input
              type="text"
              placeholder="Search"
              className="w-full border rounded-lg pl-10 pr-3 py-2 text-sm"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-2 bg-gray-100 rounded-lg flex items-center text-sm hover:bg-gray-200">
              <span>Sort</span>
              <svg
                className="w-4 h-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
              </svg>
            </button>
            <button className="px-3 py-2 bg-gray-100 rounded-lg flex items-center text-sm hover:bg-gray-200">
              <span>Filter</span>
              <svg
                className="w-4 h-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full mb-6">
            <thead>
              <tr className="text-left bg-white text-xs sm:text-sm text-gray-500">
                <th className="pb-2">Talent</th>
                <th className="pb-2">Brand</th>
                <th className="pb-2">
                  Status <SortIcon />
                </th>
                <th className="pb-2">
                  Revenue <SortIcon />
                </th>
                <th className="pb-2">
                  Cost <SortIcon />
                </th>
                <th className="pb-2">
                  DIA cut <SortIcon />
                </th>
                <th className="pb-2">
                  Date signed <SortIcon />
                </th>
                <th className="pb-2">Agents</th> {/* Add this line */}
              </tr>
            </thead>
            <tbody>
              {currentData.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-200 last:border-b-0 text-xs sm:text-sm"
                >
                  <td className="py-3 flex items-center">
                    <Image
                      src={item.avatar}
                      alt={item.talent}
                      width={32}
                      height={32}
                      className="rounded-full mr-2"
                    />
                    {item.talent}
                  </td>
                  <td className="py-3">{item.brand}</td>
                  <td className="py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        item.status === "Ongoing"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="py-3">£{item.revenue.toFixed(2)}</td>
                  <td className="py-3">£{item.cost.toFixed(2)}</td>
                  <td className="py-3">£{item.diaCut.toFixed(2)}</td>
                  <td className="py-3">{item.dateSigned}</td>
                  <td className="py-3">
                    <div className="flex -space-x-2">
                      {item.agents?.map((agent, index) => (
                        <Image
                          key={index}
                          src={agent.avatar}
                          alt={agent.name}
                          width={54}
                          height={54}
                          className="inline-block  rounded-full ring-2 ring-white"
                          title={agent.name}
                        />
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-4">
          <button
            className="px-2 sm:px-3 py-1 sm:py-2 bg-gray-100 rounded-lg flex items-center text-xs sm:text-sm hover:bg-gray-200 disabled:opacity-50"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Prev</span>
          </button>
          <div className="flex space-x-1 sm:space-x-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={`px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs sm:text-sm ${
                  currentPage === index + 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button
            className="px-2 sm:px-3 py-1 sm:py-2 bg-gray-100 rounded-lg flex items-center text-xs sm:text-sm hover:bg-gray-200 disabled:opacity-50"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <span>Next</span>
            <svg
              className="w-4 h-4 ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const SortIcon: React.FC = () => (
  <svg
    className="inline-block w-4 h-4 ml-1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

export default CollaborationsOverview;