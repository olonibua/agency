import React from "react";

const MiniCalendar: React.FC = () => {
  const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  const dates = Array.from({ length: 35 }, (_, i) => i + 1);

  return (
    <div className="text-sm">
      <div className="grid grid-cols-7 gap-1 mb-2">
        {days.map((day) => (
          <div key={day} className="text-center text-gray-500">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {dates.map((date) => (
          <div
            key={date}
            className={`
              text-center p-1 rounded-full
              ${date === 10 ? "bg-black text-white" : ""}
              ${date > 31 ? "text-gray-300" : ""}
            `}
          >
            {date <= 31 ? date : date - 31}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniCalendar;
