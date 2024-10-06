"use client";
import React from "react";
import { useRouter } from "next/navigation";
import CampaignDetails from "@/components/dashboard/BrandsComponents/brandprofile/campaignComponent/CampaignDetails";

const CampaignPage = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  // Mock data for the campaign
  const campaignData = {
    campaignName: "Beauty Beyond Boundaries campaign",
    description:
      "At Sephora, we believe beauty knows no bounds. Our Beauty Beyond Boundaries campaign celebrates the diversity, creativity, and individuality of beauty in all its forms. We recognise that beauty is not confined to one standard or definition but is as diverse as the people who embody it.",
    image: "/brandsIcons/sephora.png",
    budget: "GBP 27,348.00",
    duration: "Jun 15 - July 28, 2024",
    collaborators: [
      { name: "Natali craig", followers: "12.9M", amount: "GBP 2,750" },
      { name: "Bessie Cooper", followers: "2M", amount: "GBP 234,250" },
      { name: "Theresa Webb", followers: "225K", amount: "GBP 24,750" },
      { name: "Savannah Nguyen", followers: "1.9M", status: "incomplete" },
    ],
    targetAudience: {
      location: "City of Westminster, London",
      locationRadius: "13 Miles",
      ageRange: "18-35",
      gender: "All",
    },
    keyObjectives: ["Increase Brand Recognition", "Shape Brand Perception"],
  };

  return (
    <div className="p-6">
      <button onClick={handleBack} className="mb-4 text-gray-600">
        ← Campaigns
      </button>
      <CampaignDetails {...campaignData} collaborators={campaignData.collaborators.map(c => ({
        ...c,
        amount: c.amount || '',
        status: c.status || ''
      }))} />
    </div>
  );
};

export default CampaignPage;
