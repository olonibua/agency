'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronLeft, Edit, Linkedin, MoreVertical, Plus } from 'lucide-react'
import Link from 'next/link'
import MessagesIcon from "../../../public/sidebarIcons/message.svg";
import OverviewIcon from "../../../public/sidebarIcons/overview.svg";
import TalentsIcon from "../../../public/sidebarIcons/talents.svg";
import ProfileIcon from "../../../public/sidebarIcons/profileIcon.svg";
import BrandProfileMain from './brandprofile/BrandProfileMain'
import Campaigns from './brandprofile/Campaigns'
import BrandModal from './BrandModal'

interface BrandProfileProps {
  onBack: () => void;
  pageTitle: string;
  brand: any; // Replace 'any' with a proper type definition for your brand object
}


const BrandProfile: React.FC<BrandProfileProps> = ({pageTitle, onBack, brand }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Brand profile');

    const menuItems = [
      {
        icon: ProfileIcon,
        label: "Brand profile",
        href: "/dashboard/brand-profile",
      },
      { icon: TalentsIcon, label: "Campaigns", href: "/dashboard/campaigns" },
      {
        icon: OverviewIcon,
        label: "Experiences",
        href: "/dashboard/experiences",
      },
      {
        icon: MessagesIcon,
        label: "Collaborations",
        href: "/dashboard/collaborations",
      },
    ];
  return (
    <div className="">
      {/* <h1>{pageTitle}</h1> */}

      {/* Brand Name, Description, and Social Links */}
      <div className="flex justify-between items-start p-4 bg-white border-t border-b">
        <div className="flex justify-center items-center">
          <button onClick={onBack}>
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-sm md:text-3xl font-bold">Sephora</h1>
        </div>
        <Button variant="outline" onClick={() => setIsEditModalOpen(true)}>
          <Edit className="w-4 h-4 mr-2" /> Edit brand profile
        </Button>
      </div>

      <div className="flex flex-col md:flex-row">
        <nav className="w-full md:w-64 bg-white border-b md:border-b-0 md:border-r border-gray-200">
          <ul className="flex md:flex-col overflow-x-auto md:overflow-x-visible space-x-4 md:space-x-0 space-y-0 md:space-y-2 p-4">
            {menuItems.map((item) => (
              <li key={item.label} className="flex-shrink-0">
                <button
                  onClick={() => setActiveTab(item.label)}
                  className={`flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg w-full text-left ${
                    activeTab === item.label ? 'bg-gray-100' : ''
                  }`}
                >
                  <Image
                    src={item.icon}
                    alt={`${item.label} icon`}
                    width={20}
                    height={20}
                    className="mr-3"
                  />
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex-grow">
          {activeTab === 'Brand profile' && <BrandProfileMain />}
          {activeTab === 'Campaigns' && <Campaigns />}
          {/* Add other tab components here */}
        </div>
      </div>

      {isEditModalOpen && (
        <BrandModal
          onClose={() => setIsEditModalOpen(false)}
          isEditing={true}
          initialData={brand}
        />
      )}
    </div>
  );
}

export default BrandProfile