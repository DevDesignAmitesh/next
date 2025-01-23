import React from "react";
import { MdCo2 } from "react-icons/md";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { FaLeaf } from "react-icons/fa6";
export default function SustainabilityCommitment() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 text-center bg-white">
      {/* Title Section */}
      <h2 className="text-3xl font-bold tracking-wide text-gray-800">
        Sustainability Commitment
      </h2>
      <p className="text-gray-500 mt-2 text-lg">
        Making a positive impact on our environment through sustainable transportation solutions
      </p>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
        {/* Carbon Reduction */}
        <div className="bg-gray-100 rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-green-500 text-white rounded-full">
          <MdCo2 className="text-white text-5xl" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 mt-4">Carbon Reduction</h3>
          <p className="text-green-500 text-4xl font-bold mt-2">100%</p>
          <p className="text-gray-600 mt-2">
            Electric vehicles reducing carbon emissions in local transportation
          </p>
        </div>

        {/* Energy Efficiency */}
        <div className="bg-gray-100 rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-green-500 text-white rounded-full">
           <MdOutlineEnergySavingsLeaf className="text-3xl"/>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mt-4">Energy Efficiency</h3>
          <p className="text-green-500 text-4xl font-bold mt-2">10km</p>
          <p className="text-gray-600 mt-2">
            Optimized delivery radius for maximum energy efficiency
          </p>
        </div>

        {/* Green Infrastructure */}
        <div className="bg-gray-100 rounded-lg p-6 shadow-md">
          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-green-500 text-white rounded-full">
            <FaLeaf className="text-3xl"/>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mt-4">Green Infrastructure</h3>
          <p className="text-green-500 text-4xl font-bold mt-2">24/7</p>
          <p className="text-gray-600 mt-2">
            Sustainable charging stations powered by renewable energy
          </p>
        </div>
      </div>

      {/* Environmental Goals Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Environmental Impact */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-800">Our Environmental Impact</h3>
          <ul className="text-gray-600 mt-4 space-y-2">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span>
              Zero direct carbon emissions from our vehicle fleet
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span>
              Reduced traffic congestion through optimized routes
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span>
              Supporting local businesses reduces transportation needs
            </li>
          </ul>
        </div>

        {/* Environmental Goals */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-800">2025 Environmental Goals</h3>
          <div className="mt-4">
            <div className="mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Carbon Offset</span>
                <span className="text-gray-600">80%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: "80%" }}></div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Renewable Energy Usage</span>
                <span className="text-gray-600">65%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: "65%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <span className="text-gray-600">Waste Reduction</span>
                <span className="text-gray-600">90%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: "90%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
