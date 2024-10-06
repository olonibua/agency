import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { ChatMessage } from "../Messages";

interface MessageListProps {
  chats: ChatMessage[];
  onChatSelect: (chat: ChatMessage) => void;
  selectedChatId: number | undefined;
}

export const MessageList: React.FC<MessageListProps> = ({ chats, onChatSelect, selectedChatId }) => {
  return (
    <div className="h-full overflow-y-auto bg-white border-r">
      <div className="p-4">
        <select className="w-full p-2 border rounded text-gray-600">
          <option>All Campaign Messages</option>
        </select>
        <div className="relative mt-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 pl-8 border rounded"
          />
          <div className="absolute inset-y-0 left-2 flex items-center">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="divide-y">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className={`flex items-center p-4 cursor-pointer ${
              chat.id === selectedChatId ? "bg-blue-100" : ""
            }`}
            onClick={() => onChatSelect(chat)}
          >
            <Image
              src={chat.avatar}
              alt={chat.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="ml-3 flex-grow">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">{chat.name}</h3>
                <span className="text-sm text-gray-500">{chat.time}</span>
              </div>
              <p className="text-sm text-gray-600 truncate">{chat.content}</p>
              <div className="mt-1">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
                  {chat.campaign}
                </span>
              </div>
            </div>
            {chat.status === "unread" ? (
              <div className="ml-2 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-white text-xs">
                1
              </div>
            ) : (
              <FaCheck className="ml-2 text-green-500" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
