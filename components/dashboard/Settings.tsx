import React from 'react'
import PasswordSettings from './settingsComponent/PasswordSettings';
import AppearanceSettings from './settingsComponent/AppearanceSettings';
import LegalSettings from './settingsComponent/LegalSettings';

const Settings: React.FC<{ pageTitle: string }> = ({ pageTitle }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white h-screen border-t">
      {/* <h1 className="text-3xl font-bold mb-8 border-gray-200">Settings</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 divide-x bg-white divide-gray-200">
        <PasswordSettings />
        <AppearanceSettings />
        <LegalSettings />
      </div>
    </div>
  );
};

export default Settings;