"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { MailIcon, PhoneIcon, PencilIcon } from "lucide-react";
import Details from "./profilePageComponents/Details";
import TalentsList from "./profilePageComponents/TalentsList";
import BrandsList from "./profilePageComponents/Brands";
import EditProfileModal from "./profilePageComponents/EditProfileModal";
import Image from "next/image";

interface ProfilePageProps {
  pageTitle: string;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ pageTitle }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openEditModal = () => setIsEditModalOpen(true);
  const closeEditModal = () => setIsEditModalOpen(false);

  return (
    <div className="p-4 sm:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <Image
              src="/profile-picture.png"
              alt="Profile"
              className="w-full h-48 sm:h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg sm:text-xl font-semibold mb-1">
              Sofia Osvald
            </h3>
            <p className="text-sm text-gray-500 mb-1">3:29 PM, London</p>
            <p className="text-xs bg-gray-200 inline-block px-2 py-1 rounded mb-4">
              Agent
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <MailIcon size={16} className="mr-2" />
                <p>sofiaosvald@digitaliconagency.com</p>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <PhoneIcon size={16} className="mr-2" />
                <p>+44 20 7123 4567</p>
              </div>
            </div>
            <Button
              variant="outline"
              className="w-full justify-center border border-gray-300 bg-transparent py-2 text-gray-600 hover:bg-gray-50 transition-colors"
              onClick={openEditModal}
            >
              <PencilIcon size={16} className="mr-2" />
              Edit profile
            </Button>
            <Button
              variant="default"
              className="w-full justify-center bg-black-500 text-white py-2 mt-20 hover:bg-gray-800 transition-colors"
            >
              Manage accounts
            </Button>
          </div>
          {/* <div className="w-full justify-center border-2 border-gray-800 bg-transparent py-5 text-gray-800 hover:bg-gray-100 transition-colors">
            <PencilLine size={16} className="mr-2" />
            Edit profile
          </div> */}
        </div>

        <div className="lg:col-span-2 space-y-4 sm:space-y-6">
          <Details />
          <div className="flex flex-row justify-between w-full gap-2">
            <TalentsList />
            <BrandsList />
          </div>
        </div>
      </div>
      <EditProfileModal isOpen={isEditModalOpen} onClose={closeEditModal} />
    </div>
  );
};

export default ProfilePage;
