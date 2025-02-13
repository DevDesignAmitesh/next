"use client";
import React, { useState, useRef, useEffect } from "react";
import { CheckCircleIcon, AlertCircleIcon, ChevronRightIcon } from "lucide-react";
import UserDashBoardNavbar from "@/components/UserDashBoardNavbar";

type TabKeys = "Account Info" | "History" | "Privacy & Data";

interface TabContent {
  title: string;
  description: string;
  details?: string;
  action?: string;
}

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState<TabKeys>("Account Info");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const tabContent: Record<TabKeys, TabContent> = {
    "Account Info": {
      title: "Welcome, Sam",
      description: "Manage your info, security, and data to make the app work better for you.",
      details: "Complete your account checkup to keep your account secure.",
      action: "Begin Checkup",
    },
    "History": {
      title: "Security Settings",
      description: "Change your password, enable 2FA, and manage security settings.",
    },
    "Privacy & Data": {
      title: "Privacy & Data",
      description: "Manage your data sharing and privacy preferences.",
    },
  };

  const userInfo = {
    name: "Shubham",
    phoneNumber: "+919650141380",
    email: "shubham.nic05@gmail.com",
    address: "123 Main Street, New Delhi, India",
    location: "New Delhi, India",
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setSidebarOpen(false);
      }
    };

    if (sidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <>
      <UserDashBoardNavbar onOptionSelect={function (option: string): void {
        throw new Error("Function not implemented.");
      } } />
      <div className="flex flex-col md:flex-row min-h-screen relative">
        {/* Sidebar */}
        <button
          className="md:hidden fixed top-20 left-4 bg-gray-200 p-2 rounded-md z-20"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? "Close" : "Menu"}
        </button>

        <aside
          ref={sidebarRef}
          className={`fixed md:relative top-0 left-0 bg-gray-100 z-10 p-6 transition-transform md:translate-x-0 
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} w-64 h-full md:h-auto md:flex md:flex-col`}
        >
          <h2 className="text-lg font-bold mb-6">Macro Account</h2>
          <ul className="space-y-4">
            {Object.keys(tabContent).map((tab) => (
              <li
                key={tab}
                className={`cursor-pointer p-2 rounded-md transition-all ${
                  activeTab === tab ? "bg-lightGreen text-white" : "text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => {
                  setActiveTab(tab as TabKeys);
                  setSidebarOpen(false);
                }}
              >
                {tab}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 md:ml-64 mt-16 md:mt-0 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-4">{tabContent[activeTab].title}</h1>
          <p className="text-gray-600 mb-6">{tabContent[activeTab].description}</p>

          {activeTab === "Account Info" && (
            <div className="p-6 max-w-4xl">
              <div className="flex items-center space-x-6 mb-10">
                <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-5xl text-gray-500">👤</span>
                </div>
              </div>
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Basic Info</h2>
                <div className="space-y-6">
                  {Object.entries(userInfo).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center border-b pb-4">
                      <div>
                        <p className="text-sm text-gray-500">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                        <p className="text-gray-900 font-medium">{value}</p>
                      </div>
                      <ChevronRightIcon className="text-gray-400" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
}
