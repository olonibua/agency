import React from "react";
import CalendarSidebar from "./CalenderComponents/CalendarSidebar";
import CalendarMain from "./CalenderComponents/CalendarMain";
import CalendarHeader from "./CalenderComponents/CalendarHeader";

const Calendar: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <CalendarHeader />
      <div className="flex flex-1 border-t">
        <CalendarSidebar />
        <CalendarMain />
      </div>
    </div>
  );
};

export default Calendar;
