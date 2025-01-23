// components/HowItWorks.tsx
import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Download & Register",
      description: "Download our app and create your account with basic details",
    },
    {
      id: 2,
      title: "Book Your Service",
      description:
        "Choose between ride-sharing or delivery services and set your destination",
    },
    {
      id: 3,
      title: "Track Real-Time",
      description: "Monitor your ride or delivery in real-time through our app",
    },
    {
      id: 4,
      title: "Pay & Review",
      description:
        "Complete your payment and share your experience with us",
    },
  ];

  return (
    <section className="bg-darkBG text-white py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <p className="text-gray-400 mt-2">
          Simple steps to get started with MacroRides
        </p>
      </div>
      <div className="relative mt-12">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-500 hidden lg:block"></div>
        <div className="space-y-12 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`relative flex items-center ${
                step.id % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              } flex-col`}
            >
              {/* Step Content */}
              <div className="w-full lg:w-1/2">
                <div className="bg-lightBG p-6 rounded-lg shadow-lg mx-4 text-center lg:text-left">
                  <h3 className="text-green-500 font-bold text-lg tracking-wider">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 mt-2">{step.description}</p>
                </div>
              </div>
              {/* Step Number */}
              <div className="absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-black font-bold hidden lg:flex">
                {step.id}
              </div>
            </div>
          ))}
        </div>


      </div>
      <div className="mt-12 flex justify-center">
        <button className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg shadow-md hover:bg-green-600 transition duration-200">
          Get Started Now
        </button>
      </div>
    </section>
  );
};

export default HowItWorks;
