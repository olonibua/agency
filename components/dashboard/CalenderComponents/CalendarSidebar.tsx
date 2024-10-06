import React from "react";
import MiniCalendar from "./calenderSidebarcomponent/MiniCalendar";
import ActivityCard from "./calenderSidebarcomponent/ActivityCard";


const CalendarSidebar: React.FC = () => {
  return (
    <div className="w-64 bg-white p-4 border-r border-gray-200">
      <MiniCalendar />
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-4">Activities this week</h2>
        <ActivityCard
          title="Jamilla x House Of Cb"
          subtitle="1x Youtube shorts"
          draftDate="Apr 28"
          publishDate="Jun 15"
          imageUrl="/findtalentIcons/talent3.png"
        />
        <ActivityCard
          title="Bethany x Jacquemus"
          subtitle="1x TikTok"
          draftDate="Apr 30"
          publishDate="Jun 29"
          imageUrl="/findtalentIcons/talent1.png"
        />
        <ActivityCard
          title="Olive x New Balance"
          subtitle="1x TikTok"
          draftDate="Apr 30"
          publishDate="Jun 29"
          imageUrl="/findtalentIcons/talent2.png"
        />
      </div>
    </div>
  );
};

export default CalendarSidebar;
