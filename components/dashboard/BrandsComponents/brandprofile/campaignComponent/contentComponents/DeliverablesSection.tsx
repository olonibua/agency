import React from "react";
import Image from "next/image";

const DeliverablesSection = () => {
  const completedDeliverables = [
    { date: "21-04-23", image: "/brandsIcons/frame1.png", likes: "5.3k", views: "113k" },
    { date: "21-04-23", image: "/brandsIcons/frame3.png", likes: "5.3k", views: "113k" },
    { date: "21-04-23", image: "/brandsIcons/frame2.png", likes: "5.3k", views: "113k" },
  ];

  const todoDeliverables = [
    { type: "1 instagram reel", date: "Jul 07 - Jul 30, 2024" },
    { type: "1 instagram story", date: "Jun 25 - Jul 14, 2024" },
    { type: "1 TikTok video", date: "Jun 12 - Jun 15, 2024" },
  ];

  return (
    <div className="mb-6 lg:mb-0">
      <h2 className="font-bold mb-4 text-lg">Deliverables</h2>
      <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 space-y-2 sm:space-y-0">
        <div className="flex items-center">
          <Image
            src="/findtalentIcons/talent1.png"
            alt="Natali craig"
            width={24}
            height={24}
            className="rounded-full mr-2 w-6 h-6 object-cover"
          />
          <span className="text-sm">Natali craig</span>
        </div>
        <span className="sm:ml-auto text-xs sm:text-sm">3 out of 6 deliverables completed</span>
      </div>
      <h3 className="font-semibold mb-2 text-sm">Completed</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 mb-4">
        {completedDeliverables.map((item, index) => (
          <div key={index} className="border rounded p-2">
            <Image
              src={item.image}
              alt={`Deliverable ${index + 1}`}
              width={100}
              height={100}
              className="w-full h-auto mb-2"
            />
            <div className="flex justify-between text-xs">
              <span>❤️ {item.likes}</span>
              <span>👁️ {item.views}</span>
            </div>
          </div>
        ))}
      </div>
      <h3 className="font-semibold mb-2 text-sm">To do</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-xs sm:text-sm">
          <thead>
            <tr>
              <th className="text-left py-2">Deliverable</th>
              <th className="text-left py-2">Draft - Publish date</th>
            </tr>
          </thead>
          <tbody>
            {todoDeliverables.map((item, index) => (
              <tr key={index}>
                <td className="py-2">{item.type}</td>
                <td className="py-2">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeliverablesSection;
