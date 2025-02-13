'use client';

import UserDashBoardNavbar from '@/components/UserDashBoardNavbar';
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { FaMapMarkerAlt, FaClock, FaCalendarAlt, FaUserAlt } from 'react-icons/fa'; // Import icons

export default function Page() {
  const mapContainerStyle = {
    width: '100%',
    height: '100%',
  };

  const center = {
    lat: 28.6139, // Example coordinates (New Delhi)
    lng: 77.209,
  };

  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [rideType, setRideType] = useState('now');
  const [formError, setFormError] = useState('');
  const [isForSomeoneElse, setIsForSomeoneElse] = useState(false);
  const [personName, setPersonName] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [timePeriod, setTimePeriod] = useState('AM');

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!pickup || !dropoff) {
      setFormError('Both pickup and dropoff locations are required.');
      return;
    }

    if (rideType === 'later' && (!pickupDate || !pickupTime)) {
      setFormError('Please select both date and time for later pickup.');
      return;
    }

    setFormError('');
    console.log(`Searching for ride from ${pickup} to ${dropoff} for ${isForSomeoneElse ? personName : 'myself'}`);
    // Handle search logic here...
  };

  // Handle map click to set pickup or dropoff location
  const handleMapClick = (e: google.maps.MapMouseEvent, locationType: 'pickup' | 'dropoff') => {
    const lat = e.latLng?.lat();
    const lng = e.latLng?.lng();
    if (lat && lng) {
      const location = `${lat}, ${lng}`;
      if (locationType === 'pickup') {
        setPickup(location);
      } else {
        setDropoff(location);
      }
    }
  };

  return (
    <>
      <UserDashBoardNavbar />
      <div className="flex flex-col-reverse md:flex-row h-screen py-16">
        {/* Left Panel */}
        <div className="w-full md:w-1/3 bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">Get a Ride</h2>
          <form className="space-y-4" onSubmit={handleFormSubmit}>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-gray-500" />
              <label className="block text-gray-700 font-medium">Pickup location:</label>
            </div>
            <input
              type="text"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="Enter pickup location"
              className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-gray-500" />
              <label className="block text-gray-700 font-medium">Dropoff location:</label>
            </div>
            <input
              type="text"
              value={dropoff}
              onChange={(e) => setDropoff(e.target.value)}
              placeholder="Enter dropoff location"
              className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <div>
              <label className="block text-gray-700 font-medium">Pickup time:</label>
              <select
                value={rideType}
                onChange={(e) => setRideType(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="now">Pickup now</option>
                <option value="later">Schedule for later</option>
              </select>
            </div>

            {/* Schedule for later fields */}
            {rideType === 'later' && (
              <>
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <div className="flex items-center space-x-2">
                      <FaCalendarAlt className="text-gray-500" />
                      <label className="block text-gray-700 font-medium">Pickup Date:</label>
                    </div>
                    <input
                      type="date"
                      value={pickupDate}
                      onChange={(e) => setPickupDate(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div className="w-1/2">
                    <div className="flex items-center space-x-2">
                      <FaClock className="text-gray-500" />
                      <label className="block text-gray-700 font-medium">Pickup Time:</label>
                    </div>
                    <div className="flex space-x-2">
                      <input
                        type="time"
                        value={pickupTime}
                        onChange={(e) => setPickupTime(e.target.value)}
                                                placeholder="Hour"
                        className="w-1/2 p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                      <select
                        value={timePeriod}
                        onChange={(e) => setTimePeriod(e.target.value)}
                        className="w-1/2 p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
                      </select>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* 'For Myself' or 'For Someone Else' toggle */}
            <div className="flex items-center space-x-4">
              <div>
                <input
                  type="radio"
                  id="myself"
                  name="rideFor"
                  value="myself"
                  checked={!isForSomeoneElse}
                  onChange={() => setIsForSomeoneElse(false)}
                  className="mr-2"
                />
                <label htmlFor="myself" className="text-gray-700">Myself</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="someoneElse"
                  name="rideFor"
                  value="someoneElse"
                  checked={isForSomeoneElse}
                  onChange={() => setIsForSomeoneElse(true)}
                  className="mr-2"
                />
                <label htmlFor="someoneElse" className="text-gray-700">For Someone Else</label>
              </div>
            </div>

            {/* Person's Name if 'For Someone Else' */}
            {isForSomeoneElse && (
              <div className="space-x-2">
               <div className='flex items-center gap-3 ml-3'> <FaUserAlt className="text-gray-500" />
               <label className="block text-gray-700 font-medium">Person's Name:</label></div>
                <input
                  type="text"
                  value={personName}
                  onChange={(e) => setPersonName(e.target.value)}
                  placeholder="Enter person's name"
                  className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
               <div className='flex items-center gap-3 ml-3'> <FaUserAlt className="text-gray-500" />
               <label className="block text-gray-700 font-medium">Contact Number:</label></div>
                <input
                  type="text"
                  value={personName}
                  onChange={(e) => setPersonName(e.target.value)}
                  placeholder="Person's contact number"
                  className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            )}

            {/* Error message */}
            {formError && <p className="text-red-500 text-sm">{formError}</p>}

            {/* Search Button */}
            <button
              type="submit"
              disabled={!pickup || !dropoff}
              className={`w-full p-3 font-medium rounded-lg mt-4 ${
                pickup && dropoff ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600 cursor-not-allowed'
              }`}
            >
              Search
            </button>
          </form>
        </div>

        {/* Right Panel (Map) */}
        <div className="flex-1 relative">
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={12}
              onClick={(e) => handleMapClick(e, 'pickup')}
            >
              {/* Marker for pickup */}
              {pickup && (
                <Marker
                  position={{
                    lat: parseFloat(pickup.split(',')[0]),
                    lng: parseFloat(pickup.split(',')[1]),
                  }}
                />
              )}

              {/* Marker for dropoff */}
              {dropoff && (
                <Marker
                  position={{
                    lat: parseFloat(dropoff.split(',')[0]),
                    lng: parseFloat(dropoff.split(',')[1]),
                  }}
                />
              )}
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </>
  );
}
