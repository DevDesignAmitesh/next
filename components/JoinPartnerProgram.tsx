import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

export default function PartnerProgram() {
  return (
    <section className="w-screen p-8 sm:p-12 md:p-20 lg:px-80">
      <div className="bg-lightGreen py-12 sm:py-16 rounded-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          {/* Container */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            {/* Image and Sticker */}
            <div className="relative flex-shrink-0">
              <div className="rounded-2xl w-56 mx-auto lg:mx-0">
                <Image
                  src={assets.Smile}
                  alt="Partner Program"
                  className="rounded-xl object-cover w-full"
                />
              </div>
              <Image
                src={assets.Sticker}
                alt="Time to change"
                className="absolute -left-6 bottom-4 sm:-left-10 lg:-left-12 lg:bottom-6 w-16 sm:w-20 lg:w-32"
              />
            </div>

            {/* Text Section */}
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to join our{" "}
                <span className="bg-green-950 text-green-500 px-2 py-1 rounded-md">
                  Partner Program?
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-lightBG mb-6">
                Help your clients track and reduce their emissions with Green solution. Join us today for exclusive benifits.
              </p>
              <button className="bg-black text-white py-2 px-4 sm:py-3 sm:px-6 rounded-lg hover:bg-white hover:text-black transition">
                Become a Partner
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
