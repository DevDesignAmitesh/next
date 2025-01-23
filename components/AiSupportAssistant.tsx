import React from "react";
import { IoCall } from "react-icons/io5";
import { FaLanguage } from "react-icons/fa6";
import { IoMdBookmarks } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { RiRobot3Fill } from "react-icons/ri";
export default function AiSupportAssistant() {
  return (
    <div className="bg-darkBG text-white py-36">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-3xl font-bold tracking-wide">
            24/7 AI Support Assistant
          </h2>
          <p className="text-gray-300 mt-2 text-lg">
            Get instant help with our intelligent chatbot assistant, designed to
            support both riders and drivers.
          </p>
          <div className="mt-8 space-y-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-lightGreen rounded-full flex items-center justify-center">
                <IoCall className="text-3xl" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg ">Instant Responses</h3>
                <p className="text-gray-300">
                  Get immediate answers to your questions about rides,
                  deliveries, and services.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-lightGreen rounded-full flex items-center justify-center">
                <IoMdBookmarks className="text-3xl" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg">Smart Booking</h3>
                <p className="text-gray-300">
                  Book rides and track deliveries through natural conversation.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-lightGreen rounded-full flex items-center justify-center">
              <FaLanguage className="text-3xl" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg ">Multi-language Support</h3>
                <p className="text-gray-300">
                  Communicate in your preferred language with our AI assistant.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Interface Section */}
        <div className="bg-lightBG rounded-lg p-6 shadow-md relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <RiRobot3Fill className="text-3xl text-lightBG" />
              </div>
              <h3 className="ml-4 text-lg font-bold tracking-wide">MacroAI Assistant</h3>
            </div>
            <span className="text-sm text-green-500 bg-green-100 px-3 py-1 rounded-full">
              Online
            </span>
          </div>
          <div className="mt-6 space-y-4">
            <div className="flex">
              <div className="w-8 h-8 bg-green-500 flex justify-center items-center rounded-full flex-shrink-0">
                <FaUserAlt className="text-xl" />
              </div>
              <div className="ml-4 bg-darkBG rounded-lg p-3">
                <p>Hello! How can I help you today?</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-green-500 rounded-lg p-3 text-black">
                <p>I need to book a ride to downtown.</p>
              </div>
            </div>
            <div className="flex">
            <div className="w-8 h-8 bg-green-500 flex justify-center items-center rounded-full flex-shrink-0">
                <FaUserAlt className="text-xl" />
              </div>
              <div className="ml-4 bg-darkBG rounded-lg p-3">
                <p>
                  I can help you with that! Please share your pickup location.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 relative">
            <input
              type="text"
              placeholder="Type Hello to chat with our AI..."
              className="w-full bg-darkBG text-white rounded-lg p-3 focus:outline-none"
            />
            <button className="absolute right-3 top-3 bg-green-500 text-white p-2 rounded-full">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
