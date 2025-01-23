import React from "react";

const features = [
  {
    title: "Secure Authentication",
    description: "Two-factor authentication and encrypted data transmission for all users",
    icon: "🔑", 
  },
  {
    title: "ID Verification",
    description: "Thorough background checks and document verification for all drivers",
    icon: "🛡️",
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock customer support for emergency assistance",
    icon: "💬",
  },
  {
    title: "Trip Monitoring",
    description: "Real-time trip tracking and automated alerts for safe journeys",
    icon: "📋",
  },
  {
    title: "Secure Payments",
    description: "Protected payment processing and fraud detection systems",
    icon: "🔒",
  },
  {
    title: "Emergency Response",
    description: "Quick access to emergency services and immediate response team",
    icon: "⚠️",
  },
];

export default function SecurityFeatures() {
  return (
    <div className="bg-darkBG text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold tracking-wide mb-4">
          Security & Safety Features
        </h2>
        <p className="text-gray-400 text-lg mb-12">
          Your safety is our top priority
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-lightBG p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-lg blur-lg opacity-30"></div>
              {/* Icon */}
              <div className="z-10 w-12 h-12 flex items-center justify-center bg-green-600 rounded-full text-xl mb-4 text-white">
                {feature.icon}
              </div>
              {/* Title */}
              <h3 className="z-10 font-semibold text-xl mb-2 text-white">
                {feature.title}
              </h3>
              {/* Description */}
              <p className="z-10 text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-green-700 transition duration-300">
            Learn More About Security
          </button>
        </div>
      </div>
    </div>
  );
}
