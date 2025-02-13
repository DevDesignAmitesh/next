'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { FaHome, FaEdit, FaHistory, FaPeace, FaShoppingCart, FaBars } from 'react-icons/fa';

const SideNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div>
      {/* Hamburger Button (only visible on small screens) */}
      <button
        className="lg:hidden p-3 fixed top-4 left-4 bg-blue-500 text-white rounded"
        onClick={toggleSidebar}
      >
        <FaBars size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? 'block' : 'hidden'
        } lg:block w-64 py-20 bg-gray-100 p-5 fixed h-full`}
      >
        <div className="space-y-4">
          <h1 className='p-1 text-2xl font-semibold'>Dashboard</h1>
          <div className="flex items-center space-x-3 p-2 hover:bg-blue-500 hover:text-white cursor-pointer">
            <FaHome size={20} />
            <span>Home</span>
          </div>
          <div className="flex items-center space-x-3 p-2 hover:bg-blue-500 hover:text-white cursor-pointer">
           <Link href='/active-rides'> <FaEdit size={20} />
           <span>Active Rides</span></Link>
          </div>
          <div className="flex items-center space-x-3 p-2 hover:bg-blue-500 hover:text-white cursor-pointer">
            <FaHistory size={20} />
            <span>Ride History</span>
          </div>
          <div className="flex items-center space-x-3 p-2 hover:bg-blue-500 hover:text-white cursor-pointer">
            <FaPeace size={20} />
            <span>Parcel Services</span>
          </div>
          <div className="flex items-center space-x-3 p-2 hover:bg-blue-500 hover:text-white cursor-pointer">
            <FaShoppingCart size={20} />
            <span>Grocery Delivery</span>
          </div>
        </div>
      </div>

      {/* This makes the sidebar collapse for small screens */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 z-10 ${
          isSidebarOpen ? 'block' : 'hidden'
        }`}
        onClick={toggleSidebar}
      ></div>
    </div>
  );
};

export default SideNavbar;
