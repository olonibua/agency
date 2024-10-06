"use client";
import React, { useState } from "react";
import { MessageHeader } from "./messagesComponents/MessageHeader";
import { MessageList } from "./messagesComponents/MessageList";
import { ChatWindow } from "./messagesComponents/ChatWindow";

// Define a type for the chat message
export type ChatMessage = {
  id: number;
  name: string;
  content: string;
  time: string;
  campaign: string;
  avatar: string;
  status: "read" | "unread";
  messages: {
    id: number;
    sender: string;
    content: string;
    timestamp: string;
    avatar?: string;
  }[];
};

// Sample data with three chats
const chatData: ChatMessage[] = [
  {
    id: 1,
    name: "Jennifer Markus",
    content: "Absolutely! I've blocked off the wh...",
    time: "05:30 PM",
    campaign: "House of CB Summer Cam...",
    avatar: "/findtalentIcons/talent4.png",
    status: "unread",
    messages: [
      {
        id: 1,
        sender: "Jennifer",
        content:
          "Hey there! Hope you're doing well! 😊 We're so impressed with the content you've been creating for our House of CB Summer campaign.",
        timestamp: "18 JUN AT 13:25",
        avatar: "/findtalentIcons/talent4.png",
      },
      {
        id: 2,
        sender: "You",
        content: "Thank you so much! I'm really enjoying working on this campaign. Do you have any specific ideas for the next post?",
        timestamp: "18 JUN AT 14:30",
      },
      {
        id: 3,
        sender: "Jennifer",
        content: "Absolutely! I've blocked off the whole afternoon to brainstorm. How about we focus on showcasing the versatility of our summer dresses?",
        timestamp: "18 JUN AT 15:45",
        avatar: "/findtalentIcons/talent4.png",
      },
    ],
  },
  {
    id: 2,
    name: "Alex Johnson",
    content: "The photoshoot location looks perfect...",
    time: "02:15 PM",
    campaign: "SportyFit Activewear Launch",
    avatar: "/findtalentIcons/talent2.png",
    status: "read",
    messages: [
      {
        id: 1,
        sender: "Alex",
        content: "Hi there! Just wanted to touch base about the upcoming SportyFit Activewear photoshoot. Have you had a chance to review the location options?",
        timestamp: "17 JUN AT 10:00",
        avatar: "/findtalentIcons/talent2.png",
      },
      // ... more messages
    ],
  },
  // ... more chat data
];

const Messages = ({ pageTitle }: { pageTitle: string }) => {
  const [selectedChat, setSelectedChat] = useState<ChatMessage | null>(null);
  const [isMobileListVisible, setIsMobileListVisible] = useState(true);

  const handleChatSelect = (chat: ChatMessage) => {
    setSelectedChat(chat);
    setIsMobileListVisible(false);
  };

  const handleBackToList = () => {
    setIsMobileListVisible(true);
  };

  return (
    <div className="h-screen flex flex-col">
      <MessageHeader />
      <div className="flex flex-1 overflow-hidden">
        <div className={`md:w-1/3 w-full ${isMobileListVisible ? 'block' : 'hidden md:block'}`}>
          <MessageList
            chats={chatData}
            onChatSelect={handleChatSelect}
            selectedChatId={selectedChat?.id}
          />
        </div>
        <div className={`md:w-2/3 w-full ${isMobileListVisible ? 'hidden md:block' : 'block'}`}>
          <ChatWindow 
            selectedChat={selectedChat} 
            onBackToList={handleBackToList}
          />
        </div>
      </div>
    </div>
  );
};

export default Messages;
