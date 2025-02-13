'use client';
import { useState } from 'react';
import SideNavbar from '../SideNavbar';
import RidersNavbar from '../RidersNavbar';

const RideCard = ({ ride }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full sm:w-1/2 lg:w-1/2 xl:w-1/3">
      <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">In Progress</span>
      <h2 className="text-xl font-semibold mt-2">{ride.name}</h2>
      <p className="text-gray-500 text-sm">Vehicle</p>
      <p className="font-medium">🚗 {ride.vehicle}</p>
      <p className="text-gray-500 text-sm mt-2">Pickup Location</p>
      <p className="flex items-center gap-2 font-medium">📍 {ride.pickup}</p>
      <p className="text-gray-500 text-sm mt-2">Destination</p>
      <p className="flex items-center gap-2 font-medium">📍 {ride.destination}</p>
      <div className="flex justify-between items-center mt-4">
        <p className="text-gray-500 text-sm">ETA</p>
        <p className="font-bold text-lg">{ride.eta}</p>
      </div>
      <div className="bg-gray-200 h-20 flex items-center justify-center mt-4 rounded-md">Map Preview</div>
      <div className="flex justify-between mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Accept Ride</button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Cancel Ride</button>
      </div>
    </div>
  );
};

export default function ActiveRides() {
  const rides = [
    {
      name: 'Downtown Express',
      vehicle: 'Toyota Camry - ABC 123',
      pickup: '123 Main St, Downtown',
      destination: '456 Business Ave, Uptown',
      eta: '12 mins',
    },
    {
      name: 'City Commuter',
      vehicle: 'Honda Accord - XYZ 789',
      pickup: '789 Elm St, Suburb',
      destination: '321 Oak Ave, Midtown',
      eta: '8 mins',
    },
    {
      name: 'Metro Shuttle',
      vehicle: 'Ford Focus - LMN 456',
      pickup: '567 Pine St, Downtown',
      destination: '890 Cedar Ave, Uptown',
      eta: '15 mins',
    },
  ];

  return (
   <>
   <RidersNavbar />
   <SideNavbar />
    <div className="p-6 bg-gray-100 min-h-screen pt-28">
      <h1 className="text-2xl font-bold">Active Rides</h1>
      <p className="text-gray-500">Currently ongoing rides and their status</p>
      <div className="flex flex-col sm:flex-row flex-wrap gap-6 mt-6 justify-center">
        {rides.map((ride, index) => (
          <RideCard key={index} ride={ride} />
        ))}
      </div>
    </div>
   </>
  );
}
