import React from 'react'
import Image from 'next/image';

interface BasicInformationProps {
  initialData: any;
}

const AssignedAgent: React.FC<BasicInformationProps> = ({ initialData }) => {
  return (
    <div className="text-sm">
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold text-xs sm:text-sm">Assigned agents</h3>
          <button className="text-xl sm:text-2xl font-bold">+</button>
        </div>
        <div className="space-y-1 sm:space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/findtalenticons/talent2.png"
                width={20}
                height={20}
                alt="Agent avatar"
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full mr-2"
              />
              <span className="text-xs">Natali Craig</span>
            </div>
            <button className="text-gray-500 text-xs sm:text-sm">
              &times;
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/findtalenticons/talent1.png"
                alt="Phoenix Barker"
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full mr-2"
              />
              <span className="text-xs">Phoenix Barker</span>
            </div>
            <button className="text-gray-500 text-xs sm:text-sm">
              &times;
            </button>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold text-xs sm:text-sm">Attach files</h3>
          <button className="text-xl font-bold">+</button>
        </div>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-3 sm:p-4 text-center mb-2">
          <p className="text-gray-500 text-xs">Drop files here to upload</p>
        </div>
        <div className="space-y-1 sm:space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs">Terms & Conditions.pdf</span>
              <p className="text-[10px] text-gray-500">100kb • Complete</p>
            </div>
            <button className="text-gray-500 text-xs ">•••</button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs">NDA_002.pdf</span>
              <p className="text-[10px] text-gray-500">237kb • Complete</p>
            </div>
            <button className="text-gray-500 text-xs ">•••</button>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold text-xs sm:text-sm">Contact person</h3>
          <button className="text-xs sm:text-sm text-gray-500">Edit</button>
        </div>
        <input
          type="text"
          placeholder="Name"
          className="w-full p-1.5 sm:p-2 border rounded mb-2 text-xs"
        />
        <input
          type="text"
          placeholder="Contact number"
          className="w-full p-1.5 sm:p-2 border rounded mb-2 text-xs"
        />
        <input
          type="text"
          placeholder="Email address"
          className="w-full p-1.5 sm:p-2 border rounded mb-2 text-xs"
        />
        <input
          type="text"
          placeholder="LinkedIn"
          className="w-full p-1.5 sm:p-2 border rounded mb-2 text-xs"
        />
      </div>
    </div>
  );
};

export default AssignedAgent
