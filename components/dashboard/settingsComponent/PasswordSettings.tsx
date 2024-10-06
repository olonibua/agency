import React from "react";

const PasswordSettings: React.FC = () => {
  return (
    <div className="bg-white p-6">
      <h2 className="text-xl font-semibold mb-4">Change password</h2>
      <form>
        <div className="space-y-4">
          <input
            type="password"
            placeholder="Current password"
            className="w-full px-3 py-2 border rounded-md"
          />
          <input
            type="password"
            placeholder="New password"
            className="w-full px-3 py-2 border rounded-md"
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="w-full px-3 py-2 border rounded-md"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Change password
          </button>
        </div>
      </form>
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">
          Two-factor Authentication
        </h3>
        <div className="flex items-center">
          <span className="mr-2">Authenticator App</span>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Login History</h3>
        <ul className="space-y-2">
          {[1, 2].map((index) => (
            <li key={index} className="flex justify-between items-center">
              <div>
                <p className="font-medium">Chrome, Desktop</p>
                <p className="text-sm text-gray-500">
                  London, UK, Oct 23 at 1:15 AM
                </p>
              </div>
              <button className="px-3 py-1 border rounded-md hover:bg-gray-100">
                Logout
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PasswordSettings;
