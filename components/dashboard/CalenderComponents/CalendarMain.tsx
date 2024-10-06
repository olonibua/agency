import React, { useState } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, addMonths, subMonths } from 'date-fns';

interface Event {
  title: string;
  type: 'out-of-office' | 'unavailable' | 'notes' | 'meeting' | 'ig-story' | 'ig-carousel' | 'tiktok-video';
  icon?: string;
}

interface DayData {
  date: Date;
  events: Event[];
}

const CalendarMain: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [expandedDay, setExpandedDay] = useState<Date | null>(null);
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const generateMockEvents = (date: Date): Event[] => {
    // This is a mock function to generate events for demonstration
    // In a real application, you would fetch this data from an API or state management
    const events: Event[] = [];
    if (Math.random() > 0.5) events.push({ title: 'Out of office', type: 'out-of-office' });
    if (Math.random() > 0.7) events.push({ title: 'Unavailable', type: 'unavailable', icon: '👥' });
    if (Math.random() > 0.8) events.push({ title: 'Notes', type: 'notes', icon: '📝' });
    if (Math.random() > 0.7) events.push({ title: 'Meeting', type: 'meeting', icon: '👥' });
    if (Math.random() > 0.6) events.push({ title: '1x IG story', type: 'ig-story', icon: '📸' });
    if (Math.random() > 0.6) events.push({ title: '1x IG carousel', type: 'ig-carousel', icon: '🎠' });
    if (Math.random() > 0.6) events.push({ title: '1x TikTok vid...', type: 'tiktok-video', icon: '🎥' });
    return events;
  };

  const calendarData: DayData[] = daysInMonth.map(day => ({
    date: day,
    events: generateMockEvents(day),
  }));

  const renderEventItem = (event: Event) => (
    <div key={event.title} className={`text-xs p-1 rounded ${getEventColor(event.type)} truncate`}>
      {event.icon && <span className="mr-1">{event.icon}</span>}
      {event.title}
    </div>
  );

  const getEventColor = (type: Event['type']): string => {
    switch (type) {
      case 'out-of-office': return 'bg-gray-100';
      case 'unavailable': return 'bg-red-100';
      case 'notes': return 'bg-yellow-100';
      case 'meeting': return 'bg-blue-100';
      case 'ig-story': case 'ig-carousel': case 'tiktok-video': return 'bg-purple-100';
      default: return 'bg-gray-100';
    }
  };

  const goToPreviousMonth = () => setCurrentDate(prevDate => subMonths(prevDate, 1));
  const goToNextMonth = () => setCurrentDate(prevDate => addMonths(prevDate, 1));
  const goToToday = () => setCurrentDate(new Date());

  const toggleDayExpansion = (date: Date) => {
    if (expandedDay && date.getTime() === expandedDay.getTime()) {
      setExpandedDay(null);
    } else {
      setExpandedDay(date);
    }
  };

  return (
    <div className="flex-1 p-2 sm:p-4 bg-white">
      {/* <div className="flex flex-col sm:flex-row justify-between items-center mb-4 space-y-2 sm:space-y-0">
        <h1 className="text-xl sm:text-2xl font-bold">Q2 | {format(currentDate, 'MMMM yyyy')}</h1>
        <div className="flex items-center space-x-2">
          <button onClick={goToToday} className="px-3 py-1 bg-gray-200 rounded text-sm">Today</button>
          <button onClick={goToPreviousMonth} className="p-1 bg-gray-200 rounded">&lt;</button>
          <button onClick={goToNextMonth} className="p-1 bg-gray-200 rounded">&gt;</button>
          <button className="p-2 bg-white border border-gray-300 rounded">+</button>
          <select className="p-2 bg-white border border-gray-300 rounded text-sm">
            <option>Month</option>
          </select>
        </div>
      </div> */}
      <div className="grid grid-cols-7 gap-1 text-xs sm:text-sm">
        {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map(day => (
          <div key={day} className="text-center font-bold p-1 sm:p-2">{day}</div>
        ))}
        {calendarData.map((dayData, index) => (
          <div 
            key={index} 
            className={`border p-1 sm:p-2 ${isSameMonth(dayData.date, currentDate) ? '' : 'bg-gray-100'} 
                        ${expandedDay && dayData.date.getTime() === expandedDay.getTime() ? 'col-span-7 row-span-3' : ''}`}
            onClick={() => toggleDayExpansion(dayData.date)}
          >
            <div className="font-bold mb-1">{format(dayData.date, 'd')}</div>
            {(!expandedDay || dayData.date.getTime() !== expandedDay.getTime()) && (
              <>
                <div className="space-y-1 hidden sm:block">
                  {dayData.events.slice(0, 3).map(renderEventItem)}
                  {dayData.events.length > 3 && (
                    <div className="text-xs bg-black text-white p-1 rounded">
                      + {dayData.events.length - 3} more
                    </div>
                  )}
                </div>
                <div className="sm:hidden">
                  {dayData.events.length > 0 && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full mx-auto"></div>
                  )}
                </div>
              </>
            )}
            {expandedDay && dayData.date.getTime() === expandedDay.getTime() && (
              <div className="mt-2 space-y-2">
                <h3 className="text-lg font-bold">{format(dayData.date, 'MMMM d, yyyy')}</h3>
                {dayData.events.map(renderEventItem)}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarMain;
