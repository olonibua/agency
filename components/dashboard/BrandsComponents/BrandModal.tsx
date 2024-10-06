"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import UploadSection from "./UploadSection";
import BasicInformation from "./BasicInformation";
import AssignedAgent from "./AssignedAgent";

interface BrandModalProps {
  onClose: () => void;
  isEditing: boolean;
  initialData?: any; // Replace 'any' with a proper type for your brand data
}

const BrandModal: React.FC<BrandModalProps> = ({
  onClose,
  isEditing,
  initialData = {},
}) => {
  const [brandData, setBrandData] = useState(initialData);
  const router = useRouter();

  useEffect(() => {
    if (isEditing && initialData) {
      setBrandData(initialData);
    }
  }, [isEditing, initialData]);

  const handleSave = () => {
    // Here you would typically save the brand data to your backend
    // For now, we'll just navigate to the brand profile page
    if (isEditing) {
      // Update existing brand
      console.log("Updating brand:", brandData);
    } else {
      // Create new brand
      console.log("Creating new brand:", brandData);
    }
    router.push("/dashboard/brandprofile");
  };

  return (
    <div className="fixed inset-0 bg-black-500 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-4 sm:p-6 w-full max-w-6xl max-h-[90vh] rounded-lg overflow-y-auto md:overflow-y-hidden ">
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <h2 className="text-lg sm:text-xl font-semibold">
            {isEditing ? "Edit brand profile" : "Create new brand profile"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-sm sm:text-base"
          >
            X
          </button>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <UploadSection initialData={brandData} />
          <BasicInformation initialData={brandData} />
          <AssignedAgent initialData={brandData} />
        </form>

        <div className="mt-4 sm:mt-6 flex justify-end space-x-2">
          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1.5 sm:px-4 sm:py-2 border rounded text-sm"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-3 py-1.5 sm:px-4 sm:py-2 bg-black-500 text-white rounded text-sm"
          >
            {isEditing ? "Update" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandModal;
