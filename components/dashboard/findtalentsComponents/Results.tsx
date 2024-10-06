import React from "react";
import Image from "next/image";

const Results = () => {
  const influencers = [
    {
      img: "/findtalenticons/talent1.png",
      name: "Fülöp Kata",
      location: "Beijing, China",
      tier: "Mega",
      followers: "12.9M",
      engagementRate: "16.2%",
      audienceLocation: "53% Mexico",
      ageRange: "18 - 32",
      collaborations: ["Renuar", "Hermes", "Jack & Jhon"],
    },
    {
      img: "/findtalenticons/talent2.png",
      name: "Takács Bianka",
      location: "Istanbul, Turkey",
      tier: "Nano",
      followers: "12.9M",
      engagementRate: "16.2%",
      audienceLocation: "53% Mexico",
      ageRange: "18 - 32",
      collaborations: ["Zara", "Stradivarius", "Rolex"],
    },
    {
      img: "/findtalenticons/talent3.png",
      name: "Hajdú Dominika",
      location: "Madrid, Spain",
      tier: "Macro",
      followers: "12.9M",
      engagementRate: "16.2%",
      audienceLocation: "53% Mexico",
      ageRange: "18 - 32",
      collaborations: ["Bershka", "Zalando", "Lululemon"],
    },
    {
      img: "/findtalenticons/talent4.png",
      name: "Pintér Beatrix",
      location: "London, UK",
      tier: "Micro",
      followers: "12.9M",
      engagementRate: "16.2%",
      audienceLocation: "53% Mexico",
      ageRange: "18 - 32",
      collaborations: ["Gucci", "Rick Owens", "River Island"],
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">
        Results <span className="text-gray-500 text-sm">4</span>
      </h2>
      <div className="space-y-4">
        {influencers.map((influencer, index) => (
          <div key={index} className="border-b pb-4 last:border-b-0">
            <div className="flex justify-between items-start">
              <div className="flex items-center">
                <Image
                  src={influencer.img}
                  alt={`${influencer.name}'s profile picture`}
                  width={64}
                  height={64}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{influencer.name}</h3>
                  <p className="text-sm text-gray-600">{influencer.location}</p>
                  <span className="inline-block bg-gray-200 px-2 py-1 rounded text-xs">
                    {influencer.tier}
                  </span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="p-1 border rounded">🔖</button>
                <button className="p-1 border rounded">➕</button>
                <button className="p-1 border rounded">👁️</button>
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <p className="text-sm">
                  <span className="font-semibold">{influencer.followers}</span>{" "}
                  total followers
                </p>
                <p className="text-sm">
                  <span className="font-semibold">
                    {influencer.engagementRate}
                  </span>{" "}
                  engagement rate
                </p>
                <p className="text-sm">{influencer.audienceLocation}</p>
                <p className="text-sm">{influencer.ageRange}</p>
              </div>
              <div>
                <p className="text-sm font-semibold mb-2">
                  Recent Collaborations
                </p>
                <div className="flex flex-wrap gap-2">
                  {influencer.collaborations.map((collab, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 px-2 py-1 rounded text-xs"
                    >
                      {collab}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
