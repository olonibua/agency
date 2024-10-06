import React, { useState } from "react";
import NewMeetingModal from "./calendarHeaderComponents/NewMeetingModal";
import DatePickerModal from "./calendarHeaderComponents/DatePickerModal";
// import NewMeetingModal from "./NewMeetingModal";
// import DatePickerModal from "./DatePickerModal";

const CalendarHeader: React.FC = () => {
  const [isNewMeetingModalOpen, setIsNewMeetingModalOpen] = useState(false);
  const [isDatePickerModalOpen, setIsDatePickerModalOpen] = useState(false);

  const handleAddClick = () => {
    setIsNewMeetingModalOpen(true);
    setIsDatePickerModalOpen(true);
  };

  const handleCloseModals = () => {
    setIsNewMeetingModalOpen(false);
    setIsDatePickerModalOpen(false);
  };

  const handleDateSelect = (selectedDate: Date) => {
    // Handle the selected date
    // Update state or perform any necessary actions
  };

  return (
    <>
      <div className="flex justify-between items-center p-4 bg-white">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-semibold text-gray-800">Q2 | March 2024</h1>
          <button className="px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
            Today
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button
            className="p-2 rounded-full text-black-500 border shadow-md transition-colors"
            onClick={handleAddClick}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
          <div className="relative">
            <select className="appearance-none bg-white border border-gray-300 rounded-full px-4 py-2 pr-8 text-sm font-medium text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>Month</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-4">
        {isNewMeetingModalOpen && (
          <div>
            <NewMeetingModal onClose={handleCloseModals} />
          </div>
        )}

        {/* {isDatePickerModalOpen && (
          <div>
            <DatePickerModal 
              onClose={handleCloseModals}
              onDateSelect={handleDateSelect}
            />
          </div>
        )} */}
      </div>
    </>
  );
};

export default CalendarHeader;
