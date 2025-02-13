// components/Header.tsx
import React from "react";
import { assets, keyPoints } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
export default function Header() {
  return (
    <>
    
    <Navbar />
    <div className="pt-24 pb-24 bg-darkBG text-white flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row justify-between items-center px-6">
        <div className="lg:w-1/2 text-center md:text-left">
          {/* Hero-section Left start */}
          <h1 className="text-5xl sm:text-3xl md:text-5xl lg:text-7xl tracking-wide">
            Eco-Friendly
            <br /> <span className="text-lightGreen">Local Rides</span>
            <br /> & Deliveries.
          </h1>
          <p className="text-xl md:text-[1.2rem] md:text-left mt-6 mx-auto lg:mx-0">
            Sustainable transportation solutions within a 10km radius. Safe,
            affordable, and environmentally conscious.
          </p>
          <div className="flex gap-5 items-center mt-10 flex-wrap justify-center md:justify-start">
            <Link href="/user-signup">
              <button className="py-3 px-5 rounded-sm bg-lightGreen hover:bg-green-600 duration-400 mb-4 md:mb-0">
                Book a ride
              </button>
            </Link>

            <Link href='/partnership'>
              {" "}
              <button className="py-3 px-5 border rounded-sm hover:bg-white/10 duration-400">
                Partner with us
              </button>
            </Link>
          </div>
          <div className="relative flex gap-10 items-center justify-center mt-8">
            <div className="flex">
              <div className="w-8 h-8 border rounded-full bg-red-500 absolute left-12 top-0"></div>
              <div className="w-8 h-8 border rounded-full bg-red-500 absolute left-14 top-0"></div>
              <div className="w-8 h-8 border rounded-full bg-red-500 absolute left-16 top-0"></div>
            </div>
            <div className="text-[0.9rem] text-gray-300 absolute top-2 left-28">
              1000+ Customers have tried macro.
            </div>
          </div>
        </div>
        {/* Hero-section Left End */}

        <div className="w-full mt-20 lg:w-1/2">
          <div className="w-full border border-borderLight px-10 text-white rounded-lg py-5 shadow-[0px_2px_25px_1px_#22C55E]">
            {keyPoints.map(({ title, description, bgImage }, index) => {
              return (
                <div
                  key={index}
                  className="flex mb-6 items-center border-b pb-3 border-borderLight"
                >
                  <Image
                    src={bgImage}
                    alt="Green Energy"
                    className="w-10 h-10 mr-4"
                  />
                  <div>
                    <h2 className="text-lg font-medium">{title}</h2>
                    <p className="text-[0.9rem] text-gray-400">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div></>
  );
}
