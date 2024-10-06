import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Search, ArrowUpDown, Filter, ChevronDown, Plus } from "lucide-react";
import CreateCampaignModal from "./CreateCampaignModal";

interface Campaign {
  id: number;
  name: string;
  budget: string;
  assignedTalents: string[];
  duration: string;
}

const campaigns: Campaign[] = [
  {
    id: 1,
    name: "Beauty Beyond Boundaries",
    budget: "GBP 15,000",
    assignedTalents: [
      "/findtalentIcons/talent1.png",
      "/findtalentIcons/talent2.png",
      "/findtalentIcons/talent4.png",
    ],
    duration: "Jul 07 - Jul 30, 2024",
  },
  {
    id: 2,
    name: "Glow Up Revolution",
    budget: "GBP 10,000",
    assignedTalents: [
      "/findtalentIcons/talent1.png",
      "/findtalentIcons/talent2.png",
    ],
    duration: "Jun 25 - Jul 14, 2024",
  },
  {
    id: 3,
    name: "Makeup Marvels Unleashed",
    budget: "GBP 21,000",
    assignedTalents: [
      "/findtalentIcons/talent1.png",
      "/findtalentIcons/talent4.png",
    ],
    duration: "Jun 12 - Jun 15, 2024",
  },
  {
    id: 4,
    name: "Flawless Faces Expedition",
    budget: "GBP 9,000",
    assignedTalents: [
      "/findtalentIcons/talent1.png",
      "/findtalentIcons/talent2.png",
      "/findtalentIcons/talent1.png",
    ],
    duration: "Jun 15 - Jun 17, 2024",
  },
  {
    id: 5,
    name: "Radiant Skin Odyssey",
    budget: "GBP 19,000",
    assignedTalents: [
      "/findtalentIcons/talent1.png",
      "/findtalentIcons/talent2.png",
      "/findtalentIcons/talent3.png",
      "/findtalentIcons/talent4.png",
      "/findtalentIcons/talent1.png",
    ],
    duration: "Jun 16 - Jun 19, 2024",
  },
  {
    id: 6,
    name: "Glamour Galore Gala",
    budget: "GBP 13,000",
    assignedTalents: [
      "/findtalentIcons/talent1.png",
    ],
    duration: "Jun 23 - Jun 30, 2024",
  },
  {
    id: 7,
    name: "Beauty Bliss Bonanza",
    budget: "GBP 15,000",
    assignedTalents: [
      "/findtalentIcons/talent1.png",
      "/findtalentIcons/talent3.png",
      "/findtalentIcons/talent4.png",
      "/findtalentIcons/talent1.png",
    ],
    duration: "Aug 01 - Aug 26, 2024",
  },
  {
    id: 8,
    name: "Cosmetics Crusade",
    budget: "GBP 18,000",
    assignedTalents: [
      "/findtalentIcons/talent3.png",
      "/findtalentIcons/talent4.png",
      "/findtalentIcons/talent1.png",
    ],
    duration: "Sep 04 - Oct 01, 2024",
  },
];

const Campaigns: React.FC = () => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleRow = (id: number) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="p-4 md:p-6 bg-white">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-2 space-y-2 sm:space-y-0">
        <h1 className="text-xl md:text-2xl font-bold">Campaigns</h1>
        <Button variant="default" className="flex items-center w-full sm:w-auto" onClick={openModal}>
          <Plus className="w-4 h-4 mr-2" />
          Create new campaign
        </Button>
      </div>
      <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">These are your available campaigns</p>

      <div className="flex flex-col md:flex-row md:justify-between mb-4 md:mb-6 space-y-4 md:space-y-0">
        <div className="relative w-full md:w-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full md:w-auto pl-10 pr-4 py-2 border rounded-md"
          />
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="flex-1 md:flex-none">
            <ArrowUpDown className="w-4 h-4 mr-2" /> Sort
          </Button>
          <Button variant="outline" className="flex-1 md:flex-none">
            <Filter className="w-4 h-4 mr-2" /> Filter
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="hidden md:table-header-group">
            <tr className="border-b">
              <th className="pb-2 text-left font-normal text-gray-600"></th>
              <th className="pb-2 text-left font-normal text-gray-600">Name</th>
              <th className="pb-2 text-left font-normal text-gray-600">Budget</th>
              <th className="pb-2 text-left font-normal text-gray-600">Assigned Talents</th>
              <th className="pb-2 text-left font-normal text-gray-600">Campaign duration</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign) => (
              <React.Fragment key={campaign.id}>
                <tr className="border-b md:border-none">
                  <td className="py-4 md:border-b">
                    <input type="checkbox" className="rounded" />
                  </td>
                  <td className="py-4 font-medium md:border-b">
                    <div className="flex justify-between items-center">
                      <span>{campaign.name}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="md:hidden"
                        onClick={() => toggleRow(campaign.id)}
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform ${expandedRow === campaign.id ? 'rotate-180' : ''}`} />
                      </Button>
                    </div>
                  </td>
                  <td className="hidden md:table-cell py-4 md:border-b">{campaign.budget}</td>
                  <td className="hidden md:table-cell py-4 md:border-b">
                    <div className="flex -space-x-2">
                      {campaign.assignedTalents.map((talent, index) => (
                        <Image
                          key={index}
                          src={talent}
                          alt={`Talent ${index + 1}`}
                          width={32}
                          height={32}
                          className="rounded-full border-2 border-white"
                        />
                      ))}
                    </div>
                  </td>
                  <td className="hidden md:table-cell py-4 md:border-b">{campaign.duration}</td>
                </tr>
                {expandedRow === campaign.id && (
                  <tr className="md:hidden border-b">
                    <td colSpan={5}>
                      <div className="py-2 space-y-2">
                        <p><strong>Budget:</strong> {campaign.budget}</p>
                        <div>
                          <strong>Assigned Talents:</strong>
                          <div className="flex -space-x-2 mt-1">
                            {campaign.assignedTalents.map((talent, index) => (
                              <Image
                                key={index}
                                src={talent}
                                alt={`Talent ${index + 1}`}
                                width={32}
                                height={32}
                                className="rounded-full border-2 border-white"
                              />
                            ))}
                          </div>
                        </div>
                        <p><strong>Duration:</strong> {campaign.duration}</p>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-6 space-y-4 md:space-y-0">
        <Button variant="outline" disabled className="w-full md:w-auto">
          Prev
        </Button>
        <div className="flex space-x-2">
          {[1, 2, 3, 4].map((page) => (
            <Button key={page} variant={page === 1 ? "default" : "outline"}>
              {page}
            </Button>
          ))}
        </div>
        <Button variant="outline" className="w-full md:w-auto">
          Next
        </Button>
      </div>

      <CreateCampaignModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Campaigns;