import React from 'react'

interface BasicInformationProps {
  initialData: any;
}

const BasicInformation: React.FC<BasicInformationProps> = ({ initialData }) => {
  return (
    <div className="text-xs sm:text-sm">
      <div>
        <h3 className="font-semibold mb-2 text-xs sm:text-sm ">
          Basic Information
        </h3>
        <input
          type="text"
          placeholder="Brand name"
          className="w-full p-2 border rounded mb-2 text-xs"
        />
        <textarea
          placeholder="Description"
          className="w-full p-2 border rounded mb-2 text-xs"
          rows={3}
        ></textarea>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <input
            type="text"
            placeholder="Industry"
            className="p-2 border rounded text-xs"
          />
          <input
            type="text"
            placeholder="Website"
            className="p-2 border rounded text-xs"
          />
        </div>
        <h3 className="font-semibold mb-2 text-xs sm:text-sm">
          Social media links
        </h3>
        <div className="grid grid-cols-2 gap-2 mb-4">
          <input
            type="text"
            placeholder="Instagram"
            className="p-2 border rounded text-xs"
          />
          <input
            type="text"
            placeholder="Youtube"
            className="p-2 border rounded text-xs"
          />
          <input
            type="text"
            placeholder="TikTok"
            className="p-2 border rounded text-xs"
          />
          <input
            type="text"
            placeholder="X (formerly Twitter)"
            className="p-2 border rounded text-xs"
          />
          <input
            type="text"
            placeholder="Facebook"
            className="p-2 border rounded text-xs"
          />
          <input
            type="text"
            placeholder="Snapchat"
            className="p-2 border rounded"
          />
        </div>
        <h3 className="font-semibold mb-2 text-xs sm:text-sm">
          Company details
        </h3>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="text"
            placeholder="Registered address"
            className="p-2 border rounded text-xs"
          />
          <input
            type="text"
            placeholder="VAT number"
            className="p-2 border rounded text-xs"
          />
          <input
            type="text"
            placeholder="Email address"
            className="p-2 border text-[12px] rounded"
          />
          <input
            type="text"
            placeholder="Telephone number"
            className="p-2 border rounded text-xs"
          />
        </div>
      </div>
    </div>
  );
}

export default BasicInformation
