import React from 'react'

export default function Status() {
  return (
    <>
      {/* Dashboard Boxes */}
      <div className="pt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Box 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-between items-center">
              <p className="px-5 py-1 rounded-lg bg-[#DBEAFE] text-[#2563EB]">Live</p>
              <p className="text-gray-500">Total Rides</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-3xl text-lightBG font-semibold text-left pt-5 px-2">238</p>
              <p className="px-5 py-1 rounded-lg text-[#DBEAFE] bg-[#2563EB]">View All</p>
            </div>
            <p className="text-green-500 text-left px-2">+12% from last month</p>
          </div>

          {/* Box 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-between items-center">
              <p className="px-5 py-1 rounded-lg text-green-500 bg-[#DCFCE7]">Distance</p>
              <p className="text-gray-500">Total Distance</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-3xl text-lightBG font-semibold text-left pt-5 px-2">183 km</p>
            </div>
            <p className="text-green-500 text-left px-2">+12% from last month</p>
          </div>

          {/* Box 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-between items-center">
              <p className="px-5 py-1 rounded-lg bg-[#F3E8FF] text-[#9C38EA]">Live</p>
              <p className="text-gray-500">Active Rides</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-3xl text-lightBG font-semibold text-left pt-5 px-2">238</p>
              <p className="px-5 py-1 rounded-lg text-[#DBEAFE] bg-[#2563EB]">View All</p>
            </div>
            <p className="text-[#9C38EA] text-left px-2">Currently in progress</p>
          </div>

          {/* Box 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-between items-center">
              <p className="px-5 py-1 rounded-lg bg-[#FFEDD5] text-[#EA580C]">Schedule</p>
              <p className="text-gray-500">Scheduled</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-3xl text-lightBG font-semibold text-left pt-5 px-2">2</p>
              <p className="px-5 py-1 rounded-lg text-[#DBEAFE] bg-[#2563EB]">View All</p>
            </div>
            <p className="text-[#EA580C] text-left px-2">Upcoming rides</p>
          </div>
        </div></>
  )
}
