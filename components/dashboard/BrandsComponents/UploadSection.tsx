import Image from 'next/image';
import React, { useState } from 'react'

interface UploadSectionProps {
  initialData: any;
}

const UploadSection: React.FC<UploadSectionProps> = ({ initialData }) => {
    
  const [coverPhoto, setCoverPhoto] = useState<File | null>(null);
  const [profileImage, setProfileImage] = useState<File | null>(null);

  const handleFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    setFile: React.Dispatch<React.SetStateAction<File | null>>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setFile(file);
    }
  };
  return (
    <div>
      <div>
        <div className="mb-6">
          <h3 className="font-semibold mb-2 text-xs sm:text-sm">Upload cover photo</h3>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
            {coverPhoto ? (
              <div className="relative w-full h-[200px]">
                <Image
                  src={URL.createObjectURL(coverPhoto)}
                  alt="Cover photo preview"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-[120px]">
                <svg
                  className="w-12 h-12 text-gray-400 mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <p className="text-sm text-gray-500">
                  Click to upload or drag and drop
                </p>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileUpload(e, setCoverPhoto)}
              className="hidden"
              id="cover-photo-upload"
            />
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Cover photo should have dimensions of 1920px by 1080px
          </p>
        </div>
        <div className="mb-6">
          <h3 className="font-semibold mb-2 text-xs sm:text-sm">Upload profile image</h3>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
            {profileImage ? (
              <div className="relative w-32 h-32 mx-auto">
                <Image
                  src={URL.createObjectURL(profileImage)}
                  alt="Profile image preview"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-[120px]">
                <svg
                  className="w-12 h-12 text-gray-400 mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <p className="text-sm text-gray-500">
                  Click to upload or drag and drop
                </p>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileUpload(e, setProfileImage)}
              className="hidden"
              id="profile-image-upload"
            />
          </div>
          <p className="text-xs  text-gray-500 mt-2">
            Profile images should have dimensions of 1080px by 1080px
          </p>
        </div>
      </div>
    </div>
  );
}

export default UploadSection
