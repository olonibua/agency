import React from 'react'
import Filters from './findtalentsComponents/Filters';
import Results from './findtalentsComponents/Results';

interface FindTalentsProps {
  pageTitle: string;
  onBack: () => void;
}

const FindTalents: React.FC<FindTalentsProps> = ({ pageTitle, onBack }) => {
  return (
    <div className="p-4">
      {/* <h1 className="text-2xl font-bold mb-4 p-4">{pageTitle}</h1> */}
      <button onClick={onBack}>Back to Overview</button>
      <div
        className="bg-[url('/findtalentIcons/findtalentbg.jpg')] bg-cover bg-center p-4 rounded-lg mb-6"
        // className="bg-gray-200 p-4 rounded-lg mb-6"
      >
        <form className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Industry"
            defaultValue="Beauty"
            className="flex-1 p-2 rounded border border-gray-300"
          />
          <input
            type="text"
            placeholder="All countries"
            className="flex-1 p-2 rounded border border-gray-300"
          />
          <select className="flex-1 p-2 rounded border border-gray-300 bg-white">
            <option>Instagram</option>
            {/* Add more options as needed */}
          </select>
          <button
            type="submit"
            className="bg-black-500 text-white p-2 rounded hover:bg-gray-800"
          >
            Search
          </button>
        </form>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <Filters />
        </div>
        <div className="lg:col-span-3">
          <Results />
        </div>
      </div>
    </div>
  );
}

export default FindTalents
