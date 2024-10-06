"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Settings,
  LogOut,
  ChevronLeft,
  Menu,
} from "lucide-react";

import BrandsIcon from "../../public/sidebarIcons/brands.svg";
import CalendarIcon from "../../public/sidebarIcons/calender.svg";
import DraftsIcon from "../../public/sidebarIcons/draft.svg";
import MessagesIcon from '../../public/sidebarIcons/message.svg';
import OverviewIcon from '../../public/sidebarIcons/overview.svg';
import TalentsIcon from '../../public/sidebarIcons/talents.svg';
import ProfileIcon from '../../public/sidebarIcons/profileIcon.svg';

const menuItems = [
  { icon: OverviewIcon, label: "Overview", href: "/dashboard/overview" },
  { icon: BrandsIcon, label: "Brands", href: "/dashboard/brands" },
  { icon: CalendarIcon, label: "Calendar", href: "/dashboard/calendar" },
  { icon: TalentsIcon, label: "Talents", href: "/dashboard/talents" },
  { icon: DraftsIcon, label: "Drafts", href: "/dashboard/drafts" },
  { icon: MessagesIcon, label: "Messages", href: "/dashboard/messages" },
];

const Sidebar = ({ currentPath }: { currentPath: string }) => {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside
      className={`bg-black-500 text-white ${
        isOpen ? "w-64" : "w-16"
      } min-h-screen p-4 flex flex-col transition-all duration-300`}
    >
      <div className="mb-8 flex items-center justify-between">
        {isOpen && <h1 className="text-2xl font-bold">RIAA</h1>}
        <button
          onClick={toggleSidebar}
          className="p-1 rounded-full hover:bg-gray-700"
        >
          {isOpen ? <ChevronLeft size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <nav className="flex-grow">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center py-3 px-4 rounded mb-2 w-full text-left hover:bg-gray-700 ${
              pathname === item.href ? "bg-gray-700" : ""
            } group`}
          >
            <Image
              src={item.icon}
              alt={item.label}
              className={`mr-3 h-5 w-5 transition-colors ${
                pathname === item.href
                  ? "brightness-0 invert"
                  : "group-hover:brightness-0 group-hover:invert"
              }`}
            />
            {isOpen && item.label}
          </Link>
        ))}
      </nav>
      <div className="mt-auto">
        {isOpen && (
          <Link
            href="/dashboard/profile"
            className={`flex items-center p-4 cursor-pointer w-full text-left hover:bg-gray-700 ${
              pathname === "/dashboard/profile" ? "bg-gray-700" : ""
            } group`}
          >
            <Image
              src={ProfileIcon}
              alt="profile"
              className={`mr-3 h-5 w-5 transition-colors ${
                pathname === "/dashboard/profile"
                  ? "brightness-0 invert"
                  : "group-hover:brightness-0 group-hover:invert"
              }`}
            />
            <span className="ml-2">Profile</span>
          </Link>
        )}
        {isOpen && (
          <>
            <Link
              href="/dashboard/settings"
              className={`w-full text-left py-2 px-4 flex items-center hover:bg-gray-700 ${
                pathname === "/dashboard/settings" ? "bg-gray-700" : ""
              }`}
            >
              <Settings className="mr-3 h-5 w-5" />
              Settings
            </Link>

            <button className="w-full text-left py-2 px-4 flex items-center hover:bg-gray-700">
              <LogOut className="mr-3 h-5 w-5" />
              Logout
            </button>
          </>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;