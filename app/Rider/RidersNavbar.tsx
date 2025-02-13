'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { FaCar, FaBox, FaBus, FaUser } from 'react-icons/fa';
import { IoMdWallet, IoMdHelpCircle, IoMdSettings } from 'react-icons/io';
import { MdAccountCircle, MdLocalOffer } from 'react-icons/md';
import { FaBell, FaUserCircle, FaQuestionCircle } from 'react-icons/fa';
export default function RidersNavbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
    <nav className="bg-darkBG shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-normal">
          <span className="text-white tracking-wide ">Macro Rides</span>
        </div>

        {/* Navbar Links */}
        {/* <div className="hidden md:flex space-x-8">
          <a
            href="#"
            className="flex items-center space-x-2 text-white hover:text-black"
          >
            <FaCar />
            <span>All Rides</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 text-white hover:text-black"
            >
            <FaBox />
            <span>Package</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 text-white hover:text-black"
            >
            <FaBus />
            <span>Grocery</span>
          </a>
          <div className="flex space-x-4 text-white">
        <FaBell size={24} />
        <FaUserCircle size={24} />
        <FaQuestionCircle size={24} />
      </div>
        </div> */}

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            className="flex items-center space-x-2 text-white hover:text-black focus:outline-none"
            onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
            <FaUser className="text-xl" />
            <span className="hidden md:inline">Activity</span>
          </button>
          {isDropdownOpen && (
            <div
            className="absolute right-0 mt-2 bg-white shadow-md rounded-md text-sm text-gray-700 
                         w-48 md:w-64 md:text-base z-50"
                         onMouseLeave={() => setDropdownOpen(false)}
            >
              <a
                href="#"
                className="flex items-center px-4 py-3 hover:bg-gray-100 md:px-6 md:py-4"
                >
                <IoMdHelpCircle className="mr-3" />
                Help
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-3 hover:bg-gray-100 md:px-6 md:py-4"
                >
                <IoMdWallet className="mr-3" />
                Wallet
              </a>
              <Link
                href="/user-account-info"
                className="flex items-center px-4 py-3 hover:bg-gray-100 md:px-6 md:py-4"
                >
                <MdAccountCircle className="mr-3" />
                Manage Account
              </Link>
              <Link
                href="/rider/rider-signup"
                className="flex items-center px-4 py-3 hover:bg-gray-100 md:px-6 md:py-4"
                >
                <MdLocalOffer className="mr-3" />
                Promotions
              </Link>
              <a
                href="#"
                className="flex items-center px-4 py-3 hover:bg-gray-100 md:px-6 md:py-4"
                >
                <IoMdSettings className="mr-3" />
                Settings
              </a>
            </div>
          )}
        </div>
      </div>

    </nav>
            </>
  );
}
