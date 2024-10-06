import React from "react";

interface Draft {
  name: string;
  brand: string;
  completionLevel: number;
  dateStarted: string;
}

const draftData: Draft[] = [
  {
    name: "Continue brand setup",
    brand: "Bershka",
    completionLevel: 60,
    dateStarted: "August 2, 2013",
  },
  {
    name: "Continue campaign setup",
    brand: "Renuar",
    completionLevel: 20,
    dateStarted: "October 25, 2019",
  },
  {
    name: "Continue collaboration setup",
    brand: "American Eagle",
    completionLevel: 30,
    dateStarted: "November 7, 2017",
  },
  {
    name: "Continue deliverable setup",
    brand: "Zara",
    completionLevel: 50,
    dateStarted: "February 11, 2014",
  },
];

const DraftsTable = () => {
  return (
    <div className="overflow-x-auto bg-white border-b">
      <table className="w-full border-separate border-spacing-y-2 bg-white min-w-[640px]">
        <thead className="hidden sm:table-header-group">
          <tr>
            <th className="text-left px-4 pb-2 font-normal text-gray-500">Draft</th>
            <th className="text-left px-4 pb-2 font-normal text-gray-500">Brand</th>
            <th className="text-left px-4 pb-2 font-normal text-gray-500">Completion level</th>
            <th className="text-left px-4 pb-2 font-normal text-gray-500">Date started</th>
            <th className="text-left px-4 pb-2 font-normal text-gray-500"></th>
          </tr>
        </thead>
        <tbody>
          {draftData.map((draft, index) => (
            <tr key={index} className="border-b border-gray-200 last:border-b-0 flex flex-col sm:table-row mb-4 sm:mb-0">
              <td className="bg-white p-4 first:rounded-t-lg sm:first:rounded-l-lg sm:first:rounded-t-none border-r border-gray-200 flex flex-col sm:table-cell">
                <span className="font-bold sm:hidden mb-1">Draft:</span>
                {draft.name}
              </td>
              <td className="bg-white p-4 border-r border-gray-200 flex flex-col sm:table-cell">
                <span className="font-bold sm:hidden mb-1">Brand:</span>
                {draft.brand}
              </td>
              <td className="bg-white p-4 border-r border-gray-200 flex flex-col sm:table-cell">
                <span className="font-bold sm:hidden mb-1">Completion level:</span>
                <div className="flex items-center gap-2">
                  <div className="flex-grow h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500"
                      style={{ width: `${draft.completionLevel}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500">
                    {draft.completionLevel}%
                  </span>
                </div>
              </td>
              <td className="bg-white p-4 border-r border-gray-200 flex flex-col sm:table-cell">
                <span className="font-bold sm:hidden mb-1">Date started:</span>
                {draft.dateStarted}
              </td>
              <td className="bg-white p-4 last:rounded-b-lg sm:last:rounded-r-lg sm:last:rounded-b-none flex justify-center sm:table-cell">
                <button className="px-3 py-1.5 bg-white border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DraftsTable;
