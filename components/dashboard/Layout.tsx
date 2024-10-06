"use client";
import React, { useState } from "react";
import { usePathname } from 'next/navigation';
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const currentView = pathname.split("/").pop() || "Dashboard";
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <Sidebar currentPath={pathname} />
      <div className="flex-1 flex flex-col">
        <Header currentView={currentView} onMenuClick={toggleSidebar} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
