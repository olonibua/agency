import React from "react";

const LegalSettings: React.FC = () => {
  return (
    <div className="bg-white p-6">
      <h2 className="text-xl font-semibold mb-4">Language</h2>
      <div className="space-y-4">
        {["English", "French", "German"].map((lang) => (
          <div key={lang}>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                name="language"
                value={lang.toLowerCase()}
                defaultChecked={lang === "English"}
              />
              <span className="ml-2">{lang}</span>
            </label>
          </div>
        ))}
      </div>
      <h2 className="text-xl font-semibold mt-8 mb-4">Legal Information</h2>
      <ul className="space-y-2">
        {["Privacy policy.pdf", "Cookie policy.pdf", "Terms of use.pdf"].map(
          (doc) => (
            <li key={doc} className="flex justify-between items-center">
              <span>{doc}</span>
              <button className="text-blue-600 hover:text-blue-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default LegalSettings;
