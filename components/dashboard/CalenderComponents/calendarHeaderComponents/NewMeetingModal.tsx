import Image from "next/image";
import React, { useState } from "react";

interface NewMeetingModalProps {
  onClose: () => void;
}

const NewMeetingModal: React.FC<NewMeetingModalProps> = ({ onClose }) => {
  const [participants, setParticipants] = useState<string[]>(["Natali craig"]);
  const [meetingName, setMeetingName] = useState("");
  const [meetingDescription, setMeetingDescription] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  return (
    <div className="fixed inset-0 bg-black-500 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Create new meeting</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        
        <div className="flex gap-6">
          <div className="w-1/2">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">Add participants</h3>
              <button className="text-2xl font-light">+</button>
            </div>
            {participants.map((participant, index) => (
              <div key={index} className="flex items-center mb-2">
                <Image src="/findtalentIcons/talent1.png" alt={participant} width={32} height={32} className="w-8 h-8 rounded-full mr-2" />
                <span>{participant}</span>
                <button className="ml-auto text-gray-400">×</button>
              </div>
            ))}
          </div>
          
          <div className="w-1/2">
            <h3 className="font-medium mb-4">Meeting Information</h3>
            <input
              type="text"
              placeholder="Meeting name"
              value={meetingName}
              onChange={(e) => setMeetingName(e.target.value)}
              className="w-full p-2 mb-4 border rounded"
            />
            <textarea
              placeholder="Meeting description"
              value={meetingDescription}
              onChange={(e) => setMeetingDescription(e.target.value)}
              className="w-full p-2 mb-4 border rounded resize-none"
              rows={4}
            />
            <div className="text-right text-xs text-gray-400 mb-4">0/256</div>
            <div className="flex gap-4 mb-4">
              <input
                type="text"
                placeholder="Start time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="w-1/2 p-2 border rounded"
              />
              <input
                type="text"
                placeholder="End time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="w-1/2 p-2 border rounded"
              />
            </div>
            <h3 className="font-medium mb-2">Meeting platform</h3>
            <button className="w-full p-2 border rounded text-center">
              Connect google meet
            </button>
          </div>
        </div>
        
        <div className="flex justify-end mt-6 gap-4">
          <button className="px-4 py-2 bg-gray-200 rounded">Complete later</button>
          <button className="px-4 py-2 bg-black text-white rounded">Save</button>
        </div>
      </div>
    </div>
  );
};

export default NewMeetingModal;
