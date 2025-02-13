'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { FaCar, FaBox, FaBus, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { IoMdHelpCircle, IoMdSettings } from 'react-icons/io';
import { MdAccountCircle, MdLocalOffer } from 'react-icons/md';

interface NavbarProps {
  onOptionSelect: (option: string) => void;
}

export default function UserDashBoardNavbar({ onOptionSelect }: NavbarProps) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-black">Macro Rides</span>
        </div>

        {/* Navbar Links */}
        <div className="hidden md:flex space-x-8">
          <a
            href="#"
            className="flex items-center space-x-2 text-gray-700 hover:text-black"
            onClick={() => onOptionSelect('ride')}
          >
            <FaCar />
            <span>Ride</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 text-gray-700 hover:text-black"
            onClick={() => onOptionSelect('parcel')}
          >
            <FaBox />
            <span>Package</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 text-gray-700 hover:text-black"
            onClick={() => onOptionSelect('grocery')}
          >
            <FaBus />
            <span>Grocery</span>
          </a>
        </div>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            className="flex items-center space-x-2 text-gray-700 hover:text-black focus:outline-none"
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            <FaUser className="text-xl" />
            <span className="hidden md:inline">Activity</span>
          </button>
          {isDropdownOpen && (
            <div
              className="absolute right-0 mt-2 bg-white shadow-md rounded-md text-sm text-gray-700 w-48 md:w-64 md:text-base z-50"
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <a
                href="/help-center"
                className="flex items-center px-4 py-3 hover:bg-gray-100 md:px-6 md:py-4"
              >
                <IoMdHelpCircle className="mr-3" />
                Help Center
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
              <a
                href="#"
                className="flex items-center px-4 text-red-600 hover:bg-gray-100 md:px-6 md:py-4"
              >
                <FaSignOutAlt className="mr-3" />
                Sign Out
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div className="flex justify-around py-2 border-t">
          <a
            href="#"
            className="text-gray-700 flex justify-center items-center gap-2 hover:text-black"
            onClick={() => onOptionSelect('ride')}
          >
            <FaCar />
            <span className="text-sm">Ride</span>
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-black flex justify-center items-center gap-2"
            onClick={() => onOptionSelect('parcel')}
          >
            <FaBox />
            <span className="text-sm">Package</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 text-gray-700 hover:text-black"
            onClick={() => onOptionSelect('grocery')}
          >
            <FaBus />
            <span>Grocery</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
