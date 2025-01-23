"use client";
import React from "react";
import { services } from "@/assets/assets"; // assuming you're importing the services data
import { FaBox } from "react-icons/fa";
import { IoMdDoneAll } from "react-icons/io";

export default function Services() {
  return (
    <div
      className="w-full px-4 sm:px-[12%] py-10 scroll-mt-20 text-center text-2xl bg-white"
    >
      <h1 className="text-black">Our Services</h1>
      <p className="text-[1rem] text-[#939393]">
        Sustainable solutions for all your transportation needs.
      </p>
      <div className="grid grid-cols-auto gap-5">
        {services.map(({ title, description, list }, index) => {
          return (
            <div
              key={index}
              className="w-full p-5 rounded-lg text-left border mb-5"
            >
              <div>
                <FaBox className="text-lightGreen w-10 h-10 mb-5" />
              </div>
              <div>
                <h1 className="text-[1.3rem] text-black font-medium">{title}</h1>
                <p className="py-3 font-light text-[1rem] text-[#575757]">
                  {description}
                </p>
                <ul className="py-3 text-[1rem] text-[#575757]">
                  <li className="flex justify-center items-center gap-5">
                    <IoMdDoneAll className="text-lightGreen w-8 h-8" />
                    {list}
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
