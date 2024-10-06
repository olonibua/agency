import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AboutCampaign from "./AboutCampaign";

import ContentSection from "./ContentSection";
import ReportingSection from "./ReportingSection";

interface Collaborator {
  name: string;
  followers: string;
  amount: string;
  status?: string;
}

interface CampaignDetailsProps {
  campaignName: string;
  description: string;
  image: string;
  budget: string;
  duration: string;
  collaborators: Collaborator[];
  targetAudience: {
    location: string;
    locationRadius: string;
    ageRange: string;
    gender: string;
  };
  keyObjectives: string[];
}

const CampaignDetails: React.FC<CampaignDetailsProps> = ({
  campaignName,
  description,
  image,
  budget,
  duration,
  collaborators,
  targetAudience,
  keyObjectives,
}) => {
  const [activeSection, setActiveSection] = useState("about");

  const AllProps = {
    campaignName,
    description,
    image,
    budget,
    duration,
    collaborators,
    targetAudience,
    keyObjectives,
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case "about":
        return <AboutCampaign AllProps={AllProps} />;
      case "content":
        return <ContentSection />;
      case "reporting":
        return <ReportingSection
          reportOverview={{
            engagement: "13M",
            posts: 115,
            reach: "215M",
            emv: "GBP 17,585"
          }}
          contentTypeInsights={[
            { type: "Instagram post", posts: 15, engagement: "12K 715 715 23%", emv: "GBP 2,480", reach: "15.3M" },
            { type: "Instagram stories", posts: 8, engagement: "89 19K 23%", emv: "GBP 2,480", reach: "15.3M" },
            { type: "Tiktok", posts: 12, engagement: "12K 715 715 23%", emv: "GBP 2,480", reach: "15.3M" },
            { type: "Youtube", posts: 6, engagement: "12K", emv: "GBP 2,480", reach: "-" },
            { type: "Facebook", posts: 2, engagement: "12K 23%", emv: "GBP 2,480", reach: "15.3M" },
          ]}
          topContent={[
            { username: "@Jamilla.strand", engagement: 153000, date: "21-04-23", imageUrl: "/path/to/image1.jpg" },
            { username: "@Kamila_dundy", engagement: 93000, date: "21-04-23", imageUrl: "/path/to/image2.jpg" },
            { username: "@Jamilla.strand", engagement: 76000, date: "21-04-23", imageUrl: "/path/to/image3.jpg" },
            { username: "@Stella_world", engagement: 53000, date: "21-04-23", imageUrl: "/path/to/image4.jpg" },
            { username: "@Jamilla.strand", engagement: 42000, date: "21-04-23", imageUrl: "/path/to/image5.jpg" },
          ]}
          influencerRankings={[
            { username: "@Jamilla.strand", posts: 259, followers: "188M", imageUrl: "/path/to/influencer1.jpg" },
            { username: "@Kamila_dundy", posts: 112, followers: "92M", imageUrl: "/path/to/influencer2.jpg" },
            { username: "@Stella_world", posts: 54, followers: "18M", imageUrl: "/path/to/influencer3.jpg" },
          ]}
          statisticsOverview={{
            campaignReach: "15.1M",
            topGender: "75% women",
            averageAge: 27,
            topCountry: "London",
            topInterest: "Beauty",
          }}
          audienceAge={{
            "18-24": 13,
            "25-34": 67,
            "35-49": 15,
            "50+": 5,
          }}
          interests={{
            Beauty: 54.15,
            Fashion: 22.37,
            Lifestyle: 21.63,
            Travel: 1.83,
            Vlogging: 0.01,
          }}
          gender={{
            Male: 8,
            Female: 75,
            "Non-binary": 5,
          }}
          topAudienceCountries={{
            "United Kingdom": 42,
            Spain: 25,
            France: 18,
            Malaysia: 11,
            Luxembourg: 8,
          }}
          topCities={{
            London: 75,
            Edinburgh: 15,
            Manchester: 7,
            Glasgow: 3,
          }}
        />;
      case "insights":
        return <div>Estimated Insights Section (To be implemented)</div>;
      default:
        return <AboutCampaign AllProps={AllProps} />;
    }
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 border-b pb-4">
        <div className="flex flex-wrap gap-6 mb-4 sm:mb-0">
          {[{ id: "about", label: "About campaign" }, { id: "content", label: "Content" }, { id: "reporting", label: "Reporting" }, { id: "insights", label: "Estimated Insights" }].map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`font-medium text-sm transition-colors ${
                activeSection === section.id
                  ? "text-black border-b-2 border-black pb-4 -mb-4"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button variant="outline" className="text-sm flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
            Edit campaigns
          </Button>
          <Button variant="outline" className="text-sm flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Download campaign report
          </Button>
        </div>
      </div>
      {/* AboutCampaign
      <ContentSection /> */}
      {renderActiveSection()}
    </div>
  );
};

export default CampaignDetails;