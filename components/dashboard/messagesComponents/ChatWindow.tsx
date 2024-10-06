import React, { useState } from "react";
import { ChatMessage } from "../Messages";
import { FaPaperPlane, FaPaperclip, FaSmile, FaArrowLeft } from "react-icons/fa";

interface ChatWindowProps {
  selectedChat: ChatMessage | null;
  onBackToList: () => void;
}

const Avatar = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} className="w-8 h-8 rounded-full border-2 border-white" />
);

const ChatBubble = ({ message, isOwn }: { message: ChatMessage['messages'][0]; isOwn: boolean }) => (
  <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}>
    {!isOwn && <Avatar src={message.avatar ?? ''} alt={message.sender} />}
    <div className={`max-w-xs mx-2 p-3 rounded-lg ${isOwn ? 'bg-blue-100' : 'bg-gray-100'}`}>
      <p className="text-sm">{message.content}</p>
      <span className="text-xs text-gray-500 mt-1">{message.timestamp}</span>
    </div>
  </div>
);

export const ChatWindow: React.FC<ChatWindowProps> = ({ selectedChat, onBackToList }) => {
  const [newMessage, setNewMessage] = useState("");

  if (!selectedChat) {
    return (
      <div className="flex-1 flex items-center justify-center bg-white h-full">
        <p className="text-gray-500">Select a chat to start messaging</p>
      </div>
    );
  }

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      console.log("Sending message:", newMessage);
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-col bg-white h-full">
      <div className="p-4 border-b flex items-center">
        <button onClick={onBackToList} className="md:hidden mr-2">
          <FaArrowLeft />
        </button>
        <div className="flex items-center flex-1">
          <Avatar src={selectedChat.avatar} alt={selectedChat.name} />
          <div className="ml-3">
            <h2 className="font-semibold">{selectedChat.name}</h2>
            <span className="text-sm text-gray-600">
              {selectedChat.campaign}
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {selectedChat.messages.map((message) => (
          <ChatBubble
            key={message.id}
            message={message}
            isOwn={message.sender === "You"}
          />
        ))}
      </div>

      <div className="p-4 border-t">
        <div className="flex items-center bg-gray-100 rounded-lg p-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 bg-transparent outline-none"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleSendMessage();
            }}
          />
          <button className="mx-2 text-gray-500 hover:text-gray-700">
            <FaPaperclip />
          </button>
          <button className="mx-2 text-gray-500 hover:text-gray-700">
            <FaSmile />
          </button>
          <button
            className="ml-2 bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600"
            onClick={handleSendMessage}
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
  );
};