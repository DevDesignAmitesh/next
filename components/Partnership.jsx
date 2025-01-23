import React from "react";
import { assets, partnerships } from "@/assets/assets";
import { GiShakingHands } from "react-icons/gi";
export default function Partnership() {
  return (
    <div className="max-w-7xl mx-auto text-center bg-white py-16 px-4">
      {/* Title Section */}
      <h2 className="text-3xl font-bold tracking-wide text-darkBG">
        Partnership Program
      </h2>
      <p className="text-gray-500 mt-2 text-lg">
        Join our network of local vendors and grow your business
      </p>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-10 py-16">
        {/* Partnership Details */}
        <div className="rounded-lg ">
          {partnerships.map(({ title, description }, index) => (
            <div
              key={index}
              className="flex items-center p-5 my-10 border"
            >
              <div className="w-16 h-16 bg-lightGreen mr-4 flex items-center justify-center rounded-full">
               <GiShakingHands />
              </div>
              <div>
                <h3 className="font-bold text-lg text-darkBG">{title}</h3>
                <p className="text-gray-500">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Become a Partner Form */}
        <div className="border flex flex-col text-left p-10 bg-darkBG rounded-lg text-white shadow-md">
          <h2 className="text-2xl mb-4">Become a Partner</h2>
          <div className="flex flex-col space-y-4">
            <label htmlFor="businessName" className="text-sm">
              Business Name
            </label>
            <input
              id="businessName"
              className="border border-[#646464] rounded-md px-4 py-2 outline-none bg-lightBG"
              type="text"
            />
            <label htmlFor="email" className="text-sm">
              Email Address
            </label>
            <input
              id="email"
              className="border border-[#646464] rounded-md px-4 py-2 outline-none bg-lightBG"
              type="email"
            />
            <label htmlFor="businessType" className="text-sm">
              Business Type
            </label>
            <input
              id="businessType"
              className="border border-[#646464] rounded-md px-4 py-2 outline-none bg-lightBG"
              type="text"
            />
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="border border-[#646464] rounded-md px-4 py-2 outline-none bg-lightBG"
            ></textarea>

            <button className="bg-green-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-green-600 transition duration-200">
              Submit Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
