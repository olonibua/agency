import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

const QuarterOverview: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="bg-[#FBFBFB] p-4 sm:p-6 rounded-lg">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 sm:gap-0">
        <h2 className="text-2xl sm:text-3xl font-bold">
          Q1 <span className="text-gray-400">2024</span>
        </h2>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="text-sm w-full sm:w-auto">
              {date ? format(date, "MMMM yyyy") : "Select month"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="end">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex justify-center items-center mb-6">
        <div className="relative w-32 h-32 sm:w-40 sm:h-40">
          <div className="relative w-full h-full">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#ddd"
                strokeWidth="10"
                style={{
                  strokeDasharray: "283.61",
                  strokeDashoffset: "283.61",
                }}
              ></circle>
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="#4CAF50"
                strokeWidth="10"
                style={{
                  strokeDasharray: "283.61",
                  strokeDashoffset: "227.61",
                }}
              ></circle>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl font-bold">20%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-y-4 gap-x-2 sm:gap-x-4">
        <div>
          <p className="text-xs sm:text-sm text-gray-500">Projections</p>
          <p className="text-sm sm:text-base font-semibold">GBP 300,000</p>
        </div>
        <div>
          <p className="text-xs sm:text-sm text-gray-500">Total Signed</p>
          <p className="text-sm sm:text-base font-semibold">GBP 60,000</p>
        </div>
        <div>
          <p className="text-xs sm:text-sm text-gray-500">Remaining</p>
          <p className="text-sm sm:text-base font-semibold">GBP 240,000</p>
        </div>
        <div>
          <p className="text-xs sm:text-sm text-gray-500">Total # of Collabs</p>
          <p className="text-sm sm:text-base font-semibold">20</p>
        </div>
      </div>
    </div>
  );
};

export default QuarterOverview;
