import React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black-500 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-[90%] sm:max-w-md shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Edit profile</h2>
          <Button variant="ghost" onClick={onClose}>
            <X size={24} />
          </Button>
        </div>
        <div className="space-y-4">
          <div>
            <p className="mb-2">Change profile photo</p>
            <Image
              src="/profile-picture.png"
              alt="Profile"
              className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input placeholder="First name" />
            <Input placeholder="Last name" />
          </div>
          <Input placeholder="Contact number" />
          <Button className="w-full bg-black-500 text-white hover:bg-gray-800">
            Update profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
