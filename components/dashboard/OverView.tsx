"use client";
import React, { useState } from "react";
import QuarterOverview from "./overviewComponents/QuarterOverview";
import OngoingDeliverables from "./overviewComponents/OngoingDeliverables";
import YourTalents from "./overviewComponents/YourTalents";
import CollaborationsOverview from "./overviewComponents/CollaborationsOverview";
import FindTalents from "./FindTalents";

interface OverViewProps {
  pageTitle: string;
//   onShowFindTalents: () => void;
}

const OverView: React.FC<OverViewProps> = ({ pageTitle,  }) => {
  const [showFindTalents, setShowFindTalents] = useState(false);

  const handleShowFindTalents = () => {
    setShowFindTalents(true);
    // onShowFindTalents();
  };

  if (showFindTalents) {
    return <FindTalents pageTitle="Find Talents" onBack={() => setShowFindTalents(false)} />;
  }

  return (
    <div className="p-4 sm:p-6 bg-white border">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <div>
          <QuarterOverview />
          <div className="lg:col-span-1 space-y-4">
            <OngoingDeliverables />
            <YourTalents />
          </div>
        </div>
        <div className="lg:col-span-2">
          <CollaborationsOverview onShowFindTalents={handleShowFindTalents} />
        </div>
      </div>
    </div>
  );
};

export default OverView;
