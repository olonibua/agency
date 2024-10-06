import React from "react";

const AppearanceSettings: React.FC = () => {
  return (
    <div className="bg-white p-6">
      <h2 className="text-xl font-semibold mb-4">Appearance</h2>
      <div className="space-y-4">
        <div>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio"
              name="theme"
              value="light"
              defaultChecked
            />
            <span className="ml-2">Light</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio"
              name="theme"
              value="dark"
            />
            <span className="ml-2">Dark</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio"
              name="theme"
              value="system"
            />
            <span className="ml-2">Same as device</span>
          </label>
        </div>
      </div>
      <h2 className="text-xl font-semibold mt-8 mb-4">Notifications</h2>
      <div className="space-y-4">
        {[
          "Collaborations",
          "Message notifications",
          "Delivery request notifications",
          "Experience requests",
        ].map((item) => (
          <div key={item} className="flex justify-between items-center">
            <span>{item}</span>
            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider round"></span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppearanceSettings;
