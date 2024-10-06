import React, { useState } from "react";

interface DatePickerModalProps {
  onClose: () => void;
  onDateSelect: (date: Date) => void;
}

const DatePickerModal: React.FC<DatePickerModalProps> = ({ onClose, onDateSelect }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    onDateSelect(date);
  };

  const renderCalendar = () => {
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const startingDay = firstDayOfMonth.getDay();

    const daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

    const days = [];
    for (let i = 0; i < startingDay; i++) {
      days.push(<div key={`empty-${i}`} className="text-center p-1"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
      const isSelected = date.toDateString() === selectedDate.toDateString();
      const isToday = date.toDateString() === new Date().toDateString();

      days.push(
        <button
          key={day}
          onClick={() => handleDateSelect(date)}
          className={`text-center p-1 rounded-full ${
            isSelected ? 'bg-black text-white' :
            isToday ? 'bg-gray-200' : ''
          }`}
        >
          {day}
        </button>
      );
    }

    return (
      <>
        <div className="grid grid-cols-7 gap-1 mb-2">
          {daysOfWeek.map(day => (
            <div key={day} className="text-center text-sm font-medium text-gray-500">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {days}
        </div>
      </>
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-80">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Select Date</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            value={selectedDate.toLocaleDateString()}
            readOnly
            className="border rounded px-2 py-1 w-1/2"
          />
          <input
            type="text"
            placeholder="Custom date"
            className="border rounded px-2 py-1 w-1/2 ml-2"
          />
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="text-lg font-semibold">
            {currentDate.toLocaleDateString('default', { month: 'long', year: 'numeric' })}
          </div>
          <div>
            <button onClick={handlePrevMonth} className="mr-2">&lt;</button>
            <button onClick={handleNextMonth}>&gt;</button>
          </div>
        </div>
        {renderCalendar()}
      </div>
    </div>
  );
};

export default DatePickerModal;