'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import RidersNavbar from '../RidersNavbar';
import Status from '../ui/Status';
interface SidebarProps {
  onSelect: (section: string) => void;
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelect, isOpen, toggleSidebar }) => (
  <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out bg-gray-800 text-white w-64 p-4 space-y-4 z-20 lg:translate-x-0 lg:static lg:w-64`}>
    <button onClick={toggleSidebar} className="lg:hidden text-white mb-4">Close</button>
    {['General Info', 'Rides/Orders', 'History', 'Progress', 'Notifications'].map((item) => (
      <div 
        key={item} 
        onClick={() => {
          onSelect(item);
          if (window.innerWidth < 1024) toggleSidebar();
        }} 
        className="px-4 py-2 rounded hover:bg-gray-700 cursor-pointer"
      >
        {item}
      </div>
    ))}
  </div>
);

const Page: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('General Info');
  const [isOnline, setIsOnline] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const renderContent = () => {
    switch (activeSection) {
      case 'General Info':
        return (
         <>
             <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="text-center"
            >
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome, Rider!</h1>
            <button 
              onClick={() => setIsOnline(!isOnline)} 
              className={`px-4 py-2 text-white rounded ${isOnline ? 'bg-red-500' : 'bg-green-500'}`}
              >
              {isOnline ? 'Go Offline' : 'Go Online'}
            </button>
            {isOnline && (
              <div className="mt-6">
                <h2 className="text-xl font-semibold">Active Rides</h2>
                <p className="text-gray-600">No active rides at the moment.</p>
              </div>
              
            )}
          </motion.div>
           <Status />
            </>
        );
      case 'Rides/Orders':
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl font-bold">Rides & Parcel Deliveries</h2>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Filter</button>
          </motion.div>
        );
      case 'History':
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl font-bold mb-4">History</h2>
            <div className="space-y-2">
              <p className="text-green-600">Completed: 5 rides</p>
              <p className="text-yellow-600">Scheduled: 2 rides</p>
              <p className="text-red-600">Cancelled: 1 ride</p>
            </div>
          </motion.div>
        );
      case 'Progress':
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl font-bold">Your Progress</h2>
            <p className="text-gray-600">Track your performance and milestones here.</p>
          </motion.div>
        );
      case 'Notifications':
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <h2 className="text-2xl font-bold">Notifications</h2>
            <p className="text-gray-600">No new notifications.</p>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <RidersNavbar />
      <div className="flex flex-col lg:flex-row min-h-screen pt-12">
        <Sidebar onSelect={setActiveSection} isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex-1 lg:ml-64 p-4 md:p-8 bg-gray-50">
        <h1>Rider Dashboard</h1>
          <button onClick={toggleSidebar} className="lg:hidden mb-4 px-4 py-2 bg-gray-800 text-white rounded">Menu</button>
          {renderContent()}
        </div>
     
      </div>
    </>
  );
};

export default Page;
