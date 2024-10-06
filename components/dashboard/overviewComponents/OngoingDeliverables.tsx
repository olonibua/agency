import React from "react";
import Image from "next/image";

interface Deliverable {
  brand: string;
  type: string;
  count: number;
  startDate: string;
  endDate: string;
  imageUrl: string;
}

const deliverables: Deliverable[] = [
  {
    brand: "Tom Ford",
    type: "Instagram carousel",
    count: 1,
    startDate: "Apr 28",
    endDate: "May 15",
    imageUrl: "/overview/Avatar-1.png",
  },
  {
    brand: "New Balance",
    type: "TikTok video",
    count: 1,
    startDate: "April 29",
    endDate: "May 22",
    imageUrl: "/overview/Avatar.png",
  },
];

const OngoingDeliverables: React.FC = () => {
  return (
    <div className="bg-[#FBFBFB] p-4 rounded-lg  mt-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Ongoing deliverables</h2>
        <a href="#" className="text-sm text-blue-600 hover:underline">
          See all
        </a>
      </div>
      {deliverables.length > 0 ? (
        <div className="space-y-3">
          {deliverables.map((item, index) => (
            <div key={index} className="bg-gray-900 text-white p-4 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{item.brand}</h3>
                  <p className="text-sm text-gray-300">
                    {item.count} {item.type}
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    Campaign duration
                  </p>
                  <p className="text-sm">
                    {item.startDate} - {item.endDate}
                  </p>
                </div>
                <Image
                  src={item.imageUrl}
                  alt={`${item.brand} campaign`}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center text-gray-500">
          No campaigns ongoing
        </div>
      )}
    </div>
  );
};

export default OngoingDeliverables;
