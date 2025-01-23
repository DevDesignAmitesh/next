import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-white min-h-96 flex items-center justify-center px-4 my-10">
      <div className="text-center max-w-4xl w-full">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-black">
          Get our free newsletter + bonus content
        </h1>
        {/* Subtitle */}
        <p className="text-gray-500 text-xl mt-4">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
        </p>
        {/* Form */}
        <div className="mt-6 flex flex-col sm:flex-row items-center sm:justify-center gap-4">
          <input
            type="email"
            placeholder="Enter a valid email address"
            className="w-full sm:w-auto px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition">
            SUBMIT
          </button>
        </div>
        {/* Footer Note */}
        <p className="text-gray-400 max-w-3xl text-center text-lg mt-4">
          You are subscribing to email updates. Your data is safe and you can unsubscribe at any time with a single click.
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
