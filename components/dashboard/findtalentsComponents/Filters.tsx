import React from "react";

const Filters = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>

      <div className="mb-4">
        <h3 className="font-medium mb-2">Talent tier</h3>
        <div className="space-y-2">
          {["All", "Mega", "Macro", "Micro", "Nano"].map((tier) => (
            <label key={tier} className="flex items-center">
              <input
                type="radio"
                name="talent-tier"
                className="mr-2"
                defaultChecked={tier === "All"}
              />
              <span>{tier}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-medium mb-2">Social insights range</h3>
        <div>
          <label className="block mb-2">Instagram followers</label>
          <input type="range" min="5000" max="2000000" className="w-full" />
          <div className="flex justify-between text-sm text-gray-600">
            <span>5K</span>
            <span>2M</span>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-medium mb-2">Base engagement range</h3>
        <input
          type="range"
          min="0"
          max="100"
          defaultValue="15"
          className="w-full"
        />
        <div className="text-sm text-gray-600">15%</div>
      </div>

      <div className="mb-4">
        <h3 className="font-medium mb-2">Location</h3>
        <div className="flex mb-2">
          <button className="bg-gray-200 px-2 py-1 rounded-l">
            Influencer location
          </button>
          <button className="bg-white px-2 py-1 rounded-r border">
            Audience location
          </button>
        </div>
        <div className="space-y-2">
          {["All countries", "United Kingdom", "France", "Germany"].map(
            (location) => (
              <label key={location} className="flex items-center">
                <input
                  type="radio"
                  name="location"
                  className="mr-2"
                  defaultChecked={location === "All countries"}
                />
                <span>{location}</span>
              </label>
            )
          )}
        </div>
        <input
          type="text"
          placeholder="Search other locations"
          className="w-full mt-2 p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <h3 className="font-medium mb-2">Influencer gender</h3>
        <div className="space-y-2">
          {["Any", "Male", "Female"].map((gender) => (
            <label key={gender} className="flex items-center">
              <input
                type="radio"
                name="gender"
                className="mr-2"
                defaultChecked={gender === "Any"}
              />
              <span>{gender}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-medium mb-2">Audience age</h3>
        <div className="space-y-2">
          {["All", "12-17", "18-24", "25-34", "35-49", "50+"].map((age) => (
            <label key={age} className="flex items-center">
              <input
                type="radio"
                name="audience-age"
                className="mr-2"
                defaultChecked={age === "All"}
              />
              <span>{age}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-2">Exclude profiles</h3>
        <div className="space-y-2">
          <div>
            <span className="block mb-1">In a campaign</span>
            <select className="w-full p-2 border rounded">
              <option>Select campaign</option>
            </select>
          </div>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Out of town</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Filters;
