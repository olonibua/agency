import React from "react";
import CollaborationsSection from "./contentComponents/CollaborationsSection";
import DeliverablesSection from "./contentComponents/DeliverablesSection";
import PreviewSection from "./contentComponents/PreviewSection";

const ContentSection = () => {
  return (
    <div className="bg-white sm:p-6 rounded-lg">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-gray-200 pb-6 lg:pb-0 lg:pr-6">
          <CollaborationsSection />
        </div>
        <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-gray-200 pb-6 lg:pb-0 lg:px-6">
          <DeliverablesSection />
        </div>
        <div className="lg:col-span-1 lg:pl-6">
          <PreviewSection />
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
